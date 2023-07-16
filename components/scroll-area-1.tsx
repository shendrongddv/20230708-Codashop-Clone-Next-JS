import * as React from "react";

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import GameCard from "./game-card";
import Image from "next/image";
import Link from "next/link";
// import { Separator } from "@/components/ui/separator";

const tags = Array.from({ length: 50 }).map(
  (_, i, a) => `v1.2.0-beta.${a.length - i}`
);

export default function ScrollArea1() {
  return (
    <ScrollArea>
      <div className="flex space-x-4 pb-4">
        {tags.map((tag) => (
          <div
            key={tag}
            className="w-[320px] overflow-hidden rounded-lg bg-[#EAE8F7] p-2 first:ml-4 last:mr-4"
          >
            <div className="overflow-hidden rounded-md">
              <Image
                src="/promos/promo-1.jpg"
                alt="Image"
                width={569}
                height={216}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex flex-col p-4">
              <Link href="/">
                <h3 className="font-bold">
                  Lorem ipsum dolor sit amet consectetur.
                </h3>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
}
