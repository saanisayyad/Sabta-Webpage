import { BrowserRouter, Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import About from "./pages/About";
import { useEffect } from "react";
import ScrollToTop from "./components/ScrollToTop";
import Collections from "./pages/Collections";
import CollectionDetail from "./pages/CollectionDetails";
import ProductDetail from "./pages/ProductDetail";
import NotFound from "./pages/NotFound";
import WhatsAppButton from "./components/WhatsAppButton";
import BackButton from "./components/BackButton";
import ScrollDownButton from "./components/ScrollDownButton";
import Contact from "./pages/Contact";

function App() {

  useEffect(() => {
    AOS.init({
      duration: 1000, // animation speed
      once: true,    // animate only once
    });
  }, []);

  return (
    <BrowserRouter>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/collections/:collectionName" element={<CollectionDetail />} />
        <Route path="/collections/:collectionName/:productId" element={<ProductDetail />} />
        <Route path="/blog" element={<div>Blog Page</div>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/new-arrival" element={<div>New Arrivals Page</div>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <WhatsAppButton />
      <BackButton />
      <ScrollDownButton />
    </BrowserRouter>
  );
}

export default App;
