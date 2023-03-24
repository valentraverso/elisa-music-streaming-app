import { Outlet, useNavigate } from "react-router";
import { Main, Test, Logo } from "../../../Styles/LayoutsStyles/GeneralLayoutStyles";
import { SearchBar } from "../Components/SearchBar";
import { SideBar } from "../Components/SideBar";
import UseWidth from "../../../../helpers/hooks/useWidth";
import MenuDesktop from "../Components/MenuDesktop";


export function LayoutSearch() {
  const navigate = useNavigate();
  const width = UseWidth();

  const handleSearchQuery = (value) => {
    if (value.length <= 2) {
      navigate('/search')
    } else {
      navigate('/search/songs/' + value)
    }
  }
  if (width === "desktop") {
    return (
      <>
        <MenuDesktop search />
        <Main>
          <Outlet />
        </Main>
      </>
    )
  }

  return (
    <Main>
      <SearchBar handleSearchQuery={(value) => handleSearchQuery(value)} />
      <Outlet />
      <SideBar />
    </Main>
  );
}