"use client";

import { useState } from "react";

export default function AppBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 right-5 left-5 md:left-auto bg-gradient-to-br from-[#2d0a0a] to-[#1a0505] border border-[#2a2a2a] border-b-0 rounded-t-lg px-4 py-3 flex items-center gap-4 z-[1000]">
      <div className="flex items-center gap-3">
        <span className="text-3xl">📱</span>
        <div className="flex flex-col">
          <strong className="text-xs text-white">SKY BET Web App</strong>
          <span className="text-[10px] text-[#d4af37]">⭐⭐⭐⭐⭐</span>
        </div>
      </div>
      <button className="px-5 py-2 bg-[#00a86b] text-white text-xs rounded hover:bg-[#00c77b] transition-all">
        Download
      </button>
      <button
        onClick={() => setIsVisible(false)}
        className="text-[#888] hover:text-white text-lg p-1"
      >
        ✕
      </button>
    </div>
  );
}
