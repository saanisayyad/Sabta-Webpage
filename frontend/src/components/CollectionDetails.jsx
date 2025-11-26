import { useParams } from "react-router-dom";

const CollectionDetail = () => {
  const { collectionName } = useParams();

  // ✅ Convert URL slug back to readable text
  const title = collectionName.replace(/-/g, " ");

  return (
    <div className="w-full px-6 sm:px-10 md:px-16 lg:px-24 py-16">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6 capitalize">
        {title}
      </h1>

      <p className="text-sm leading-relaxed" style={{ textAlign: "justify" }}>
        Collection details, images, and products for {title} will appear here.
      </p>
    </div>
  );
};

export default CollectionDetail;
