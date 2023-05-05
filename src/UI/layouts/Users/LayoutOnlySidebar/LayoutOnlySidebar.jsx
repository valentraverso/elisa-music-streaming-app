import { SideBar } from "../Components/SideBar";
import UseWidth from "../../../../utils/hooks/useWidth";
import { Outlet } from "react-router-dom";
import { Main } from "../../../Styles/LayoutsStyles/GeneralLayoutStyles";
import MenuDesktop from "../Components/MenuDesktop";

export function LayoutOnlySidebar() {
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
        <>
            <Main>
                <Outlet />
            </Main>
            <SideBar />
        </>
    )

}