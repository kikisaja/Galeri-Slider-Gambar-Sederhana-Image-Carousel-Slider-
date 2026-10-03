# 📸 Image Carousel Slider

Komponen galeri gambar berpindah otomatis (*Image Carousel Slider*) berbasis HTML, CSS, dan JavaScript murni. Slider ini menyajikan transisi fade gambar yang mulus, tombol navigasi Previous/Next, indikator titik (*dots*), serta fitur autoplay dengan kontrol jeda interaktif.

---

## 🎯 Konsep Pembelajaran RPL / Pemrograman Web

1. **State Management & Index Tracking:**
   Melacak slide aktif menggunakan indeks integer dan menggunakan operator modulo (`%`) untuk melakukan perulangan slider secara melingkar (*infinite loop*).
2. **Timing Events (`setInterval` & `clearInterval`):**
   Mengatur perpindahan otomatis secara berkala dan membersihkan timer saat navigasi manual terjadi agar slide tidak melompat.
3. **Event Listener Hover & Mouse State:**
   Menghentikan *autoplay* saat *hover* (`mouseenter`) dan melanjutkan saat kursor keluar (`mouseleave`) demi kenyamanan navigasi pengguna.

---

## 📂 Struktur Folder Proyek

```text
├── index.html       # Struktur slider, gambar, tombol navigasi, dan caption
├── style.css        # Desain gaya Neobrutalism, efek transisi fade, dan layouting
└── script.js        # Logika carousel, generasi dots, dan kontrol timer autoplay
