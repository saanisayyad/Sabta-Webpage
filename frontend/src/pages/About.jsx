import React from 'react'

const About = () => {
  return (
    <div>
{/* ✅ ABOUT PARALLAX BANNER */}
<section data-aos="fade-up"
  className="w-full h-64 sm:h-80 md:h-[400px] bg-fixed bg-center bg-cover relative flex items-center justify-center"
  style={{
    backgroundImage:
      "url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
  }}
>
  {/* ✅ Dark Overlay */}
  <div className="absolute inset-0 bg-black/50"></div>

  {/* ✅ CENTERED HEADING */}
  <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white relative z-10">
    About Us
  </h1>
</section>

{/* ✅ WHO WE ARE SECTION */}
<section data-aos="fade-up" className="w-[90%] container mx-auto py-16">

  <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

    {/* ✅ TEXT BLOCK */}
    <div>
      <h2 className="text-2xl sm:text-3xl font-bold mb-6">
        Who We Are
      </h2>

      <p className=" leading-relaxed mb-4" style={{ textAlign: "justify" }}>
        Founded in 2003, SABTA is one of the UAE’s most trusted suppliers of natural stone,
        known for premium-quality Marble, Onyx, Granite, Travertine, Limestone, Sandstone,
        and Slate. With over two decades of experience, we’ve built a reputation for
        precision, reliability, and craftsmanship making us a preferred partner for
        architects, interior designers, and contractors across the Middle East.
      </p>

      <p className=" leading-relaxed mb-4" style={{ textAlign: "justify" }}>
        Recognizing the latest market trends, SABTA has expanded its portfolio to include
        Engineered Marble, Terrazzo, and Quartz, offering a complete range of natural and
        engineered stone solutions for every project.
      </p>

      <p className=" leading-relaxed" style={{ textAlign: "justify" }}>
        We maintain an extensive inventory of 200+ colors in both natural and engineered
        materials, ensuring clients have unmatched variety and availability.
      </p>
    </div>

    {/* ✅ IMAGE BLOCK */}
    <div className="w-full h-64 sm:h-80 lg:h-full">
      <img
        src="https://plus.unsplash.com/premium_photo-1668383778557-d71c562fdb4b?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Who We Are"
        className="w-full h-full object-cover rounded"
      />
    </div>

  </div>

</section>
{/* ✅ CAPABILITIES + GLOBAL SOURCING SECTION */}
<section data-aos="fade-up" className="w-[90%] mx-auto py-16">

  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

    {/* ✅ LEFT BLOCK — Comprehensive Capabilities */}
    <div>
      <h2 className="text-2xl sm:text-3xl font-bold mb-6">
        Comprehensive Capabilities
      </h2>

      <p className=" leading-relaxed mb-4" style={{ textAlign: "justify" }}>
        All fabrication and finishing processes are managed in-house from slabs and tiles to
        custom cut-to-size stones giving SABTA full control over quality and precision.
      </p>

      <p className=" leading-relaxed" style={{ textAlign: "justify" }}>
        We provide a wide selection of surface finishes, including Polished, Honed,
        Sandblasted, Flamed, Antique, Leather, and Bush Hammered, to match diverse design
        and architectural needs.
      </p>
    </div>

    {/* ✅ RIGHT BLOCK — Global Sourcing */}
    <div>
      <h2 className="text-2xl sm:text-3xl font-bold mb-6">
        Global Sourcing, Local Expertise
      </h2>

      <p className=" leading-relaxed" style={{ textAlign: "justify" }}>
        SABTA sources high-quality stone from around the world, including Italy, Turkey,
        Spain, Brazil, Greece, Portugal, India, Vietnam, and China. Our strong global
        partnerships ensure a steady supply of world-class materials at competitive prices,
        meeting the UAE’s demanding standards for quality and timely delivery.
      </p>
    </div>

  </div>

</section>
{/* ✅ MISSION & VISION SECTION */}
<section data-aos="fade-up" className="w-[90%] mx-auto py-16">

  <div className="text-center mb-12">
    <h2 className="text-2xl sm:text-3xl font-bold">
      Mission & Vision
    </h2>
  </div>

  {/* ✅ Two-Card Layout */}
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

    {/* ✅ Mission Card */}
    <div className="border rounded-xl p-8 shadow-sm">
      <h3 className="text-lg font-semibold mb-4 text-center">
        Our Mission
      </h3>
      <p className=" leading-relaxed" style={{ textAlign: "justify" }}>
        Our mission is to transform spaces with nature’s finest materials, offering unmatched
        quality, sustainability, and service.
      </p>
    </div>

    {/* ✅ Vision Card */}
    <div className="border rounded-xl p-8 shadow-sm">
      <h3 className="text-lg font-semibold mb-4 text-center">
        Our Vision
      </h3>
      <p className=" leading-relaxed" style={{ textAlign: "justify" }}>
        We aim to be the most trusted and ethical natural stone brand in the region — leading
        through innovation, integrity, and craftsmanship while setting higher standards in the
        UAE’s stone industry.
      </p>
    </div>

  </div>

</section>


    </div>
  )
}

export default About
