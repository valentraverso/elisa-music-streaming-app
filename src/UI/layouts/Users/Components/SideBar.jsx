import React from 'react'
import { SideBarContainer, IconsContainer } from '../../../Styles/LayoutsStyles/LayoutMainStyle/SideBarStyle'
import { BiHomeAlt2, BiSearch, BiLibrary } from "react-icons/bi";
import { NavLink } from 'react-router-dom';

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
                <NavLink to="/library">
                    <BiLibrary />
                </NavLink>
            </IconsContainer>
        </SideBarContainer>
    )
}
