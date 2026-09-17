import { Star, Quote } from "lucide-react";
import { testimonials } from "@/lib/data";

export default function Testimonials() {
  return (
    <section id="testimoni" className="py-20">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow-pill">Kisah Sukses Nyata</span>
          <h2 className="mt-5 font-display text-[2.1rem] font-bold leading-tight text-ink sm:text-[2.4rem]">
            Pengalaman Mereka yang Telah Meraih Juara
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-ink/60">
            Testimoni siswa dan orang tua yang membuktikan efektivitas
            metode bimbingan terpadu Gama 88.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="flex flex-col rounded-3xl border border-ink/8 bg-white p-7"
            >
              <div className="flex items-center justify-between">
                <div className="flex gap-0.5 text-clay-400">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={14} fill="currentColor" strokeWidth={0} />
                  ))}
                </div>
                <Quote size={22} className="text-forest-100" />
              </div>

              <p className="mt-5 flex-1 text-[13.5px] italic leading-relaxed text-ink/70">
                &ldquo;{t.quote}&rdquo;
              </p>

              <div className="mt-6 flex items-center gap-3 border-t border-ink/8 pt-5">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-forest-100 font-display text-sm font-bold text-forest-700">
                  {t.name.charAt(0)}
                </span>
                <span className="leading-tight">
                  <span className="block text-[13.5px] font-bold text-ink">
                    {t.name}
                  </span>
                  <span className="block text-[12px] text-ink/50">{t.role}</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
