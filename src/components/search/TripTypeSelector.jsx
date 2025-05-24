export default function TripTypeSelector() {
  return (
    <div className="flex items-center space-x-4">
      <label className="flex items-center space-x-2">
        <input type="radio" name="trip" defaultChecked className="form-radio accent-black" />
        <span>Return</span>
      </label>
      <label className="flex items-center space-x-2">
        <input type="radio" name="trip" className="form-radio accent-black" />
        <span>One-way</span>
      </label>
    </div>
  );
}
