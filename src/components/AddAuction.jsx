import { useState } from "react";

const AddAuction = () => {
  const [auctionName, setAuctionName] = useState("");
  const [auctionDescription, setAuctionDescription] = useState("");
  const [auctionPrice, setAuctionPrice] = useState("");
  const [createdBy, setCreatedBy] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(
        "https://auctioneer.azurewebsites.net/auction/l6m",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            Title: auctionName,
            Description: auctionDescription,
            /* StartDate:
            EndDate: */
            GroupCode: "l6m",
            StartingPrice: auctionPrice,
            CreatedBy: createdBy,
            
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to add auction");
      }

      setSuccessMessage("Auction added successfully");
      setErrorMessage("");
      setAuctionName("");
      setAuctionDescription("");
      setAuctionPrice("");
    } catch (error) {
      setErrorMessage("Failed to add auction");
      setSuccessMessage("");
    }
  };
  return (
    <div>
      <h2>Add Auction</h2>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="auctionName">Auction Name:</label>
          <input
            type="text"
            id="auctionName"
            value={auctionName}
            onChange={(e) => setAuctionName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="auctionDescription">Auction Description:</label>
          <textarea
            id="auctionDescription"
            value={auctionDescription}
            onChange={(e) => setAuctionDescription(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="auctionPrice">Auction Price:</label>
          <input
            type="number"
            id="auctionPrice"
            value={auctionPrice}
            onChange={(e) => setAuctionPrice(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="createdBy">Created By:</label>
          <input
            type="text"
            id="createdBy"
            value={createdBy}
            onChange={(e) => setCreatedBy(e.target.value)}
            required
          />
        </div>
        {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
        {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
        <button type="submit">Add Auction</button>
      </form>
    </div>
  );
};

export default AddAuction;
