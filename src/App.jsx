import React, { useState } from "react";
import Auctions from "./components/Auctions";
import { Route, Routes } from "react-router-dom";
import AuctionDetails from "./components/AuctionDetails";
import Navbar from "./components/Navbar";
// import BidAuction from "./components/BidAuction";
import AddAuction from "./components/AddAuction";
function App() {
  const [auctions, setAuctions] = useState(
    []
  ); /* a state auctions is created with an empty array as its initial value. setAuctions is a function used to update the value of the auctions state. */
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Auctions setAuctions={setAuctions} auctions={auctions} />} />
        <Route path="/auktion/:id" element={<AuctionDetails auctions={auctions} />} />
        <Route path="/add" element={<AddAuction/>}/>
      </Routes>
    </>
  );
}

export default App;
