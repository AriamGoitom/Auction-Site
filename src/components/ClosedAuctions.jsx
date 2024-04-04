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
    <div className="className=h-full">
      <h1 className="font-semibold text-4xl px-8 mt-14">Recently Closed Auctions</h1>
      <ul className="w-full px-8 flex flex-col mt-10 sm:flex-wrap sm:flex-row item-center gap-14">
        {closedAuctions.map((auction, index) => (
          <li key={index} className="auction-item">
            <h2 className="font-semibold text-2xl">{auction.Title}</h2>
            <p className="auction-description">Description: {auction.Description}</p>
            <p className="auction-date">End Date: {new Date(auction.EndDate).toLocaleString()}</p>
            <p className="auction-price">Starting Price: {auction.StartingPrice}</p>
            <p className="auction-creator">Created By: {auction.CreatedBy}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ClosedAuctions;
