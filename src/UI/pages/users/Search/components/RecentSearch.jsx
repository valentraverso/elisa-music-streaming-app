import { recentSearch } from "../recentSearch"
import { ContainerRecentSearch, ContainerRecent, RecentImg, RecentDescription, Title, Artist, DeleteRecentSearch, DeleteHistory, H1RecentTitle, ContainerRecentImg, ContainerDeleteHistory, SpanDeleteRecentSearch } from "../../../../Styles/Pages/Users/components/RecentBarStyle"


export const RecentSearch = () => {
    return (
        <ContainerRecentSearch>
            <H1RecentTitle>Recents</H1RecentTitle>
            {recentSearch.map((recentSearch) => {
                return (
                    <ContainerRecent>
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
                    </ContainerRecent>
                )
            })}
            <ContainerDeleteHistory>
                <DeleteHistory>
                    Delete History
                </DeleteHistory>
            </ContainerDeleteHistory>
        </ContainerRecentSearch>
    )
}
