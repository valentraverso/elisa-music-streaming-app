import { Outlet } from "react-router";
import { Main, Test, Logo } from "../../../Styles/LayoutsStyles/LayoutMainStyle/LayoutMainStyle";
import { NavbarMain } from "../Components/NavbarMain";

function LayoutMain(){
    return(
    <Main>
        <NavbarMain />
        <Outlet /> 
            
    </Main>    
    );
}; 

export {LayoutMain};