import { Noto_Sans, Nunito_Sans } from "next/font/google";
import "./globals.css";
import HeaderMain from "@/components/header/header-main";
import FooterMain from "@/components/footer/footer-main";

const fontDisplay = Nunito_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
});

const fontBody = Noto_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-body",
});

export const metadata = {
  title: "Codashop - Indonesia",
  description:
    "Beli kredit permainan, aplikasi atau voucher online menggunakan pilihan pembayaran paling mudah di Indonesia. Terkirim langsung &amp; terpercaya.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="h-full bg-[#280031] antialiased">
        <HeaderMain />
        <main>{children}</main>
        <FooterMain />
      </body>
    </html>
  );
}
