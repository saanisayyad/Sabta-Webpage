import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../api/api";

const CollectionDetail = () => {
  const { collectionName } = useParams();
  const title = collectionName.replace(/-/g, " ");

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // FILTER STATES
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

  // ⭐ TEMPORARY PRODUCT for demo
  const selectedProduct = {
    code: "8051",
    name: "CREMA MARFIL",
    description:
      "Crema Marfil is a refined stone surface known for its soft beige tones, delicate veining and timeless elegance — perfect for luxury interior spaces.",
    hero: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80",
  };

  // ⭐ DYNAMIC PROPERTIES OBJECT
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
      <section className="w-full px-6 sm:px-12 md:px-10 pt-40 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">

          {/* LEFT SIDE CONTENT */}
          <div>
            {/* Code + Subtitle in one row */}
            <div className="flex items-center gap-4 mt-2 mb-4">
              <p className="text-3xl font-semibold">{selectedProduct.code}</p>

              <div className="h-px w-12 bg-(--brand-accent)"></div>

              <p className="text-xs sm:text-sm tracking-wide uppercase">
                LASTRE IN GRES PORCELLANATO DI{" "}
                <span className="font-semibold">GRANDE MASSIMO</span>
              </p>
            </div>

            {/* Product Name */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
              {selectedProduct.name.split(" ")[0]}
              <span className="font-light ml-2">
                {selectedProduct.name.split(" ")[1]}
              </span>
            </h1>

            {/* Product Description */}
            <p className="mt-4 text-base sm:text-lg leading-relaxed max-w-lg text-justify">
              {selectedProduct.description}
            </p>
          </div>

          {/* RIGHT SIDE IMAGE */}
          <div className="w-full flex justify-center md:justify-end">
            <img
              src={selectedProduct.hero}
              alt={selectedProduct.name}
              className="
                w-auto 
                h-80 sm:h-[450px] md:h-[550px] lg:h-[650px]
                rounded shadow-lg object-cover
              "
            />
          </div>

        </div>
      </section>

      {/* Divider */}
      <section>
        <div
          className="w-full h-px mx-auto my-1 
          bg-linear-to-r from-transparent via-(--brand-accent) to-transparent"
        ></div>
      </section>

      {/* ⭐ SECTION 2 — DYNAMIC STONE PROPERTIES TABLE */}
      <section className="w-full px-6 sm:px-12 md:px-20 py-20">
        <h2 className="text-center text-2xl sm:text-3xl font-bold text-(--brand-accent) mb-20">
          Overview of Natural Stone Properties
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* LEFT SIDE — DYNAMIC TABLE */}
          <div>
            <div className="space-y-4">
              {Object.entries(stoneProperties).map(([key, value], index) => (
  <div
    key={index}
    className="grid grid-cols-2 border-b border-gray-700 pb-2"
  >
    {/* Label */}
    <span className="text-gray-300 capitalize">
      {key
        .replace(/([A-Z])/g, " $1")
        .replace(/^./, (str) => str.toUpperCase())}
    </span>

    {/* Value — starts from middle, left aligned */}
    <span className="text-(--brand-accent)">{value}</span>
  </div>
))}

            </div>
          </div>

          {/* RIGHT SIDE — IMAGE */}
          <div className="flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=327&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Stone Properties"
              className="
  w-full
  h-64 sm:h-80 md:h-[450px] lg:h-[550px] xl:h-[650px]
  object-cover
  rounded-lg shadow-xl
"

            />
          </div>

        </div>
      </section>

    </div>
  );
};

export default CollectionDetail;
