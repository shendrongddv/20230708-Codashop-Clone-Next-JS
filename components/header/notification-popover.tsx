import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { BellDot } from "lucide-react";
import Image from "next/image";

const notifications = [
  {
    id: 1,
    title: "DISKON s.d. 25ribu! Ajak teman kamu!",
    text: "Dapatkan kode promo diskon s.d. 25ribu dengan cara mengundang teman kamu dan bagikan link referral khusus nya! Top up jadi lebih hemat, nge-game bareng teman jadi lancar! *S&K Berlaku",
  },
  {
    id: 2,
    title: "Top up dan Bayar di Indomaret, Gratis Amani!",
    text: "Top up game kamu di Codashop dan bayar di Indomaret, dapatkan gratis AMANI dengan tambah 2000 aja loh! Yuk, jangan sampai ketinggalan, dari tanggal 1-31 Juli 2023 ini aja loh. *S&K Berlaku",
  },
  {
    id: 3,
    title: "DISKON 10% Top up pakai QRIS Neobank",
    text: "Top up game kamu pakai QRIS Neobank, dan dapatkan DISKON s.d. 10% max. 15rb, dari tanggal 1-31 Juli 2023. *S&K berlaku",
  },
];

export const NotificationPopover = () => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="aspect-square rounded-full border-white/0 bg-transparent p-2 text-white hover:bg-white/10 hover:text-white"
        >
          <BellDot className="h-5 w-5" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="mx-4 rounded-xl p-0">
        <div className="p-2">
          <div className="flex items-center justify-between p-2">
            <span className="text-sm font-semibold">Notifikasi</span>
          </div>
          <div className="mt-1 space-y-2">
            {notifications?.map((item) => (
              <div key={item.id} className="flex rounded-lg bg-slate-100 p-2">
                <div className="aspect-square h-11 w-11">
                  <Image
                    src="/icons/notification.png"
                    alt={item.title}
                    width={50}
                    height={50}
                    className="aspect-square h-8 w-8"
                  />
                </div>
                <div className="w-full">
                  <span className="-mt-4 text-xs font-semibold leading-none text-primary">
                    {item.title}
                  </span>
                  <p className="line-clamp-2 text-xs">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="py-4">
            <Button variant="destructive" className="w-full rounded-full">
              Lihat semua notofikasi
            </Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};
