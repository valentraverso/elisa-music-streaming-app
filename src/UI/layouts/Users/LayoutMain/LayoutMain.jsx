import { Outlet } from "react-router";
import { Main } from "../../../Styles/LayoutsStyles/GeneralLayoutStyles";
import { NavbarMain } from "../Components/NavbarMain";
import { SideBar } from "../Components/SideBar";
import UseWidth from "../../../../helpers/hooks/useWidth";
import { CategoryeButtons } from "../Components/HomeComponents/CategoryButtons";
import MenuDesktop from "../Components/MenuDesktop";


function LayoutMain() {
    const width = UseWidth();

    if (width === 'desktop') {
        return (
            <>
                <MenuDesktop />
                <Main>
                    <CategoryeButtons />
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
