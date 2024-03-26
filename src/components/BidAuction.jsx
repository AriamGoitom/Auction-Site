import React, { useState } from "react";

const BidAuction = (auction) => {
  const [bid, setBid] = useState({
    Bidder: "",
    AuctionID: "",
    Amount: 500,
    GroupCode: "l6m",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBid((prevBid) => ({
      ...prevBid,
      [name]: value,
    }));
  };

  const handleBid = async (e) => {
    e.preventDefault();
    if (!bid.Bidder) {
      alert("Please enter your name before placing a bid.");
      return;
    }
    try {
      const response = await fetch(
        "https://auctioneer.azurewebsites.net/bid/l6m/41",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(bid),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to place bid");
      }

      setBid({
        Bidder: "",
        AuctionID: "",
        Amount: 500,
        GroupCode: "l6m",
      });

      const data = await response.json();
      console.log("Bid placed successfully:", data);
      alert("Bid placed successfully!");
    } catch (error) {
      console.error("Error:", error.message);
      alert("Failed to place bid");
    }
  };

  return (
    <div>
      <h2>Place Bid</h2>
      <form onSubmit={handleBid}>
        <label>Bidder Name:</label>
        <input
          type="text"
          name="Bidder"
          value={bid.Bidder}
          onChange={handleChange}
          required
        />

        <button type="submit">Place Bid with $500</button>
      </form>
    </div>
  );
};

export default BidAuction;
