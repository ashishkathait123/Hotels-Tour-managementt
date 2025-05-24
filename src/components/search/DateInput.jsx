export default function DateInput() {
  return (
    <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
      <div className="border border-gray-300 rounded-md p-4 w-full">
        <p className="text-sm font-semibold">Departing</p>
        <p className="text-sm text-gray-500">Select date</p>
      </div>
      <div className="border border-gray-300 rounded-md p-4 w-full">
        <p className="text-sm font-semibold">Returning</p>
        <p className="text-sm text-gray-500">Select date</p>
      </div>
    </div>
  );
}
