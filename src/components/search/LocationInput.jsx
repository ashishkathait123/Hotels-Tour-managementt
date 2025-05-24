import { FaExchangeAlt } from "react-icons/fa";

export default function LocationInput() {
  return (
    <div className="flex w-full md:w-auto border border-gray-300 rounded-md overflow-hidden divide-x divide-gray-300">
      <div className="p-4 flex-1">
        <p className="text-sm font-semibold">From</p>
        <p className="text-sm text-gray-700">Indira Gandhi Intl (DEL)</p>
      </div>
      <div className="flex items-center justify-center px-3">
        <FaExchangeAlt className="text-gray-500" />
      </div>
      <div className="p-4 flex-1">
        <p className="text-sm font-semibold">To</p>
        <p className="text-sm text-gray-700">Sydney (SYD)</p>
      </div>
    </div>
  );
}
