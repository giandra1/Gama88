"use client";

import Image from "next/image";
import { useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { nav } from "@/lib/data";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-ink/5 bg-cream/90 backdrop-blur">
      <div className="container-page flex h-[72px] items-center justify-between">
        <a href="#home" className="flex items-center">
          <span className="flex h-20 w-20 items-center justify-center overflow-hidden rounded-xl bg-transparent p-0">
            <Image
              src="/images/logogama.png"
              alt="Logo Gama 88"
              width={180}
              height={140}
              className="h-40 w-40 object-contain drop-shadow-sm"
              priority
            />
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[14.5px] font-medium text-ink/70 transition-colors hover:text-forest-600"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="https://wa.me/6282123625081"
            className="inline-flex items-center gap-2 rounded-full border border-forest-200 bg-forest-50 px-4 py-2.5 text-[13.5px] font-semibold text-forest-700 transition-colors hover:bg-forest-100"
          >
            <MessageCircle size={16} />
            Konsultasi WA
          </a>
          <a href="#daftar" className="btn-primary !px-5 !py-2.5 text-[13.5px]">
            Daftar Sekarang
          </a>
        </div>

        <button
          aria-label="Buka menu"
          className="flex h-10 w-10 items-center justify-center rounded-lg text-ink lg:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-ink/5 bg-cream lg:hidden">
          <div className="container-page flex flex-col gap-1 py-4">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-[15px] font-medium text-ink/80 hover:bg-forest-50"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#daftar"
              onClick={() => setOpen(false)}
              className="btn-primary mt-2 w-full"
            >
              Daftar Sekarang
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
