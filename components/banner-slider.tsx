"use client";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// Import required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";

// Components
import BannerCard from "./banner-card";

const banners = [
  {
    id: 1,
    title: "Banner 1",
    img: "banner-1.jpg",
  },
  {
    id: 2,
    title: "Banner 2",
    img: "banner-2.jpg",
  },
  {
    id: 3,
    title: "Banner 3",
    img: "banner-3.jpg",
  },
  {
    id: 4,
    title: "Banner 4",
    img: "banner-4.jpg",
  },
  {
    id: 5,
    title: "Banner 5",
    img: "banner-5.jpg",
  },
  {
    id: 6,
    title: "Banner 6",
    img: "banner-6.jpg",
  },
  {
    id: 7,
    title: "Banner 7",
    img: "banner-7.jpg",
  },
  {
    id: 8,
    title: "Banner 8",
    img: "banner-8.jpg",
  },
  {
    id: 9,
    title: "Banner 9",
    img: "banner-9.jpg",
  },
  {
    id: 10,
    title: "Banner 10",
    img: "banner-10.jpg",
  },
];

const BannerSlider = () => {
  const items = banners;

  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      loop={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      // navigation
      pagination={{ clickable: true }}
      breakpoints={{
        640: {
          slidesPerView: 1,
          spaceBetween: 0,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 16,
        },
        1024: {
          slidesPerView: 2,
          spaceBetween: 16,
        },
      }}
    >
      {items?.map((item) => (
        <SwiperSlide key={item.id} className="lg">
          <BannerCard title={item.title} img={item.img} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default BannerSlider;
