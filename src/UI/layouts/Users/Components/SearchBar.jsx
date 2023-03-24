import { SearchBarContainer, SearchBarIcon, SearchBarInput, IconSearch } from "../../../Styles/LayoutsStyles/SearchBarStyle"
import { Main } from "../../../Styles/LayoutsStyles/NavbarStyle"
import { colors } from "../../../Styles/config"
import { useRef, } from "react"
import { useParams } from "react-router-dom"

export function SearchBar ({handleSearchQuery}){
    const searchInput = useRef(null);
    const {query}= useParams();
    const handleSearch = () =>{
        handleSearchQuery(searchInput.current.value)
    }
    return(
        <Main>
        <SearchBarContainer>
            <SearchBarIcon><IconSearch stroke={colors.black} fill={colors.black}/></SearchBarIcon>
            <SearchBarInput ref= {searchInput} type='text' onChange={handleSearch} value={query}/>
        </SearchBarContainer>
        </Main>
    )
}