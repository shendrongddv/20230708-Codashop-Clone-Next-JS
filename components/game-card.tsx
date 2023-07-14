import Image from "next/image";

const GameCard = () => {
  return (
    <div className="group overflow-hidden rounded-lg">
      <div className="flex aspect-square items-center justify-center overflow-hidden">
        <Image
          src="/games/mobile-legends.jpg"
          alt="Mobile Legends"
          width={178}
          height={178}
          className="h-full w-full object-cover transition duration-300 ease-linear group-hover:scale-105"
        />
      </div>
      <div className="flex flex-col items-center bg-[#36213D] p-2 text-center text-sm md:p-4 md:text-base">
        <span className="line-clamp-2 font-semibold text-white">
          Mobile Legends
        </span>
      </div>
    </div>
  );
};

export default GameCard;
