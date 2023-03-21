import { Outlet } from "react-router";
import useWidth from "../../../../helpers/hooks/useWidth";
import { Main, Test, Logo } from "../../../Styles/LayoutsStyles/LayoutMainStyle";
import { SearchBar } from "../Components/SearchBar";
import { SideBar } from "../Components/SideBar";
import LayoutMenuDesktopSearch from "../LayoutMenuDesktop/LayoutMenuDesktopSearch";


export function LayoutSearch () {
    const width = useWidth();

    if(width > 720){
        return (
            <LayoutMenuDesktopSearch />
        )
    }
    
    return(
        <Main>
            <SearchBar/>
            <Outlet /> 
            <SideBar />
        </Main>    
        );
}