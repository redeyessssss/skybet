"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 h-[60px] bg-gradient-to-b from-[#1a0505] to-[#0d0d0d] flex justify-between items-center px-5 z-[1000] border-b border-[#2a2a2a]">
      <div className="flex items-center">
        <div className="flex items-center gap-2">
          <span className="text-2xl">🎰</span>
          <span className="font-orbitron text-xl font-bold text-[#c41e3a] tracking-wide">
            SKY BET
          </span>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <Link
          href="/signup"
          className="px-5 py-2 rounded text-sm font-medium bg-transparent text-white border border-[#888] hover:border-white transition-all"
        >
          Sign up
        </Link>
        <Link
          href="/signin"
          className="px-5 py-2 rounded text-sm font-medium bg-[#c41e3a] text-white hover:bg-[#e63950] transition-all"
        >
          Login
        </Link>
        <div className="w-9 h-9 rounded-full bg-[#1e1e1e] flex items-center justify-center cursor-pointer">
          <span>🌐</span>
        </div>
      </div>
    </header>
  );
}
