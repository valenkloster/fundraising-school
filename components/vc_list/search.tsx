const Search = () => {
  return (
    <form className="mx-auto flex w-96 items-center">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <div className="relative w-full">
        <input
          type="text"
          id="search"
          className="block h-10 w-full rounded-lg border border-gray-100 bg-gray-100 pr-16 text-sm text-gray-900 focus:border-fsPurple focus:ring-fsPurple"
          placeholder="Search..."
          required
        />
        <button
          type="submit"
          className="absolute inset-y-0 right-0 flex h-10 items-center rounded-r-lg bg-fsPurple px-3 text-sm font-medium text-white hover:bg-fsPurple focus:outline-none focus:ring-4 focus:ring-blue-300"
        >
          Search
        </button>
      </div>
      <button
        type="button"
        className="ml-2 h-10 rounded-lg border border-fsPurple bg-white px-3 text-sm font-medium text-fsPurple hover:bg-white focus:outline-none focus:ring-4 focus:ring-lightFsPurple"
      >
        Filter
      </button>
    </form>
  );
};

export default Search;
