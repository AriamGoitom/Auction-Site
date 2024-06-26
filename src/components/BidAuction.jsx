import React, { useState, useEffect } from "react";

const BidAuction = ({ auction, onBidPlaced, bids, setBids }) => {
  const [bidAmount, setBidAmount] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [bidderName, setBidderName] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleBidChange = (e) => {
    setBidAmount(e.target.value);
  };

  const handleBidderNameChange = (e) => {
    setBidderName(e.target.value);
  };

  useEffect(() => {
    const fetchBids = () => {
      fetch(`https://auctioneer.azurewebsites.net/bid/l6m/${auction.AuctionID}`)
        .then((res) => res.json())
        .then((data) => setBids(data))
        .catch((err) =>
          console.log("Något gick fel vid hämtning av bud: " + err)
        );
    };
    fetchBids();
    return () => {};
  }, [auction]);

  const getHighestBid = () => {
    if (bids && bids.length > 0) {
      return Math.max(...bids.map((bid) => bid.Amount));
    }
    return 0;
  };

  const handleBidSubmit = async (e) => {
    e.preventDefault();
    if (!parseFloat(bidAmount)) {
      setErrorMessage("Bid amount must be a valid number.");
      return;
    }
    if (!bidderName.trim()) {
      setErrorMessage("Please enter your name.");
      return;
    }
    if (bidAmount <= getHighestBid()) {
      setErrorMessage("Bid amount must be higher than the current bid.");
      return;
    }

    try {
      const response = await fetch(
        "https://auctioneer.azurewebsites.net/bid/l6m",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            Amount: bidAmount,
            AuctionID: auction.AuctionID,
            Bidder: bidderName,
            GroupCode: auction.GroupCode,
          }),
        }
      );
      if (response.ok) {
        const data = await response.json();
        onBidPlaced(data); // Update parent component with the new bid
        setBidderName("");
        setBidAmount("");
        alert("Bid placed successfully.");
      } else {
        const data = await response.json();
        alert(data.message || "Failed to place bid.");
      }
    } catch (error) {
      console.error("Error placing bid:", error);
      setErrorMessage("Failed to place bid. Please try again later.");
    }
  };

  const handleDeleteAuction = async () => {
    try {
      const response = await fetch(
        `https://auctioneer.azurewebsites.net/auction/l6m/${auction.AuctionID}`,
        {
          method: "DELETE",
        }
      );
      if (response.ok) {
        alert("You have deleted auction!");
      } else {
        const data = await response.json();
        setErrorMessage(data.message || "Failed to delete auction.");
      }
    } catch (error) {
      console.error("Error deleting auction:", error);
      setErrorMessage("Failed to delete auction. Please try again later.");
    }
  };

  return (
    <div className="h-full">
      <h1>
        <strong>{auction.Title}</strong>
      </h1>
      <p>About: {auction.Description}</p>
      <p>Current Bid: {getHighestBid()}</p>
      <form onSubmit={handleBidSubmit}>
        <label htmlFor="bidAmount">Your Bid:</label>
        <br />
        <label>Bidder Name:</label>
        <input
          style={{ border: "1px solid gray" }}
          type="text"
          name="Bidder"
          value={bidderName}
          onChange={handleBidderNameChange}
          required
        />
        <br />
        <label>Place your bid:</label>
        <input
          style={{ border: "1px solid gray" }}
          type="number"
          id="bidAmount"
          value={bidAmount}
          onChange={handleBidChange}
          step="any"
          required
        />
        <br />
        <br />
        <button style={{ border: "1px solid gray" }} type="submit">
          Place Bid
        </button>
        {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
      </form>
      <br />
      {bids && bids.length > 0 ? (
        <>
          <h1>
            <strong>Budhistorik:</strong>
          </h1>
          <ul>
            {bids.map((bid, index) => (
              <li key={index}>
                Bidder: {bid.Bidder}, Amount: {bid.Amount}
              </li>
            ))}
          </ul>
        </>
      ) : (
        <button
          style={{ border: "1px solid gray" }}
          onClick={handleDeleteAuction}
        >
          Delete Auction
        </button>
      )}
    </div>
  );
};

export default BidAuction;
