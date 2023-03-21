import useWidth from "../../../../helpers/hooks/useWidth";
import { Outlet } from "react-router";
import { Main } from "../../../Styles/LayoutsStyles/LayoutMainStyle";
import { SideBar } from "../Components/SideBar";
import { BarLibrary } from "../Components/BarLibrary";
import { useAuth0 } from "@auth0/auth0-react";
import SkeletonLibrary from "./SkeletonLibrary";
import LayoutMenuDeskop from "../LayoutMenuDesktop/LayoutMenuDesktop";

export function LayoutLibrary() {
    const { isLoading } = useAuth0();
    const width = useWidth();

    if (width > 720) {
        return (
            <LayoutMenuDeskop />
        )
    }

    return (
        <>
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
        </>
    );
}