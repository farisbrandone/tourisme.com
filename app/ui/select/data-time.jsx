export default function DataTime() {
  return (
    <div className="floating-label w-6 md:mt-7 ">
      <p>Heure d'arrivée</p>
      <div className="flex flex-row items-center">
        <input
          className="floating-input"
          type="number"
          placeholder="0"
          required
          min={0}
          max={23}
        />
        <p>min</p>
      </div>

      <div className="flex flex-row items-center">
        <input
          className="floating-input"
          type="number"
          placeholder="0"
          required
          min={0}
          max={59}
        />
        <p>s</p>
      </div>
    </div>
  );
}
