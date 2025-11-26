import { Link } from "react-router-dom";

const Collections = () => {
  const categories = [
    {
      name: "Marble",
      img: "https://plus.unsplash.com/premium_photo-1671410372744-989627ea0033?q=80&w=387&auto=format&fit=crop",
    },
    {
      name: "Bookmatch",
      img: "https://plus.unsplash.com/premium_photo-1706912790323-47f462724b4b?q=80&w=871&auto=format&fit=crop",
    },
    {
      name: "Onyx",
      img: "https://images.unsplash.com/photo-1616746110036-8af55bd5bd73?q=80&w=387&auto=format&fit=crop",
    },
    {
      name: "Exotic Granite",
      img: "https://plus.unsplash.com/premium_photo-1700866212043-9cbf5034fb13?q=80&w=387&auto=format&fit=crop",
    },
    {
      name: "Granite",
      img: "https://images.unsplash.com/photo-1550053808-52a75a05955d?q=80&w=387&auto=format&fit=crop",
    },
    {
      name: "Travertine",
      img: "https://plus.unsplash.com/premium_photo-1672735005959-e0a46dc39f74?q=80&w=391&auto=format&fit=crop",
    },
    {
      name: "Limestone",
      img: "https://images.unsplash.com/photo-1593305841991-05c8f49bbec8?q=80&w=889&auto=format&fit=crop",
    },
    {
      name: "Sandstone",
      img: "https://plus.unsplash.com/premium_photo-1675838735501-2eb9b3c999a8?q=80&w=387&auto=format&fit=crop",
    },
    {
      name: "Slate",
      img: "https://images.unsplash.com/photo-1651395284328-a77bd96df726?q=80&w=870&auto=format&fit=crop",
    },
    {
      name: "Engineered Marble",
      img: "https://images.unsplash.com/photo-1632198761400-00497310f848?q=80&w=870&auto=format&fit=crop",
    },
    {
      name: "Quartz",
      img: "https://plus.unsplash.com/premium_photo-1672178140675-b6f2b7ff78b1?q=80&w=870&auto=format&fit=crop",
    },
    {
      name: "Terrazzo",
      img: "https://images.unsplash.com/photo-1733085097221-e0f80d73c9d9?q=80&w=870&auto=format&fit=crop",
    },
  ];

  return (
    <div>
      {/* ✅ COLLECTIONS BANNER */}
      <section
        data-aos="fade-up"
        className="w-full h-64 sm:h-80 md:h-[400px] bg-fixed bg-center bg-cover relative flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=870&auto=format&fit=crop')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold relative z-10">
          Collections
        </h1>
      </section>
      {/* ✅ TILE GRID SECTION */}
      <section
        className="w-full px-6 sm:px-10 md:px-16 lg:px-24 py-16"
        data-aos="fade-up"
      >
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-10">
          {categories.map((cat, index) => (
            <Link
              key={index}
              to={`/collections/${cat.name.toLowerCase().replace(/\s+/g, "-")}`}
            >
              <div
                className="
      relative h-48 sm:h-64 md:h-72
      rounded-xl overflow-hidden
      bg-black
      shadow-[0_20px_45px_rgba(0,0,0,0.55)]
      transition-all duration-500
      [clip-path:polygon(8%_0%,100%_0%,92%_100%,0%_100%)]
      cursor-pointer
      transform-gpu
      group
    "
                onMouseMove={(e) => {
                  const card = e.currentTarget;
                  const rect = card.getBoundingClientRect();
                  const x = e.clientX - rect.left;
                  const y = e.clientY - rect.top;
                  const rotateY = (x / rect.width - 0.5) * 10;
                  const rotateX = -(y / rect.height - 0.5) * 10;
                  card.style.transform = `
        perspective(1200px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        scale(1.06)
        translateY(-10px)
      `;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform =
                    "perspective(1200px) rotateX(0deg) rotateY(0deg) scale(1)";
                }}
              >
                {/* ✅ MAIN IMAGE */}
                <div
                  className="
        absolute inset-0 bg-center bg-cover
        transition-all duration-700
        group-hover:scale-110
      "
                  style={{ backgroundImage: `url(${cat.img})` }}
                ></div>

                {/* ✅ SIDE EDGE THICKNESS */}
                <div
                  className="
        absolute right-0 top-0 h-full w-3
        bg-black/60
        translate-x-1
        blur-[1px]
        opacity-70
      "
                ></div>

                {/* ✅ TOP EDGE HIGHLIGHT */}
                <div
                  className="
        absolute top-0 left-0 w-full h-2
        bg-white/10
      "
                ></div>

                {/* ✅ LOOPING REFLECTION SHIMMER */}
                <div
                  className="
        absolute inset-0 bg-gradient-to-r
    from-transparent via-white/10 to-transparent
    skew-x-12 pointer-events-none
    shine-loop
      "
                  style={{
                    maskImage:
                      "linear-gradient(90deg, transparent, black, transparent)",
                  }}
                ></div>

                {/* ✅ GLOSS SWEEP ON HOVER */}
                <div
                  className="
        absolute inset-0
        bg-gradient-to-r from-white/5 via-white/30 to-transparent
        translate-x-[-150%]
        group-hover:translate-x-[150%]
        transition-all duration-700 ease-out
        skew-x-12
      "
                ></div>

                {/* ✅ GOLD LABEL BAR */}
                <div
                  className="
        absolute bottom-0 left-0 w-full
        bg-black/85 py-3 px-2
      "
                >
                  <h3 className="font-bold text-xs sm:text-sm md:text-base text-center tracking-wide">
                    {cat.name.toUpperCase()}
                  </h3>
                  <p className="text-white/70 text-[10px] sm:text-xs text-center tracking-wide">
                    SERIES
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Collections;
