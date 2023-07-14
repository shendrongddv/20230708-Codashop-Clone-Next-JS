import GameCard from "@/components/game-card";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const itemsDesktop = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const itemsMobile = itemsDesktop.slice(0, 6);
  return (
    <>
      {/* Banner Slider */}
      <section className="px-4 pb-8 pt-20">
        <div className="container">
          <div className="flex items-center justify-center gap-4">
            <div className="md:w-1/2">
              <Image
                src="/banners/banner-9.jpg"
                alt="Banner"
                width={730}
                height={280}
                className="h-auto w-full rounded-lg"
              />
            </div>
            <div className="hidden md:block md:w-1/2">
              <Image
                src="/banners/banner-10.png"
                alt="Banner"
                width={730}
                height={280}
                className="h-auto w-full rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>
      {/* ./ Banner Slider */}

      {/* Lebih Hemat */}
      <section className="px-4 py-8">
        <div className="container">
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-extrabold text-white md:text-4xl">
              Lebih Hemat Pakai Codacash
            </h2>

            {/* # Cards Mobile */}
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:hidden md:grid-cols-4 lg:grid-cols-6">
              {/* Card */}
              {itemsMobile.map((item) => (
                <GameCard key={item} />
              ))}
            </div>

            {/* # Cards Desktop */}
            <div className="hidden grid-cols-2 gap-4 sm:grid-cols-3 md:grid md:grid-cols-4 lg:grid-cols-6">
              {/* Card */}
              {itemsDesktop.map((item) => (
                <GameCard key={item} />
              ))}
            </div>

            {/* # Button */}
            <Link
              href="/"
              className={cn(
                buttonVariants({
                  variant: "link",
                  className: "mx-auto font-semibold text-[#E8F953]",
                })
              )}
            >
              Tampilkan semua
            </Link>
          </div>
        </div>
      </section>
      {/* ./ Lebih Hemat */}

      {/* Popular */}
      <section className="px-4 py-8">
        <div className="container">
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-extrabold text-white md:text-4xl">
              Populer
            </h2>

            {/* # Cards Mobile */}
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:hidden md:grid-cols-4 lg:grid-cols-6">
              {/* Card */}
              {itemsMobile.map((item) => (
                <GameCard key={item} />
              ))}
            </div>

            {/* # Cards Desktop */}
            <div className="hidden grid-cols-2 gap-4 sm:grid-cols-3 md:grid md:grid-cols-4 lg:grid-cols-6">
              {/* Card */}
              {itemsDesktop.map((item) => (
                <GameCard key={item} />
              ))}
            </div>

            {/* # Button */}
            <Link
              href="/"
              className={cn(
                buttonVariants({
                  variant: "link",
                  className: "mx-auto font-semibold text-[#E8F953]",
                })
              )}
            >
              Tampilkan semua
            </Link>
          </div>
        </div>
      </section>
      {/* ./ Popular */}

      {/* New Titles */}
      <section className="px-4 py-8">
        <div className="container">
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-extrabold text-white md:text-4xl">
              New Titles
            </h2>

            {/* # Cards Mobile */}
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:hidden md:grid-cols-4 lg:grid-cols-6">
              {/* Card */}
              {itemsMobile.map((item) => (
                <GameCard key={item} />
              ))}
            </div>

            {/* # Cards Desktop */}
            <div className="hidden grid-cols-2 gap-4 sm:grid-cols-3 md:grid md:grid-cols-4 lg:grid-cols-6">
              {/* Card */}
              {itemsDesktop.map((item) => (
                <GameCard key={item} />
              ))}
            </div>

            {/* # Button */}
            <Link
              href="/"
              className={cn(
                buttonVariants({
                  variant: "link",
                  className: "mx-auto font-semibold text-[#E8F953]",
                })
              )}
            >
              Tampilkan semua
            </Link>
          </div>
        </div>
      </section>
      {/* ./ New Titles */}

      {/* Promo */}
      {/* ./ Promo */}

      {/* Games */}
      <section className="px-4 py-8">
        <div className="container">
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-extrabold text-white md:text-4xl">
              Games
            </h2>

            {/* # Cards Mobile */}
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:hidden md:grid-cols-4 lg:grid-cols-6">
              {/* Card */}
              {itemsMobile.map((item) => (
                <GameCard key={item} />
              ))}
            </div>

            {/* # Cards Desktop */}
            <div className="hidden grid-cols-2 gap-4 sm:grid-cols-3 md:grid md:grid-cols-4 lg:grid-cols-6">
              {/* Card */}
              {itemsDesktop.map((item) => (
                <GameCard key={item} />
              ))}
            </div>

            {/* # Button */}
            <Link
              href="/"
              className={cn(
                buttonVariants({
                  variant: "link",
                  className: "mx-auto font-semibold text-[#E8F953]",
                })
              )}
            >
              Tampilkan semua
            </Link>
          </div>
        </div>
      </section>
      {/* ./ Games */}

      {/* Entertaiment */}
      <section className="px-4 py-8">
        <div className="container">
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-extrabold text-white md:text-4xl">
              Entertaiment
            </h2>

            {/* # Cards Mobile */}
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:hidden md:grid-cols-4 lg:grid-cols-6">
              {/* Card */}
              {itemsMobile.map((item) => (
                <GameCard key={item} />
              ))}
            </div>

            {/* # Cards Desktop */}
            <div className="hidden grid-cols-2 gap-4 sm:grid-cols-3 md:grid md:grid-cols-4 lg:grid-cols-6">
              {/* Card */}
              {itemsDesktop.map((item) => (
                <GameCard key={item} />
              ))}
            </div>

            {/* # Button */}
            <Link
              href="/"
              className={cn(
                buttonVariants({
                  variant: "link",
                  className: "mx-auto font-semibold text-[#E8F953]",
                })
              )}
            >
              Tampilkan semua
            </Link>
          </div>
        </div>
      </section>
      {/* ./ Entertaiment */}

      {/* Voucher */}
      <section className="px-4 py-8">
        <div className="container">
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-extrabold text-white md:text-4xl">
              Beli Kode Voucher
            </h2>

            {/* # Cards Mobile */}
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:hidden md:grid-cols-4 lg:grid-cols-6">
              {/* Card */}
              {itemsMobile.map((item) => (
                <GameCard key={item} />
              ))}
            </div>

            {/* # Cards Desktop */}
            <div className="hidden grid-cols-2 gap-4 sm:grid-cols-3 md:grid md:grid-cols-4 lg:grid-cols-6">
              {/* Card */}
              {itemsDesktop.map((item) => (
                <GameCard key={item} />
              ))}
            </div>

            {/* # Button */}
            <Link
              href="/"
              className={cn(
                buttonVariants({
                  variant: "link",
                  className: "mx-auto font-semibold text-[#E8F953]",
                })
              )}
            >
              Tampilkan semua
            </Link>
          </div>
        </div>
      </section>
      {/* ./ Voucher */}

      {/* News & Updates */}
      {/* ./ News & Updates */}

      {/* Codashop Indonesia */}
      {/* ./ Codashop Indonesia */}
    </>
  );
}
