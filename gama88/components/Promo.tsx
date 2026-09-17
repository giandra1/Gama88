import { Gift, ArrowRight } from "lucide-react";

export default function Promo() {
  return (
    <section className="py-14">
      <div className="container-page">
        <div className="flex flex-col items-center justify-between gap-5 rounded-3xl bg-forest-700 px-7 py-8 text-white sm:flex-row sm:px-10">
          <div className="flex items-center gap-4">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/10">
              <Gift size={22} />
            </span>
            <div>
              <span className="text-[11.5px] font-bold uppercase tracking-wide text-clay-300">
                Promo &middot; Kuota Terbatas
              </span>
              <p className="mt-1 font-display text-[17px] font-bold leading-snug">
                Diskon biaya pendaftaran untuk 20 pendaftar pertama bulan ini
              </p>
            </div>
          </div>
          <a
            href="#daftar"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-clay-500 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-clay-600"
          >
            Klaim Sekarang <ArrowRight size={15} />
          </a>
        </div>
      </div>
    </section>
  );
}
