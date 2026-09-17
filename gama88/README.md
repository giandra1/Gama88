# Gama 88 — Bimbingan Belajar

Website landing page untuk Bimbel Gama 88, dibangun dengan Next.js 14 (App
Router), TypeScript, dan Tailwind CSS.

## Menjalankan secara lokal

```bash
npm install
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000).

## Struktur folder

```
app/                 # App Router: layout, page, global styles
  layout.tsx
  page.tsx
  globals.css
components/           # Komponen UI per-section
  Navbar.tsx
  Hero.tsx
  StatsBar.tsx
  Pillars.tsx
  Pricing.tsx
  Testimonials.tsx
  FacilityTour.tsx
  Promo.tsx
  RegisterForm.tsx
  Footer.tsx
lib/
  data.ts            # Konten teks (nav, statistik, paket, testimoni, dll)
public/               # Aset statis
```

## Build produksi

```bash
npm run build
npm start
```

## Catatan

- Gambar hero & tur kelas memakai foto placeholder dari Unsplash — ganti
  `src` di `components/Hero.tsx` dan `components/FacilityTour.tsx` dengan
  foto asli Gama 88.
- Peta lokasi memakai Google Maps embed sederhana; ganti query di
  `components/FacilityTour.tsx` dengan alamat/koordinat cabang yang benar.
- Nomor WhatsApp & alamat kantor di `Navbar.tsx` dan `Footer.tsx` adalah
  contoh — sesuaikan dengan data resmi.
- Form pendaftaran (`RegisterForm.tsx`) saat ini hanya menampilkan status
  sukses di sisi client; hubungkan `handleSubmit` ke API/Google
  Sheet/WhatsApp Business API sesuai kebutuhan.
