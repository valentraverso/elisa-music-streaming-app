import { Main, Logo, LogoLetters, StyledLink, Navbar, LogoContainer } from "../../../../Styles/LayoutsStyles/NavbarStyle";
import { SideBarContainer, IconsContainer } from '../../../../Styles/LayoutsStyles/SideBarStyle'
import { BiHomeAlt2, BiSearch, BiLibrary } from "react-icons/bi";
import { Link, NavLink } from 'react-router-dom';
import { IconAddAlbum, IconSettings, IconAvatar, ContainerIconsMenuLibrary, UserAvatar } from "../../../../Styles/LayoutsStyles/BarLibraryStyle";
import { Skeleton } from "@mui/material";
import { links } from "../../../../config.links";
import { SearchBarContainer, SearchBarIcon, SearchBarInput, IconSearch } from "../../../../Styles/LayoutsStyles/SearchBarStyle"
import { colors } from "../../../../Styles/config";

export default function MenuDesktopSkeleton({ search = false }) {

    return (
        <Main>
            <Navbar>
                <Skeleton sx={{ bgcolor: '#FAF8F6' }} height={70}>
                    <StyledLink to={"/"}>
                        <LogoContainer>
                            <Logo src="/assets/images/logos/logo.webp" />
                            <LogoLetters>Elisa</LogoLetters>
                        </LogoContainer>
                    </StyledLink>
                </Skeleton>
                <SideBarContainer>
                    <IconsContainer>
                        <NavLink to="/">
                            <Skeleton sx={{ bgcolor: '#FAF8F6' }}>
                                <BiHomeAlt2 />
                            </Skeleton>
                        </NavLink>
                        {
                            search ?
                                <SearchBarContainer>
                                    <SearchBarIcon><IconSearch stroke={colors.black} fill={colors.black} /></SearchBarIcon>
                                    <SearchBarInput />
                                </SearchBarContainer>
                                :
                                <NavLink to="/search">
                                    <Skeleton sx={{ bgcolor: '#FAF8F6' }}>
                                    <BiSearch />
                                    </Skeleton>
                                </NavLink>
                        }

                        <NavLink to={links.library}>
                            <Skeleton sx={{ bgcolor: '#FAF8F6' }}>
                                <BiLibrary />
                            </Skeleton>
                        </NavLink>
                    </IconsContainer>
                </SideBarContainer>
                <ContainerIconsMenuLibrary>
                    <Link to={links.settings}>
                        <Skeleton sx={{ bgcolor: '#FAF8F6' }}>
                            <IconSettings />
                        </Skeleton>
                    </Link>
                    <Link to={links.upload}>
                        <Skeleton sx={{ bgcolor: '#FAF8F6' }}>
                            <IconAddAlbum />
                        </Skeleton>
                    </Link>
                    <Link to={links.profile}>
                        <IconAvatar>
                            <Skeleton sx={{ bgcolor: '#FAF8F6' }}>
                                <UserAvatar />
                            </Skeleton>
                        </IconAvatar>
                    </Link>
                </ContainerIconsMenuLibrary>
            </Navbar>
        </Main>
    )
}