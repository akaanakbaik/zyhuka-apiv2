#!/usr/bin/env python3
"""Read-only capacity/service inventory. No configuration or service changes."""
import json
import os
import shutil
import subprocess


def command(args):
    try:
        result = subprocess.run(args, capture_output=True, text=True, timeout=8)
        return result.stdout.strip() or 'unavailable'
    except (FileNotFoundError, subprocess.TimeoutExpired):
        return 'unavailable'


def memory():
    result = {}
    with open('/proc/meminfo', encoding='utf-8') as source:
        for line in source:
            key, value = line.split(':', 1)
            if key in ['MemTotal', 'MemAvailable', 'SwapTotal', 'SwapFree']:
                result[key + '_KiB'] = int(value.split()[0])
    return result


disk = shutil.disk_usage('/')
print(json.dumps({
    'purpose': 'Read-only inventory before adding Zyhuka alongside existing services',
    'cpu_count': os.cpu_count(),
    'load_average': os.getloadavg(),
    'memory': memory(),
    'root_disk_GiB': {'total': round(disk.total / 2**30, 2), 'free': round(disk.free / 2**30, 2)},
    'os': command(['lsb_release', '-ds']),
    'tcp_listeners': command(['ss', '-H', '-ltn']).splitlines(),
    'services': {name: command(['systemctl', 'is-active', name]) for name in [
        'nginx', 'caddy', 'apache2', 'docker', 'wings', 'pteroq', 'postgresql', 'redis-server',
    ]},
    'containers_names_images_ports': command(['docker', 'ps', '--format', '{{.Names}} | {{.Image}} | {{.Ports}}']).splitlines(),
    'protected_workloads': ['Pterodactyl', 'gate-ptero'],
}, indent=2))
