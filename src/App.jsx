import React from "react";
import Auktioner from "./components/Auctions";
import { BrowserRouter as Switch, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={Auktioner} />
      </Routes>
    </>
  );
}

export default App;
