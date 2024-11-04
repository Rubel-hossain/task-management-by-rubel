import { FiSearch } from "react-icons/fi";

interface SearchBarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  isMobileSearchVisible: boolean;
  setIsMobileSearchVisible: (visible: boolean) => void;
}

export const SearchBar = ({
  searchQuery,
  setSearchQuery,
  isMobileSearchVisible,
  setIsMobileSearchVisible,
}: SearchBarProps) => (
  <div className="flex items-center gap-4">
    <button
      className="md:hidden text-gray-600"
      onClick={() => setIsMobileSearchVisible(!isMobileSearchVisible)}
    >
      <FiSearch className="w-5 h-5" />
    </button>
    <div
      className={`relative w-full md:w-auto ${
        isMobileSearchVisible ? "block" : "hidden md:block"
      }`}
    >
      <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
      <input
        type="text"
        placeholder="Search tasks..."
        className="w-full md:w-auto pl-10 pr-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>
  </div>
);

export default SearchBar;
