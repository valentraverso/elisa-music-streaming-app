import { Outlet } from "react-router";
import { Main } from "../../../Styles/LayoutsStyles/GeneralLayoutStyles";
import { SideBar } from "../Components/SideBar";
import { BarLibrary } from "../Components/BarLibrary";
import { useAuth0 } from "@auth0/auth0-react";
import SkeletonLibrary from "./SkeletonLibrary";
import UseWidth from "../../../../helpers/hooks/useWidth";
import MenuDesktop from "../Components/MenuDesktop";
import MenuDesktopSkeleton from "../Components/Skeletons/MenuDesktopSkeleton";

export function LayoutLibrary() {
    const { isLoading: isLoadingAuth0 } = useAuth0();
    const width = UseWidth();

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
                            <SkeletonLibrary />
                            :
                            <BarLibrary />
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
}