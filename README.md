# SIPUTZX Frontend

Proyek frontend mandiri yang mengemas snapshot frontend publik https://app.siputzx.my.id/ pada 5 November 2026. Pendekatan ini mempertahankan UI, teks, layout, animasi, dan interaksi referensi, termasuk tampilan mobile dan tema terang/gelap.

## Menjalankan

Memerlukan Node.js 20 atau lebih baru. Tidak ada dependensi npm yang perlu dipasang.

```bash
npm run dev
```

Buka http://localhost:3000. Untuk port lain: `npm run dev -- --port 5173`.

```bash
npm run build
npm test
```

Folder `dist/` merupakan hasil build statis, siap diunggah ke hosting. Setiap route memiliki `index.html` tersendiri; `_redirects` disediakan untuk host yang mendukung SPA fallback.

## Halaman dan interaksi

| Route | Isi |
| --- | --- |
| `/` | Hero, keunggulan, FAQ accordion, sponsor, footer |
| `/playground` | Katalog OpenAPI lengkap, pencarian, kategori, parameter, eksekusi request, response dan contoh kode |
| `/monitor` | WebSocket monitor, grafik, tabel request, detail node dan endpoint, pagination |
| `/privacy` | Privacy Policy referensi |
| `/terms` | Terms of Service referensi |

Header, menu mobile, dropdown komunitas, pilihan tema, dan footer mengikuti frontend referensi. Status merupakan tautan eksternal ke https://status.siputzx.my.id/, sebagaimana situs asli; subdomain itu bukan route aplikasi ini.

## Struktur dan pengeditan

- `src/index.html`: dokumen, metadata, dan fallback tema.
- `src/app.js`: frontend React publik yang telah diformat agar dapat dibaca. Ini merupakan snapshot bundle browser, bukan source JSX/TypeScript asli pemilik situs. Nama fungsi hasil kompilasi tetap dipertahankan.
- `src/styles.css`: stylesheet referensi yang telah diformat.
- `src/services.js`: pemuatan katalog dan fallback lokal.
- `public/config.js`: konfigurasi URL API, OpenAPI, dan WebSocket.
- `public/fonts/`: font lokal yang digunakan referensi (Satoshi dan JetBrains Mono). Referensi menyebut Sora pada font stack, tetapi stylesheet font publik yang berhasil diperoleh tidak menyediakan Sora; fallback browser dipertahankan.
- `public/assets/vendor-DHMKXF-P.js`: dependensi runtime publik referensi.
- `public/openapi.snapshot.json`: cadangan katalog berisi 197 path endpoint, bukan implementasi backend.
- `scripts/`: build, server lokal, dan pemeriksaan HTTP/aset.
- `reference/`: screenshot referensi desktop dan mobile.
- `DESIGN.md`: catatan gaya dan sumber.

Untuk menemukan bagian UI di `src/app.js`, cari deklarasi `m1` (header), `w1` (home), `gS` (Playground), `Ck` (Monitor), `Nk` (privacy), `zk` (terms), dan `Lk` (routing). Konfigurasi API tidak memerlukan pengeditan bundle.

## Data dan verifikasi

Playground menggunakan API SIPUTZX asli. Monitor menggunakan `wss://api.siputzx.my.id/ws`. Keduanya memerlukan koneksi dan izin CORS/Origin dari layanan tersebut. Ketika katalog online gagal, katalog cadangan lokal dapat dimuat; eksekusi endpoint tetap membutuhkan layanan online. Tidak ada data Monitor palsu yang ditambahkan.

Build dan pemeriksaan HTTP memverifikasi lima route, deep link, tipe konten JavaScript, kelengkapan import/aset/font, katalog, serta respons 404/405. Screenshot desktop/mobile referensi telah diperiksa. Pengujian browser pada hasil lokal belum dilakukan karena lingkungan tidak menyediakan `cua_repl.js` yang diwajibkan workflow preview; publikasi juga belum dilakukan karena helper Sites tidak terpasang. Jangan menafsirkan pemeriksaan HTTP sebagai verifikasi visual browser end-to-end.

## Sumber

Markup, gaya, teks, logo, ikon, serta logika frontend berasal dari aset publik situs referensi pada tanggal snapshot. Komentar lisensi dependensi yang ada dalam bundle dipertahankan. Integrasi analitik Cloudflare situs asli tidak disertakan. Proyek ini merupakan replika frontend; bukan layanan backend baru dan bukan source repository asli SIPUTZX.
