import { IoChevronDown } from "react-icons/io5";

const Filters = ({ filters, setFilters }) => {
  return (
    <div className="w-full flex flex-wrap gap-4 items-center mb-8">

      {/* SORT */}
      <div className="relative">
        <select
          value={filters.sort}
          onChange={(e) => setFilters({ ...filters, sort: e.target.value })}
          className="border px-3 py-2 pr-8 rounded text-sm appearance-none"
        >
          <option value="">Sort By</option>
          <option value="name-asc">Name (A → Z)</option>
          <option value="name-desc">Name (Z → A)</option>
          <option value="newest">Newest First</option>
          <option value="oldest">Oldest First</option>
        </select>
        <IoChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500" />
      </div>

      {/* PRODUCT NAME */}
      <div className="relative">
        <select
          value={filters.name}
          onChange={(e) => setFilters({ ...filters, name: e.target.value })}
          className="border px-3 py-2 pr-8 rounded text-sm appearance-none"
        >
          <option value="">Product Name</option>
          <option value="crema-marfil">Crema Marfil</option>
          <option value="black-galaxy">Black Galaxy</option>
          <option value="statuario">Statuario</option>
        </select>
        <IoChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500" />
      </div>

      {/* TYPE */}
      <div className="relative">
        <select
          value={filters.type}
          onChange={(e) => setFilters({ ...filters, type: e.target.value })}
          className="border px-3 py-2 pr-8 rounded text-sm appearance-none"
        >
          <option value="">Type</option>
          <option value="marble">Marble</option>
          <option value="granite">Granite</option>
          <option value="onyx">Onyx</option>
          <option value="travertine">Travertine</option>
        </select>
        <IoChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500" />
      </div>

      {/* COLOR */}
      <div className="relative">
        <select
          value={filters.color}
          onChange={(e) => setFilters({ ...filters, color: e.target.value })}
          className="border px-3 py-2 pr-8 rounded text-sm appearance-none"
        >
          <option value="">Color</option>
          <option value="white">White</option>
          <option value="beige">Beige</option>
          <option value="black">Black</option>
          <option value="brown">Brown</option>
          <option value="gold">Gold</option>
        </select>
        <IoChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500" />
      </div>

      {/* ORIGIN */}
      <div className="relative">
        <select
          value={filters.origin}
          onChange={(e) => setFilters({ ...filters, origin: e.target.value })}
          className="border px-3 py-2 pr-8 rounded text-sm appearance-none"
        >
          <option value="">Origin</option>
          <option value="india">India</option>
          <option value="brazil">Brazil</option>
          <option value="italy">Italy</option>
          <option value="turkey">Turkey</option>
        </select>
        <IoChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500" />
      </div>

      {/* STATUS */}
      <div className="relative">
        <select
          value={filters.status}
          onChange={(e) => setFilters({ ...filters, status: e.target.value })}
          className="border px-3 py-2 pr-8 rounded text-sm appearance-none"
        >
          <option value="">Status</option>
          <option value="available">Available</option>
          <option value="limited">Limited Stock</option>
          <option value="sold-out">Sold Out</option>
        </select>
        <IoChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500" />
      </div>

      {/* RESET */}
      <button
        onClick={() =>
          setFilters({
            sort: "",
            name: "",
            type: "",
            color: "",
            origin: "",
            status: "",
          })
        }
        className="px-4 py-2 border rounded text-sm transition cursor-pointer"
      >
        Reset
      </button>

    </div>
  );
};

export default Filters;
