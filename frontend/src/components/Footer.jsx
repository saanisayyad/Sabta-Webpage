import React from "react";
import {
  FaFacebookSquare,
  FaInstagram,
  FaLinkedin,
  FaPinterest,
} from "react-icons/fa";
import { FaLocationDot, FaXTwitter } from "react-icons/fa6";
import { MdAddIcCall } from "react-icons/md";
import { IoMdMail } from "react-icons/io";

const Footer = () => {
  return (
    <div>
      {/* FOOTER */}
      <footer className="w-full px-6 md:px-12 lg:px-20 pt-20 pb-6">

        {/* ---------- MAIN FOOTER GRID + FLEX ---------- */}
        <div
          className="
            grid 
            grid-cols-1 
            sm:grid-cols-2 
            md:grid-cols-3 
            gap-10 
            lg:flex 
            lg:justify-between 
            lg:items-start
          "
        >
          {/* ---------- COMPANY NAME ---------- */}
          <div className="lg:w-1/3">
            <h2 className="text-xl font-bold mb-4">Sabta Granite</h2>
            <p className="leading-relaxed max-w-sm text-justify">
              Drawing inspiration from timeless design to offer large-format
              slabs that transform interiors and exteriors alike. From flooring
              to wall cladding, our surfaces redefine the look and feel of
              living and commercial spaces.
            </p>
          </div>

          {/* 🔥 MOBILE DIVIDER */}
          <div className="w-full h-px my-6 bg-linear-to-r from-transparent via-(--brand-accent) to-transparent sm:hidden"></div>

          {/* ---------- CONTACT ---------- */}
          <div className="md:pl-20">
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://maps.app.goo.gl/kskRgHSwUrQmXKtX9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline inline-flex items-center gap-2"
                >
                  <FaLocationDot size={20} />
                  <span>P.O. Box : 34390 Industrial Area # 11 Sharjah - UAE</span>
                </a>
              </li>

              <li>
                <a href="tel:+971502050707" className="hover:underline inline-flex items-center gap-2">
                  <MdAddIcCall size={20} />
                  <span>+971 50 205 0707</span>
                </a>
              </li>

              <li>
                <a href="tel:+97165354704" className="hover:underline inline-flex items-center gap-2">
                  <MdAddIcCall size={20} />
                  <span>+971 6 535 4704</span>
                </a>
              </li>

              <li>
                <a
                  href="mailto:sale@sabtagranite.com"
                  className="hover:underline inline-flex items-center gap-2"
                >
                  <IoMdMail size={20} />
                  <span>sale@sabtagranite.com</span>
                </a>
              </li>
            </ul>
          </div>

          {/* 🔥 MOBILE DIVIDER */}
          <div className="w-full h-px my-6 bg-linear-to-r from-transparent via-(--brand-accent) to-transparent sm:hidden"></div>

          {/* ---------- SOCIAL LINKS ---------- */}
          <div className="lg:w-1/3">
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>

            <div className="flex items-center gap-5 text-2xl">
              <a
                href="https://www.facebook.com/SGMT2003"
                target="_blank"
                className="hover:opacity-70"
              >
                <FaFacebookSquare />
              </a>

              <a
                href="https://www.instagram.com/sabta_granite/"
                target="_blank"
                className="hover:opacity-70"
              >
                <FaInstagram />
              </a>

              <a
                href="https://x.com/sgmt2003"
                target="_blank"
                className="hover:opacity-70"
              >
                <FaXTwitter />
              </a>

              <a
                href="https://www.pinterest.com/sabta_granite/"
                target="_blank"
                className="hover:opacity-70"
              >
                <FaPinterest />
              </a>

              <a
                href="https://www.linkedin.com/in/sabta-granite-and-marbles-trading-10b325251/"
                target="_blank"
                className="hover:opacity-70"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <section>
          <div className="w-full h-px mx-auto my-6 bg-linear-to-r from-transparent via-(--brand-accent) to-transparent"></div>
        </section>

        {/* COPYRIGHT */}
        <div className="text-center pt-6">
          © {new Date().getFullYear()} Sabta Granite. All rights reserved.
        </div>

      </footer>
    </div>
  );
};

export default Footer;
