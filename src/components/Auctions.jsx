import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";

const Auctions = () => {
  const [auctions, setAuctions] = useState([]);

  useEffect(() => {
    const fetchAuctions = async () => {
      const response = await fetch(
        "https://auctioneer.azurewebsites.net/auction/l6m"
      );

      const data = await response.json();
      setAuctions(data);
    };

    fetchAuctions();
  }, []);

  return (
    <div>
      <div className="h-full flex items-center justify-center">
        <SearchBar icon={<AiOutlineSearch size={25} />} auctions={auctions} />
      </div>
      <h1>Auctions</h1>
      <ul>
        {auctions.map((auction) => (
          <li key={auction.AuctionID}>
            {/* TODO: Ändra detta, vi vill hämta ut properties från auction */}
            {JSON.stringify(auction)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Auctions;
