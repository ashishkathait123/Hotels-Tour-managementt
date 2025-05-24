export default function TravellerClassSelector() {
  return (
    <div className="flex items-center space-x-6">
      <div className="relative">
        <select className="appearance-none bg-white border border-gray-300 rounded px-4 py-2 pr-8 text-sm">
          <option>1 Traveller</option>
        </select>
      </div>
      <div className="relative">
        <select className="appearance-none bg-white border border-gray-300 rounded px-4 py-2 pr-8 text-sm">
          <option>Economy</option>
        </select>
      </div>
    </div>
  );
}
