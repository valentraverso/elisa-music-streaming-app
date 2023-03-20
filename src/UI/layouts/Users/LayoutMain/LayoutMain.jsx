import { Outlet } from "react-router";
import { Main } from "../../../Styles/LayoutsStyles/LayoutMainStyle";
import { NavbarMain } from "../Components/NavbarMain";
import { SideBar } from "../Components/SideBar";


function LayoutMain(){
    return(
    <Main>
        <NavbarMain />
        <Outlet /> 
        <SideBar />
    </Main>    
    );
}; 

export {LayoutMain};
