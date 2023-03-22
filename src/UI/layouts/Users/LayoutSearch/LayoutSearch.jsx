import { Outlet } from "react-router";
import { Main, Test, Logo } from "../../../Styles/LayoutsStyles/LayoutMainStyle";
import { SearchBar } from "../Components/SearchBar";
import { SearchBarDesktop } from "../Components/SearchBarDesktop";
import { SideBar } from "../Components/SideBar";
import UseWidth from "../../../../helpers/hooks/useWidth";
import { thresholds } from "../../../../helpers/threshold";
import { SearchBarPage } from "./SearchPage";



function LayoutSearch() {
    const width = UseWidth(thresholds);
    
    const isMobile = width === 'mobile';
    const isTabletOrAbove = width !== 'mobile';
  
    return(
      <Main>
        <SearchBarPage />
        {isMobile && <SearchBar/>}
        <Outlet /> 
        {isTabletOrAbove && 
        <>
          
         
        </>
        }
      </Main>    
    );
  }
  
  export { LayoutSearch };