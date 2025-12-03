import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { RxDoubleArrowRight, RxDoubleArrowLeft } from "react-icons/rx";

const ImageSlider = () => {
  const images = [
    "https://images.unsplash.com/photo-1618220179428-22790b461013?q=80",
    "https://plus.unsplash.com/premium_photo-1678074057896-eee996d4a23e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80",
  ];

  const [popupOpen, setPopupOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      {/* ---------- MAIN SLIDER ---------- */}
      <div className="relative">
        {/* CUSTOM ARROWS MUST COME BEFORE SWIPER */}
        <button className="prev-main absolute left-2 top-1/2 -translate-y-1/2 z-20 
                   bg-(--brand-bg) rounded-full p-1 ">
          <RxDoubleArrowLeft  size={30} />
        </button>

        <button className="next-main absolute right-2 top-1/2 -translate-y-1/2 z-20 
                   bg-(--brand-bg) rounded-full p-1 ">
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
                className="w-full h-64 sm:h-80 md:h-[360px] lg:h-[416px]
                           object-cover rounded-lg shadow-xl cursor-pointer"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* ---------- POPUP SLIDER ---------- */}
      {popupOpen && (
        <div
          className="fixed inset-0 bg-black/80 flex justify-center items-center z-50"
          onClick={() => setPopupOpen(false)}
        >
          <div
            className="relative w-[90%] max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* POPUP ARROWS MUST BE BEFORE SWIPER */}
            <button className="prev-popup absolute left-2 top-1/2 -translate-y-1/2 z-20 
                   bg-(--brand-bg) rounded-full p-1">
              <RxDoubleArrowLeft size={30} />
            </button>

            <button className="next-popup absolute right-2 top-1/2 -translate-y-1/2 z-20 
                   bg-(--brand-bg) rounded-full p-1">
              <RxDoubleArrowRight size={30} />
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
                    className="w-full h-64 sm:h-80 md:h-[360px] lg:h-[416px]
                               object-cover rounded-lg shadow-xl"
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

export default ImageSlider;
