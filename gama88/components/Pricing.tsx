import { Check, Users, Crown } from "lucide-react";
import { packages } from "@/lib/data";

export default function Pricing() {
  return (
    <section id="paket" className="bg-white py-20">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow-pill">Pilihan Program Resmi</span>
          <h2 className="mt-5 font-display text-[2.1rem] font-bold leading-tight text-ink sm:text-[2.4rem]">
            Paket Bimbingan Belajar Gama 88
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-ink/60">
            Pilih kelas sesuai preferensi kenyamanan dan target akademik
            putra-putri Anda. Rasio kelas kecil untuk hasil belajar optimal.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`relative flex flex-col rounded-3xl border p-8 ${
                pkg.highlight
                  ? "border-clay-500 bg-ink text-white shadow-soft lg:-translate-y-3"
                  : "border-ink/10 bg-cream text-ink"
              }`}
            >
              {pkg.recommended && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-clay-500 px-4 py-1.5 text-[11.5px] font-bold text-white">
                  Paling Diminati / Recommended
                </span>
              )}

              <div className="flex items-center justify-between">
                <span
                  className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11.5px] font-bold uppercase tracking-wide ${
                    pkg.highlight
                      ? "bg-white/10 text-clay-300"
                      : "bg-forest-50 text-forest-700"
                  }`}
                >
                  {pkg.tag}
                </span>
                {pkg.highlight ? (
                  <Crown size={20} className="text-clay-400" />
                ) : (
                  <Users size={20} className="text-forest-500" />
                )}
              </div>

              <h3 className="mt-5 font-display text-2xl font-bold">
                {pkg.name}
              </h3>
              <p
                className={`mt-1.5 text-[13px] font-medium ${
                  pkg.highlight ? "text-white/60" : "text-ink/50"
                }`}
              >
                {pkg.capacity}
              </p>

              <div
                className={`mt-6 border-t pt-6 text-[12px] font-bold uppercase tracking-wide ${
                  pkg.highlight ? "border-white/10 text-clay-300" : "border-ink/8 text-forest-600"
                }`}
              >
                Fasilitas &amp; Program:
              </div>

              <ul className="mt-4 flex flex-1 flex-col gap-3">
                {pkg.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-[13.5px] leading-snug">
                    <Check
                      size={16}
                      className={`mt-0.5 shrink-0 ${
                        pkg.highlight ? "text-clay-400" : "text-forest-500"
                      }`}
                    />
                    <span className={pkg.highlight ? "text-white/85" : "text-ink/75"}>
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#daftar"
                className={`mt-8 inline-flex w-full items-center justify-center rounded-full px-6 py-3.5 text-sm font-semibold transition-colors ${
                  pkg.highlight
                    ? "bg-clay-500 text-white hover:bg-clay-600"
                    : "border border-forest-600 text-forest-700 hover:bg-forest-600 hover:text-white"
                }`}
              >
                Daftar
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
