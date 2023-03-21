import { Outlet } from "react-router";
import useWidth from "../../../../helpers/hooks/useWidth";
import { Main } from "../../../Styles/LayoutsStyles/LayoutMainStyle";
import { NavbarMain } from "../Components/NavbarMain";
import { SideBar } from "../Components/SideBar";
import LayoutMenuDesktop from "../LayoutMenuDesktop/LayoutMenuDesktop";

function LayoutMain(){
    const width = useWidth();

    if (width > 720) {
        return (
            <LayoutMenuDesktop/>
        )
    }

    return(
    <Main>
        <NavbarMain />
        <Outlet /> 
        <SideBar />
    </Main>    
    );
}; 

export {LayoutMain};
