import { Outlet } from "react-router";
import { Main } from "../../../Styles/LayoutsStyles/LayoutMainStyle";
import MenuDesktopSearch from "../Components/MenuDesktopSearch";

export default function LayoutMenuDesktopSearch() {
    return (
        <Main>
            <MenuDesktopSearch />
            <Outlet />
        </Main>
    )
}
