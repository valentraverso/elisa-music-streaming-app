import { Outlet } from "react-router"; 
import { Main } from "../../../Styles/LayoutsStyles/LayoutMainStyle";  
import { SearchBar } from "../Components/SearchBar"; 
import { SideBar } from "../Components/SideBar"; 
import { useState } from "react";
import { playlistsRecomendados } from "./data";


function SearchBarPage() {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [recentSearches, setRecentSearches] = useState([]);

    const handleSearch = (event) => {
        event.preventDefault();
        setRecentSearches([...recentSearches, searchTerm]);
    }

    const handleSearchTermChange = (event) => {
        setSearchTerm(event.target.value);
    }
    return (
        <div>
            <form onSubmit={handleSearch}>
                <input type="text" value={searchTerm} onChange={handleSearchTermChange} />
            </form>
            <div>
                {searchResults.map((result, index) => (
                    <div key={index}>{result}</div>
                ))}
            </div>
            <div>
                Recent searches:
                <ul>
                    {recentSearches.map((search, index) => (
                        <li key={index}>{search}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
export { SearchBarPage }