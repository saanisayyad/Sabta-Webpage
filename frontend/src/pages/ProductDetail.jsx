import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { api } from "../api/api";
import ImageSlider from "../components/ImageSlider";
import ProductPageImage from "../assets/ProductImages/ProductPageImage.jpeg";
import ProductLastImage from "../assets/ProductImages/ProductLastImage.jpeg";



const CollectionDetail = () => {
  const { collectionName } = useParams();
  const title = collectionName.replace(/-/g, " ");

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const [popupImage, setPopupImage] = useState(null);


  const [filters, setFilters] = useState({
    color: "",
    finish: "",
  });


  const loadProducts = async () => {
    try {
      const params = new URLSearchParams({
        category: collectionName,
        color: filters.color,
        finish: filters.finish,
      });

      const res = await api.get(`/products?${params.toString()}`);
      setProducts(res.data);
    } catch (err) {
      console.error("Error loading products:", err);
    }
    setLoading(false);
  };

  useEffect(() => {
    loadProducts();
  }, [collectionName, filters]);

  const selectedProduct = {
    code: "8051",
    name: "CREMA MARFIL",
    description:
      "Crema Marfil is a refined stone surface known for its soft beige tones, delicate veining and timeless elegance — perfect for luxury interior spaces.",
    hero: ProductPageImage,
  };

  const stoneProperties = {
    origin: "Brazil",
    grade: "Premium / Export Grade",
    compressionStrength: "153 MPa",
    impactTest: "Not Published",
    bulkDensity: "2,635 kg/m³",
    waterAbsorption: "0.2–0.25%",
    thermalExpansion: "Very Low / High Stability",
    flexuralStrength: "11.40 MPa",
  };

  return (
    <div className="w-full">
      {/* ⭐ SECTION 1 — PRODUCT INTRO */}
      <section className="w-full px-6 sm:px-12 md:px-20 pt-40 pb-20">
  <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">

    {/* LEFT TEXT = 5 columns */}
    <div className="md:col-span-5">
      <div className="flex items-center gap-4 mt-2 mb-4">
        <p className="text-3xl font-semibold">{selectedProduct.code}</p>
        <div className="h-px w-12 bg-(--brand-accent)"></div>
        <p className="text-xs sm:text-sm tracking-wide uppercase">
          LASTRE IN GRES PORCELLANATO DI{" "}
          <span className="font-semibold">GRANDE MASSIMO</span>
        </p>
      </div>

      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
        {selectedProduct.name}
      </h1>

      <p className="mt-4 text-base sm:text-lg leading-relaxed max-w-lg text-justify">
        {selectedProduct.description}
      </p>
    </div>

    {/* RIGHT IMAGE = 7 columns */}
    <div className="md:col-span-7 flex justify-center">
      <img
        src={selectedProduct.hero}
        alt={selectedProduct.name}
        className="w-full h-64 sm:h-80 md:h-[360px] lg:h-[416px] object-cover rounded-lg shadow-xl"
      />
    </div>
  </div>
</section>

      {/* Divider */}
      <section>
        <div className="w-full h-px mx-auto my-1 bg-linear-to-r from-transparent via-(--brand-accent) to-transparent"></div>
      </section>

      {/* ⭐ SECTION 2 — STONE PROPERTIES + SLIDER */}
      <section className="w-full px-6 sm:px-12 md:px-20 py-20">
        <h2 className="text-center text-2xl sm:text-3xl font-bold text-(--brand-accent) mb-20">
          Overview of Natural Stone Properties
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">

          {/* LEFT SIDE TABLE */}
          <div className="space-y-4 md:col-span-5">
            {Object.entries(stoneProperties).map(([key, value], idx) => (
              <div key={idx} className="grid grid-cols-2 border-b border-gray-700 pb-2">
                <span className="text-gray-300 capitalize">
                  {key.replace(/([A-Z])/g, " $1").replace(/^./, (str) => str.toUpperCase())}
                </span>
                <span className="text-(--brand-accent)">{value}</span>
              </div>
            ))}
          </div>

          {/* ⭐ RIGHT SIDE — IMAGE SLIDER WITH TAILWIND ARROW COLORS */}
          <div className="md:col-span-7">
            <ImageSlider/>
          </div>
        </div>
      </section>
<section>
        <div className="w-full h-px mx-auto my-1 bg-linear-to-r from-transparent via-(--brand-accent) to-transparent"></div>
      </section>
      {/* ⭐ SECTION 3 — IMAGE LEFT, HEADING RIGHT */}
      <section className="w-full px-6 sm:px-12 md:px-20 py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">

          <div className="md:col-span-7 flex justify-center">
            <img
              src={ProductLastImage}
              className="w-full h-64 sm:h-80 md:h-[360px] lg:h-[416px] object-cover rounded-lg shadow-xl"
            />
          </div>

          <div className="md:col-span-5">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-(--brand-accent) opacity-10 text-center">
              Exceptional Quality You Can Trust
            </h2>
          </div>

        </div>
      </section>
    </div>
  );
};

export default CollectionDetail;
