import React from "react";
import Auctions from "./components/Auctions";
import { Route, Routes } from "react-router-dom";
import AuctionDetails from "./components/AuctionDetails";
import Navbar from "./components/Navbar";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Auctions />} />
        <Route path="/auktion/:id" element={<AuctionDetails />} />
      </Routes>
    </>
  );
}

export default App;
