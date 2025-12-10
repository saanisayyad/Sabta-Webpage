import { useParams, Link } from "react-router-dom";
import Blog1 from "../assets/BlogImages/Blog1.png";
import Blog2 from "../assets/BlogImages/Blog2.png";
import Blog3 from "../assets/BlogImages/Blog3.png";

const BlogDetails = () => {
  const { id } = useParams();

  const blogs = {
    1: {
      title: "The Beauty of Premium Marble Surfaces",
      image: Blog1,
      content: `
Marble has been a timeless material used in architecture for centuries.

Its natural veining, durability, and premium aesthetic make it a top 
choice for luxury homes and commercial spaces.

(Add full article content here...)
      `,
    },

    2: {
      title: "Engineered Stone vs Natural Stone",
      image: Blog2,
      content: `
Engineered stone offers uniformity and strength, while natural stone 
delivers unmatched beauty formed over millions of years.

(Add full article content here...)
      `,
    },

    3: {
      title: "How to Choose the Right Granite",
      image: Blog3,
      content: `
Granite remains one of the most popular choices due to its toughness,
ease of maintenance, and beautiful patterns.

(Add full article content here...)
      `,
    },
  };

  const blog = blogs[id];

  if (!blog) {
    return (
      <div className="w-full px-6 md:px-12 lg:px-20 py-20 mt-20">
        <h2 className="text-2xl font-semibold">Blog Not Found</h2>
        <Link to="/blog" className="underline mt-4 block">← Back to Blogs</Link>
      </div>
    );
  }

  return (
    <div data-aos="fade-up" className="w-full px-6 md:px-12 lg:px-20 py-20 mt-20">

      <Link to="/blog" className="underline text-sm">
        ← Back to Blogs
      </Link>

      <div className="mt-6">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-72 object-cover rounded-xl shadow-md"
        />

        <h1 className="text-3xl font-semibold mt-6">{blog.title}</h1>

        <p className="mt-4 opacity-90 whitespace-pre-line leading-relaxed">
          {blog.content}
        </p>
      </div>
    </div>
  );
};

export default BlogDetails;
