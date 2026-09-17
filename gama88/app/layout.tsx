import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gama 88 — Bimbingan Belajar Modern, Keren, & Berkualitas",
  description:
    "Bimbingan belajar jenjang SD, SMP, SMA & persiapan intensif UTBK/SNBT secara komprehensif dengan kesiapan akademik unggul, metode interaktif, serta penguatan mental juara.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;600;700;800&family=Inter:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
