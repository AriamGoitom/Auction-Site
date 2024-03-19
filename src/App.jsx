import React from "react";
import Auktioner from "./components/Auctions";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import AddAuction from "./components/AddAuction";

function App() {
  return (
    <>
      <AddAuction />
      <Routes>
        <Route path="/" exact component={Auktioner} />
        {/* TODO: Lägg till AddAuction som en Route sen */}
        {/* <Route path="/auktion/:id" component={AuktionDetaljer} /> */}
      </Routes>
    </>
  );
}

export default App;
