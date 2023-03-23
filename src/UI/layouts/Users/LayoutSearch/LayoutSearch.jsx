import { Outlet } from "react-router";
import { Main, Test, Logo } from "../../../Styles/LayoutsStyles/GeneralLayoutStyles";
import { SearchBar } from "../Components/SearchBar";
import { SideBar } from "../Components/SideBar";
import UseWidth from "../../../../helpers/hooks/useWidth";

import MenuDesktop from "../Components/MenuDesktop";


export function LayoutSearch() {

  const width = UseWidth();

if (width==="desktop"){
  return(
    <>
    <MenuDesktop search />
    <Main>
    <Outlet/>
    </Main>
    </>
  )
}

  return (
    <Main>
      <SearchBar />
      <Outlet />
      <SideBar />
    </Main>
  );
}