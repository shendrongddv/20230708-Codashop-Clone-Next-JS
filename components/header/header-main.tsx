import { BellDot, Search } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";
import SidebarToggle from "./sidebar-toggle";
import { NotificationPopover } from "./notification-popover";
import Notifications from "./notifications";

const HeaderMain = () => {
  return (
    <header className="fixed left-0 top-0 z-50 w-full bg-[#280031] px-4">
      <div className="container">
        {/* Flex */}
        <div className="flex h-16 items-center justify-between">
          {/* Col Left */}
          <div className="flex items-center gap-2">
            {/* Sidebar */}
            <SidebarToggle />

            {/* Brand Logo */}
            <Link href="/">
              <Image
                src="/codashop-logo-white.png"
                alt="Codashop"
                width={636}
                height={140}
                className="h-6 w-auto md:h-8"
              />
            </Link>

            {/* Tagline */}
            <span className="line-clamp-2 hidden text-xs italic text-white opacity-75 md:flex">
              Website top-up terbesar, tercepat dan terpercaya untuk pembelian
              kredit game dan entertainment
            </span>
          </div>

          {/* Col Right */}
          <div className="flex items-center">
            <Button
              variant="outline"
              size="sm"
              className="aspect-square rounded-full border-white/0 bg-transparent p-2 text-white hover:bg-white/10 hover:text-white"
            >
              <Search className="h-5 w-5" />
            </Button>
            {/* <Button
              variant="outline"
              size="sm"
              className="aspect-square rounded-full border-white/0 bg-transparent p-2 text-white hover:bg-white/10 hover:text-white"
            >
              <BellDot className="h-5 w-5" />
            </Button> */}
            <NotificationPopover />
            {/* <Notifications /> */}
            <Button
              variant="destructive"
              size="sm"
              className="ml-2 rounded-full px-4 md:px-8"
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
