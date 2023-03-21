import { Outlet } from "react-router";
import { Main } from "../../../Styles/LayoutsStyles/LayoutMainStyle";
import { NavbarMain } from "../Components/NavbarMain";
import { NavbarDesktop } from "../Components/NavbarDesktop";
import { SideBar } from "../Components/SideBar";
import { SideBarDesktop } from "../Components/SideBarDesktop";
import UseWidth from "../../../../helpers/hooks/useWidth";
import { CategoryeButtons } from "../Components/HomeComponents/CategoryButtons";
import { BarLibraryDesktop } from "../Components/BarLibraryDesktop";


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
            {isTabletOrAbove && 
            <>
            <NavbarDesktop />
            <BarLibraryDesktop />
            <SideBarDesktop />
            </>
            }

            
            {isMobile && 
            <>
             <NavbarMain />
            <SideBar />
            <CategoryeButtons />
            </>
            }

            <Outlet />
        </Main>    
    );
}; 


export {LayoutMain};
