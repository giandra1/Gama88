import { Play, MapPin, Wind, MonitorPlay, BookOpen, Wifi, Navigation2, Clock } from "lucide-react";

export default function FacilityTour() {
  return (
    <section className="bg-white py-20">
      <div className="container-page grid gap-6 lg:grid-cols-2">
        <div>
          <span className="eyebrow-pill">Tur Fasilitas &amp; Suasana Belajar</span>
          <h2 className="mt-5 font-display text-[1.9rem] font-bold leading-tight text-ink">
            Metode Interaktif: Belajar Nyaman Tanpa Rasa Jenuh
          </h2>
          <p className="mt-4 max-w-md text-[14.5px] leading-relaxed text-ink/60">
            Lihat bagaimana suasana ruang belajar ber-AC, Interactive Flat
            Panel Screen modern, mini library, dan tutor ramah menciptakan
            atmosfer akademik yang produktif.
          </p>

          <div className="relative mt-6 overflow-hidden rounded-3xl shadow-soft">
            <img
              src="https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=1200&auto=format&fit=crop"
              alt="Suasana kelas interaktif Gama 88"
              className="h-64 w-full object-cover"
            />
            <button
              aria-label="Putar video tur kelas"
              className="absolute inset-0 flex items-center justify-center bg-ink/20 transition-colors hover:bg-ink/30"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-clay-500 text-white shadow-soft">
                <Play size={20} fill="currentColor" />
              </span>
            </button>
            <span className="absolute bottom-4 left-4 rounded-full bg-white/95 px-3 py-1.5 text-[11.5px] font-semibold text-ink">
              Tur Kelas Gama 88
            </span>
            <span className="absolute bottom-4 right-4 rounded-full bg-white/95 px-3 py-1.5 text-[11.5px] font-semibold text-ink">
              Interactive Class
            </span>
          </div>
        </div>

        <div>
          <div className="flex items-center gap-2.5 text-forest-700">
            <MapPin size={18} />
            <h3 className="font-display text-[17px] font-bold text-ink">
              Pusat Bimbingan Gama 88
            </h3>
          </div>
          <p className="mt-1.5 text-[13.5px] text-ink/55">
            Kantor Pusat &amp; Fasilitas Pembelajaran Utama
          </p>

          <div className="relative mt-4 h-72 w-full overflow-hidden rounded-3xl border border-ink/8 shadow-soft">
            <iframe
              title="Peta lokasi Gama 88"
              src="https://www.google.com/maps?q=Bekasi,Jawa%20Barat&output=embed"
              className="h-full w-full"
              loading="lazy"
            />
            <span className="absolute left-4 top-4 flex items-center gap-1.5 rounded-full bg-forest-600 px-3 py-1.5 text-[12px] font-semibold text-white shadow-soft">
              <MapPin size={12} />
              Gama 88 Kalisari
            </span>
          </div>

          <div className="mt-5 grid grid-cols-2 gap-3 text-[13px] font-medium text-ink/70">
            <div className="flex items-center gap-2">
              <Wind size={15} className="text-forest-500" /> Ruang AC Nyaman
            </div>
            <div className="flex items-center gap-2">
              <MonitorPlay size={15} className="text-forest-500" /> Interactive Flat Screen
            </div>
            <div className="flex items-center gap-2">
              <BookOpen size={15} className="text-forest-500" /> Mini Library
            </div>
            <div className="flex items-center gap-2">
              <Wifi size={15} className="text-forest-500" /> WiFi Kencang
            </div>
          </div>

          <div className="mt-6 space-y-2 rounded-2xl bg-cream p-5 text-[13.5px] text-ink/70">
            <p>Jl. Swatantra Blok C No.1, RT.005/RW.004, Jatirasa, Kec. Jatiasih, Kota Bks, Jawa Barat 17148</p>
            <p className="flex items-center gap-2 font-semibold text-ink">
              <Clock size={14} /> Senin &ndash; Sabtu, 08.00 &ndash; 20.30 WIB
            </p>
          </div>

          <div className="mt-5 flex flex-wrap gap-3">
            <a href="#" className="btn-outline !px-5 !py-2.5 text-[13px]">
              <Navigation2 size={14} /> Petunjuk Maps
            </a>
            <a href="https://wa.me/6282123625081" className="btn-outline !px-5 !py-2.5 text-[13px]">
              Bantuan WA Langsung
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
