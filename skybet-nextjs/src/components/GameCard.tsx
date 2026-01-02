import Image from "next/image";

interface GameCardProps {
  name: string;
  image: string;
  onClick?: () => void;
}

export default function GameCard({ name, image, onClick }: GameCardProps) {
  return (
    <div
      onClick={onClick}
      className="bg-[#1e1e1e] rounded-lg overflow-hidden cursor-pointer transition-all border border-transparent hover:-translate-y-1 hover:border-[#c41e3a] hover:shadow-[0_10px_30px_rgba(196,30,58,0.3)] group"
    >
      <div className="w-full aspect-square overflow-hidden bg-[#2a2a2a]">
        <Image
          src={image}
          alt={name}
          width={200}
          height={200}
          className="w-full h-full object-cover transition-transform group-hover:scale-110"
        />
      </div>
      <div className="p-2 text-center bg-gradient-to-b from-[#1e1e1e] to-[#151515]">
        <span className="text-[11px] font-medium text-white truncate block">
          {name}
        </span>
      </div>
    </div>
  );
}
