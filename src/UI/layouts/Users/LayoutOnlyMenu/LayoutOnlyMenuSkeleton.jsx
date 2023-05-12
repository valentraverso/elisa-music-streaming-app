import { Outlet } from "react-router";
import { Main } from "../../../Styles/LayoutsStyles/GeneralLayoutStyles";
import { NavbarMain } from "../Components/NavbarMain";
import { Skeleton } from "@mui/material";


function LayoutOnlyMenuSkeleton() {
    return (
        <>
            <Skeleton>
                <NavbarMain />
            </Skeleton>
            <Main>
                <Outlet />
            </Main>
        </>
    );
};


export { LayoutOnlyMenuSkeleton };
