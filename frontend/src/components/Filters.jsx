const Filters = ({ filters, setFilters }) => {
  return (
    <div className="flex flex-wrap gap-4 items-center mb-8">

      {/* COLOR FILTER */}
      <select
        value={filters.color}
        onChange={(e) => setFilters({ ...filters, color: e.target.value })}
        className="border px-3 py-2 rounded text-sm"
      >
        <option value="">All Colors</option>
        <option value="white">White</option>
        <option value="beige">Beige</option>
        <option value="black">Black</option>
      </select>

      {/* FINISH FILTER */}
      <select
        value={filters.finish}
        onChange={(e) => setFilters({ ...filters, finish: e.target.value })}
        className="border px-3 py-2 rounded text-sm"
      >
        <option value="">All Finishes</option>
        <option value="polished">Polished</option>
        <option value="honed">Honed</option>
        <option value="leather">Leather</option>
      </select>

      {/* RESET BUTTON */}
      <button
        onClick={() => setFilters({ color: "", finish: "" })}
        className="px-4 py-2 border rounded text-sm hover:bg-gray-100 transition"
      >
        Reset
      </button>

    </div>
  );
};

export default Filters;
