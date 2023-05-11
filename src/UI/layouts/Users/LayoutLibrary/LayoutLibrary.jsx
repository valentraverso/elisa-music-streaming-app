import { Outlet } from "react-router";
import { Main } from "../../../Styles/LayoutsStyles/GeneralLayoutStyles";
import { SideBar } from "../Components/SideBar";
import { BarLibrary } from "../Components/BarLibrary";
import { useAuth0 } from "@auth0/auth0-react";
import SkeletonLibrary from "./SkeletonLibrary";
import UseWidth from "../../../../helpers/hooks/useWidth";
import MenuDesktop from "../Components/MenuDesktop";
import MenuDesktopSkeleton from "../Components/Skeletons/MenuDesktopSkeleton";
import OutletSongPlayer from "../OutletSongPlayer.jsx/OutletSongPlayer";

export function LayoutLibrary() {
    const { isLoading: isLoadingAuth0 } = useAuth0();
    const width = UseWidth();

    if (width === 'desktop') {
        return (
            <>
                 {
                    isLoadingAuth0 ?
                        <MenuDesktopSkeleton />
                        :
                        <MenuDesktop />
                }
                <Main>
                    <OutletSongPlayer />
                </Main>
            </>
        )
    }


    return (
        <Main>
            {
                isLoadingAuth0 ?
                    <SkeletonLibrary />
                    :
                    <>
                        <BarLibrary />
                        <OutletSongPlayer />
                    </>
            }
            <SideBar />
        </Main>
    );
}