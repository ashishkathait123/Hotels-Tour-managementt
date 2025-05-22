import React, { useEffect, useState } from "react";

const Hero3 = () => {
  const offers = [
    {
      id: 1,
      title: "SO Sofitel Mauritius",
      location: "Bel Ombre, Mauritius",
      description: "Secluded Mauritius Beachfront Suites with Daily Breakfast & Nightly Dinner",
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
      imageUrl:"https://images.luxuryescapes.com/fl_progressive,q_auto:eco,c_fill,g_auto,w_512,ar_3:2,dpr_2.0/pjostk2ndf0ohdykoedemg",
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
      imageUrl:"https://images.luxuryescapes.com/fl_progressive,q_auto:eco,c_fill,g_auto,w_512,ar_3:2,dpr_2.0/pjostk2ndf0ohdykoedemg",
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

  // Optional: Add fade-in animation on mount
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section
      className={`py-16 relative overflow-hidden ${
    loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
  } transition-all duration-700 ease-out`}
  style={{
    backgroundImage: "linear-gradient(134deg, #4c7e7e 2%, #0000 95%)",
  }}
    >
      {/* Optional subtle background pattern or shapes */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-fffff0 opacity-10"
      ></div>

      <div className="container relative mx-auto px-6">
        <h5 className="text-xl md:text-3xl font-extrabold text-black-900 mb-12 text-center drop-shadow-md">
          Today's top <span className="font-light italic text-black">Picks</span> for you
        </h5>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {offers.map((offer) => (
            <a
              key={offer.id}
              href="#"
              className="group block bg-transparent   overflow-hidden transform transition-transform duration-300 hover:scale-[1.03] hover:shadow-ml"
              aria-label={`View offer: ${offer.title}`}
            >
              {/* Image Section */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={offer.imageUrl}
                  alt={offer.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-3 left-3 animate-pulse bg-yellow-400 text-black px-3 py-1 rounded-full font-semibold text-xs tracking-wide shadow-lg select-none">
                  EXCLUSIVE
                </div>
                <div className="absolute top-3 right-3 flex gap-2">
                  <button
                    aria-label="Add to favorites"
                    className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="w-5 h-5 text-red-500 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <p className="text-black-700 font-semibold text-sm tracking-wide">{offer.location}</p>
                    <h3 className="text-xl font-bold text-black-900 leading-tight">{offer.title}</h3>
                  </div>
                  <div className="flex items-center bg-blue-100 text-black-900 px-3 py-1 rounded-full text-sm font-semibold shadow-inner select-none">
                    <span className="mr-1 text-yellow-500 animate-pulse">★</span>
                    {offer.rating} {offer.ratingLabel}
                  </div>
                </div>

                <p className="text-black-800 font-medium mb-5 line-clamp-2">{offer.description}</p>

                {/* Price Section */}
                <div className="mt-8 pt-5 border-t border-blue-200 flex justify-between items-center">
                  <div>
                    <p className="text-black-700 text-sm font-semibold">{offer.nights} nights from</p>
                    <p className="text-2xl font-extrabold text-black-900">
                      {offer.price}{" "}
                      <span className="text-black-600 text-sm font-normal">/suite</span>
                    </p>
                    <div className="flex items-center gap-3 mt-1">
                      <p className="text-black-700 text-sm line-through font-semibold opacity-70">
                        Valued up to {offer.originalPrice}
                      </p>
                      <span className="bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full font-bold">
                        -{offer.discount}%
                      </span>
                    </div>
                  </div>
                  <button
                    className="bg-yellow-500 text-blak px-5 py-2 rounded-lg font-semibold shadow-md hover:bg-yellow-600"
                    aria-label={`View offer for ${offer.title}`}
                  >
                    View offer
                  </button>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero3;
