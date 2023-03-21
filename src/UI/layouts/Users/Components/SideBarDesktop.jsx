import React from 'react'
import { SideBarContainerDesktop, IconsContainer } from '../../../Styles/LayoutsStyles/SideBarStyle'
import { BiHomeAlt2, BiSearch, BiLibrary } from "react-icons/bi";
import { NavLink } from 'react-router-dom';
import { BarLibraryDesktop } from './BarLibraryDesktop';
import { useAuth0 } from "@auth0/auth0-react";

export const SideBarDesktop = () => {
    const {user: {picture}} = useAuth0();
    return (
        
        <SideBarContainerDesktop>
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
        </SideBarContainerDesktop>
        
    )
}