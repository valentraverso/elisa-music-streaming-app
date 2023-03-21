import { SearchBarContainer, SearchBarIcon, SearchBarInput, IconSearch } from "../../../Styles/LayoutsStyles/SearchBarStyleDesktop"
import { Main } from "../../../Styles/LayoutsStyles/NavbarStyle"
import { colors } from "../../../Styles/config"

export function SearchBarDesktop (){
    return(
        <Main>
        <SearchBarContainer>
            <SearchBarIcon><IconSearch stroke={colors.black} fill={colors.black}/></SearchBarIcon>
            <SearchBarInput/>
        </SearchBarContainer>
        </Main>
    )
}