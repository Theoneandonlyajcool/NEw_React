// fjjjjggjgjgjgjgjg
// fjjjjggjgjgjgjgjg
// fjjjjggjgjgjgjgjg
// fjjjjggjgjgjgjgjg
// fjjjjggjgjgjgjgjg
// fjjjjggjgjgjgjgjg
// fjjjjggjgjgjgjgjg
// fjjjjggjgjgjgjgjg
// fjjjjggjgjgjgjgjg
// fjjjjggjgjgjgjgjg
// fjjjjggjgjgjgjgjg
// fjjjjggjgjgjgjgjg
// fjjjjggjgjgjgjgjg
// fjjjjggjgjgjgjgjg

import { useState } from "react";

const Search = () => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    if (query.trim() !== "") {
      window.location.href = `https://www.google.com/search?q=${encodeURIComponent(
        query
      )}`;
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="flex-1 flex flex-col justify-center items-center bg-[url('./Work-pics/foogle.jpeg')] bg-cover bg-no-repeat h-64 w-full">
      <div className="text-8xl text-gray-400">Google</div>
      <div className="bg-white p-4 px-8 flex items-center justify-between my-4 rounded-full w-[600px]">
        <div>
          <i className="fa-solid fa-magnifying-glass text-2xl text-gray-400"></i>
        </div>
        <input
          type="text"
          id="engine"
          className="text-xl w-[400px] bg-inherit text-black outline-none"
          placeholder="Search Google or type URL"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <div className="flex gap-4">
          <i className="fa-solid fa-microphone text-xl text-black cursor-pointer"></i>
          <i className="fa-solid fa-camera-retro text-xl text-black cursor-pointer"></i>
        </div>
      </div>
      <div className="flex space-x-4">
        <button
          className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded shadow-md"
          onClick={handleSearch}
        >
          Foogle Search
        </button>
        <button className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded shadow-md">
          Image Search
        </button>
      </div>
    </div>
  );
};

export default Search;
