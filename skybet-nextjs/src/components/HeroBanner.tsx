"use client";

import { useState } from "react";
import Link from "next/link";

export default function HeroBanner() {
  const [activeSlide, setActiveSlide] = useState(0);
  const totalSlides = 5;

  return (
    <section className="relative h-[280px] bg-gradient-to-br from-[#2d0a0a] via-[#1a0505] to-[#0d0d0d] overflow-hidden">
      {/* Background glow effect */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,rgba(196,30,58,0.3)_0%,transparent_60%)]" />

      {/* Banner content */}
      <div className="h-full flex items-center justify-center p-5 md:p-10 relative z-10">
        <div className="text-center">
          <p className="text-lg text-white mb-1">50% CASINO</p>
          <p className="text-sm text-[#d4af37] uppercase tracking-[3px]">UP TO</p>
          <h1 className="font-orbitron text-5xl md:text-7xl text-[#d4af37] my-2 leading-none drop-shadow-[0_0_30px_rgba(212,175,55,0.5)]">
            ৳12,000
          </h1>
          <p className="text-base md:text-lg text-white uppercase tracking-[4px] mb-5">
            FIRST DEPOSIT BONUS
          </p>
          <Link
            href="#games"
            className="inline-block bg-gradient-to-br from-[#c41e3a] to-[#8b0000] text-white px-8 py-3 rounded-md text-sm font-semibold uppercase tracking-[2px] shadow-[0_4px_20px_rgba(196,30,58,0.4)] hover:-translate-y-0.5 hover:shadow-[0_6px_25px_rgba(196,30,58,0.6)] transition-all"
          >
            PLAY NOW
          </Link>
        </div>
      </div>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveSlide(index)}
            className={`h-2 rounded-full transition-all ${
              activeSlide === index
                ? "w-6 bg-white"
                : "w-2 bg-white/30 hover:bg-white/50"
            }`}
          />
        ))}
      </div>

      {/* Navigation arrows */}
      <button className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 rounded-full text-white text-2xl hover:bg-black/80 transition-all">
        ‹
      </button>
      <button className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 rounded-full text-white text-2xl hover:bg-black/80 transition-all">
        ›
      </button>
    </section>
  );
}
