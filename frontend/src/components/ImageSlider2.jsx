import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { RxDoubleArrowRight, RxDoubleArrowLeft } from "react-icons/rx";
import { IoCloseOutline } from "react-icons/io5";

import Slab1 from "../assets/BannerImages/Exotic-Granite.jpeg";
import Slab2 from "../assets/BannerImages/Marble1.jpeg";
import Slab3 from "../assets/BannerImages/Granite.jpeg";
import Slab4 from "../assets/BannerImages/Onyx.jpeg";
import Slab5 from "../assets/BannerImages/Travertine.jpeg";

const ImageSlider2 = () => {
  const images = [Slab1, Slab2, Slab3, Slab4, Slab5];

  const [popupOpen, setPopupOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setPopupOpen(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <>
      <div className="relative">
        <button className="prev-main absolute left-2 top-1/2 -translate-y-1/2 z-20 
                           bg-(--brand-bg) rounded-full p-1">
          <RxDoubleArrowLeft size={30} />
        </button>

        <button className="next-main absolute right-2 top-1/2 -translate-y-1/2 z-20 
                           bg-(--brand-bg) rounded-full p-1">
          <RxDoubleArrowRight size={30} />
        </button>

        <Swiper
          loop={true}
          modules={[Navigation]}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = ".prev-main";
            swiper.params.navigation.nextEl = ".next-main";
          }}
          navigation={{
            prevEl: ".prev-main",
            nextEl: ".next-main",
          }}
        >
          {images.map((img, i) => (
            <SwiperSlide key={i}>
              <img
                src={img}
                onClick={() => {
                  setActiveIndex(i);
                  setPopupOpen(true);
                }}
                className="
                  flex justify-center aspect-4/3 w-full
                "
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {popupOpen && (
        <div
          className="fixed inset-0 bg-black/80 flex justify-center items-center z-50"
          onClick={() => setPopupOpen(false)}
        >
          <div
            className="relative w-[95%] max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setPopupOpen(false)}
              className="absolute top-3 right-3 z-30 
                         text-3xl 
                         bg-(--brand-bg) rounded-full 
                         w-8 h-8 flex items-center justify-center"
            >
              <IoCloseOutline />
            </button>

            <button
              className="prev-popup absolute left-3 top-1/2 -translate-y-1/2 z-30 
                         bg-(--brand-bg) rounded-full p-2"
            >
              <RxDoubleArrowLeft size={22} />
            </button>

            <button
              className="next-popup absolute right-3 top-1/2 -translate-y-1/2 z-30 
                         bg-(--brand-bg) rounded-full p-2"
            >
              <RxDoubleArrowRight size={22} />
            </button>

            <Swiper
              loop={true}
              initialSlide={activeIndex}
              modules={[Navigation]}
              onBeforeInit={(swiper) => {
                swiper.params.navigation.prevEl = ".prev-popup";
                swiper.params.navigation.nextEl = ".next-popup";
              }}
              navigation={{
                prevEl: ".prev-popup",
                nextEl: ".next-popup",
              }}
            >
              {images.map((img, i) => (
                <SwiperSlide key={i}>
                  <img
                    src={img}
                    className="
                      w-full 
                      h-[80vh]
                      object-contain 
                      mx-auto rounded-lg shadow-xl
                    "
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      )}
    </>
  );
};

export default ImageSlider2;
