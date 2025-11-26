import React from "react";
import Hero from "../components/Hero";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, A11y } from "swiper/modules";
import "swiper/css";
import gif from "/Sabta_Gif.webp";
import ExperienceSection from "../components/ExperienceSection";

const Home = () => {
  return (
    <div>
        {/* ✅ HERO SECTION */}
      <section data-aos="fade-up">
        <Hero />
      </section >
        {/* ✅ INTRODUCTION SECTION */}
      <section data-aos="fade-up">
        <div className="w-[90%] container mx-auto py-16 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="justify-between">
              <h2
                className="text-4xl font-bold mb-4"
                style={{ textAlign: "justify" }}
              >
                Why Sabta Granite Is the UAE’s Trusted Choice for Premium Marble
                and Natural Stone
              </h2>
              <p
                className="mb-6"
                style={{ textAlign: "justify" }}
              >
                Marble brings a sense of luxury, elegance and lasting beauty to
                any space. At Sabta Granite, we supply a wide range of natural
                and engineered surfaces to projects across the UAE. Our
                collection includes handpicked marble, exotic granite, onyx,
                travertine, limestone, engineered marble, quartz and terrazzo.
                Each product is selected for quality, durability and visual
                impact. With long experience in the industry, we support
                architects, designers and homeowners who want reliable materials
                and a smooth project experience.
              </p>
            </div>
          </div>
          <div>
            <img
              src="https://plus.unsplash.com/premium_photo-1670076513880-f58e3c377903?q=80&w=718&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
        </div>
      </section>
      {/* ✅ COMPACT POINTS LIST */}
      <section data-aos="fade-up" className="w-full px-4 sm:px-6 md:px-12 lg:px-20 py-8">
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-y-2 gap-x-6 text-sm sm:text-base leading-snug">
          <li>• Natural Beauty Preserved</li>
          <li>• Geological Elegance</li>
          <li>• Luxury Marble Selection</li>
          <li>• Exotic Granite Collection</li>
          <li>• Bookmatch Designs</li>
          <li>• Engineered Marble Solutions</li>
          <li>• Quality Beyond Expectations</li>
          <li>• Premium Quartz Surfaces</li>
          <li>• Terrazzo Collections for Modern Interiors</li>
          <li>• Unmatched Variety and Premium Finishes</li>
          <li>• Trusted Stone Supplier in UAE</li>
          <li>• Fast Delivery and Installation Support</li>
          <li>
            • Materials Suitable for Villas, Hotels, Retail, Hospitality &
            Commercial Projects
          </li>
        </ul>
      </section>
        {/* ✅ COLLECTIONS CAROUSEL */}
      <section data-aos="fade-up" className="w-full px-4 sm:px-6 md:px-12 lg:px-20 py-12">
        <h2 className="text-2xl sm:text-4xl font-bold text-center mb-8">
          Our Collections
        </h2>

        <Swiper
          modules={[Autoplay, Pagination, A11y]}
          spaceBetween={16}
          loop={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            reverseDirection: false,
            pauseOnMouseEnter: true,
          }}
          speed={4000}
          slidesPerView={2}
          breakpoints={{
            640: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 5 },
          }}
        >
          {[
            {
              name: "Marble",
              img: "https://plus.unsplash.com/premium_photo-1671410372744-989627ea0033?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            },
            {
              name: "Bookmatch",
              img: "https://plus.unsplash.com/premium_photo-1706912790323-47f462724b4b?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            },
            {
              name: "Onyx",
              img: "https://images.unsplash.com/photo-1616746110036-8af55bd5bd73?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            },
            {
              name: "Exotic Granite",
              img: "https://plus.unsplash.com/premium_photo-1700866212043-9cbf5034fb13?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            },
            {
              name: "Granite",
              img: "https://images.unsplash.com/photo-1550053808-52a75a05955d?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            },
            {
              name: "Travertine",
              img: "https://plus.unsplash.com/premium_photo-1672735005959-e0a46dc39f74?q=80&w=391&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            },
            {
              name: "Limestone",
              img: "https://images.unsplash.com/photo-1554296048-b59c9fca4857?q=80&w=889&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            },
            {
              name: "Sandstone",
              img: "https://plus.unsplash.com/premium_photo-1675838735501-2eb9b3c999a8?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            },
            {
              name: "Slate",
              img: "https://images.unsplash.com/photo-1651395284328-a77bd96df726?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            },
            {
              name: "Quartzite",
              img: "https://images.unsplash.com/photo-1584403293325-756fc1786516?q=80&w=388&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            },
            {
              name: "Engineered Marble",
              img: "https://images.unsplash.com/photo-1632198761400-00497310f848?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            },
            {
              name: "Quartz",
              img: "https://plus.unsplash.com/premium_photo-1672178140675-b6f2b7ff78b1?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            },
            {
              name: "Terrazzo",
              img: "https://images.unsplash.com/photo-1733085097221-e0f80d73c9d9?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            },
          ].map((item, index) => (
            <SwiperSlide key={index}>
              <div className="group cursor-pointer rounded-lg overflow-hidden relative h-70">
                {/* ✅ BLACK GLASS BOTTOM OVERLAY */}
                <div
                  className="
                        absolute bottom-0 left-0 w-full h-12
                        bg-black/60
                        transition-all duration-300
                        "
                ></div>

                {/* ✅ FULL IMAGE */}
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* ✅ GOLD RISING BACKGROUND */}
                <div
                  className="
            absolute inset-0 bg-gradient-to-t from-[var(--brand-bg)] to-transparent 
            opacity-0 group-hover:opacity-100
            translate-y-full group-hover:translate-y-0
            transition-all duration-500
          "
                ></div>

                {/* ✅ NAME */}
                <div className="absolute bottom-0 w-full text-center py-3 text-white font-semibold text-sm sm:text-base">
                  {item.name}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
      {/* ✅ WHY CHOOSE SABTA SECTION */}
      <section data-aos="fade-up" className="w-full px-4 sm:px-6 md:px-12 lg:px-20 py-16">
        {/* Heading */}
        <h2 className="text-2xl sm:text-4xl font-bold text-center mb-12">
          Why Choose Sabta Granite
        </h2>

        {/* Tiles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* ✅ Tile 1 */}
          <div
            className="
      border rounded-lg p-6 
      shadow-sm hover:shadow-md
      transition-all duration-300
      hover:-translate-y-1
      flex flex-col justify-between h-full
    "
          >
            <div className="space-y-3 text-center">
              <h3 className="text-xl font-semibold">Unmatched Selection</h3>
              <p
                className="leading-relaxed"
                style={{ textAlign: "justify" }}
              >
                Extensive range of Natural and Engineered Stones, Including
                Granite, Marble, Onyx, Limestone, Travertine, Engineered Marble,
                Quartz, and Terrazzo, to suit any design vision.
              </p>
            </div>
          </div>

          {/* ✅ Tile 2 */}
          <div
            className="
      border rounded-lg p-6 
      shadow-sm hover:shadow-md
      transition-all duration-300
      hover:-translate-y-1
      flex flex-col justify-between h-full
    "
          >
            <div className="space-y-3 text-center">
              <h3 className="text-xl font-semibold">Superior Quality</h3>
              <p
                className="leading-relaxed"
                style={{ textAlign: "justify" }}
              >
                We partner with trusted quarries worldwide to provide materials
                known for their strength, consistency, and lasting beauty.
              </p>
            </div>
          </div>

          {/* ✅ Tile 3 */}
          <div
            className="
      border rounded-lg p-6 
      shadow-sm hover:shadow-md
      transition-all duration-300
      hover:-translate-y-1
      flex flex-col justify-between h-full
    "
          >
            <div className="space-y-3 text-center">
              <h3 className="text-xl font-semibold">Expert Craftsmanship</h3>
              <p
                className="leading-relaxed"
                style={{ textAlign: "justify" }}
              >
                Our craftsmen work with precision at every stage. Your stone is
                fabricated and finished with care to deliver a clean, seamless
                result.
              </p>
            </div>
          </div>

          {/* ✅ Tile 4 */}
          <div
            className="
      border rounded-lg p-6 
      shadow-sm hover:shadow-md
      transition-all duration-300
      hover:-translate-y-1
      flex flex-col justify-between h-full
    "
          >
            <div className="space-y-3 text-center">
              <h3 className="text-xl font-semibold">Exceptional Service</h3>
              <p
                className="leading-relaxed"
                style={{ textAlign: "justify" }}
              >
                From selecting the right material to final installation, our
                team is with you at every step. We keep the process clear,
                smooth, and tailored to your needs.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* ✅ GIF SECTION */}
      <section data-aos="fade-up" className="w-[90%] mx-auto py-16 flex justify-center">
        <img src={gif} alt="Sabta GIF" className="max-w-full h-auto" />
      </section>
    <section>
        <ExperienceSection/>
    </section>
    </div>
  );
};

export default Home;
