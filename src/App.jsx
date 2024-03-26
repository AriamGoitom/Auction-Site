import React from "react";
import Auctions from "./components/Auctions";
import { Route, Routes } from "react-router-dom";
import AuctionDetails from "./components/AuctionDetails";
import "./App.css";

function App() {
  return (
    <>
      <Auctions />
      <Routes>
        <Route path="/auktion/:id" element={<AuctionDetails />} />
      </Routes>
    </>
  );
}

export default App;
