"use client";

import { useState } from "react";

const categories = [
  { icon: "🔥", label: "HOT", id: "hot" },
  { icon: "⚽", label: "Sports", id: "sports" },
  { icon: "🎰", label: "Casino", id: "casino" },
  { icon: "🎲", label: "Slots", id: "slots" },
  { icon: "📈", label: "Crash", id: "crash" },
  { icon: "🃏", label: "Table", id: "table" },
  { icon: "🎣", label: "Fishing", id: "fishing" },
  { icon: "🕹️", label: "Arcade", id: "arcade" },
  { icon: "🎫", label: "Lottery", id: "lottery" },
];

interface CategoryNavProps {
  onCategoryChange?: (category: string) => void;
}

export default function CategoryNav({ onCategoryChange }: CategoryNavProps) {
  const [activeCategory, setActiveCategory] = useState("hot");

  const handleClick = (id: string) => {
    setActiveCategory(id);
    onCategoryChange?.(id);
  };

  return (
    <nav className="flex gap-1 px-5 py-4 bg-[#0a0a0a] border-b border-[#2a2a2a] overflow-x-auto scrollbar-hide">
      {categories.map((cat) => (
        <button
          key={cat.id}
          onClick={() => handleClick(cat.id)}
          className={`flex flex-col items-center gap-1 px-5 py-2 rounded-lg min-w-[70px] transition-all ${
            activeCategory === cat.id
              ? "text-white bg-[#c41e3a]/20 border-b-2 border-[#c41e3a]"
              : "text-[#888] hover:text-white hover:bg-white/5"
          }`}
        >
          <span className="text-xl md:text-2xl">{cat.icon}</span>
          <span className="text-[11px] font-medium">{cat.label}</span>
        </button>
      ))}
    </nav>
  );
}
