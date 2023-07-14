import Image from "next/image";
import React from "react";

const whyUs = [
  {
    id: 1,
    title: "Bayar dalam hitungan detik",
    desc: "Hanya dibutuhkan beberapa detik saja untuk menyelesaikan pembayaran di Codashop karena situs kami berfungsi dengan baik dan mudah untuk digunakan.",
    img: "why-us-1.png",
  },
  {
    id: 2,
    title: "Pengiriman instan",
    desc: "Ketika kamu melakukan top-up di Codashop, item atau barang yang kamu beli akan selalu dikirim ke akun kamu secara instan dan cepat, tanpa tertunda.",
    img: "why-us-2.png",
  },
  {
    id: 3,
    title: "Metode pembayaran terbaik",
    desc: "Kami menawarkan begitu banyak pilihan pembayaran mulai dari potong pulsa, e-wallet, bank transfer, dan pembayaran di mini market terdekat.",
    img: "why-us-3.png",
  },
  {
    id: 4,
    title: "Layanan Pelanggan Cepat & Ramah",
    desc: "Tim CS terbaik kami selalu siap membantumu kapanpun, di manapun. Hubungi kami!",
    img: "why-us-4.png",
  },
  {
    id: 5,
    title: "Promosi-promosi menarik",
    desc: "Penggemar game dapat bergantung pada Codashop karena kami memberikan penawaran menarik, diskon dan kode item dari promosi game yang disukai kamu.",
    img: "why-us-5.png",
  },
  {
    id: 6,
    title:
      "Dapatkan Lebih Banyak Keuntungan: Ikuti Program Referral Kami Sekarang!",
    desc: "Dapatkan hadiah dengan berbagi cinta! Undang teman dan dapatkan diskon 2500 IDR setelah temanmu melakukan pembelian pertama produk Topup! Kunjungi FAQ dan S&K kami untuk mempelajari lebih lanjut tentang program referral kami, dan mulailah dapatkan hadiah sekarang.",
    img: "why-us-6.png",
  },
];

const WhyUsCard = () => {
  const items = whyUs;

  return (
    <>
      {items.map((item) => (
        <div key={item.id} className="flex gap-4">
          <div className="flex aspect-square h-10 items-center justify-center rounded-full bg-[#EAE8F7] p-2">
            <Image
              src={`/icons/${item.img}`}
              alt="Image"
              width={90}
              height={90}
              className="h-6 w-6"
            />
          </div>
          <div className="flex flex-col">
            <h3 className="font-bold text-white">{item.title}</h3>
            <p className="text-sm text-white/80">{item.desc}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default WhyUsCard;
