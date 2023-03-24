import { SearchBarContainer, SearchBarIcon, SearchBarInput, IconSearch } from "../../../Styles/LayoutsStyles/SearchBarStyle"
import { Main } from "../../../Styles/LayoutsStyles/NavbarStyle"
import { colors } from "../../../Styles/config"
import { useRef } from "react"

export function SearchBar ({handleSearchQuery}){
    const searchInput = useRef(null);
    
    const handleSearch = () =>{
        console.log(searchInput.current);
    }
    return(
        <Main>
        <SearchBarContainer>
            <SearchBarIcon><IconSearch stroke={colors.black} fill={colors.black}/></SearchBarIcon>
            <SearchBarInput ref= {searchInput} type='text' onChange={handleSearch}/>
        </SearchBarContainer>
        </Main>
    )
}