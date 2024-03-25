import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const SearchBar = ({ icon, auctions }) => {
  const [input, setInput] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    // Filter auctions based on user input
    const filteredAuctions = auctions.filter((item) => {
      return item.Title.toLowerCase().includes(input.toLowerCase());
    });

    // Update the state with the filtered auctions
    setFilteredData(filteredAuctions);
  }, [auctions, input]);

  const handleSubmit = (e) => {
    e.preventDefault();

    setInput("");
  };

  return (
    <div>
      <div className=" border-b-[1px] border-black flex items-center px-2 w-[200px] sm:w-[w-400px] lg:w-[500px]">
        <span className="mr-2">{icon}</span>
        <form onSubmit={handleSubmit}>
          <input
            className="bg-transparent p-2 w-full sm:w-[450px] focus:outline-none"
            type="text"
            placeholder="Sök auktioner"
            onChange={(e) => setInput(e.target.value)}
            value={input}
          />
        </form>
      </div>

      {/* search results*/}
      {input.trim() !== "" && (
        <div>
          {filteredData.map((item) => (
            <Link to={`/auktion/${item.AuctionID}`} key={item.AuctionID}>
              <div>
                <h2 className="font-semibold text-xl">{item.Title}</h2>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
