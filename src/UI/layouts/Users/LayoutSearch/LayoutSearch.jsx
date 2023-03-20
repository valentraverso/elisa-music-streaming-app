import { Outlet } from "react-router";
import { Main, Test, Logo } from "../../../Styles/LayoutsStyles/LayoutMainStyle/LayoutMainStyle";
import { SearchBar } from "../Components/SearchBar";
import { SideBar } from "../Components/SideBar";


export function LayoutSearch () {
    return(
        <Main>
            <SearchBar/>
            <Outlet /> 
            <SideBar />
        </Main>    
        );
}