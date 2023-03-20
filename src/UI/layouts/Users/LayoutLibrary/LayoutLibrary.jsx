import { Outlet } from "react-router";
import { Main} from "../../../Styles/LayoutsStyles/LayoutMainStyle";
import { SideBar } from "../Components/SideBar";
import { BarLibrary } from "../Components/BarLibrary";


export function LayoutLibrary () {
    return(
        <Main>
            <BarLibrary/>
            <Outlet /> 
            <SideBar />
        </Main> 
        );
}