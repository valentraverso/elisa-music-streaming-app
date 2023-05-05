import { RecentSearch } from "./components/RecentSearch";
import { ContainerRecentSearch } from "../../../Styles/Pages/Users/SearchStyle";
import UseWidth from "../../../../helpers/hooks/useWidth";
import RecentSearchDesktop from "./components/RecentSearchDesktop";




export const Search = () => {
    const width = UseWidth()
    return (
        <>
            {
                width == "desktop" ?
                    <RecentSearchDesktop />
                    :
                    <RecentSearch />
            }
        </>
    )
}