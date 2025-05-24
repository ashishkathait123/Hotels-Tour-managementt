import FlightTabs from "./FlightTabs";
import TripTypeSelector from "./TripTypeSelector";
import TravellerClassSelector from "./TravellerClassSelector";
import LocationInput from "./LocationInput";
import DateInput from "./DateInput";

export default function SearchBar() {
  return (
    <div className="w-full max-w-screen-xl mx-auto p-4 bg-[#7ec6c6a6] shadow-md rounded-md">
      <FlightTabs />

      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div className="flex flex-wrap gap-4 items-center">
          <TripTypeSelector />
          <TravellerClassSelector />
        </div>

        <div className="flex flex-col lg:flex-row gap-4 mt-4 lg:mt-0">
          <LocationInput />
          <DateInput />
        </div>

        <button className="bg-gray-800 text-white px-6 py-4 rounded-md text-lg font-medium hover:bg-gray-900">
          Search
        </button>
      </div>
    </div>
  );
}
