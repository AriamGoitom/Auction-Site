{
  /*import React, { useState, useEffect } from "react";

const SearchBar = ({ icon }) => {
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [data, setData] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

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

  const handleSearch = (e) => {
    e.preventDefault();

    // Filtrera auktioner baserat på användarens inmatning
    const filteredAuctions = data.filter((item) => {
      return item.Title.toLowerCase().includes(searchTerm.toLowerCase());
    });

    setSearchResults(filteredAuctions);

    setSearchTerm("");
  };

  if (loading) {
    return <div>Sidan laddar...</div>;
  }

  return (
    <div>
      <div className=" border-b-[1px] border-black flex items-center px-2 w-[200px] sm:w-[w-400px] lg:w-[500px]">
        <span className="mr-2">{icon}</span>
        <form onSubmit={handleSearch}>
          <input
            className="bg-transparent p-2 w-full focus:outline-none"
            type="text"
            placeholder="Sök auktioner här..."
            onChange={(e) => setSearchTerm(e.target.value)}
            value={searchTerm}
          />
        </form>
      </div>

      {searchResults.length > 0 && (
        <div>
          {searchResults.map((item) => (
            <div key={item.AuctionID}>
              <h2 className="font-bold text-xl">{item.Title}</h2>
              <p>Beskrivning: {item.Description}</p>
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
*/
}
