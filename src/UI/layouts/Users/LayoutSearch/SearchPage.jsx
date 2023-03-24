import { Main } from "../../../Styles/LayoutsStyles/GeneralLayoutStyles";
import { ResultsNotFound, SearchBarContainer, SearchBarIcon, SearchBarInput, IconSearch, RecentSearch, RecentSearchListContainer, RecentSearchListElements } from "../../../Styles/LayoutsStyles/SearchBarStyleDesktop";
import { SideBar } from "../Components/SideBar"; 
import { useState, useEffect } from "react";
import { playlistsRecomendados2 } from "./data";

function SearchBarPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [recentSearches, setRecentSearches] = useState([]);

  const handleSearch = (event) => {
    event.preventDefault();
    if (searchTerm.trim() !== "") {
      setRecentSearches([...recentSearches, searchTerm]);
      setSearchResults(
        playlistsRecomendados2.filter((playlist) =>
          playlist.cancion.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }
  };

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    if (searchTerm.trim() === "") {
      setSearchResults([]);
    }
  }, [searchTerm]);

  return (
    <Main>
      <SideBar />
      <SearchBarContainer>
        <form onSubmit={handleSearch}>
          <SearchBarInput value={searchTerm} onChange={handleSearchTermChange} placeholder="Search" />
          <SearchBarIcon type="submit">
            <IconSearch />
          </SearchBarIcon>
        </form>
  </SearchBarContainer>
    
        {searchTerm.trim() === "" && recentSearches.length > 0 && (
          <RecentSearch>
            Recent searches: 
            <RecentSearchListContainer>
              {recentSearches.map((search, index) => (
                <RecentSearchListElements key={index}>{search}</RecentSearchListElements>
              ))}
            </RecentSearchListContainer>
          </RecentSearch>
        )}
  
        {searchResults.length > 0 ? (
          <RecentSearchListContainer>
            {searchResults.map((playlist) => (
              <RecentSearchListElements key={playlist.id}>{playlist.cancion}</RecentSearchListElements>
            ))}
          </RecentSearchListContainer>
        ) : (
          searchTerm.trim() !== "" && <ResultsNotFound>No se encontraron resultados</ResultsNotFound>
        )}
    </Main>
  );
}

export { SearchBarPage };
