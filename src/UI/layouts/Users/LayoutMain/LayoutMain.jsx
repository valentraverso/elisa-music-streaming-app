import { Outlet } from "react-router";
import { Main } from "../../../Styles/LayoutsStyles/GeneralLayoutStyles";
import { NavbarMain } from "../Components/NavbarMain";
import { NavbarDesktop } from "../Components/NavbarDesktop";
import { SideBar } from "../Components/SideBar";
import { SideBarDesktop } from "../Components/SideBarDesktop";
import useWidth from "../../../../helpers/hooks/useWidth";
import { CategoryeButtons } from "../../../pages/users/Home/HomeComponents/CategoryButtons";
import { BarLibraryDesktop } from "../Components/BarLibraryDesktop";


function LayoutMain(){
   const width = useWidth();
    

    return(
        <Main>
            {width !== "mobile" &&(
            <>
            <NavbarDesktop />
            <BarLibraryDesktop />
            <SideBarDesktop />
            </>
            )}

            
            {width === "mobile" && (
            <>
             <NavbarMain />
            <SideBar />
            <CategoryeButtons />
            
            </>
           ) }

            <Outlet />
        </Main>    
    );
}; 


export {LayoutMain};
