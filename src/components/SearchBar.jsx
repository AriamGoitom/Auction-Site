import React from "react";

const SearchBar = ({ icon, filterAuctions }) => {
  return (
    <div>
      <div className=" border-b-[1px] border-black flex items-center px-2 w-[200px] sm:w-[w-400px] lg:w-[500px]">
        <span className="mr-2">{icon}</span>
        <input
          className="bg-transparent p-2 w-full sm:w-[450px] focus:outline-none"
          type="text"
          placeholder="Sök auktioner"
          onChange={(e) => filterAuctions(e.target.value)}
        />
      </div>
    </div>
  );
};

export default SearchBar;
