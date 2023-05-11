import { Outlet } from "react-router";
import { Main } from "../../../Styles/LayoutsStyles/GeneralLayoutStyles";
import { NavbarMain } from "../Components/NavbarMain";
import { SideBar } from "../Components/SideBar";
import UseWidth from "../../../../helpers/hooks/useWidth";
import MenuDesktop from "../Components/MenuDesktop";
import { useAuth0 } from "@auth0/auth0-react";
import MenuDesktopSkeleton from "../Components/Skeletons/MenuDesktopSkeleton";

function LayoutMain() {
    const width = UseWidth();
    const { isLoading: isLoadingAuth0 } = useAuth0();

    return (
        <>
            {
                width === 'desktop' &&
                (
                    isLoadingAuth0 ?
                        <MenuDesktopSkeleton />
                        :
                        <MenuDesktop />
                )
            }
            <Main>
                {
                    width !== 'desktop' &&
                    (
                        isLoadingAuth0 ?
                            <span>Loading mai</span>
                            :
                            <NavbarMain />
                    )
                }
                <Outlet />
                {
                    width !== 'desktop' &&
                    (
                        <SideBar />
                    )
                }
            </Main>
        </>
    );
};


export { LayoutMain };
