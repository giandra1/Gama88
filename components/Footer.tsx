import { GraduationCap, MapPin, Phone, MessageCircle, Clock } from "lucide-react";
import { nav } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-ink pt-16 text-white/70">
      <div className="container-page grid gap-10 pb-10 sm:grid-cols-2 lg:grid-cols-[1.2fr_0.9fr_1fr]">
        <div>
          <a href="#home" className="flex items-center gap-2.5">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-forest-600 text-white">
              <GraduationCap size={20} />
            </span>
            <span className="font-display text-[15px] font-bold text-white">
              Bimbel Gama 88
            </span>
          </a>
          <p className="mt-4 max-w-xs text-[13.5px] leading-relaxed">
            Bimbingan Belajar Modern, Berkarakter, &amp; Berprestasi Juara.
            Menghadirkan rasio kelas kecil (4&ndash;8 siswa), metode Mind Map,
            dan evaluasi terukur untuk mewujudkan generasi berprestasi ke
            sekolah dan kampus impian.
          </p>
          <a
            href="https://wa.me/6282123625081"
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-forest-600 px-5 py-2.5 text-[13px] font-semibold text-white hover:bg-forest-500"
          >
            <MessageCircle size={15} /> Hubungi Langsung via WhatsApp
          </a>
        </div>

        <div>
          <h4 className="text-[13px] font-bold uppercase tracking-wide text-white">
            Navigasi Utama
          </h4>
          <ul className="mt-4 space-y-2.5 text-[13.5px]">
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="hover:text-white">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-[13px] font-bold uppercase tracking-wide text-white">
            Kantor Pusat &amp; Informasi
          </h4>
          <ul className="mt-4 space-y-3 text-[13.5px]">
            <li className="flex items-start gap-2.5">
              <MapPin size={15} className="mt-0.5 shrink-0" />
              Jl. Swatantra Blok C No.1, RT.005/RW.004, Jatirasa, Kec.
              Jatiasih, Kota Bks, Jawa Barat 17148
            </li>
            <li className="flex items-center gap-2.5">
              <Phone size={15} className="shrink-0" /> (021) 82732051
            </li>
            <li className="flex items-center gap-2.5">
              <MessageCircle size={15} className="shrink-0" /> WhatsApp: +62
              812-8888-088
            </li>
            <li className="flex items-center gap-2.5">
              <Clock size={15} className="shrink-0" /> Senin &ndash; Sabtu, 08.00
              &ndash; 20.30 WIB
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-5">
        <div className="container-page flex flex-col items-center justify-between gap-3 text-[12px] text-white/45 sm:flex-row">
          <span>&copy; 2024 Bimbel Gama 88. Seluruh Hak Cipta Dilindungi.</span>
          <span className="flex gap-5">
            <a href="#" className="hover:text-white/80">
              Kebijakan Privasi
            </a>
            <a href="#" className="hover:text-white/80">
              Syarat &amp; Ketentuan
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
