import {
  useEffect,
  useState,
} from "react"; /* useEffect and useState are React hooks used for managing side effects and state in functional components.  */
import { useLocation } from "react-router-dom"; /* useLocation is a hook provided by React Router DOM used to access the current location. */

const AuctionDetails = ({ auctions, bids }) => {
  /* This defines a functional component named AuctionDetails. It takes an object destructuring argument, { auctions }, which indicates that it expects an auctions prop to be passed to it. */
  const location =
    useLocation(); /* Location is initialized using the useLocation hook to access the current location object.  */
  const [auctionById, setAuctionById] =
    useState(
      null
    ); /* auctionById is initialized as a state variable using the useState hook with an initial value of null. */

  useEffect(() => {
    /* The useEffect hook is used to perform side effects in functional components. In this case, it is used to fetch and set the auction details based on the current location. It runs when the auctions prop changes. */
    // Extracting the id parameter from the URL
    const id = location.pathname.split("/").pop();
    // Filtering the auctions array based on the id
    const selectedAuction = auctions.find((auct) => auct.AuctionID == id);
    setAuctionById(selectedAuction);
  }, [auctions]);

  return (
    /* This is the JSX code that determines what will be rendered to the DOM. If auctionById exists (is not null), it renders the details of the selected auction. Otherwise, it renders a message indicating that no auction has been chosen. */
    <>
      {JSON.stringify(bids)}
      {auctionById ? (
        <div>
          {/* <h2>{auctionById.Title}</h2>
          <p>Price: {auctionById.StartingPrice}</p>
          <p>Start Date: {auctionById.StartDate}</p>
          <p>End Date: {auctionById.EndDate}</p>
          <p>Created By: {auctionById.CreatedBy}</p>
          <p>Bid: {auctionById.bud}</p> */}
        </div>
      ) : (
        <p>No auction has been chosen, try again</p>
      )}
    </>
  );
};

export default AuctionDetails; /* This exports the AuctionDetails component, making it available for import in other files. */
