import { Outlet } from "react-router";
import { Main } from "../../../Styles/LayoutsStyles/GeneralLayoutStyles";
import { SideBar } from "../Components/SideBar";
import { BarLibrary } from "../Components/BarLibrary";
import { useAuth0 } from "@auth0/auth0-react";
import SkeletonLibrary from "./SkeletonLibrary";
import UseWidth from "../../../../helpers/hooks/useWidth";
import MenuDesktop from "../Components/MenuDesktop";

export function LayoutLibrary() {
    const { isLoading } = useAuth0();
    const width = UseWidth({
        0: 'mobile',
        720: 'tablet',
        1024: 'desktop',
    });

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
            {
                isLoading ?
                    <SkeletonLibrary />
                    :
                    <>
                        <BarLibrary />
                        <Outlet />
                    </>
            }
            <SideBar />
        </Main>
    );
}