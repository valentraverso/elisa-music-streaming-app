import { Main, Logo, LogoLetters, StyledLink, Navbar, LogoContainer } from "../../../Styles/LayoutsStyles/NavbarStyle";
import { SideBarContainer, IconsContainer } from '../../../Styles/LayoutsStyles/SideBarStyle'
import { BiHomeAlt2, BiSearch, BiLibrary } from "react-icons/bi";
import { Link, NavLink } from 'react-router-dom';
import { IconAddAlbum, IconSettings, IconAvatar, ContainerIconsMenuLibrary, UserAvatar } from "../../../Styles/LayoutsStyles/BarLibraryStyle";
import { useAuth0 } from "@auth0/auth0-react";
import { links } from "../../../config.links";
import { SearchBarContainer, SearchBarIcon, SearchBarInput, IconSearch } from "../../../Styles/LayoutsStyles/SearchBarStyle"
import { colors } from "../../../Styles/config";

export default function MenuDesktop({ search = false }) {
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
                        {
                            search ?
                                <SearchBarContainer>
                                    <SearchBarIcon><IconSearch stroke={colors.black} fill={colors.black} /></SearchBarIcon>
                                    <SearchBarInput />
                                </SearchBarContainer>
                                :
                                <NavLink to="/search">
                                    <BiSearch />
                                </NavLink>
                        }

                        <NavLink to={links.library}>
                            <BiLibrary />
                        </NavLink>
                    </IconsContainer>
                </SideBarContainer>
                <ContainerIconsMenuLibrary>
                    <Link to={links.settings}>
                        <IconSettings />
                    </Link>
                    <Link to={links.upload}>
                        <IconAddAlbum />
                    </Link>
                    <Link to={links.profile}>
                        <IconAvatar>
                            <UserAvatar src={user?.picture} />
                        </IconAvatar>
                    </Link>
                </ContainerIconsMenuLibrary>
            </Navbar>
        </Main>
    )
}