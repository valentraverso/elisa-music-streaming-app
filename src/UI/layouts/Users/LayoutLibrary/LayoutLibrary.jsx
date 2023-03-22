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