import React from "react";
import Auctions from "./components/Auctions";
import { Route, Routes } from "react-router-dom";
import AuctionDetails from "./components/AuctionDetails";
import Navbar from "./components/Navbar";
import BidAuction from "./components/BidAuction";
import AddAuction from "./components/AddAuction";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Auctions />} />
        <Route path="/auktion/:id" element={<AuctionDetails />} />
        <Route path="/add" element={<AddAuction/>}/>
      </Routes>
    </>
  );
}

export default App;
