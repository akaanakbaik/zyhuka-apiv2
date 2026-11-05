# Zyhuka API v2 Frontend

Frontend dengan branding API ZYHUKA yang mengemas snapshot frontend publik https://app.siputzx.my.id/ pada 5 November 2026. UI kini memakai claymorphism modern dengan tema terang/gelap, tekstur dan animasi baru. Unsur sponsor dihapus dari aplikasi produksi.

## Menjalankan

Memerlukan Node.js 20 atau lebih baru. Server tidak memerlukan dependensi runtime tambahan. Jalankan `npm ci` sebelum build, development, atau pengujian; build memakai esbuild untuk minifikasi.

```bash
npm ci
npm run dev
```

Buka http://localhost:3000. Untuk port lain: `npm run dev -- --port 5173`.

```bash
npm ci
npm run build
npm test
```

Folder `dist/` merupakan hasil build statis, siap diunggah ke hosting. Setiap route memiliki `index.html` tersendiri; `_redirects` disediakan untuk host yang mendukung SPA fallback.

## Halaman dan interaksi

| Route | Isi |
| --- | --- |
| `/` | Hero clay interaktif, keunggulan, FAQ accordion, footer |
| `/playground` | Katalog OpenAPI lengkap, pencarian, kategori, parameter, eksekusi request, response dan contoh kode |
| `/monitor` | WebSocket monitor, grafik, tabel request, detail node dan endpoint, pagination |
| `/privacy` | Privacy Policy referensi |
| `/terms` | Terms of Service referensi |

Header, menu mobile, dropdown komunitas, pilihan tema dan footer diperbarui dengan gaya claymorphism. Pengunjung baru memakai tema terang; preferensi tersimpan tetap dihormati. Status merupakan tautan eksternal ke https://status.siputzx.my.id/, sebagaimana situs asli; subdomain itu bukan route aplikasi ini.

## Struktur dan pengeditan

- `src/index.html`: dokumen, metadata, dan fallback tema.
- `src/app.js`: frontend React publik yang telah diformat agar dapat dibaca. Ini merupakan snapshot bundle browser, bukan source JSX/TypeScript asli pemilik situs. Nama fungsi hasil kompilasi tetap dipertahankan.
- `src/styles.css`: utility stylesheet dasar.
- `src/clay.css`: token claymorphism, tekstur, komponen responsif dan reduced motion.
- `src/clay.js`: hero dan contoh kode interaktif dengan umpan balik clipboard.
- `src/services.js`: katalog dengan cache/deduplikasi dalam memori dan fallback lokal.
- `src/monitor.js`: grafik dan Monitor yang dimuat hanya saat route Monitor dibuka.
- `src/view-runtime.js`: adapter render bersama untuk modul Monitor.
- `public/config.js`: konfigurasi URL API, OpenAPI, dan WebSocket melalui `window.ZYHUKA_CONFIG`.
- `public/fonts/`: font lokal yang digunakan referensi (Satoshi dan JetBrains Mono). Referensi menyebut Sora pada font stack, tetapi stylesheet font publik yang berhasil diperoleh tidak menyediakan Sora; fallback browser dipertahankan.
- `public/assets/vendor-DHMKXF-P.js`: dependensi runtime publik referensi.
- `public/openapi.snapshot.json`: cadangan katalog berisi 197 path endpoint, bukan implementasi backend.
- `scripts/`: build, server lokal, dan pemeriksaan HTTP/aset.
- `reference/`: screenshot referensi desktop dan mobile.
- `DESIGN.md`: catatan gaya dan sumber.

Untuk menemukan bagian UI di `src/app.js`, cari deklarasi `m1` (header), `w1` (home), `gS` (Playground), `Ck` (Monitor), `Nk` (privacy), `zk` (terms), dan `Lk` (routing). Konfigurasi API tidak memerlukan pengeditan bundle.

## Data dan verifikasi

Lihat [AUDIT.md](AUDIT.md) untuk hasil uji interaksi, penghapusan sponsor, dan perbaikan Monitor. Nama tampilan menjadi Zyhuka; alamat layanan asli dipertahankan. Pemeriksaan DOM otomatis sudah mencakup loading, dialog, navigasi, request, clipboard, serta Monitor cold start; ini belum menggantikan uji visual browser.


Playground menggunakan API SIPUTZX asli. Monitor menggunakan `wss://api.siputzx.my.id/ws`. Keduanya memerlukan koneksi dan izin CORS/Origin dari layanan tersebut. Ketika katalog online gagal, katalog cadangan lokal dapat dimuat; eksekusi endpoint tetap membutuhkan layanan online. Tidak ada data Monitor palsu yang ditambahkan.

Build dan pemeriksaan HTTP memverifikasi lima route, deep link, tipe konten JavaScript, kelengkapan import/aset/font, katalog, serta respons 404/405. Screenshot desktop/mobile referensi telah diperiksa. Pengujian browser pada hasil lokal belum dilakukan karena lingkungan tidak menyediakan `cua_repl.js` yang diwajibkan workflow preview; publikasi juga belum dilakukan karena helper Sites tidak terpasang. Jangan menafsirkan pemeriksaan HTTP sebagai verifikasi visual browser end-to-end.

## Sumber

Markup, gaya, teks, logo, ikon, serta logika frontend berasal dari aset publik situs referensi pada tanggal snapshot. Komentar lisensi dependensi yang ada dalam bundle dipertahankan. Integrasi analitik Cloudflare situs asli tidak disertakan. Proyek ini merupakan replika frontend; bukan layanan backend baru dan bukan source repository asli SIPUTZX.

## Performa dan backend terpisah

Lihat [PERFORMANCE.md](PERFORMANCE.md) untuk ukuran JavaScript, font, dan batas pengukuran. Rencana backend VPS, perlindungan Pterodactyl/gate-ptero, serta inventaris endpoint ada di [backend-plan/README.md](backend-plan/README.md). Rencana ini belum merupakan deployment backend.

Backend batch 1 ada di [backend/README.md](backend/README.md): lima path mandiri, PostgreSQL terpisah, dan installer VPS yang tidak mengedit Nginx atau layanan lama. Frontend belum dialihkan ke backend baru.
