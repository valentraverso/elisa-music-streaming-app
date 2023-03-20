import { SearchBarContainer, SearchBarIcon, SearchBarInput, IconSearch } from "../../../Styles/LayoutsStyles/SearchBarStyle"
import { Main } from "../../../Styles/LayoutsStyles/NavbarStyle"

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