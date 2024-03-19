import { useState } from "react";

const AddAuction = () => {
  const [auctionName, setAuctionName] = useState("");
  const [auctionDescription, setAuctionDescription] = useState("");
  const [auctionPrice, setAuctionPrice] = useState("");
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
            name: auctionName,
            description: auctionDescription,
            price: auctionPrice,
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
};
