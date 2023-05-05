import { Outlet } from "react-router";
import { Main } from "../../../Styles/LayoutsStyles/GeneralLayoutStyles";
import { SideBar } from "../Components/SideBar";
import { BarLibrary } from "../Components/BarLibrary";
import { useAuth0 } from "@auth0/auth0-react";
import SkeletonLibrary from "./SkeletonLibrary";
import UseWidth from "../../../../utils/hooks/useWidth";
import MenuDesktop from "../Components/MenuDesktop";
import { useState } from "react";
import MenuDesktopSkeleton from "../Components/Skeletons/MenuDesktopSkeleton";

export function LayoutLibrary() {
    const [playerInPage, setPlayerInPage] = useState(false)
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
                    <Outlet context={[playerInPage, setPlayerInPage]}/>
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
                        <Outlet context={[playerInPage, setPlayerInPage]} />
                    </>
            }
            <SideBar />
        </Main>
    );
}