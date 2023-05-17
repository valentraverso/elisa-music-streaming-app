import { Outlet, useNavigate } from "react-router";
import { Main } from "../../../Styles/LayoutsStyles/GeneralLayoutStyles";
import { SearchBar } from "../Components/SearchBar";
import { SideBar } from "../Components/SideBar";
import UseWidth from "../../../../helpers/hooks/useWidth";
import MenuDesktop from "../Components/MenuDesktop";
import { useAuth0 } from "@auth0/auth0-react";
import MenuDesktopSkeleton from "../Components/Skeletons/MenuDesktopSkeleton";


export function LayoutSearch() {
  const navigate = useNavigate();
  const width = UseWidth();
  const { isLoading: isLoadingAuth0 } = useAuth0();

  const handleSearchQuery = (value) => {
    if (value.length <= 2) {
      navigate('/search')
      return
    }
    navigate('/search/songs/' + value)
  }



  if (width === "desktop") {
    return (
      <>
        {
          isLoadingAuth0 ?
            <MenuDesktopSkeleton />
            :
            <MenuDesktop search handleSearchQuery={(value) => handleSearchQuery(value)} />
        }
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
