const tabs = ["Hotels", "Homes & Villas", "Tours & cruises", "Flights", "Experiences"];

export default function FlightTabs() {
  return (
    <div className="flex space-x-6 border-b border-gray-300 pb-3 mb-4">
      {tabs.map((tab, index) => (
        <button
          key={tab}
          className={`text-sm font-medium ${
            tab === "Flights"
              ? "text-black border-b-2 border-black"
              : "text-gray-500 hover:text-black"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}
