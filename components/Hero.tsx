import { Sparkles, Users2, HeartHandshake, ChevronRight, Star, TrendingUp } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-14 pb-10">
      <div className="container-page grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <span className="eyebrow-pill">
            <Sparkles size={14} />
            Bimbel Modern Unggulan &amp; Pilihan Juara
          </span>

          <h1 className="mt-6 font-display text-[2.6rem] font-bold leading-[1.08] tracking-tight text-ink sm:text-[3.1rem]">
            Bimbingan Belajar
            <br />
            Modern, Keren, &amp;
            <br />
            <span className="text-forest-600">Berkualitas</span>
          </h1>

          <p className="mt-6 max-w-md text-[15.5px] leading-relaxed text-ink/65">
            Membimbing siswa jenjang SD, SMP, SMA &amp; persiapan intensif
            UTBK/SNBT secara komprehensif dengan kesiapan akademik unggul,
            metode interaktif, serta penguatan mental juara.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#daftar" className="btn-primary">
              Daftar Sekarang
              <ChevronRight size={16} />
            </a>
            <a href="#paket" className="btn-outline">
              Lihat Paket Belajar
            </a>
          </div>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:gap-8">
            <div className="flex items-center gap-2.5 text-[13.5px] font-medium text-ink/70">
              <Users2 size={17} className="text-forest-600" />
              Tutor Bersahabat &amp; Kompeten
            </div>
            <div className="flex items-center gap-2.5 text-[13.5px] font-medium text-ink/70">
              <HeartHandshake size={17} className="text-forest-600" />
              Pendampingan Siswa Holistik
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="relative overflow-hidden rounded-[28px] shadow-soft">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop"
              alt="Siswa belajar berkelompok di kelas Gama 88"
              className="h-[340px] w-full object-cover sm:h-[400px]"
            />

            <div className="absolute right-4 top-4 flex items-center gap-2 rounded-2xl bg-white/95 px-3.5 py-2.5 shadow-soft backdrop-blur">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-forest-50 text-forest-600">
                <Users2 size={15} />
              </span>
              <span className="leading-tight">
                <span className="block text-[12.5px] font-bold text-ink">
                  Rasio Kelas Kecil
                </span>
                <span className="block text-[11px] text-ink/55">
                  4 &ndash; 8 Siswa / Kelas
                </span>
              </span>
            </div>
          </div>

          <div className="absolute -bottom-6 left-4 flex items-center gap-3 rounded-2xl bg-white px-4 py-3.5 shadow-soft sm:left-8">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-clay-50 text-clay-500">
              <TrendingUp size={19} />
            </span>
            <span className="leading-tight">
              <span className="flex items-center gap-1 text-[11px] font-semibold text-clay-500">
                <Star size={11} fill="currentColor" strokeWidth={0} />
                Tingkat Kelulusan PTN Tinggi
              </span>
              <span className="block text-[11px] text-ink/55">
                UGM, UI, ITB &amp; Favorit
              </span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
