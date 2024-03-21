import React, { useState, useEffect } from "react";

const SearchBar = ({ icon }) => {
  const [loading, setLoading] = useState(true);
  const [input, setInput] = useState("");
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://auctioneer.azurewebsites.net/auction/l6m"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const jsonData = await response.json();
        setData(jsonData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (data.length === 0) {
      return;
    }

    // Filtrera auktioner baserat på användarens inmatning
    const filteredAuctions = data.filter((item) => {
      return item.Title.toLowerCase().includes(input.toLowerCase());
    });

    // Uppdatera tillståndet med de filtrerade auktionerna
    setFilteredData(filteredAuctions);
  };

  if (loading) {
    return <div>Sidan Laddar...</div>;
  }

  return (
    <div>
      <div className=" border-b-[1px] border-black flex items-center px-2 w-[200px] sm:w-[w-400px] lg:w-[500px]">
        <span className="mr-2">{icon}</span>
        <form onSubmit={handleSubmit}>
          <input
            className="bg-transparent p-2 w-full focus:outline-none"
            type="text"
            placeholder="Sök auktioner"
            onChange={(e) => setInput(e.target.value)}
            value={input}
          />
        </form>
      </div>

      {/* Rendera den filtrerade datan endast om sökfältet inte är tomt */}
      {input.trim() !== "" && (
        <div>
          {filteredData.map((item) => (
            <div key={item.AuctionID}>
              <h2>{item.Title}</h2>
              <p>Startdatum: {item.StartDate}</p>
              <p>Slutdatum: {item.EndDate}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
