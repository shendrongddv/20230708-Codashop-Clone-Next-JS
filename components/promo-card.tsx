import Image from "next/image";
import Link from "next/link";
import { ScrollArea, ScrollBar } from "./ui/scroll-area";

const news = [
  {
    id: 1,
    title: "Top up Zems DISKON 20%",
    desc: "SERBU Codashop! Serba Untung di bulan Juli kal ini. Top up Zems kali ini ada diskon 20%, Yuk beli item yang keren dan lucu untuk make over diri kamu di dunia Zepeto!",
    href: "/",
    img: "promo-1.jpg",
  },
  {
    id: 2,
    title: "Top Up Reevelation Mobile DISKON s.d. 30 Ribu",
    desc: "SERBa Untung di Codashop SERBU Juli, top up Revelation Mobile di Codashop pakai kode promo “CODAREV10” bisa dapetin DISKON s.d. Rp30.000.",
    href: "/",
    img: "promo-2.jpg",
  },
];
const PromoCard = () => {
  const items = news;

  return (
    <>
      {items.map((item) => (
        <div key={item.id} className="overflow-hidden rounded-lg bg-white p-2">
          <div className="overflow-hidden rounded-md">
            <Image
              src={`/promos/${item.img}`}
              alt={item.title}
              width={569}
              height={216}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-col p-4">
            <Link href={item.href}>
              <h3 className="font-bold">{item.title}</h3>
            </Link>
            <p className="mt-3 text-sm opacity-80">{item.desc}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default PromoCard;

export const PromoCardMobile = () => {
  const items = news;

  return (
    <ScrollArea>
      <div className="flex pb-4">
        {items.map((item) => (
          <div key={item.id} className="max-md:pl-4 max-md:last:pr-4">
            <div className="h-full min-w-[320px] overflow-hidden rounded-lg bg-white p-2">
              <div className="overflow-hidden rounded-md">
                <Image
                  src={`/promos/${item.img}`}
                  alt={item.title}
                  width={569}
                  height={216}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-col p-4">
                <Link href={item.href}>
                  <h3 className="font-bold">{item.title}</h3>
                </Link>
                <p className="mt-3 text-sm opacity-80">{item.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
};
