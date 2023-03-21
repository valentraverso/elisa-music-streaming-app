import { Outlet } from "react-router";
import { Main } from "../../../Styles/LayoutsStyles/LayoutMainStyle";
import { NavbarMain } from "../Components/NavbarMain";
import { SideBar } from "../Components/SideBar";
import UseWidth from "../../../../helpers/hooks/useWidth";
import { Navigate } from "react-router";


function LayoutMain(){
    const width = UseWidth({
        0: 'mobile',
        720: 'tablet',
        1024: 'desktop',
    });
    
    const isMobile = width === 'mobile';
    const isTabletOrAbove = width !== 'mobile';

    return(
        <Main>
            {isTabletOrAbove && <SideBar />}
            {isMobile && <NavbarMain />}
            <Outlet />
        </Main>    
    );
}; 


export {LayoutMain};
