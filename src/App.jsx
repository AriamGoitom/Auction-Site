import React from "react";
import Auctions from "./components/Auctions";
import { Route, Routes } from "react-router-dom";
import AuctionsDetails from "./components/Auctionsdetails";
import Navbar from "./components/Navbar";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Auctions />} />
        <Route path="/auktion/:id" element={<AuctionsDetails />} />
      </Routes>
    </>
  );
}

export default App;
