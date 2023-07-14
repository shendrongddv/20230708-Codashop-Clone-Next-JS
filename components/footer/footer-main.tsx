import Image from "next/image";
import Link from "next/link";
import {
  ExternalLink,
  Facebook,
  Flag,
  Globe,
  Instagram,
  MessageSquare,
  Twitter,
  Youtube,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "../ui/button";

const links = [
  {
    id: 1,
    label: "Pemasaran & Kemitraan",
    href: "/",
  },
  {
    id: 2,
    label: "Untuk Penerbit Game",
    href: "/",
  },
  {
    id: 3,
    label: "Syarat & Ketentuan",
    href: "/",
  },
  {
    id: 4,
    label: "Kebijakan Privasi",
    href: "/",
  },
];

const FooterMain = () => {
  return (
    <footer>
      {/* Footer Top */}
      <div className="bg-[#E8F953] px-4 py-10">
        <div className="container">
          {/* Grid */}
          <div className="grid gap-8 md:grid-cols-5">
            {/* Col */}
            <div>
              <h4 className="text-lg font-bold">Butuh bantuan?</h4>
              <Link
                href="/"
                className={cn(
                  buttonVariants({ variant: "destructive", className: "mt-3" })
                )}
              >
                <MessageSquare className="mr-2 h-4 w-4" />
                Hubungi Kami
                <ExternalLink className="ml-2 h-4 w-4" />
              </Link>
            </div>
            {/* Col */}
            <div>
              <h4 className="text-lg font-bold">Area</h4>
              <Link
                href="/"
                className={cn(
                  buttonVariants({ variant: "destructive", className: "mt-3" })
                )}
              >
                <Flag className="mr-2 h-4 w-4" />
                Indonesia
                <Globe className="ml-2 h-4 w-4" />
              </Link>
            </div>
            {/* Col */}
            <div className="md:col-span-2">
              <h4 className="text-lg font-bold">Dapatkan berita Coda di:</h4>
              <div className="mt-3 flex gap-2">
                <Link
                  href="/"
                  className={cn(
                    buttonVariants({
                      variant: "outline",
                      size: "icon",
                      className: "border-transparent bg-white/50",
                    })
                  )}
                >
                  <Facebook className=" h-4 w-4" />
                </Link>
                <Link
                  href="/"
                  className={cn(
                    buttonVariants({
                      variant: "outline",
                      size: "icon",
                      className: "border-transparent bg-white/50",
                    })
                  )}
                >
                  <Youtube className=" h-4 w-4" />
                </Link>
                <Link
                  href="/"
                  className={cn(
                    buttonVariants({
                      variant: "outline",
                      size: "icon",
                      className: "border-transparent bg-white/50",
                    })
                  )}
                >
                  <Instagram className=" h-4 w-4" />
                </Link>
                <Link
                  href="/"
                  className={cn(
                    buttonVariants({
                      variant: "outline",
                      size: "icon",
                      className: "border-transparent bg-white/50",
                    })
                  )}
                >
                  <Twitter className=" h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white px-4 py-6">
        <div className="container">
          <div className="flex flex-col items-center gap-4 md:flex-row md:items-center">
            <span className="text-xs">©Hak Cipta Coda Payments</span>

            <ul className="flex flex-wrap items-center justify-center gap-x-4">
              {links.map((item) => (
                <li key={item.id}>
                  <Link href={item.href} className="text-xs hover:underline">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <Link href="/" className="md:ml-auto">
              <Image
                src="/codashop-logo-white.png"
                alt="Codashop"
                width={636}
                height={140}
                className="h-6 w-auto invert"
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterMain;
