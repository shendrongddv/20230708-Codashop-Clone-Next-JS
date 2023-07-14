import { BadgePercent, Bookmark, ShieldCheck } from "lucide-react";
import { SheetClose } from "../ui/sheet";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "../ui/button";

const SidebarContent = () => {
  return (
    <div className="flex h-full w-full flex-col justify-center p-6 md:justify-start">
      <h2 className="text-2xl font-bold md:mt-8">Daftar Codashop sekarang!</h2>

      <div className="mt-8 space-y-4">
        {/* Icon Text */}
        <div className="flex w-full items-center">
          <BadgePercent className="mr-4 h-14 w-10 flex-none text-[#E8F953]" />
          <span>
            Jadilah yang pertama mengetahui promo dan penawaran ekslusif!
          </span>
        </div>
        {/* Icon Text */}
        <div className="flex w-full items-center">
          <Bookmark className="mr-4 h-14 w-10 flex-none text-[#E8F953]" />
          <span>Akses riwayat pesanan anda dengan mudah</span>
        </div>
        {/* Icon Text */}
        <div className="flex w-full items-center">
          <ShieldCheck className="mr-4 h-14 w-10 flex-none text-[#E8F953]" />
          <span>Lebih cepat dan aman</span>
        </div>
      </div>

      <div className="mt-16 space-y-4">
        <SheetClose asChild>
          <Link
            href="/"
            className={cn(
              buttonVariants({
                variant: "destructive",
                className: "w-full rounded-full",
              })
            )}
          >
            Daftar sekarang, GRATIS!
          </Link>
        </SheetClose>
        <SheetClose asChild>
          <Link
            href="/"
            className={cn(
              buttonVariants({
                variant: "secondary",
                className: "w-full rounded-full",
              })
            )}
          >
            Masuk
          </Link>
        </SheetClose>
      </div>
    </div>
  );
};

export default SidebarContent;
