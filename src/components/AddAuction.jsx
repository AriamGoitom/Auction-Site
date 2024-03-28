import { useState } from "react";
import { Link } from "react-router-dom";

const AddAuction = () => {
  const [auction, setAuction] = useState({
    Title: "",
    Description: "",
    StartDate: "",
    EndDate: "",
    GroupCode: "l6m",
    StartingPrice: 0,
    CreatedBy: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAuction((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://auctioneer.azurewebsites.net/auction/l6m",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(auction),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to add auction");
      }

      setAuction({
        Title: "",
        Description: "",
        StartDate: "",
        EndDate: "",
        GroupCode: "l6m",
        StartingPrice: 0,
        CreatedBy: "",
      });

      alert("Auction added successfully!");
    } catch (error) {
      console.error("Error:", error.message);
      alert("Failed to add auction");
    }
  };

  return (
  /*   <Link to={'/add'}> */
      <div>
      <h2>Add New Auction</h2>
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input
          type="text"
          name="Title"
          value={auction.Title}
          onChange={handleChange}
          required
        />

        <label>Description:</label>
        <input
          type="text"
          name="Description"
          value={auction.Description}
          onChange={handleChange}
          required
        />

        <label>Start Date:</label>
        <input
          type="datetime-local"
          name="StartDate"
          value={auction.StartDate}
          onChange={handleChange}
          required
        />

        <label>End Date:</label>
        <input
          type="datetime-local"
          name="EndDate"
          value={auction.EndDate}
          onChange={handleChange}
          required
        />

        <label>Starting Price:</label>
        <input
          type="number"
          name="StartingPrice"
          value={auction.StartingPrice}
          onChange={handleChange}
          required
        />

        <label>Created By:</label>
        <input
          type="text"
          name="CreatedBy"
          value={auction.CreatedBy}
          onChange={handleChange}
          required
        />

        <button type="submit">Add Auction</button>
      </form>
      </div>
   /*  </Link> */
  );
};

export default AddAuction;
