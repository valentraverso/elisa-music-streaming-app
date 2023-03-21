import { Outlet } from "react-router";
import { Main, Test, Logo } from "../../../Styles/LayoutsStyles/GeneralLayoutStyles";
import { SearchBar } from "../Components/SearchBar";
import { SearchBarDesktop } from "../Components/SearchBarDesktop";
import { SideBar } from "../Components/SideBar";
import UseWidth from "../../../../helpers/hooks/useWidth";


export function LayoutSearch () {

    const width = UseWidth({
        0: 'mobile',
        720: 'tablet',
        1024: 'desktop',
    });
    
    const isMobile = width === 'mobile';
    const isTabletOrAbove = width !== 'mobile';

    return(
        <Main>

            {isMobile && <SearchBar/>}
            <Outlet /> 
            {isTabletOrAbove && 
            <>
            <SearchBarDesktop />
            <SideBar />
            </>
            }
        </Main>    
        );
}