import { Main } from "../../../Styles/LayoutsStyles/LayoutMainStyle";  
import { SearchBar } from "../Components/SearchBar"; 
import { SideBar } from "../Components/SideBar"; 
import { useState, useEffect } from "react";
import { playlistsRecomendados } from "./data";

function SearchBarPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [recentSearches, setRecentSearches] = useState([]);

  const handleSearch = (event) => {
    event.preventDefault();
    setRecentSearches([...recentSearches, searchTerm]);
  };

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    const filteredResults = playlistsRecomendados.filter((playlist) =>
      playlist.cancion.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(filteredResults);
  }, [searchTerm]);

  return (
    <Main>
      <SideBar />
      <div>
        <input value={searchTerm} onChange={handleSearchTermChange} onSubmit={handleSearch} />
        <div>
          Recent searches: 
          <ul>
            {recentSearches.map((search, index) => (
              <li key={index}>{search}</li>
            ))}
          </ul>
        </div>
        {searchResults.length > 0 ? (
          <ul>
            {searchResults.map((playlist) => (
              <li key={playlist.id}>{playlist.cancion}</li>
            ))}
          </ul>
        ) : (
          <p>No se encontraron resultados</p>
        )}
      </div>
    </Main>
  );
}

export { SearchBarPage };