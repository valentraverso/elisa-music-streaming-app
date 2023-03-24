import { Artist, ContainerRecentDesktop, ContainerRecentSearchDesktop, H2RecentTitleDesktop, RecentDescriptionDesktop, RecentImgDesktop, Title, } from "../../../../Styles/Pages/Users/components/RecentSearchDesktopStyle"
import { recentSearch } from "../recentSearch"
import Category from "./Category";

export default function RecentSearchDesktop() {
    return (
        <>
            <ContainerRecentSearchDesktop>
                <H2RecentTitleDesktop>Recents</H2RecentTitleDesktop>
                <ContainerRecentDesktop>
                    {recentSearch.map((recentSearch) => {
                        return (
                            <RecentDescriptionDesktop>
                                <RecentImgDesktop src={recentSearch.img} />
                                <Title>{recentSearch.title}</Title>
                                <Artist>{recentSearch.artist}</Artist>
                            </RecentDescriptionDesktop>
                        )
                    })}
                </ContainerRecentDesktop>
            </ContainerRecentSearchDesktop>
            <Category />
        </>
    )
}