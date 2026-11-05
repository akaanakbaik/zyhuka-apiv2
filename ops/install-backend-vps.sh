#!/usr/bin/env bash
# First installation only. Does not alter Nginx, firewall or existing services.
set -euo pipefail
umask 077
task_ref="${1:-}"
task_root=/opt/zyhuka-api-v2
if [[ ! "$task_ref" =~ ^[0-9a-f]{40}$ ]]; then
  echo 'Pemakaian: bash install-backend-vps.sh <commit-SHA-40-karakter>' >&2
  exit 1
fi
if [[ "$(id -u)" != 0 ]]; then echo 'Jalankan dari sesi root VPS.' >&2; exit 1; fi
for task_command in git docker python3 curl; do
  command -v "$task_command" >/dev/null || { echo "Perintah belum tersedia: $task_command" >&2; exit 1; }
done
task_docker() {
  env -u DOCKER_HOST -u DOCKER_CONTEXT -u DOCKER_TLS -u DOCKER_TLS_VERIFY -u DOCKER_CERT_PATH \
    docker --host=unix:///var/run/docker.sock "$@"
}
task_docker info >/dev/null
task_docker compose version >/dev/null || { echo 'Docker Compose v2 belum tersedia. Berhenti tanpa mengubah layanan.' >&2; exit 1; }
if [[ -e "$task_root" ]]; then echo "Folder $task_root sudah ada. Berhenti agar data tidak tertimpa." >&2; exit 1; fi
if [[ -n "$(task_docker ps -aq --filter label=com.docker.compose.project=zyhuka-api-v2)" ]] || \
   [[ -n "$(task_docker volume ls -q --filter label=com.docker.compose.project=zyhuka-api-v2)" ]]; then
  echo 'Resource Docker Zyhuka sudah ada. Berhenti; jangan menimpa instalasi sebelumnya.' >&2
  exit 1
fi
python3 - <<'PY'
import socket
import shutil
import sys
with open('/proc/meminfo') as info:
    available = next(int(line.split()[1]) * 1024 for line in info if line.startswith('MemAvailable:'))
if available < 1536 * 1024**2 or shutil.disk_usage('/opt').free < 3 * 1024**3:
    sys.exit('RAM tersedia harus minimal 1,5 GiB dan disk kosong minimal 3 GiB. Berhenti tanpa mengubah layanan.')
try:
    with socket.socket() as probe:
        probe.bind(('127.0.0.1', 3100))
except OSError:
    sys.exit('Port loopback 3100 sudah dipakai. Berhenti tanpa mengubah layanan.')
PY
install -d -m 0755 "$task_root"
(
  umask 022
  git clone --no-checkout https://github.com/akaanakbaik/zyhuka-apiv2.git "$task_root/source"
  git -C "$task_root/source" checkout --detach "$task_ref"
)
chmod 0755 "$task_root/source/backend/db/init-app.sh"
if [[ "$(git -C "$task_root/source" rev-parse HEAD)" != "$task_ref" ]]; then echo 'Versi source tidak cocok.' >&2; exit 1; fi
python3 - "$task_root/source/backend/.env" <<'PY'
import os
import secrets
import sys
fd = os.open(sys.argv[1], os.O_WRONLY | os.O_CREAT | os.O_EXCL, 0o600)
with os.fdopen(fd, 'w') as target:
    target.write('DB_ADMIN_PASSWORD=' + secrets.token_hex(32) + '\n')
    target.write('DB_APP_PASSWORD=' + secrets.token_hex(32) + '\n')
PY
task_compose() {
  task_docker compose --project-name zyhuka-api-v2 --file "$task_root/source/backend/compose.yaml" \
    --env-file "$task_root/source/backend/.env" "$@"
}
task_compose config --quiet
task_compose up -d --build
for ((task_try=0; task_try<60; task_try++)); do
  if curl --noproxy 127.0.0.1 -fsS --max-time 5 http://127.0.0.1:3100/readyz >/dev/null 2>&1; then
    printf '\nZYHUKA_READY\n'
    curl --noproxy 127.0.0.1 -fsS --max-time 5 http://127.0.0.1:3100/readyz
    printf '\n'
    curl --noproxy 127.0.0.1 -fsS --max-time 5 'http://127.0.0.1:3100/api/tools/hash?text=zyhuka'
    printf '\n'
    task_compose ps
    printf '\nAPI baru hanya tersedia di loopback port 3100. Konfigurasi Nginx/UFW tidak diedit; Pterodactyl, gate-ptero, mail, MySQL dan Redis lama tidak di-restart.\n'
    exit 0
  fi
  sleep 2
done
echo 'Zyhuka belum ready. Output berikut hanya dari stack Zyhuka:' >&2
task_compose ps
task_compose logs --tail 50 api
exit 1
