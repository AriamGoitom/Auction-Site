import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Auktioner = () => {
  const [auktioner, setAuktioner] = useState([]);

  useEffect(() => {
    const hämtaAuktioner = async () => {
      const response = await fetch(
        "https://auctioneer.azurewebsites.net/auction/group1"
      );
      const data = await response.json();
      setAuktioner(data);
    };

    hämtaAuktioner();
  }, []);

  return (
    <div>
      <h1>Auctions</h1>
      <ul>
        {auktioner.map((auktion) => (
          <li key={auktion.id}></li>
        ))}
      </ul>
    </div>
  );
};

export default Auktioner;
