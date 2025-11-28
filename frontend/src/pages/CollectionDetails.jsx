import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../api/api";
import Filters from "../components/Filters";

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

  // ALL 12 CATEGORY CONTENT + HERO IMAGES
  const collectionContent = {
    marble: {
      hero: "https://images.unsplash.com/photo-1600573472591-ee6c8e6955d2",
      heading: "Timeless elegance carved in every surface",
      subheading:
        "The Marble Series celebrates natural luxury, showcasing flowing veins, soft gradients, and iconic stone patterns.",
      description1:
        "Known for its unmatched beauty, marble elevates interior spaces through organic artistry and refined texture.Perfect for premium architecture and high-end interiors, it delivers a sense of grandeur that never fades.",
      background: "MARBLE",
    },

    bookmatch: {
      hero: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80",
      heading: "Mirror-crafted elegance through perfect symmetry",
      subheading:
        "The Bookmatch Series creates dramatic visuals by pairing natural veins into a unified symmetrical canvas.",
      description1:
        "This artistic technique transforms any space into a statement wall of flowing stone geometry.Ideal for luxury lobbies, feature walls, and architectural masterpieces where symmetry defines beauty.",
      background: "BOOKMATCH",
    },

    onyx: {
      hero: "https://images.unsplash.com/photo-1616746110036-8af55bd5bd73?q=80",
      heading: "Striking visual illusion of permeable swirls",
      subheading:
        "The Onyx Series creates a powerful effect through smooth tonal transitions that mimic natural fluidity.",
      description1:
        "Inspired by natural Onyx stone, this series reflects elegant translucency and light-reactive textures.A symbol of opulence, Onyx enhances any premium interior with its glowing, luxurious appearance.",
      background: "ONYX",
    },

    "exotic-granite": {
      hero: "https://plus.unsplash.com/premium_photo-1700866212043-9cbf5034fb13?q=80",
      heading: "Nature’s artistry in rare expressive patterns",
      subheading:
        "The Exotic Granite Collection showcases dramatic mineral formations and unique color contrasts.",
      description1:
        "Each slab is a masterpiece formed over millions of years, delivering exceptional durability and visual power.Ideal for luxurious countertops, premium facades, and bold interior accents.",
      background: "EXOTIC GRANITE",
    },

    granite: {
      hero: "https://images.unsplash.com/photo-1550053808-52a75a05955d?q=80",
      heading: "Enduring strength shaped into timeless design",
      subheading:
        "Granite Series is engineered for resilience, combining natural toughness with modern aesthetics.",
      description1:
        "A top choice for both indoor and outdoor architectures due to its strength and versatility.Perfect for kitchens, flooring, and high-traffic spaces needing durability with elegance.",
      background: "GRANITE",
    },

    travertine: {
      hero: "https://plus.unsplash.com/premium_photo-1672735005959-e0a46dc39f74?q=80",
      heading: "Organic warmth carved from sedimented beauty",
      subheading:
        "The Travertine Series brings earthy textures and natural void patterns reminiscent of ancient architecture.",
      description1:
        "Known for its warm tones and antique charm, it creates serene spaces inspired by nature.Perfect for exterior facades, terraces, spa areas, and classical interiors.",

      background: "TRAVERTINE",
    },

    limestone: {
      hero: "https://images.unsplash.com/photo-1593305841991-05c8f49bbec8?q=80",
      heading: "Soft elegance shaped by natural time",
      subheading:
        "The Limestone Series features subtle grains and warm minimal tones that embody organic simplicity.",
      description1:
        "Its soft texture elevates minimalist and contemporary spaces with calm and harmony.Ideal for walls, flooring, and exterior architecture seeking a refined natural look.",
      background: "LIMESTONE",
    },

    sandstone: {
      hero: "https://plus.unsplash.com/premium_photo-1675838735501-2eb9b3c999a8?q=80",
      heading: "Natural desert hues sculpted by wind and time",
      subheading:
        "Sandstone Series showcases grainy textures and earthy tones inspired by natural dunes.",
      description1:
        "A versatile stone offering warm aesthetics and rustic character.Perfect for garden areas, pathways, exterior walls, and rustic interior styling.",
      background: "SANDSTONE",
    },

    slate: {
      hero: "https://images.unsplash.com/photo-1651395284328-a77bd96df726?q=80",
      heading: "Bold textures formed from ancient layers",
      subheading:
        "The Slate Series embraces matte finishes and layered mineral structures with deep character.",
      description1:
        "Its dark tones and rugged texture create modern, industrial, and luxurious atmospheres.Ideal for cladding, roofing, and interior walls that need contemporary attitude.",
      background: "SLATE",
    },

    "engineered-marble": {
      hero: "https://images.unsplash.com/photo-1632198761400-00497310f848?q=80",
      heading: "Precision-crafted finesse with marble-like detail",
      subheading:
        "Engineered Marble offers consistency, durability, and aesthetic perfection.",
      description1:
        "Created using advanced technology, it blends beauty and strength effortlessly.Best suited for countertops, bathroom interiors, and modern commercial spaces.",
      background: "ENGINEERED MARBLE",
    },

    quartz: {
      hero: "https://plus.unsplash.com/premium_photo-1672178140675-b6f2b7ff78b1?q=80",
      heading: "Refined modern surfaces built for longevity",
      subheading:
        "The Quartz Series delivers unmatched resilience with uniform textures and clean aesthetics.",
      description1:
        "Ideal for modern kitchens and workspaces due to its durability and stain resistance.A popular choice for minimalist and contemporary design themes.",
      background: "QUARTZ",
    },

    terrazzo: {
      hero: "https://images.unsplash.com/photo-1733085097221-e0f80d73c9d9?q=80",
      heading: "Artistic blend of stone fragments and modern design",
      subheading:
        "The Terrazzo Series features expressive chips fused into smooth, contemporary surfaces.",
      description1:
        "It brings vibrant texture and playful design possibilities to all spaces.Ideal for cafes, boutiques, creative studios, and statement flooring.",
      background: "TERRAZZO",
    },
  };

  const info = collectionContent[collectionName] || {};

  const sampleProducts = [
  {
    _id: "1",
    name: "Royal White Marble",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80",
  },
  {
    _id: "2",
    name: "Italian Grey Onyx",
    image: "https://images.unsplash.com/photo-1616746110036-8af55bd5bd73?q=80",
  },
  {
    _id: "3",
    name: "Golden Portoro",
    image: "https://images.unsplash.com/photo-1550053808-52a75a05955d?q=80",
  },
  {
    _id: "4",
    name: "Agate Blue Slab",
    image: "https://images.unsplash.com/photo-1600573472591-ee6c8e6955d2?q=80",
  },
  {
    _id: "5",
    name: "Brazilian Exotic Granite",
    image:
      "https://plus.unsplash.com/premium_photo-1700866212043-9cbf5034fb13?q=80",
  },
  {
    _id: "6",
    name: "White Travertine",
    image:
      "https://plus.unsplash.com/premium_photo-1672735005959-e0a46dc39f74?q=80",
  },
  {
    _id: "7",
    name: "Black Quartz Crystal",
    image:
      "https://plus.unsplash.com/premium_photo-1672178140675-b6f2b7ff78b1?q=80",
  },
  {
    _id: "8",
    name: "Grey Terrazzo",
    image:
      "https://images.unsplash.com/photo-1733085097221-e0f80d73c9d9?q=80",
  },
];

