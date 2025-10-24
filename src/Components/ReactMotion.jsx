import React, { useLayoutEffect, useState } from "react";
import {
  useSpringRef,
  animated,
  useTransition,
  useSpring,
} from "@react-spring/web";

const IMAGES = [
  "https://images.ft.com/v3/image/raw/ftcms%3A2ff8eb3e-55fe-11e9-8b71-f5b0066105fe?source=next-article&fit=scale-down&quality=highest&width=700&dpr=2",
  "https://i.pinimg.com/736x/03/c1/62/03c1626f27a3a92dc1c45fc0a3598d7d.jpg",
  "https://play-lh.googleusercontent.com/lBgjKytCe_lTRz2hO5POS6WpQkys0UDTDKyJu3a7BLaFafd4FeEplY5UhPe62yp9j7M7-f0hdVYHQtSkxepWTQ=w1052-h592-rw",
  "https://media.gq.com/photos/5ab3f84b40624b55cc7f3bf6/16:9/w_1920,c_limit/fortnite.jpeg",
  "https://images.pexels.com/photos/14504324/pexels-photo-14504324.jpeg",
  "https://images.pexels.com/photos/30180753/pexels-photo-30180753.jpeg",
  "https://i.pinimg.com/736x/d0/32/9b/d0329bf6417830d8ddec9950ec70b02d.jpg",
];

const ReactMotion = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const springApi = useSpringRef();

  const transitions = useTransition(activeIndex, {
    from: { clipPath: "polygon(0% 0%, 0% 100%, 0% 100%, 0% 0%)" },
    enter: { clipPath: "polygon(0% 0%, 0% 100%, 100% 100%, 100% 0%)" },
    leave: { clipPath: "polygon(100% 0%, 100% 100%, 100% 100%, 100% 0%)" },
    onRest: (_springs, _ctrl, item) => {
      if (activeIndex === item) {setActiveIndex(activeIndex === IMAGES.length - 1 ? 0 : activeIndex + 1);}
    },
    exitBeforeEnter: true,
    config: { duration: 3000 },
    delay: 1000,
    ref: springApi,
  });

  const springs = useSpring({
    from: { strokeDashoffset: 120 },
    to: { strokeDashoffset: 0 },
    config: { duration: 11000 },
    loop: true,
    ref: springApi,
  });

  useLayoutEffect(() => {
    springApi.start();
  }, [activeIndex]);

  return (
    <div className="relative w-full min-h-screen flex flex-col justify-center items-center overflow-hidden px-4 sm:px-6 lg:px-8 bg-white">
      {/* Image Container */}
      <div className="relative w-full max-w-5xl h-[250px] sm:h-[350px] md:h-[450px] lg:h-[500px] overflow-hidden rounded-2xl shadow-2xl">
        {transitions((styles, item) => (
          <animated.div className="absolute inset-0 w-full h-full" style={styles}>
            <img src={IMAGES[item]} alt={`Slide ${item}`} className="w-full h-full object-cover"/>
          </animated.div>
        ))}

        {/* Animated border ticker */}
        <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 flex items-center justify-center">
          <animated.svg width="24" height="24" viewBox="0 0 60 60" style={springs} className="stroke-[#58a6ff] fill-none stroke-[3px] sm:stroke-[4px]">
            <path d="M19.9999 38.5001C17.5704 38.5001 15.1648 38.0216 12.9203 37.0919C10.6758 36.1622 8.63633 34.7995 6.91845 33.0816C5.20058 31.3638 3.83788 29.3243 2.90817 27.0798C1.97846 24.8353 1.49995 22.4296 1.49995 20.0002C1.49995 17.5707 1.97846 15.1651 2.90817 12.9206C3.83788 10.6761 5.20058 8.63663 6.91846 6.91875C8.63634 5.20087 10.6758 3.83818 12.9203 2.90847C15.1648 1.97876 17.5705 1.50024 19.9999 1.50024C22.4293 1.50024 24.835 1.97876 27.0795 2.90847C29.324 3.83818 31.3635 5.20088 33.0813 6.91876C34.7992 8.63663 36.1619 10.6761 37.0916 12.9206C38.0213 15.1651 38.4998 17.5707 38.4998 20.0002C38.4998 22.4296 38.0213 24.8353 37.0916 27.0798C36.1619 29.3243 34.7992 31.3638 33.0813 33.0816C31.3635 34.7995 29.324 36.1622 27.0795 37.0919C24.835 38.0216 22.4293 38.5001 19.9999 38.5001Z" />
          </animated.svg>
        </div>
      </div>

      {/* Text Section */}
      <p className="text-gray-800 text-base sm:text-lg md:text-xl mt-6 max-w-2xl text-center leading-relaxed px-2">
        At{" "}
        <span className="text-[#58a6ff] font-semibold">GameZone</span>, we blend
        creativity and technology to bring you stunning generative visuals and
        the ultimate gaming experience. Dive into art, motion, and fun!
      </p>
    </div>
  );
};

export default ReactMotion;
