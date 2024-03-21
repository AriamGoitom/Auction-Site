import React from "react";
import Auktioner from "./components/Auctions";
import { BrowserRouter as Switch, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import SearchResults from "./components/SearchResults";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={Auktioner} />
        <Route path="/searchresult" element={<SearchResults />} />
      </Routes>
    </>
  );
}

export default App;
