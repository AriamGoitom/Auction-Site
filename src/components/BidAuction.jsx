import React, { useState, useEffect } from "react";

const BidAuction = ({ auction, onBidPlaced }) => {
  const [bidAmount, setBidAmount] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [bids, setBids] = useState(null);
  const [bidderName, setBidderName] = useState("");
  const [successMessage, setSuccessMessage] = useState("")
  

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
      setErrorMessage('Please enter your name.');
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
        setSuccessMessage('Bid placed successfully.');
        setTimeout(() => {
          setSuccessMessage('Bid placed successfully.');
        }, 3000);

      
      } else {
        const data = await response.json();
        setErrorMessage(data.message || "Failed to place bid.");
      }
    } catch (error) {
      console.error("Error placing bid:", error);
      setErrorMessage("Failed to place bid. Please try again later.");
    }
  };

  return (
    <div>
      <h2>Title: {auction.Title}</h2>
      <p>About: {auction.Description}</p>
      <p>Current Bid: {getHighestBid()}</p>
      <p>Bidder: {bidderName}</p>
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
        <input
          style={{ border: "1px solid gray" }}
          type="number"
          id="bidAmount"
          value={bidAmount}
          onChange={handleBidChange}
          step="any"
          required
        />
        <button type="submit">Place Bid</button>
        {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
      </form>
    </div>
  );
};

export default BidAuction;

/* import React, { useState } from "react";

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
      <h2>Title: {auction.Title}</h2>
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
 */
