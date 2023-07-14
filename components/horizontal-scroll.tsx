"use client";

import { useState } from "react";
import ReactDOM from "react-dom";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import "react-horizontal-scrolling-menu/dist/styles.css";

// import { LeftArrow, RightArrow } from "./arrows";
// import { Card } from "./card";
// import { Footer } from "./footer";
// import { Header } from "./header";
// import "./globalStyles.css";
// import usePreventBodyScroll from "./usePreventBodyScroll";

// NOTE: embrace power of CSS flexbox!
// import "./hideScrollbar.css";
import usePreventBodyScroll from "./usePreventBodyScroll";
import Image from "next/image";
import Link from "next/link";
// import "./firstItemMargin.css";

type scrollVisibilityApiType = React.ContextType<typeof VisibilityContext>;

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

const HorizontalScroll = () => {
  const [items] = useState(news);
  const { disableScroll, enableScroll } = usePreventBodyScroll();

  return (
    <div onMouseEnter={disableScroll} onMouseLeave={enableScroll}>
      <ScrollMenu
      // Header={<div>HEADER</div>}
      // Footer={<div>FOOTER</div>}
      // LeftArrow={LeftArrow}
      // RightArrow={RightArrow}
      // onWheel={onWheel}
      >
        {items.map((item) => (
          <div
            key={item.id}
            className="overflow-hidden rounded-lg bg-white max-sm:w-4/5"
          >
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
      </ScrollMenu>
    </div>
  );
};

export default HorizontalScroll;
