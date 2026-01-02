"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import HeroBanner from "@/components/HeroBanner";
import PromoBar from "@/components/PromoBar";
import CategoryNav from "@/components/CategoryNav";
import GameGrid from "@/components/GameGrid";
import AppBanner from "@/components/AppBanner";

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("hot");

  return (
    <>
      <Header />
      
      <div className="flex mt-[60px] min-h-[calc(100vh-60px)]">
        <Sidebar />
        
        <main className="flex-1 md:ml-[60px]">
          <HeroBanner />
          <PromoBar />
          <CategoryNav onCategoryChange={setActiveCategory} />
          <GameGrid title={activeCategory.toUpperCase()} category={activeCategory} />
          
          {/* Favourites Section */}
          <section className="px-5 pb-20">
            <h2 className="text-sm font-semibold text-white uppercase tracking-wide mb-4">
              ⭐ Favourites
            </h2>
            <p className="text-[#888] text-sm">
              Add games to your favourites to see them here
            </p>
          </section>
        </main>
      </div>

      <AppBanner />
    </>
  );
}
