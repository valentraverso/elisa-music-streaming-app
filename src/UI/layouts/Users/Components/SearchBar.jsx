import { SearchBarContainer, SearchBarIcon, SearchBarInput } from "../../../Styles/LayoutsStyles/LayoutMainStyle/SearchBarStyle"
import { BiSearch } from "react-icons/bi"
import { Main } from "../../../Styles/LayoutsStyles/LayoutMainStyle/NavbarStyle"

export function SearchBar (){
    return(
        <Main>
        <SearchBarContainer>
            <SearchBarIcon><BiSearch/></SearchBarIcon>
            <SearchBarInput/>
        </SearchBarContainer>
        </Main>
    )
}