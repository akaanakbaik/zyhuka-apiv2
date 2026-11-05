# Pemeriksaan interaksi Zyhuka

Diperiksa 5 November 2026 terhadap snapshot publik https://app.siputzx.my.id/ yang digunakan saat membuat proyek. Ini bukan klaim bahwa semua versi situs referensi pada masa mendatang akan sama.

## Hasil

| Bagian | Pemeriksaan | Hasil |
| --- | --- | --- |
| Tema | Ganti gelap/terang, class HTML, penyimpanan pilihan | Lulus uji DOM |
| Menu mobile | Buka/tutup, class slide, scroll lock | Lulus uji DOM |
| Community | Buka dropdown, klik di luar | Lulus uji DOM |
| FAQ | Expand/collapse dan aria-expanded | Lulus uji DOM |
| Pemberitahuan | Dialog sponsor, nama Zyhuka, tombol Mengerti | Lulus uji DOM |
| Loading katalog | Spinner dan teks sebelum fetch selesai | Lulus uji DOM |
| Pencarian | Hasil kosong, pencarian endpoint, buka endpoint | Lulus uji DOM |
| Eksekusi | EXECUTING, tombol disabled, Processing, response JSON | Lulus uji DOM dengan fetch simulasi |
| Respons | Tab HEADERS/CURL, salin cURL, Clear | Lulus uji DOM dengan clipboard simulasi |
| Navigasi | Home, Playground, Monitor, Privacy, Terms | Lulus uji DOM dan HTTP deep link |
| Monitor | Cold start tanpa cache, data pertama, LIVE, cache, pagination, dialog dan Escape | Lulus uji DOM dengan WebSocket simulasi |
| Fallback | Katalog cadangan dan penggantian API server | Lulus uji service |
| Animasi CSS | Pulse, fade, spinner, transisi, durasi keyframe | Sama dengan stylesheet snapshot setelah normalisasi format/nama |
| Logika UI | Perbandingan AST kode aplikasi terhadap snapshot | Sama selain perubahan yang dijelaskan di bawah |
| Grafik | Konfigurasi animasi Chart.js tetap 550ms | Diperiksa pada kode; hasil canvas belum diuji visual |

Uji DOM memakai happy-dom, bukan browser grafis. Fetch, clipboard, WebSocket, dan canvas memakai simulasi test. Uji ini membuktikan transisi state dan handler bekerja dalam lingkungan DOM; tidak membuktikan kehalusan animasi, posisi piksel, CORS aktual, performa mobile, atau seluruh endpoint eksternal.

## Perubahan yang disengaja

- Nama tampilan, metadata, namespace konfigurasi, class CSS, serta key localStorage menjadi Zyhuka. Tautan GitHub diarahkan ke repo tujuan `akaanakbaik/zyhuka-apiv2`.
- Alamat API, WebSocket, Status, komunitas, dan sponsor tetap milik layanan referensi. Mengganti nama brand tidak membuat domain/backend/komunitas baru.
- Font dan aset disimpan lokal; analitik referensi tidak disertakan. Katalog memiliki fallback snapshot lokal dengan timeout fetch 15 detik.
- OG image referensi yang diunduh ternyata berisi HTML, sehingga diganti dengan SVG Zyhuka yang valid.
- Monitor asli mengembalikan loading sebelum sebagian hook dipanggil. Cold start kemudian menerima data menimbulkan React error #310. Hook sekarang selalu dipanggil dalam urutan tetap, sementara loading tetap ditampilkan sampai data tersedia.
- Inisialisasi grafik menunggu canvas terpasang setelah loading. Animasi grafik tetap menggunakan konfigurasi asli.
- Timer reconnect WebSocket dibatalkan saat meninggalkan Monitor agar tidak membuka koneksi baru setelah komponen dilepas.

`reference/monitor-before-fix.js.txt` menyimpan komponen sebelum perbaikan. Uji parity mengecualikan perubahan Monitor yang disengaja dengan memakai komponen baseline tersebut untuk pembandingan, dan uji DOM memverifikasi perilaku komponen yang diperbaiki. Uji parity bukan bukti bahwa Monitor yang diperbaiki identik byte demi byte dengan versi asli.

## Menjalankan ulang

```bash
npm ci
npm run build
npm test
```

GitHub Actions disiapkan untuk menjalankan perintah tersebut setelah source berhasil diunggah. Belum ada klaim hasil CI remote sebelum repo dan push berhasil.
