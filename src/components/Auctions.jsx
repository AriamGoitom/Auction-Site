import React, {
  useEffect,
  useState,
} from "react"; /* In this section, you import necessary components and dependencies for your React component. These include React, useEffect hook, SearchBar component, Link component from react-router-dom, and an icon component AiOutlineSearch from react-icons/ai. */
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import BidAuction from "./BidAuction";

const Auctions = ({ bids, setBids, auctions, setAuctions }) => {
  /* This defines a functional component named Auctions. It takes in two props: auctions (which represents the array of auctions) and setAuctions (which is a function to update the array of auctions). */
  const [selectedAuction, setSelectedAuction] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    /* Using the useEffect hook to make an API call to fetch auctions. The useEffect hook is used to perform asynchronous operations, in this case, an HTTP request to an API to fetch auctions. When the component is first rendered, the fetchAuctions function will run, and the auctions state will be updated with the data returned from the API. */
    const fetchAuctions = async () => {
      const response = await fetch(
        "https://auctioneer.azurewebsites.net/auction/l6m"
      );

      const auctionsJson = await response.json();
      // Filter out expired auctions
      const activeExpiredAuctions = auctionsJson.map((auction) => ({
        ...auction,
        expired: new Date(auction.EndDate) <= new Date(),
      }));
      setAuctions(activeExpiredAuctions);
    };

    fetchAuctions();
  }, []);

  const filterAuctions = (query) => {
    setSearchQuery(query);
  };

  const filteredAuctions = auctions.filter((auction) =>
    auction.Title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleBidPlaced = (bid) => {
    // Update auctions array with the new bid
    const updatedAuctions = auctions.map((auction) => {
      if (auction.id === bid.AuctionID) {
        return {
          ...auction,
          currentBid: bid.Amount,
        };
      }
      return auction;
    });
    setAuctions(updatedAuctions);
  };

  const handleAuctionClick = (auction) => {
      setSelectedAuction(auction);
  };

  return (
    /* Rendering auctions in the list. Auctions are rendered in a <ul> list with each auction as an <li> element. For each auction, its title, starting price, start date, end date, created by, and bid are displayed. Additionally, you provide a link to the individual auction details using the Link component from react-router-dom. The map method is used to iterate over each auction in the auctions array and generate JSX for each auction. */
    <div>
      <div className="h-full flex items-center justify-center">
        <SearchBar
          icon={<AiOutlineSearch size={25} />}
          filterAuctions={filterAuctions}
        />
      </div>
      <div className="h-full">
        <h1 className="font-semibold text-4xl px-8 mt-14">Current Auctions</h1>
        <ul className="w-full px-8 flex flex-col mt-10 sm:flex-wrap sm:flex-row item-center gap-14">
          {filteredAuctions.map((auction) => (
            // TODO: När man klickar, fixa så vald auktion kommer under selectedAuction
            // Städa kanske upp Sebbes fula X också
            <li
              className={auction.expired ? "expired" : ""}
              style={{ cursor: "pointer" }}
              key={auction.AuctionID}
              onClick={() => handleAuctionClick(auction)}
            >
              {/* <Link to={`/auktion/${auction.AuctionID}`} key={auction.AuctionID}> */}
              <h2 className="font-semibold text-2xl">{auction.Title}</h2>
              <p>Pris: {auction.StartingPrice}</p>
              <p>Start Date: {auction.StartDate}</p>
              <p>End Date: {auction.EndDate}</p>
              <p>Created By: {auction.CreatedBy}</p>
              <p>Expired: {auction.expired ? "Yes" : "No"}</p>
              {/* <p>Bid: {auction.Bidder}</p>
              {bids && bids.length > 0 && (
                <ul>
                  {bids.map((bid, index) => (
                    <li key={index}>
                      Bid {index + 1}: {bid.amount}
                    </li>
                  ))}
                </ul>
              )} */}
            </li>
          ))}
          {selectedAuction && (
            <>
              <div>
                <span
                  style={{ cursor: "pointer", border: "1px solid gray" }}
                  onClick={() => setSelectedAuction(null)}
                >
                  Close
                </span>
                <BidAuction
                  bids={bids}
                  setBids={setBids}
                  auction={selectedAuction}
                  onBidPlaced={handleBidPlaced}
                />
              </div>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Auctions; /* This export the Auctions component to make it available for use in other parts of your application. */
