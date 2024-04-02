import React, { useState, useEffect } from "react";

function ClosedAuctions() {
  const [closedAuctions, setClosedAuctions] = useState([]);

  useEffect(() => {
    fetch("https://auctioneer.azurewebsites.net/auction/l6m")
      .then((response) => response.json())
      .then((data) => {
        const expiredAuctions = data.filter(
          (auction) => new Date(auction.EndDate) < new Date()
        );
        setClosedAuctions(expiredAuctions);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="h-full flex items-center justify-center">
      <h1 className="font-semibold text-4xl px-8 mt-14">Closed Auctions</h1>
      <ul className="w-full px-8 flex flex-col mt-10 sm:flex-wrap sm:flex-row item-center gap-14">
        {closedAuctions.map((auction, index) => (
          <li key={index}>
            <h2 className="font-semibold text-2xl">{auction.Title}</h2>
            <p>Description: {auction.Description}</p>
            <p>Start Date: {new Date(auction.StartDate).toLocaleString()}</p>
            <p>End Date: {new Date(auction.EndDate).toLocaleString()}</p>
            <p>Starting Price: {auction.StartingPrice}</p>
            <p>Created By: {auction.CreatedBy}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ClosedAuctions;
