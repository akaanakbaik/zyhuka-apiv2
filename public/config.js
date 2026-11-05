// Ubah alamat layanan di sini tanpa mengubah komponen UI.
window.ZYHUKA_CONFIG = Object.freeze({
  specUrl: "https://api.siputzx.my.id/api/openapi.json",
  websocketUrl: "wss://api.siputzx.my.id/ws",
  // Kosongkan untuk mengikuti servers[0].url di spesifikasi OpenAPI.
  apiBaseUrl: "",
  // Katalog cadangan disimpan saat proyek dibuat; eksekusi API tetap online.
  catalogFallback: true,
});
