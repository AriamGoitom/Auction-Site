import { useState } from "react";

const BidAuction = ({ auction }) => {
  const [errorMessage, setErrorMessage] = useState("");
  const [bidderName, setBidderName] = useState("");
  const [currentBid, setCurrentBid] = useState(auction.startingBid);

  const handleBid = () => {
    if (!bidderName.trim()) {
      setErrorMessage("Please eneter your name to place a bid.");
      return;
    }
    setCurrentBid((prevBid) => prevBid + 500);
    setBidderName("");
    setErrorMessage("");
  };

  const handleNameChange = (e) => {
    setBidderName(e.target.value);
  };

  return (
    <div>
      <h3>{auction.title}</h3>
      <p>Description: {auction.Description}</p>
      <p>Current Bid: {currentBid}</p>
      <p>Bidder: {bidderName}</p>
      <input
        type="text"
        placeholder="Enter your name"
        value={bidderName}
        onChange={handleNameChange}
      />
      <button onClick={handleBid}>Add Bid (+500)</button>
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
    </div>
  );
};

export default BidAuction;
