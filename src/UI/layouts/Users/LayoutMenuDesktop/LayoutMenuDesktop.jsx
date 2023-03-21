import { Outlet } from "react-router";
import { Main } from "../../../Styles/LayoutsStyles/LayoutMainStyle";
import MenuDesktop from "../Components/MenuDesktop";

export default function LayoutMenuDesktop() {
    return (
        <Main>
            <MenuDesktop />
            <Outlet />
        </Main>
    )
}
