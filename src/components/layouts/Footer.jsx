import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaPinterestP,
  FaCcVisa,
  FaCcMastercard,
  FaCcAmex,
} from "react-icons/fa";
import { SiTrustpilot } from "react-icons/si";
import { AiFillApple } from "react-icons/ai";
import { IoLogoGooglePlaystore } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="bg-[#2a8c8cc1] text-[#0f0c0c] text-sm">
      {/* Destinations */}
      <div className="max-w-7xl mx-auto px-4 py-8 border-b border-gray-300">
        <h3 className="text-xl font-semibold mb-4">
          Explore top hotel destinations we love
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-y-4 mb-6">
          {[
            "Australia",
            "United States",
            "Indonesia",
            "Thailand",
            "United Kingdom",
            "Spain",
            "Malaysia",
            "Italy",
            "Portugal",
            "France",
            "New Zealand",
            "Mexico",
          ].map((country) => (
            <div key={country}>
              <div className="font-medium hover:underline cursor-pointer">
                {country}
              </div>
              <div className="text-gray-500 hover:underline cursor-pointer">
                Hotels & Resorts
              </div>
            </div>
          ))}
        </div>

        <button className="border border-gray-500 rounded-full px-6 py-2 text-sm hover:bg-gray-100 transition">
          Show 69 countries
        </button>
      </div>

      {/* Reviews + Trust */}
      <div className="max-w-7xl mx-auto px-4 py-6 border-b border-gray-300 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-3">
          <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="Google" className="h-5" />
          <span className="font-semibold text-lg">4.7/5</span>
          <span className="text-gray-500">2.6k reviews</span>
        </div>

        <div className="flex items-center gap-2">
          <SiTrustpilot className="text-green-600 text-lg" />
          <span className="font-semibold">‘Excellent’</span>
          <span className="text-gray-500">10K reviews</span>
        </div>

        <div className="text-right font-medium">
          Trusted by <br />
          <span className="text-lg font-bold">8 million members</span>
        </div>
      </div>

      {/* Socials + Apps + Payment */}
      <div className="max-w-7xl mx-auto px-4 py-6 border-b border-gray-300 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Socials */}
        <div className="flex gap-4 text-xl">
          <FaFacebookF className="hover:text-blue-600 cursor-pointer" />
          <FaInstagram className="hover:text-pink-600 cursor-pointer" />
          <FaYoutube className="hover:text-red-600 cursor-pointer" />
          <FaPinterestP className="hover:text-red-500 cursor-pointer" />
        </div>

        {/* App Buttons */}
        <div className="flex flex-col sm:flex-row gap-3">
          <button className="flex items-center gap-2 border border-black px-4 py-2 rounded-lg">
            <AiFillApple className="text-xl" />
            <div>
              <div className="text-xs">Free Download</div>
              <div className="font-medium">App Store</div>
            </div>
          </button>
          <button className="flex items-center gap-2 border border-black px-4 py-2 rounded-lg">
            <IoLogoGooglePlaystore className="text-xl" />
            <div>
              <div className="text-xs">Free Download</div>
              <div className="font-medium">Google Play</div>
            </div>
          </button>
        </div>

        {/* Payments */}
        <div className="flex items-center gap-4">
          <FaCcVisa className="text-2xl" />
          <FaCcMastercard className="text-2xl" />
          <FaCcAmex className="text-2xl" />
          <span className="text-sm text-gray-600">Option to pay with Netbanking</span>
        </div>
      </div>

      {/* Links */}
      <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm border-b border-gray-300">
        <div>
          <h4 className="font-semibold mb-2">LuxuryEscapes.com</h4>
          <ul className="space-y-1 text-gray-600">
            <li>About Us</li>
            <li>Best Price Guarantee</li>
            <li>Careers & Culture</li>
            <li>Become a Partner</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Help</h4>
          <ul className="space-y-1 text-gray-600">
            <li>Support</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>Gift Cards</li>
            <li>Refund Policy</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Luxury Escapes Locations</h4>
          <ul className="space-y-1 text-gray-600">
            <li>Melbourne</li>
            <li>Sydney</li>
            <li>Chadstone</li>
            <li>London</li>
            <li>Singapore</li>
          </ul>
        </div>
      </div>

      {/* Logos */}
      <div className="max-w-7xl mx-auto px-4 py-6 flex flex-wrap justify-between items-center text-xs text-gray-500">
        <div className="flex gap-4 items-center">
          <img src="/logos/iata.png" alt="IATA" className="h-6" />
          <img src="/logos/atia.png" alt="ATIA" className="h-6" />
          <img src="/logos/cato.png" alt="CATO" className="h-6" />
          <img src="/logos/award2024.png" alt="Award" className="h-6" />
        </div>
        <div>Copyright © 2017 - 2025 Powered by GrandeurNet. All rights reserved</div>
      </div>
    </footer>
  );
};

export default Footer;
