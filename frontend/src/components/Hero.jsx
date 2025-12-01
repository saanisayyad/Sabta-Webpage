import React, { useState } from "react";

import {
  Navigation,
  Pagination,
  A11y,
  Autoplay,
  EffectFade,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = [
    {
      img: "https://images.unsplash.com/photo-1763827657709-b1bbc3c4945b?q=80&w=870&auto=format&fit=crop",
      heading: "Build Your Digital Presence",
      sub: "We create modern, high-performing websites.",
      button: "Get Started"
    },
    {
      img: "https://images.unsplash.com/photo-1763827513396-5917fc6c84f3?q=80&w=870&auto=format&fit=crop",
      heading: "Grow Your Business",
      sub: "Solutions tailored for your brand.",
      button: "View Services"
    },
    {
      img: "https://images.unsplash.com/photo-1762983870490-63e5ba07105b?q=80&w=870&auto=format&fit=crop",
      heading: "Trusted by Clients",
      sub: "Delivering quality, speed & results.",
      button: "Contact Us"
    },
  ];

  return (
    <div className="w-full h-screen relative overflow-hidden">
      <Swiper
        modules={[Navigation, Pagination, A11y, Autoplay, EffectFade]}
        slidesPerView={1}
        loop={true}
        effect="fade"
        speed={800}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        fadeEffect={{ crossFade: true }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)} // ✅ Re-trigger animation
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>
            <div
  className="w-full h-screen bg-cover bg-center flex items-center 
             justify-center md:justify-start relative"
  style={{ backgroundImage: `url(${slide.img})` }}
>
  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/50"></div>

  {/* Text Block */}
  <div
    key={activeIndex}
    className="relative px-4 sm:px-6 md:pl-16 max-w-xl
               animate-fade-slide
               text-center md:text-left"
  >
    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold drop-shadow-xl leading-tight">
      {slide.heading}
    </h1>

    <p className="mt-3 text-base sm:text-lg drop-shadow-xl">
      {slide.sub}
    </p>

    <button className="mt-5 sm:mt-6 bg-(--brand-bg) text-(--brand-accent) px-5 sm:px-6 py-2.5 sm:py-3 rounded-full font-semibold hover:scale-105 transition-transform duration-300 shadow-lg">
      {slide.button}
    </button>
  </div>
</div>


          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;
