import { SearchBarContainer, SearchBarIcon, SearchBarInput, IconSearch } from "../../../Styles/LayoutsStyles/LayoutMainStyle/SearchBarStyle"
import { Main } from "../../../Styles/LayoutsStyles/LayoutMainStyle/NavbarStyle"

export function SearchBar (){
    return(
        <Main>
        <SearchBarContainer>
            <SearchBarIcon><IconSearch/></SearchBarIcon>
            <SearchBarInput/>
        </SearchBarContainer>
        </Main>
    )
}