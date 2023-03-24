import { Outlet } from "react-router";
import { Main } from "../../../Styles/LayoutsStyles/GeneralLayoutStyles";
import { SideBar } from "../Components/SideBar";
import { BarLibrary } from "../Components/BarLibrary";
import { useAuth0 } from "@auth0/auth0-react";
import SkeletonLibrary from "./SkeletonLibrary";
import UseWidth from "../../../../helpers/hooks/useWidth";
import MenuDesktop from "../Components/MenuDesktop";
import { useState } from "react";

export function LayoutLibrary() {
    const [playerInPage, setPlayerInPage] = useState(false)
    const { isLoading } = useAuth0();
    const width = UseWidth();

    if (width === 'desktop') {
        return (
            <>
                <MenuDesktop />
                <Main>
                    <Outlet context={[playerInPage, setPlayerInPage]}/>
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
                        <Outlet context={[playerInPage, setPlayerInPage]} />
                    </>
            }
            <SideBar />
        </Main>
    );
}