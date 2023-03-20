import { Outlet } from "react-router";
import { Main} from "../../../Styles/LayoutsStyles/LayoutMainStyle/LayoutMainStyle";
import { SideBar } from "../Components/SideBar";


export function LayoutLibrary () {
    return(
        <Main>
            <BarLibrary/>
            <Outlet /> 
            <SideBar />
        </Main>    
        );
}