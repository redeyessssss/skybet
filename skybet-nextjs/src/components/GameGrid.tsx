"use client";

import GameCard from "./GameCard";

const games = [
  { name: "Lucky Cards 500", image: "/games/cards.jpg" },
  { name: "Cricket League", image: "/games/cricket.jpg" },
  { name: "Football Pro", image: "/games/football.jpg" },
  { name: "Crash Aviator", image: "/games/aviator.jpg" },
  { name: "Fortune Gems 500", image: "/games/slots.jpg" },
  { name: "Money Coming", image: "/games/color.jpg" },
  { name: "Wild Bounty", image: "/games/badminton.jpg" },
  { name: "Treasures of Aztec", image: "/games/golf.jpg" },
  { name: "Super Ace", image: "/games/tennis.jpg" },
  { name: "Super Ace Deluxe", image: "/games/volleyball.jpg" },
  { name: "Circus Joker 4096", image: "/games/ludo.jpg" },
  { name: "Piggy Bank", image: "/games/motor.jpg" },
  { name: "SUPER ELEMENTS", image: "/games/slots.jpg" },
  { name: "GOLDEN GENIE", image: "/games/color.jpg" },
  { name: "Frog Dash", image: "/games/aviator.jpg" },
  { name: "Chicken Dash", image: "/games/ludo.jpg" },
  { name: "Crazy Time", image: "/games/cards.jpg" },
  { name: "Baccarat Classic", image: "/games/cricket.jpg" },
];

interface GameGridProps {
  title?: string;
  category?: string;
}

export default function GameGrid({ title = "HOT", category }: GameGridProps) {
  return (
    <section className="p-5" id="games">
      <div className="mb-4">
        <h2 className="text-sm font-semibold text-white uppercase tracking-wide">
          {title}
        </h2>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
        {games.map((game, index) => (
          <GameCard
            key={index}
            name={game.name}
            image={game.image}
            onClick={() => console.log(`Playing ${game.name}`)}
          />
        ))}
      </div>
    </section>
  );
}
