import { Outlet } from "react-router";
import { Main } from "../../../Styles/LayoutsStyles/GeneralLayoutStyles";
import { NavbarMain } from "../Components/NavbarMain";
import { SideBar } from "../Components/SideBar";
import UseWidth from "../../../../utils/hooks/useWidth";
import MenuDesktop from "../Components/MenuDesktop";
import { useAuth0 } from "@auth0/auth0-react";
import MenuDesktopSkeleton from "../Components/Skeletons/MenuDesktopSkeleton";


function LayoutOnlyMenu() {
    const { isLoading: isLoadingAuth0 } = useAuth0();

    return (
        <Main>
            <NavbarMain />
            <Outlet />
        </Main>
    );
};


export { LayoutOnlyMenu };
