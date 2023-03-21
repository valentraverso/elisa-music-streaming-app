import { Outlet } from "react-router";
import { Main } from "../../../Styles/LayoutsStyles/LayoutMainStyle";
import { SideBar } from "../Components/SideBar";
import { BarLibrary } from "../Components/BarLibrary";
import { useAuth0 } from "@auth0/auth0-react";

export function LayoutLibrary() {
    const { isLoading } = useAuth0();
    return (
        <Main>
            {
                isLoading ?
                    <p>Loading</p>
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