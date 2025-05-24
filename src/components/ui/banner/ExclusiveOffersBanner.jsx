// components/ui/Banner/ExclusiveOffersBanner.jsx
import React, { useEffect, useState } from 'react';

const ExclusiveOffersBanner = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="relative h-[60vh] flex items-center justify-center bg-cover bg-center bg-no-repeat"
         style={{ backgroundImage: 'url("/assets/images/deals/sea.jpg")' }}>
      <div className="absolute inset-0" /> {/* Dark overlay */}
      <div className="container mx-auto px-4 z-10 relative text-center">
        <h1
            className={`text-5xl text-black font-bold mb-6 transform transition-opacity duration-700  ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-6"
            }`}
          >
            Today's top <span className="font-light italic">exclusive</span> offers
          </h1>
      </div>
    </div>
  );
};

export default ExclusiveOffersBanner;
