import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
// import { Link } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";

const Auctions = () => {
  /* This defines a functional component named Auctions. */
  const [auctions, setAuctions] = useState(
    []
  ); /* a state auctions is created with an empty array as its initial value. setAuctions is a function used to update the value of the auctions state. */

  useEffect(() => {
    /* Using the useEffect hook to make an API call to fetch auctions. The useEffect hook is used to perform asynchronous operations, in this case, an HTTP request to an API to fetch auctions. When the component is first rendered, the fetchAuctions function will run, and the auctions state will be updated with the data returned from the API. */
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
    /* Rendering auctions in the list. Auctions are rendered in a <ul> list with each auction as an <li> element. For each auction, its title, starting price, start date, end date, created by, and bid are displayed. The map method is used to iterate over each auction in the auctions array and generate JSX for each auction. */
    <div>
      <div className="h-full flex items-center justify-center">
        <SearchBar icon={<AiOutlineSearch size={25} />} auctions={auctions} />
      </div>
      <div className="h-full">
        <h1 className="font-semibold text-2xl px-8 mt-14">Auctions</h1>
        <ul className="w-full px-8 flex flex-col mt-10 sm:flex-wrap sm:flex-row item-center gap-14">
          {auctions.map((auction) => (
            <li key={auction.AuctionID}>
              <h2 className="font-semibold">{auction.Title}</h2>
              <p>Pris: {auction.StartingPrice}</p>
              <p>Startdatum: {auction.StartDate}</p>
              <p>Slutdatum: {auction.EndDate}</p>
              <p>Skapad av: {auction.CreatedBy}</p>
              <p>Bud: {auction.bud}</p>
              {/* Lägg till fler egenskaper om det behövs */}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Auctions;
