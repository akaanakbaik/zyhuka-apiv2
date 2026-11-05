# Sistem visual Zyhuka berdasarkan referensi SIPUTZX

Sumber utama: https://app.siputzx.my.id/, diperiksa 5 November 2026. Route aplikasi terverifikasi dari deklarasi router dan navigasi browser: `/`, `/playground`, `/monitor`, `/privacy`, `/terms`.

## Bukti dan cakupan

Screenshot halaman utama desktop 1920px dan mobile 390px telah dilihat langsung. Salinan terdapat pada `reference/home-desktop.png` dan `reference/home-mobile.png`. Struktur Playground dan Monitor diperiksa melalui navigasi browser referensi. Pola route, tema, parameter form, dialog, dan breakpoint tersedia pada bundle frontend serta stylesheet publik. Belum ada pembandingan screenshot hasil lokal dengan referensi.

## Token yang diekstrak

Nilai berikut berasal dari CSS inline dan stylesheet, bukan perkiraan visual:

| Peran | Gelap | Terang |
| --- | --- | --- |
| Background utama | `#0f0f0f` | `#f4f4f1` |
| Surface kedua | `#181818` | `#ffffff` |
| Surface ketiga | `#212121` | `#eaeae6` |
| Border | `#2a2a2a` | `#d1d1cd` |
| Teks utama | `#f0f0f0` | `#1a1a1a` |
| Teks sekunder | `#a0a0a0` | `#5c5c5c` |
| Teks muted | `#666666` | `#8a8a8a` |
| Aksen | `#2563eb` | `#2563eb` |

Heading menggunakan Satoshi, body menetapkan Sora/sans-serif, dan teks teknis menetapkan JetBrains Mono/monospace. Sora tidak ada pada respons stylesheet font referensi yang didapatkan; fallback tetap digunakan. Heading utama desktop 96px, heading bagian 48px; breakpoint dan ukuran mobile dipertahankan melalui stylesheet asli. Tombol dan panel utama bersudut siku, border 1px, tanpa bayangan dekoratif.

## Layout dan komponen

Header tetap di atas, logo dengan batang biru, navigasi desktop di kanan, tombol tema dan hamburger mobile. Kontainer utama maksimum sekitar 1152px sesuai utility `max-w-6xl`; padding samping mobile 24px. Hero memakai tinggi minimal viewport dan heading tiga baris. Bagian keunggulan berupa dua kolom desktop dengan empat kartu, berubah menjadi susunan vertikal di mobile. FAQ memakai kontainer lebih sempit dan baris accordion. Sponsor dan footer dipisahkan garis border.

Playground menggunakan baris kategori, kolom filter dan daftar endpoint yang dapat diperluas, label metode HTTP, form parameter, serta panel response. Dialog sponsor referensi tetap ada. Monitor memakai surface grid, tabel berteks mono, grafik Chart.js, dialog detail, dan pagination. Halaman legal memakai kontainer baca sempit dan garis biru vertikal di judul.

## Aset

`atlantic-logo.png` dan `bihost-logo.png` adalah logo sponsor yang berasal dari root URL referensi. Favicon, apple-touch-icon, android-chrome icons, dan aset ikon juga disimpan lokal; OG image memakai `og-image.svg` Zyhuka. Semua URL font yang terambil dilokalkan ke `public/fonts/`. Tidak ada gambar hero karena halaman referensi menggunakan tipografi.

## Implementasi dan batas verifikasi

Proyek menggunakan snapshot bundle React publik yang diformat, dengan HTML/CSS lokal dan build Node tanpa dependensi. Rute dan komponen berasal dari snapshot yang sama sehingga tidak diaproksimasi ulang dengan desain baru. Perubahan lokal (rincian di `AUDIT.md`) mencakup branding Zyhuka, perbaikan lifecycle Monitor, penghapusan analitik referensi, font lokal, konfigurasi layanan, fallback katalog, dan dukungan deep link hosting statis. Respons API dan grafik live tetap bergantung pada layanan asli. Kesetaraan piksel hasil lokal serta interaksi browser lokal belum diverifikasi.
