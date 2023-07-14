import { BellDot, Search } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";
import SidebarToggle from "./sidebar-toggle";

const HeaderMain = () => {
  return (
    <header className="fixed left-0 top-0 w-full border-b border-white/25 bg-[#3C1F42] px-4">
      <div className="container">
        {/* Flex */}
        <div className="flex h-16 items-center justify-between">
          {/* Col Left */}
          <div className="flex gap-2">
            {/* Sidebar */}
            <SidebarToggle />

            {/* Brand Logo */}
            <Link href="/">
              <Image
                src="/codashop-logo-white.png"
                alt="Codashop"
                width={636}
                height={140}
                className="h-9 w-auto"
              />
            </Link>

            {/* Tagline */}
            <span className="line-clamp-2 hidden text-xs italic text-white opacity-75 md:flex md:w-1/2">
              Website top-up terbesar, tercepat dan terpercaya untuk pembelian
              kredit game dan entertainment
            </span>
          </div>

          {/* Col Right */}
          <div className="flex gap-0.5 md:gap-2">
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full p-2 hover:bg-white/25"
            >
              <Search className="h-6 w-6 text-white" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full p-2 hover:bg-white/25"
            >
              <BellDot className="h-6 w-6 text-white" />
            </Button>
            <Button
              variant="destructive"
              className="rounded-full max-md:ml-2 md:px-8"
            >
              Daftar
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderMain;
