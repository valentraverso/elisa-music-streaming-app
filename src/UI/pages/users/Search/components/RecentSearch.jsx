import { recentSearch } from "../recentSearch"
import { ContainerRecentSearch, ContainerRecent, RecentImg, RecentDescription, Title, Artist, DeleteRecentSearch } from "../../../../Styles/Pages/Users/components/RecentBarStyle"


export const RecentSearch = () => {
    return (
        <ContainerRecentSearch>
            {recentSearch.map((recentSearch) => {
                return (
                    <ContainerRecent>
                        <RecentImg src={recentSearch.img} />
                        <RecentDescription>
                            <Title>{recentSearch.title}</Title>
                            <Artist>{recentSearch.artist}</Artist>
                        </RecentDescription>
                        <DeleteRecentSearch>X</DeleteRecentSearch>
                        <DeleteHistory>Delete History</DeleteHistory>
                    </ContainerRecent>
                )
            })}
        </ContainerRecentSearch>
    )
}
