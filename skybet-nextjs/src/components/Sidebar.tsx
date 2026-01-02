"use client";

import { useState } from "react";

const sidebarItems = [
  { icon: "🏠", label: "Home" },
  { icon: "⚽", label: "Sports" },
  { icon: "🎰", label: "Casino" },
  { icon: "🎲", label: "Slots" },
  { icon: "📈", label: "Crash" },
  { icon: "🃏", label: "Table" },
  { icon: "🎣", label: "Fishing" },
  { icon: "🕹️", label: "Arcade" },
  { icon: "🎫", label: "Lottery" },
];

export default function Sidebar() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <aside className="w-[60px] bg-gradient-to-b from-[#1a0505] to-[#0d0d0d] border-r border-[#2a2a2a] fixed top-[60px] left-0 bottom-0 z-[100] hidden md:block">
      <nav className="flex flex-col py-2">
        {sidebarItems.map((item, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-full h-[50px] flex items-center justify-center text-[#888] hover:text-white hover:bg-white/5 transition-all relative ${
              activeIndex === index ? "text-white" : ""
            }`}
          >
            {activeIndex === index && (
              <span className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-[30px] bg-[#c41e3a] rounded-r" />
            )}
            <span className="text-xl">{item.icon}</span>
          </button>
        ))}
      </nav>
    </aside>
  );
}
