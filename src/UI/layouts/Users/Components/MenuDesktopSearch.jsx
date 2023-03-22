import { Main, Logo, LogoLetters, StyledLink, Navbar, LogoContainer } from "../../../Styles/LayoutsStyles/NavbarStyle";
import { SideBarContainer, IconsContainer } from '../../../Styles/LayoutsStyles/SideBarStyle'
import { SearchBarContainer, SearchBarIcon, SearchBarInput, IconSearch } from "../../../Styles/LayoutsStyles/SearchBarStyle"
import { BiHomeAlt2, BiSearch, BiLibrary } from "react-icons/bi";
import { NavLink } from 'react-router-dom';
import { IconAddAlbum, IconSettings, IconAvatar, ContainerIconsMenuLibrary, UserAvatar } from "../../../Styles/LayoutsStyles/BarLibraryStyle";
import { useAuth0 } from "@auth0/auth0-react";
import { colors } from "../../../Styles/config";

export default function MenuDesktopSearch() {
    const { user } = useAuth0();

    return (
        <Main>
            <Navbar>
                <StyledLink to={"/"}>
                    <LogoContainer>
                        <Logo src="/assets/images/logos/logo.webp" />
                        <LogoLetters>Elisa PC</LogoLetters>
                    </LogoContainer>
                </StyledLink>
                <SideBarContainer>
                    <IconsContainer>
                        <NavLink to="/">
                            <BiHomeAlt2 />
                        </NavLink>
                        
                            <SearchBarContainer>
                                <SearchBarIcon><IconSearch stroke={colors.black} fill={colors.black} /></SearchBarIcon>
                                <SearchBarInput />
                            </SearchBarContainer>
                        
                        <NavLink to="/library">
                            <BiLibrary />
                        </NavLink>
                    </IconsContainer>
                </SideBarContainer>
                <ContainerIconsMenuLibrary>
                    <IconSettings />
                    <IconAddAlbum />
                    <IconAvatar>
                        <UserAvatar src={user?.picture} />
                    </IconAvatar>
                </ContainerIconsMenuLibrary>
            </Navbar>
        </Main>
    )
}