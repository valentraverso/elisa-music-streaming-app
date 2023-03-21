import { SearchBar } from "../../../layouts/Users/Components/SearchBar";
import { DeleteRecentSearch, RecentTitle, SongPicture, SongSinger, SongTitle } from "../../../Styles/Pages/Users/components/RecentBarStyle";


SearchBar()
export const RecentSearch = () => {
    {recent.map((recent)=>{
    return (
        <Main>
            <ContainerRecentSearch>
                <RecentTitle>Recent</RecentTitle>
                <RecentResult>{recent.song}</RecentResult>
                <DeleteRecentSearch/>
            </ContainerRecentSearch>
        </Main>
    )
    })}
    }
