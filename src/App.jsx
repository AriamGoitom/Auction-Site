import React from 'react'
import Auctions from './components/Auctions'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AuctionsDetails from './components/AuctionsDetails';
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Auctions />} />
        <Route path="/auktion/:id" element={<AuctionsDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
