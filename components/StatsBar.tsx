import { stats } from "@/lib/data";

export default function StatsBar() {
  return (
    <section className="pb-4 pt-16">
      <div className="container-page">
        <div className="grid grid-cols-2 gap-4 rounded-3xl bg-white p-6 shadow-soft sm:p-8 lg:grid-cols-4">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`px-2 py-2 ${
                i !== 0 ? "sm:border-l sm:border-ink/8" : ""
              }`}
            >
              <div className="font-display text-[1.9rem] font-extrabold text-forest-600 sm:text-[2.1rem]">
                {s.value}
              </div>
              <div className="mt-1 text-[13.5px] font-semibold text-ink">
                {s.label}
              </div>
              <div className="text-[12px] text-ink/50">{s.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
