import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { api } from "../api/api";

const ProductDetail = () => {
  const { collectionName, productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const loadProduct = async () => {
    try {
      const res = await api.get(`/products/${productId}`);
      setProduct(res.data);
    } catch (err) {
      console.error("Error loading product:", err);
    }
    setLoading(false);
  };

  useEffect(() => {
    loadProduct();
  }, [productId]);

  if (loading) {
    return <div className="text-center py-20">Loading product...</div>;
  }

  if (!product) {
    return <div className="text-center py-20 text-gray-500">Product not found.</div>;
  }

  return (
    <div className="w-full">

      {/* BREADCRUMBS */}
      <div className="px-6 sm:px-10 md:px-16 lg:px-24 py-4 text-sm">
        <Link to="/" className="hover:underline">Home</Link>
        <span className="mx-1">/</span>
        <Link to="/collections" className="hover:underline">Collections</Link>
        <span className="mx-1">/</span>
        <Link 
          to={`/collections/${collectionName}`} 
          className="hover:underline capitalize"
        >
          {collectionName.replace(/-/g, " ")}
        </Link>
        <span className="mx-1">/</span>
        <span className="text-gray-700">{product.name}</span>
      </div>

      {/* HERO IMAGE */}
      <section
        className="w-full h-72 sm:h-96 md:h-[450px] bg-center bg-cover"
        style={{ backgroundImage: `url(${product.image})` }}
      ></section>

      {/* PRODUCT DETAILS */}
      <section className="px-6 sm:px-10 md:px-16 lg:px-24 py-12">
        <h1 className="text-2xl sm:text-3xl font-bold mb-4">{product.name}</h1>

        <p className="text-sm sm:text-base leading-relaxed mb-8" style={{ textAlign: "justify" }}>
          {product.description || "This stone material offers premium design value and excellent durability, suitable for high-end interiors and architectural installations."}
        </p>

        {/* PRODUCT INFO GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm sm:text-base">

          <div className="border rounded-lg p-4">
            <h3 className="font-semibold mb-2">Color</h3>
            <p className="text-gray-600">{product.color || "—"}</p>
          </div>

          <div className="border rounded-lg p-4">
            <h3 className="font-semibold mb-2">Finish</h3>
            <p className="text-gray-600">{product.finish || "—"}</p>
          </div>

          <div className="border rounded-lg p-4">
            <h3 className="font-semibold mb-2">Thickness</h3>
            <p className="text-gray-600">{product.thickness || "—"}</p>
          </div>

          <div className="border rounded-lg p-4">
            <h3 className="font-semibold mb-2">Origin</h3>
            <p className="text-gray-600">{product.origin || "—"}</p>
          </div>

        </div>

        {/* BACK BUTTON */}
        <div className="mt-10">
          <Link
            to={`/collections/${collectionName}`}
            className="inline-block px-5 py-2 border rounded hover:bg-gray-100 transition"
          >
            ← Back to {collectionName.replace(/-/g, " ")}
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;
