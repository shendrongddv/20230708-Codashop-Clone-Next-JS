import Image from "next/image";
import Link from "next/link";

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

const news = [
  {
    id: 1,
    title: "Cek Info",
    desc: "Promo dan Berita update lainnya.",
    href: "/",
    img: "news-1.jpg",
  },
  {
    id: 2,
    title: "Waspada Penipuan APK!",
    desc: "Pengumuman penting dari Codashop",
    href: "/",
    img: "news-2.jpg",
  },
];
const NewsCard = () => {
  const items = news;

  return (
    <>
      {items.map((item) => (
        <div key={item.id} className="overflow-hidden rounded-lg bg-white">
          <div className="overflow-hidden">
            <Image
              src={`/news/${item.img}`}
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
            <p className="text-sm opacity-80">{item.desc}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default NewsCard;

export const NewsCardMobile = () => {
  const items = news;

  return (
    <ScrollArea>
      <div className="flex pb-4">
        {items.map((item) => (
          <div key={item.id} className="max-md:pl-4 max-md:last:pr-4">
            <div className="h-full min-w-[320px] overflow-hidden rounded-lg bg-white md:w-1/3">
              <div className="overflow-hidden">
                <Image
                  src={`/news/${item.img}`}
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
                <p className="text-sm opacity-80">{item.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
};
