import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Slider() {
  const slides = [
    {
      id: 1,
      img: "https://images.unsplash.com/photo-1561081967-6b24b7723105?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1514",
      title: "Experience the Best Games",
      desc: "Discover trending games and play with friends around the world.",
    },
    {
      id: 2,
      img: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
      title: "Epic Adventures Await",
      desc: "Dive into open worlds and create your own legend.",
    },
    {
      id: 3,
      img: "https://images.unsplash.com/photo-1581140572703-b8c1a6913062?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
      title: "Battle Royale Madness",
      desc: "Join millions of players and fight for victory.",
    },
    {
      id: 4,
      img: "https://images.unsplash.com/photo-1570498839593-e565b39455fc?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=735",
      title: "Strategy & Skill",
      desc: "Plan, attack, and dominate every match.",
    },
    {
      id: 5,
      img: "https://images.unsplash.com/photo-1593642532973-d31b6557fa68?auto=format&fit=crop&w=1500&q=80",
      title: "Your Gaming Community",
      desc: "Connect, share, and play with passionate gamers.",
    },
  ];

  return (
    <div className="w-fullmx-auto">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper  overflow-hidden"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="relative w-full h-[55vh] flex items-center justify-center text-center text-white"
              style={{
                backgroundImage: `url(${slide.img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-black/50"></div>
              <div className="relative z-10 px-6 md:px-10">
                <h2 className="text-3xl md:text-5xl font-extrabold mb-3 drop-shadow-lg">
                  {slide.title}
                </h2>
                <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
                  {slide.desc}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
