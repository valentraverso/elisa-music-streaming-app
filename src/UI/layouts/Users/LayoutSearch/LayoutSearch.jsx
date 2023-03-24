import { Outlet } from "react-router";
import { Main, Test, Logo } from "../../../Styles/LayoutsStyles/GeneralLayoutStyles";
import { SearchBar } from "../Components/SearchBar";
import { SideBar } from "../Components/SideBar";
import UseWidth from "../../../../helpers/hooks/useWidth";
import useSearch from "../../../../helpers/hooks/useSearch";
import MenuDesktop from "../Components/MenuDesktop";
import { SearchProvider } from "../../../../context/SearchContext";


export function LayoutSearch() {

  const width = UseWidth();
  const [query,setQuery]= useSearch();

  const handleSearchQuery = (value) =>{
    setQuery(value)
  }
  if (width === "desktop") {
    return (
      <SearchProvider>
        <MenuDesktop search />
        <Main>
          <Outlet />
        </Main>
      </SearchProvider>
    )
  }

  return (
    <Main>
      <SearchProvider>
        <SearchBar handleSearchQuery= {handleSearchQuery}/>
        <Outlet />
      </SearchProvider>
      <SideBar />
    </Main>
  );
}