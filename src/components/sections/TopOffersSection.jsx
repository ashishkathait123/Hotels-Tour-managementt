import React, { useEffect, useState } from "react";
import ExclusiveOffersBanner from "../ui/banner/ExclusiveOffersBanner";

const TopOffersSection = () => {
  const offers = [
    {
      id: 1,
      title: "SO Sofitel Mauritius",
      location: "Bel Ombre, Mauritius",
      description:
        "Secluded Mauritius Beachfront Suites with Daily Breakfast & Nightly Dinner",
      rating: 8.8,
      ratingLabel: "Excellent",
      nights: 5,
      price: "₹1,05,999",
      originalPrice: "₹3,01,134",
      discount: 64,
      imageUrl:
        "https://images.luxuryescapes.com/fl_progressive,q_auto:eco,c_fill,g_auto,w_512,ar_3:2,dpr_2.0/pjostk2ndf0ohdykoedemg",
      tags: [],
    },
    {
      id: 5,
      title: "Cultural Heritage Tour",
      imageUrl:
        "https://images.luxuryescapes.com/fl_progressive,q_auto:eco,c_fill,g_auto,w_512,ar_3:2,dpr_2.0/pjostk2ndf0ohdykoedemg",
      location: "Japan",
      rating: 4.6,
      ratingLabel: "Excellent",
      description: "Immerse yourself in traditions, temples, and cuisine.",
      nights: 7,
      price: "$2,099",
      originalPrice: "$2,799",
      discount: 25,
    },
    {
      id: 6,
      title: "Tropical Island Cruise",
      imageUrl:
        "https://images.luxuryescapes.com/fl_progressive,q_auto:eco,c_fill,g_auto,w_512,ar_3:2,dpr_2.0/pjostk2ndf0ohdykoedemg",
      location: "Caribbean",
      rating: 4.8,
      ratingLabel: "Superb",
      description: "Sail across turquoise waters with luxury onboard experiences.",
      nights: 5,
      price: "$1,499",
      originalPrice: "$1,999",
      discount: 25,
    },
  ];

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      {/* Banner */}
      <ExclusiveOffersBanner />

      {/* Offers section overlapping banner bottom */}
      <section className="relative bg-[#a9e9e9] bg-cover bg-center bg-no-repeat -mt-12 pt-12 pb-12 rounded-t-lg shadow-lg">
        <div className="container mx-auto px-4">
          

          {/* Filter Tags */}
          <div
            className={`flex flex-wrap gap-2 mb-8 text-black transition-opacity duration-700 delay-200 ${
              mounted ? "opacity-100" : "opacity-0"
            }`}
          >
            {[
              "Single",
              "Boxes & Flames in Grey",
              "Family Friendly",
              "Sun & Beach",
              "Year all",
            ].map((tag) => (
              <button
                key={tag}
                className="px-3 py-1 text-sm rounded-full border border-gray-300 hover:bg-gray-400 transition-colors"
              >
                {tag}
              </button>
            ))}
          </div>

          {/* Offers Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {offers.map((offer, idx) => (
              <a
                key={offer.id}
                href="#"
                className={`block bg-transparent rounded-lg shadow-md overflow-hidden transition-shadow transform hover:shadow-lg hover:scale-[1.02] duration-300 ease-in-out
              ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
              `}
                style={{ transitionDelay: `${idx * 150}ms` }}
              >
                {/* Image Section */}
                <div className="relative h-64">
                  <img
                    src={offer.imageUrl}
                    alt={offer.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute top-2 left-2">
                    <span className="bg-yellow-500 text-black px-2 py-1 text-xs font-bold rounded">
                      EXCLUSIVE
                    </span>
                  </div>
                  <div className="absolute top-2 right-2 flex gap-2">
                    <button className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors">
                      <svg
                        viewBox="0 0 24 24"
                        className="w-4 h-4 text-black"
                        fill="none"
                      >
                        <path
                          fill="currentColor"
                          d="M16.8001 5h.1c1.7.1 2.8 1.2 3.1 2.3.7 2.6-.5 3.8-1.2 4.5l-.3.3c-1.4 1.5-4.9 5.2-6.5 6.9-1.6-1.7-5.1-5.4-6.5-6.9l-.3-.3c-.7-.7-2-1.8-1.2-4.5.3-1.1 1.4-2.2 3.1-2.3h.1c1.4 0 2.1.6 3.2 1.9l.8.9c.4.5 1.1.5 1.5 0l.8-.9c1.1-1.3 1.9-1.9 3.3-1.9Zm0-2c-2.4 0-3.7 1.4-4.8 2.6-1.1-1.3-2.4-2.6-4.8-2.6H7c-2.6.1-4.4 1.8-5 3.8-1.1 4.2 1.5 6.1 2 6.7 1.8 1.9 7.2 7.7 7.2 7.7.1.1.2.2.3.2.1.1.3.1.4.1.1 0 .3 0 .4-.1.1-.1.2-.1.3-.2 0 0 5.4-5.8 7.2-7.7.6-.6 3.2-2.4 2-6.7-.5-1.9-2.4-3.7-5-3.8 0 0 .1 0 0 0Z"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <p className="text-black text-sm">{offer.location}</p>
                      <h3 className="text-lg text-black font-bold">{offer.title}</h3>
                    </div>
                    <div className="flex items-center bg-yellow-600 text-black px-2 py-1 rounded text-xs">
                      <span className="mr-1">★</span>
                      {offer.rating} {offer.ratingLabel}
                    </div>
                  </div>

                  <p className="text-black font-bold mb-4 line-clamp-2">{offer.description}</p>

                  {/* Price Section */}
                  <div className="mt-6 pt-4 border-t border-gray-200 flex justify-between items-end">
                    <div>
                      <p className="text-black text-sm">{offer.nights} nights from</p>
                      <p className="text-xl font-bold">
                        {offer.price}
                        <span className="text-gray-500 text-sm font-normal">/suite</span>
                      </p>
                      <div className="flex items-center gap-2">
                        <p className="text-black text-sm font-bold">Valued up to {offer.originalPrice}</p>
                        <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full font-bold">
                          -{offer.discount}%
                        </span>
                      </div>
                    </div>
                    <button className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-yellow-700 transition-colors">
                      More
                    </button>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default TopOffersSection;
