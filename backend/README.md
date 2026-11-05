# Backend Zyhuka — batch 1

API mandiri untuk VPS Ubuntu, terpisah dari frontend Vercel. Ini bukan proxy ke API referensi. Lima path berikut memiliki implementasi lokal GET dan POST:

- `/api/tools/base64`: encode/decode UTF-8 dengan validasi Base64.
- `/api/tools/hash`: SHA-256 dan SHA-512.
- `/api/tools/uuid`: UUID v4, maksimal 10 per request.
- `/api/games/maths`: soal hitung acak dan jawaban, sepuluh level.
- `/api/system/info`: informasi proses API.

Endpoint lain dalam inventaris lama belum tersedia. Katalog `/api/openapi.json` menampilkan hanya handler di atas. `/healthz` memeriksa proses; `/readyz` memeriksa PostgreSQL. `/ws` mengirim kontrak Monitor frontend setiap dua detik, berdasarkan metrik API ini sendiri.

## Isolasi pada VPS

Compose project: `zyhuka-api-v2`. Folder instalasi: `/opt/zyhuka-api-v2`. Port host: **127.0.0.1:3100**, diperiksa ulang sebelum instalasi. PostgreSQL tidak menerbitkan port host. Tidak menggunakan MySQL 3306/Redis 6379 atau database Pterodactyl. API dan DB masing-masing dibatasi 1 CPU dan RAM 512 MiB.

Skrip `ops/install-backend-vps.sh` hanya mendukung instalasi pertama. Ia menolak folder/resource Zyhuka yang sudah ada, menyimpan password acak di `backend/.env` dengan izin 600, dan menjalankan hanya stack baru. Ia tidak mengubah atau me-restart Nginx, Wings, pteroq, gate-ptero, mail, firewall atau container lain. Source checkout dipatok ke commit yang diberikan.

Database mempunyai role aplikasi non-superuser, schema sendiri, versioning migrasi dan registry endpoint. Connection pool maksimum lima koneksi. Metrik agregat disimpan sebagai checkpoint setiap sepuluh detik dan saat shutdown normal. Kegagalan mendadak dapat menghilangkan metrik sejak checkpoint terakhir; ini bukan ledger billing. Riwayat harian dibatasi 30 hari dan per-jam 24 jam; total counter tetap tersimpan. Model checkpoint memakai satu replica API.

Raw IP, user-agent, query string, teks input dan hasil endpoint tidak disimpan dalam metrik. Respons Monitor menandai IP/UA `not collected`. Deteksi serangan, failover multi-node serta statistik Aether belum diimplementasikan: field unsupported ditandai, algoritma tidak dipalsukan. Latensi per-endpoint memakai EWMA dengan bobot sampel baru 0,35.

Mode proxy `private` hanya sesuai selama port API dibatasi loopback dan network Docker terisolasi. Saat memasang vhost, Nginx harus **mengganti** `X-Forwarded-For` dengan `$remote_addr`, bukan menerima rantai client secara mentah. Konfigurasi publik/domain akan dikerjakan setelah stack lokal lolos; frontend belum dialihkan.

## Pemeriksaan di VPS setelah instalasi

```bash
curl -fsS http://127.0.0.1:3100/readyz
curl -fsS 'http://127.0.0.1:3100/api/tools/base64?text=Halo'
curl -fsS 'http://127.0.0.1:3100/api/games/maths?level=easy'
```

Password database dibuat di VPS. Jangan mengirim `.env`, private key, atau output `docker compose config` yang menampilkan nilai secret ke chat.

## Uji development

```bash
npm ci --prefix backend
npm test --prefix backend
```

Uji HTTP/WebSocket memakai store terisolasi. Untuk uji PostgreSQL sungguhan, atur `TEST_DATABASE_URL` ke database **khusus test**. Uji itu menjalankan migrasi dan menulis checkpoint. `TEST_CREATE_SCHEMA=1` hanya untuk DB test kosong dengan role yang berhak membuat schema. Jangan arahkan variabel test ke database produksi atau Pterodactyl.

Docker image dijalankan dengan Node.js 22 sebagai user non-root, filesystem read-only dan resource limits. Log dirotasi. PostgreSQL menggunakan volume terpisah. Jika instalasi gagal, jangan menghapus volume; kirim keluaran status stack Zyhuka untuk diperiksa.
