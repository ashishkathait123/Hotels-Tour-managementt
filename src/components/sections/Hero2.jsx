import React, { useState, useRef } from "react";

const destinations = [
  {
    name: "Bali",
    img: "https://images.luxuryescapes.com/fl_progressive,q_auto:eco,c_fill,g_auto,w_180,ar_1:1,dpr_2.0/y8b2qchrspc3jmmfyrqo.webp",
    link: "/in/search?destinationName=Bali&destinationId=le_64930b7151b6bc3e289f37d5da62ac9f&adults=2&children=none&flexibleWithDate=true",
  },
  {
    name: "Bali",
    img: "https://images.luxuryescapes.com/fl_progressive,q_auto:eco,c_fill,g_auto,w_180,ar_1:1,dpr_2.0/y8b2qchrspc3jmmfyrqo.webp",
    link: "/in/search?destinationName=Bali&destinationId=le_64930b7151b6bc3e289f37d5da62ac9f&adults=2&children=none&flexibleWithDate=true",
  },
  {
    name: "Bali",
    img: "https://images.luxuryescapes.com/fl_progressive,q_auto:eco,c_fill,g_auto,w_180,ar_1:1,dpr_2.0/y8b2qchrspc3jmmfyrqo.webp",
    link: "/in/search?destinationName=Bali&destinationId=le_64930b7151b6bc3e289f37d5da62ac9f&adults=2&children=none&flexibleWithDate=true",
  },
  {
    name: "Bali",
    img: "https://images.luxuryescapes.com/fl_progressive,q_auto:eco,c_fill,g_auto,w_180,ar_1:1,dpr_2.0/y8b2qchrspc3jmmfyrqo.webp",
    link: "/in/search?destinationName=Bali&destinationId=le_64930b7151b6bc3e289f37d5da62ac9f&adults=2&children=none&flexibleWithDate=true",
  },
  {
    name: "Thailand",
    img: "https://images.luxuryescapes.com/fl_progressive,q_auto:eco,c_fill,g_auto,w_180,ar_1:1,dpr_2.0/kfqqpu1yydi4zlfxk7n8.webp",
    link: "/in/search?destinationName=Thailand&destinationId=le_8f85517967795eeef66c225f7883bdcb&adults=2&children=none&flexibleWithDate=true",
  },
  {
    name: "Maldives",
    img: "https://images.luxuryescapes.com/fl_progressive,q_auto:eco,c_fill,g_auto,w_180,ar_1:1,dpr_2.0/kulvt0wsmrgqbnnmyuc.webp",
    link: "/in/search?destinationName=Maldives&destinationId=le_2723d092b63885e0d7c260cc007e8b9d&adults=2&children=none&flexibleWithDate=true",
  },
  // Add more destinations as needed
];

const Hero2 = () => {
  const [selectedFilter, setSelectedFilter] = useState("Places to stay");
  const carouselRef = useRef(null);

  const scroll = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = 300;
      carouselRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-8 px-4 max-w-7xl mx-auto">
      {/* Heading and View Map Button */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <h2 className="text-3xl font-bold">
          Immerse yourself in trending <i>destinations</i>
        </h2>
        <a
          href="/in/search/map?adults=2&children=none&destinationId=le_d41d8cd98f00b204e9800998ecf8427e&destinationName=Anywhere"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-semibold text-sm"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21.32 5.05l-6-2h-.07a.7.7 0 00-.14 0h-.43L9 5 3.32 3.05a1 1 0 00-.9.14A1 1 0 002 4v14a1 1 0 00.68.95l6 2a1 1 0 00.62 0l5.7-1.9L20.68 21c.11.01.21.01.32 0a.94.94 0 00.58-.19 1 1 0 00.42-.86V6a1 1 0 00-.68-.95zM8 18.61l-4-1.33V5.39l4 1.33v11.89zm6-1.33l-4 1.33V6.72l4-1.33v11.89zm6 1.33l-4-1.33V5.39l4 1.33v11.89z"
            />
          </svg>
          View map
        </a>
      </div>

      {/* Filters */}
      <div className="flex gap-3 overflow-x-auto mb-6">
        {["Places to stay", "Guided group tours"].map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => setSelectedFilter(filter)}
            className={`whitespace-nowrap px-4 py-2 rounded-full font-semibold text-sm border transition-colors ${
              selectedFilter === filter
                ? "bg-transparent text-black border-yellow-600  hover:bg-gray-100"
                : "bg-white text-gray-700 border-yellow-600 hover:bg-gray-100"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Carousel with arrows */}
      <div className="relative">
        <button
          type="button"
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow rounded-full p-2 hover:bg-gray-100 z-10"
          aria-label="Scroll Left"
        >
          <svg
            className="w-6 h-6 text-gray-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <div
          ref={carouselRef}
          className="flex gap-4 overflow-x-auto scroll-smooth scrollbar-hide px-10"
        >
          {destinations.map(({ name, img, link }) => (
            <a
              key={name}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="min-w-[180px] flex-shrink-0 cursor-pointer"
            >
              <img
                src={img}
                alt={name}
                className="w-44 h-44 object-cover rounded-lg shadow-md"
                loading="lazy"
                width={180}
                height={180}
              />
              <div className="mt-2 text-center font-semibold text-lg text-gray-900">
                {name}
              </div>
            </a>
          ))}
        </div>

        <button
          type="button"
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow rounded-full p-2 hover:bg-gray-100 z-10"
          aria-label="Scroll Right"
        >
          <svg
            className="w-6 h-6 text-gray-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default Hero2;
