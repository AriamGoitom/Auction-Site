import React, { useState } from "react";
import Auctions from "./components/Auctions";
import { Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
// import BidAuction from "./components/BidAuction";
import AddAuction from "./components/AddAuction";
import ClosedAuctions from "./components/ClosedAuctions";
function App() {
  const [auctions, setAuctions] = useState(
    []
  ); /* a state auctions is created with an empty array as its initial value. setAuctions is a function used to update the value of the auctions state. */
  const [bids, setBids] = useState(null);
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <Auctions
              bids={bids}
              setBids={setBids}
              setAuctions={setAuctions}
              auctions={auctions}
            />
          }
        />
        <Route path="/add" element={<AddAuction />} />
        <Route path="/completed" element={<ClosedAuctions />} />
      </Routes>
    </>
  );
}

export default App;