const handle3DTilt = (e) => {
  const card = e.currentTarget;

  // THROTTLE: only update every 50ms
  if (card.lastUpdate && Date.now() - card.lastUpdate < 50) return;
  card.lastUpdate = Date.now();

  const rect = card.getBoundingClientRect();
  const x = e.clientX - rect.left - rect.width / 2;
  const y = e.clientY - rect.top - rect.height / 2;

  const rotateX = (y / rect.height) * -10;
  const rotateY = (x / rect.width) * 10;

  card.style.transform = `
    perspective(900px)
    rotateX(${rotateX}deg)
    rotateY(${rotateY}deg)
    scale(1.04)
  `;
};

const resetTilt = (e) => {
  e.currentTarget.style.transform = `
    perspective(900px) rotateX(0deg) rotateY(0deg) scale(1)
  `;
};

  return (
    <div className="w-full">
      {/* HERO SECTION */}
      <section
        className="w-full h-64 sm:h-80 md:h-[380px] bg-center bg-cover relative flex items-center justify-center"
        style={{
          backgroundImage: `url("${info.hero}")`,
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <h1 className="relative z-10 font-bold text-3xl sm:text-4xl capitalize">
          {title} Series
        </h1>
      </section>

      {/* PREMIUM INTRO SECTION */}
      <section className="px-6 sm:px-10 md:px-16 lg:px-24 py-20 relative overflow-hidden ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 relative z-10">
          {/* LEFT SIDE */}
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[1px] w-12 bg-gray-400"></div>
              <p className="tracking-widest text-gray-500 text-sm">
                <span className=" font-medium"></span>
                <span className="font-bold">SABTA GRANITE</span>
              </p>
            </div>

            <h2 className="text-xl sm:text-2xl md:text-4xl leading-tight mb-6 uppercase tracking-tight text-justify">
              {info.heading}
            </h2>

            <p className="text-lg sm:text-xl font-semibold leading-relaxed text-justify">
              {info.subheading}
            </p>
          </div>

          {/* RIGHT SIDE */}
          <div>
            <p className=" text-sm sm:text-base leading-relaxed text-justify">
              {info.description1}
            </p>

            {/* <button className="self-start bg-[#E8D7C5] text-black px-6 py-3 rounded-full shadow-sm hover:shadow-md transition font-semibold tracking-wide">
              VIEW CATALOG
            </button> */}
          </div>
        </div>
      </section>
      <section className="">
        <div class="w-full">
          <p class="text-9xl font-stretch-ultra-expanded tracking-widest text-center opacity-5 select-none">
            {info.background}
          </p>
        </div>
      </section>
      {/* FILTERS */}
      <section className="py-20 px-6 sm:px-10 md:px-16 lg:px-24">
        <Filters filters={filters} setFilters={setFilters} />
      </section>

      {/* PRODUCTS GRID */}
      <section className="px-6 sm:px-10 md:px-16 lg:px-24 pb-20">
        <h2 className="text-xl sm:text-2xl font-semibold mb-6">Products</h2>

        {/* {loading && (
          <div className="text-center py-20">Loading products...</div>
        )}

        {!loading && products.length === 0 && (
          <div className="text-center py-20">
            No matching products found.
          </div>
        )}

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {products.map((p) => (
            <a
              key={p._id}
              href={`/collections/${collectionName}/${p._id}`}
              className="relative h-44 sm:h-56 md:h-64 rounded-lg overflow-hidden shadow-lg group"
            >
              <div
                className="absolute inset-0 bg-center bg-cover transition-transform duration-300 group-hover:scale-105"
                style={{ backgroundImage: `url(${p.image})` }}
              ></div>

              <div className="absolute bottom-0 w-full bg-black/70 text-white px-2 py-2">
                <p className="text-xs sm:text-sm font-medium">{p.name}</p>
              </div>
            </a>
          ))}
        </div> */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
  {sampleProducts.map((p) => (
    <div
      key={p._id}
      className="relative h-44 sm:h-56 md:h-64 rounded-lg overflow-hidden shadow-lg group"
    >
      <div
        className="absolute inset-0 bg-center bg-cover transition-transform duration-300 group-hover:scale-105"
        style={{ backgroundImage: `url(${p.image})` }}
      ></div>

      {/* Bottom label */}
      <div className="absolute bottom-0 w-full bg-black/70 text-white px-2 py-2">
        <p className="text-xs sm:text-sm font-medium">{p.name}</p>
      </div>
    </div>
  ))}
</div>

      </section>
    </div>
  );
};

export default CollectionDetail;
