"use client";

import { useState, FormEvent } from "react";
import { CheckCircle2, ShieldCheck, ArrowRight } from "lucide-react";
import { jenjangOptions, paketOptions } from "@/lib/data";

const steps = [
  {
    title: "Isi Data Diri & Kontak",
    body: "Nama siswa, nama orang tua/wali, dan nomor WhatsApp aktif yang bisa dihubungi tim akademik.",
  },
  {
    title: "Pilih Paket Kelas",
    body: "Reguler (8 siswa), Exclusive (6 siswa), atau Diamond (4 siswa) sesuai kebutuhan.",
  },
  {
    title: "Konfirmasi & Rencana Belajar",
    body: "Tim Gama 88 menghubungi Anda untuk konsultasi dan penjadwalan, lalu mulai kelas.",
  },
];

export default function RegisterForm() {
  const [paket, setPaket] = useState(paketOptions[0]);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="daftar" className="bg-white py-20">
      <div className="container-page grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <span className="eyebrow-pill">Langkah Mudah Pendaftaran</span>
          <h2 className="mt-5 font-display text-[1.9rem] font-bold leading-tight text-ink">
            Mulai Perjalanan Prestasi Juara Anda
          </h2>
          <p className="mt-4 text-[14.5px] leading-relaxed text-ink/60">
            Isi data diri di formulir sebelah untuk konsultasi kelas &amp; reservasi
            kuota. Tim Akademik Gama 88 akan segera mengonfirmasi jadwal belajar
            terbaik untuk Anda.
          </p>

          <div className="mt-8 space-y-6">
            {steps.map((s, i) => (
              <div key={s.title} className="flex gap-4">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-forest-600 text-[13px] font-bold text-white">
                  {i + 1}
                </span>
                <div>
                  <h3 className="text-[14.5px] font-bold text-ink">{s.title}</h3>
                  <p className="mt-1 text-[13px] leading-relaxed text-ink/55">
                    {s.body}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-2xl bg-cream p-6">
            <h4 className="text-[13px] font-bold uppercase tracking-wide text-forest-700">
              Fasilitas Termasuk:
            </h4>
            <ul className="mt-3 space-y-2 text-[13.5px] text-ink/70">
              {[
                "Free E-Modul Rumus Cepat & Ringkasan Mind Map",
                "Sesi Konsultasi Penjurusan Kuliah Favorit",
                "Akses Simulasi Try Out CBT Tanpa Berbayar",
              ].map((f) => (
                <li key={f} className="flex items-start gap-2">
                  <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-forest-500" />
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="rounded-3xl border border-ink/8 bg-cream p-7 shadow-soft sm:p-9">
          <h3 className="font-display text-[19px] font-bold text-ink">
            Formulir Pendaftaran Siswa
          </h3>

          {submitted ? (
            <div className="mt-8 flex flex-col items-center rounded-2xl bg-forest-50 px-6 py-12 text-center">
              <CheckCircle2 size={38} className="text-forest-600" />
              <p className="mt-4 font-display text-lg font-bold text-ink">
                Terima kasih, pendaftaran diterima!
              </p>
              <p className="mt-2 max-w-xs text-[13.5px] text-ink/60">
                Tim Akademik Gama 88 akan menghubungi Anda via WhatsApp dalam
                1x24 jam untuk konfirmasi jadwal kelas {paket}.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-6 space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Nama Lengkap Siswa" placeholder="Nama lengkap siswa" required />
                <Field label="Nama Orang Tua / Wali" placeholder="Nama Ibu/Bapak" required />
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <Field
                  label="Nomor WhatsApp Aktif"
                  placeholder="Contoh: 0812345678"
                  type="tel"
                  required
                />
                <Field label="Asal Sekolah" placeholder="Asal sekolah saat ini" required />
              </div>

              <div>
                <label className="mb-1.5 block text-[13px] font-semibold text-ink/80">
                  Jenjang Pendidikan *
                </label>
                <select
                  required
                  defaultValue=""
                  className="w-full rounded-xl border border-ink/12 bg-white px-4 py-3 text-[14px] text-ink focus:border-forest-500 focus:outline-none focus:ring-2 focus:ring-forest-100"
                >
                  <option value="" disabled>
                    Pilih Jenjang...
                  </option>
                  {jenjangOptions.map((j) => (
                    <option key={j} value={j}>
                      {j}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="mb-2 block text-[13px] font-semibold text-ink/80">
                  Pilih Paket Kelas *
                </label>
                <div className="flex flex-col gap-2.5 sm:flex-row">
                  {paketOptions.map((p) => (
                    <label
                      key={p}
                      className={`flex flex-1 cursor-pointer items-center gap-2.5 rounded-xl border px-4 py-3 text-[13px] font-semibold transition-colors ${
                        paket === p
                          ? "border-forest-600 bg-forest-50 text-forest-700"
                          : "border-ink/12 bg-white text-ink/60"
                      }`}
                    >
                      <input
                        type="radio"
                        name="paket"
                        value={p}
                        checked={paket === p}
                        onChange={() => setPaket(p)}
                        className="accent-forest-600"
                      />
                      {p}
                    </label>
                  ))}
                </div>
              </div>

              <button type="submit" className="btn-primary w-full">
                Daftar Sekarang <ArrowRight size={16} />
              </button>

              <p className="flex items-center justify-center gap-1.5 text-center text-[11.5px] text-ink/45">
                <ShieldCheck size={13} />
                Data kamu aman &amp; hanya digunakan tim akademik Gama 88 untuk proses pendaftaran.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  placeholder,
  type = "text",
  required,
}: {
  label: string;
  placeholder: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-[13px] font-semibold text-ink/80">
        {label} {required && "*"}
      </label>
      <input
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-xl border border-ink/12 bg-white px-4 py-3 text-[14px] text-ink placeholder:text-ink/35 focus:border-forest-500 focus:outline-none focus:ring-2 focus:ring-forest-100"
      />
    </div>
  );
}
