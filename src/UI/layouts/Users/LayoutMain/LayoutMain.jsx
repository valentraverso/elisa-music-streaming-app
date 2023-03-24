import { Outlet } from "react-router";
import { Main } from "../../../Styles/LayoutsStyles/GeneralLayoutStyles";
import { NavbarMain } from "../Components/NavbarMain";
import { NavbarDesktop } from "../Components/NavbarDesktop";
import { SideBar } from "../Components/SideBar";
import { SideBarDesktop } from "../Components/SideBarDesktop";
import UseWidth from "../../../../helpers/hooks/useWidth";
import { CategoryeButtons } from "../Components/HomeComponents/CategoryButtons";
import { BarLibraryDesktop } from "../Components/BarLibraryDesktop";
import MenuDesktop from "../Components/MenuDesktop";


function LayoutMain() {
    const width = UseWidth();

    if (width === 'desktop') {
        return (
            <>
                <MenuDesktop />
                <Main>
                    <Outlet />
                </Main>
            </>
        )
    }

    return (
        <Main>
            <NavbarMain />
            <CategoryeButtons />
            <Outlet />
            <SideBar />
        </Main>
    );
};


export { LayoutMain };
