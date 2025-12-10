import { Link } from "react-router-dom";
import CollectionBanner from "../assets/BannerImages/Marble2.jpeg"; // <-- ADD THIS

const Blog = () => {
  const blogs = [
    {
      id: 1,
      title: "The Beauty of Premium Marble Surfaces",
      image: "/blogs/marble.jpg",
      short: "Explore how premium marble elevates interior and exterior design.",
    },
    {
      id: 2,
      title: "Engineered Stone vs Natural Stone",
      image: "/blogs/stone.jpg",
      short: "A complete guide comparing engineered and natural stones.",
    },
    {
      id: 3,
      title: "How to Choose the Right Granite",
      image: "/blogs/granite.jpg",
      short: "Tips to select the best granite finish, color, and texture.",
    },
  ];

  return (
    <div data-aos="fade-up" className="w-full">
      {/* BANNER */}
      <section
        data-aos="fade-up"
        className="w-full h-64 sm:h-80 md:h-[400px] bg-fixed bg-center bg-cover relative flex items-center justify-center"
        style={{
          backgroundImage: `url(${CollectionBanner})`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold relative z-10 uppercase text-white">
          Blogs
        </h1>
      </section>

      {/* BLOG SECTION */}
      <div className="w-full px-6 md:px-12 lg:px-20 py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogs.map((blog) => (
            <Link
              key={blog.id}
              to={`/blog/${blog.id}`}
              className="
                border border-(--brand-accent)/40 rounded-xl 
                shadow-md overflow-hidden hover:shadow-xl 
                transition cursor-pointer
              "
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-56 object-cover"
              />

              <div className="p-5 space-y-3">
                <h3 className="text-xl font-semibold">{blog.title}</h3>
                <p className="opacity-80 text-sm">{blog.short}</p>
                <span className="underline text-sm">Read More</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
