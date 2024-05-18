export default function DataDays() {
  return (
    <div className="flex flex-col w-full p-3 mb-5 md:mt-7 border-4 border-gray-500">
      <p>Date prévue pour votre séjour*</p>
      <div className="flex flex-col gap-x-4 md:flex-row">
        <div className="flex flex-row items-center gap-x-2">
          <p className="text-base">Date d'arrivée:</p>
          <input
            type="date"
            id="start"
            name="date-start"
            value=""
            min="2024-01-01"
            max="2030-12-31"
            required
          />
        </div>

        <div className="flex flex-row items-center gap-x-2">
          <p className="text-base">Date de départ:</p>
          <input
            type="date"
            id="start"
            name="date-end"
            value=""
            min="2024-01-01"
            max="2030-12-31"
            required
          />
        </div>
      </div>
    </div>
  );
}
