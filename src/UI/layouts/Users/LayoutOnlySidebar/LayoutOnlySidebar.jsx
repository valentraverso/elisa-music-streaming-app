import { SideBar } from "../Components/SideBar";
import UseWidth from "../../../../helpers/hooks/useWidth";
import { Outlet } from "react-router-dom";

export function LayoutOnlySidebar() {
    const width = UseWidth({
        0: 'mobile',
        720: 'tablet',
        1024: 'desktop',
    });

    const isMobile = width === 'mobile';
    const isTabletOrAbove = width !== 'mobile';


    if (isMobile) {
        return (
            <>
                <Outlet />
                <SideBar />
            </>
        )
    }
}