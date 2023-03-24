import { recentSearch } from "../recentSearch"
import { ContainerRecentSearch, ContainerRecent, RecentImg, RecentDescription, Title, Artist, DeleteRecentSearch, DeleteHistory, H1RecentTitle, ContainerRecentImg, ContainerDeleteHistory, SpanDeleteRecentSearch , ContainerRecentSearchAll} from "../../../../Styles/Pages/Users/components/RecentBarStyle"
import TypeOfSearch from "./TypeOfSearch"



export const RecentSearch = () => {
    return (
        <ContainerRecentSearch>
            <TypeOfSearch/>
            <H1RecentTitle>Recents</H1RecentTitle>
                    <ContainerRecent>
                    {recentSearch.map((recentSearch) => {
                return (
                        <ContainerRecentSearchAll>
                        <ContainerRecentImg>
                            <RecentImg src={recentSearch.img} />
                        </ContainerRecentImg>
                        <RecentDescription>
                            <Title>{recentSearch.title}</Title>
                            <Artist>{recentSearch.artist}</Artist>
                        </RecentDescription>
                        <DeleteRecentSearch>
                            <SpanDeleteRecentSearch>
                                X
                            </SpanDeleteRecentSearch>
                        </DeleteRecentSearch>
                        </ContainerRecentSearchAll>
                )
            })}
            </ContainerRecent>
            <ContainerDeleteHistory>
                <DeleteHistory>
                    Delete History
                </DeleteHistory>
            </ContainerDeleteHistory>
        </ContainerRecentSearch>
    )
}
