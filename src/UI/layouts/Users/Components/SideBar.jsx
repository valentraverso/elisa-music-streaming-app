import React from 'react'
import { SideBarContainer, IconsContainer } from '../../../Styles/LayoutsStyles/SideBarStyle'
import { BiHomeAlt2, BiSearch, BiLibrary } from "react-icons/bi";
import { NavLink } from 'react-router-dom';
import { links } from '../../../config.links';

export const SideBar = () => {
    return (
        <SideBarContainer>
            <IconsContainer>
                <NavLink to="/">
                    <BiHomeAlt2 />
                </NavLink>
                <NavLink to="/search">
                    <BiSearch />
                </NavLink>
                <NavLink to={links.library}>
                    <BiLibrary />
                </NavLink>
            </IconsContainer>
        </SideBarContainer>
    )
}
