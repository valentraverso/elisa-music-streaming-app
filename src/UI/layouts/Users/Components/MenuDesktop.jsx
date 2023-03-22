import { Main, Logo, LogoLetters, StyledLink, Navbar, LogoContainer } from "../../../Styles/LayoutsStyles/NavbarStyle";
import { SideBarContainer, IconsContainer } from '../../../Styles/LayoutsStyles/SideBarStyle'
import { BiHomeAlt2, BiSearch, BiLibrary } from "react-icons/bi";
import { Link, NavLink } from 'react-router-dom';
import { IconAddAlbum, IconSettings, IconAvatar, ContainerIconsMenuLibrary, UserAvatar } from "../../../Styles/LayoutsStyles/BarLibraryStyle";
import { useAuth0 } from "@auth0/auth0-react";

export default function MenuDesktop() {
    const { user } = useAuth0();

    return (
        <Main>
            <Navbar>
                <StyledLink to={"/"}>
                    <LogoContainer>
                        <Logo src="/assets/images/logos/logo.webp" />
                        <LogoLetters>Elisa</LogoLetters>
                    </LogoContainer>
                </StyledLink>
                <SideBarContainer>
                    <IconsContainer>
                        <NavLink to="/">
                            <BiHomeAlt2 />
                        </NavLink>
                        <NavLink to="/search">
                            <BiSearch />
                        </NavLink>
                        <NavLink to="/library">
                            <BiLibrary />
                        </NavLink>
                    </IconsContainer>
                </SideBarContainer>
                <ContainerIconsMenuLibrary>
                    <IconSettings />
                    <Link to='/user/upload'>
                        <IconAddAlbum />
                    </Link>
                    <IconAvatar>
                        <UserAvatar src={user?.picture} />
                    </IconAvatar>
                </ContainerIconsMenuLibrary>
            </Navbar>
        </Main>
    )
}