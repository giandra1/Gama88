import {
  BrainCircuit,
  Fingerprint,
  Presentation,
  MessagesSquare,
  ClipboardCheck,
  CheckCircle2,
} from "lucide-react";
import { pillars } from "@/lib/data";

const icons = [BrainCircuit, Fingerprint, Presentation, MessagesSquare, ClipboardCheck];

export default function Pillars() {
  return (
    <section id="kenapa" className="py-20">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow-pill">5 Pilar Keunggulan Utama</span>
          <h2 className="mt-5 font-display text-[2.1rem] font-bold leading-tight text-ink sm:text-[2.4rem]">
            Kenapa Memilih Gama&apos;88?
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-ink/60">
            Pilar pembinaan menyeluruh yang memadukan teknik belajar modern,
            kesiapan mental, ikhtiar batiniah, dan evaluasi berkala yang
            presisi.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {pillars.map((p, i) => {
            const Icon = icons[i];
            const isFeatured = i === 3;
            return (
              <div
                key={p.title}
                className={`rounded-3xl border p-7 transition-colors ${
                  isFeatured
                    ? "border-forest-600 bg-forest-600 text-white"
                    : "border-ink/8 bg-white text-ink hover:border-forest-200"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span
                    className={`flex h-11 w-11 items-center justify-center rounded-2xl ${
                      isFeatured ? "bg-white/15 text-white" : "bg-forest-50 text-forest-600"
                    }`}
                  >
                    <Icon size={20} />
                  </span>
                  <span
                    className={`text-[12px] font-semibold ${
                      isFeatured ? "text-white/60" : "text-ink/35"
                    }`}
                  >
                    Pilar {p.number}
                  </span>
                </div>

                <h3 className="mt-5 font-display text-[17px] font-bold leading-snug">
                  {i + 1}. {p.title}
                </h3>
                <p
                  className={`mt-3 text-[13.5px] leading-relaxed ${
                    isFeatured ? "text-white/80" : "text-ink/60"
                  }`}
                >
                  {p.body}
                </p>

                <div
                  className={`mt-5 flex items-center gap-2 text-[12.5px] font-semibold ${
                    isFeatured ? "text-white" : "text-forest-600"
                  }`}
                >
                  <CheckCircle2 size={15} />
                  {p.tag}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
