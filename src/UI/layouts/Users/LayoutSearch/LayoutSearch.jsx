import { Outlet, useNavigate } from "react-router";
import { Main } from "../../../Styles/LayoutsStyles/GeneralLayoutStyles";
import { SearchBar } from "../Components/SearchBar";
import { SideBar } from "../Components/SideBar";
import UseWidth from "../../../../utils/hooks/useWidth";
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
    } else {
      navigate('/search/songs/' + value)
    }
  }

  if (width === "desktop") {
    return (
      <>
        {
          isLoadingAuth0 ?
            <MenuDesktopSkeleton />
            :
            <MenuDesktop search />
        }
        <Main>
          <Outlet />
        </Main>
      </>
    )
  }
  const handleSearchQueryDesktop = (value) => {
    if(value.length <= 2) {
      navigate('/search/songs/' + value)
    }
  }
  return (
    <Main>
      <SearchBar handleSearchQuery={(value) => handleSearchQuery(value)} />
      <Outlet />
      <SideBar />
    </Main>
  );
}