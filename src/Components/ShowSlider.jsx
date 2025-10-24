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
      img: "https://media.craiyon.com/2025-07-28/_8I53Ta7R8GB2m5nIqgrhA.webp",
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
      img: "https://play-lh.googleusercontent.com/OwV95HiCytWggRHveNzWVpbHm2jkcSIhtATjs-oGVUQvF9pGd5aG6cdMxxFrvU4RCA=w1052-h592-rw",
      title: "Spider action-packed quest for saving the city ",
      desc: "Dynamic and ever-changing visuals born from mathematical precision",
    },
    {
      id: 5,
      img: "https://images.unsplash.com/photo-1570498839593-e565b39455fc?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=735",
      title: "Strategy & Skill",
      desc: "Plan, attack, and dominate every match.",
    },
    {
      id: 6,
      img: "https://play-lh.googleusercontent.com/Vz1GyRLX-Io3v7pWPGfHDmu2agppMbn6QxszezFiuPd6VArIN0ujGRhYM8JzARIUCw=w1052-h592-rw",
      title: "Game Universe",
      desc: "Dive into immersive worlds where art, logic, and adventure collide.",
    },
    {
      id: 7,
      img: "https://images.pexels.com/photos/27697577/pexels-photo-27697577.jpeg",
      title: "Your Gaming Community",
      desc: "Connect, share, and play with passionate gamers.",
    },
    {
      id: 8,
      img: "https://www.techjuice.pk/wp-content/uploads/2025/08/pubg-mobile-4-0-launches-ghost-mode-haunted-mansion-broom-travel-techjuice-187149-090431-e1754471083254.jpg",
      title: "Digital Motion",
      desc: "Smooth transitions and vibrant animations that feel alive and responsive.",
    },
    {
      id: 9,
      img: "https://preview.redd.it/due-to-an-issue-fortnite-battle-royale-will-be-shutting-v0-mmlb7ymrhbra1.jpg?width=1080&crop=smart&auto=webp&s=253dc28ab1378a107d5e2f4b2156a5b46f16a3bc",
      title: "Abstract Realms",
      desc: "A perfect fusion of colors, movement, and imagination for the creative sou",
    },
  ];


  return (
    <div className="w-fullmx-auto">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{delay: 1500,disableOnInteraction: false,}}
        pagination={{clickable: true,}}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper  overflow-hidden">
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-[50vh] lg:h-[77vh] flex items-center justify-center text-center text-white" style={{ backgroundImage: `url(${slide.img})`, backgroundSize: "cover", backgroundPosition: "center"}}>
              <div className="absolute inset-0 bg-black/50"></div>
              <div className="relative z-10 px-6 md:px-10">
                <h2 className="text-3xl md:text-5xl font-extrabold mb-3 drop-shadow-lg">{slide.title}</h2>
                <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">{slide.desc}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
