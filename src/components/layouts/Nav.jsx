import React from "react";

const Nav = () => {
  const navItems = [
    { name: "Hotels", href: "/in/hotels" },
    { name: "Flights", href: "/in/flights" },
    { name: "Tours & Cruises", href: "/in/tours" },
    { name: "Ultra Lux", href: "/in/ultra-lux" },
    { name: "Inspiration", href: "https://luxuryescapes.com/inspiration/" },
    { name: "Gift Cards", href: "/in/gift-cards" },
    { name: "Support", href: "/in/support" },
    { name: "Travel Protection", href: "/in/travel-protection" },
    { name: "Refer a Friend", href: "/in/refer" },
    { name: "Groups and Weddings", href: "https://luxuryescapes.com/inspiration/group-bookings/" },
  ];

  return (
    <div className="flex items-center justify-between px-4 py-3 bg-white shadow-sm">
      <div className="flex space-x-0 overflow-x-auto">
        {navItems.map((item, index) => (
          <a
            key={index}
            href={item.href}
            className="px-4 py-2 text-sm font-medium text-gray-700 whitespace-nowrap hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors duration-200"
          >
            {item.name}
          </a>
        ))}
        <button className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 whitespace-nowrap hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors duration-200">
          <span>More</span>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            className="w-4 h-4 ml-1"
          >
            <path
              fill="currentColor"
              d="M16.9999 9.17a.9999.9999 0 0 0-1.41 0l-3.59 3.5399-3.54-3.54a1 1 0 0 0-1.41 0 1 1 0 0 0 0 1.42l4.24 4.24a.9989.9989 0 0 0 1.0946.2189.9966.9966 0 0 0 .3254-.2189l4.29-4.24a.999.999 0 0 0 .2189-1.0945.998.998 0 0 0-.2189-.3255Z"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Nav;