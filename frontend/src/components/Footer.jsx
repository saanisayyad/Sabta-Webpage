import React from "react";
import { FaAddressBook, FaFacebookSquare, FaInstagram, FaLinkedin, FaPinterest, FaTelegram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      {/* ✅ FOOTER */}
      <footer className="w-full px-6 md:px-12 lg:px-20 pt-20 pb-6">

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-15 items-start">

    {/* ✅ COMPANY NAME */}
    <div>
      <h2 className="text-xl font-bold mb-4">
        Sabta Granite
      </h2>
      <p className=" leading-relaxed max-w-sm text-sm" style={{ textAlign: "justify" }}>
        Drawing inspiration from timeless design to offer large-format slabs that
        transform interiors and exteriors alike. From flooring to wall cladding, our
        surfaces redefine the look and feel of living and commercial spaces.
      </p>
    </div>

    {/* ✅ CONTACT */}
    <div>
      <h3 className="text-lg font-semibold mb-4">
        Contact
      </h3>
      <ul className="space-y-3 text-sm">

        <li>
  <a
    href="https://www.google.com/maps"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:underline inline-flex items-center gap-2"
  >
    <FaAddressBook />
    <span>P.O.Box:34390 Industrial Area #11 Sharjah - UAE</span>
  </a>
</li>


        <li>
          <a href="tel:+9710000000" className="hover:underline inline-flex items-center gap-2">
            <FaTelegram />
            <span>+971-000-0000</span>
          </a>
        </li>

        <li>
          <a href="tel:+971500000000" className="hover:underline inline-flex items-center gap-2">
            <FaTelegram />
            <span>+971-500-000-000</span>
          </a>
        </li>

        <li>
          <a
            href="mailto:info@sabtamarble.com"
            className="hover:underline inline-flex items-center gap-2"
          >
            <FaTelegram />
            <span>sale@sabtagranite.com</span>
          </a>
        </li>

      </ul>
    </div>

    {/* ✅ SOCIAL */}
    <div>
      <h3 className="text-lg font-semibold mb-4">
        Follow Us
      </h3>

      <div className="flex items-center gap-5 text-2xl">
        <a href="#" className="hover:opacity-70">
          <FaFacebookSquare />
        </a>
        <a href="#" className="hover:opacity-70">
          <FaInstagram />
        </a>
        <a href="#" className="hover:opacity-70">
          <FaTwitter />
        </a>
        <a href="#" className="hover:opacity-70">
          <FaPinterest />
        </a>
        <a href="#" className="hover:opacity-70">
          <FaLinkedin />
        </a>
      </div>
    </div>

  </div>

  {/* ✅ COPYRIGHT */}
  <div className="text-center  mt-14 pt-6 border-t">
    © {new Date().getFullYear()} Sabta Granite. All rights reserved.
  </div>

</footer>

    </div>
  );
};

export default Footer;
