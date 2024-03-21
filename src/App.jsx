import React from "react";
import Auctions from "./components/Auctions";
import { Route, Routes } from "react-router-dom";
import AuctionsDetails from "./components/Auctionsdetails";
import "./App.css";

function App() {
  return (
    <>
      <Auctions />
      <Routes>
        <Route path="/auktion/:id" element={<AuctionsDetails />} />
      </Routes>
    </>
  );
}

export default App;
