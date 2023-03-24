import { ContainerSearchDesktop, ContainerSearchDiv, ContainerSearchImg, SearchImg, SearchDescription, Title, Artist, ContainerTimeDuration,SpanTimeDuration } from "../../../../Styles/Pages/Users/components/SearchDesktopStyle"
import { recentSearch } from "./RecentSearch"

export const SearchDesktop = () => {
    return (
        <ContainerSearch>
            <ContainerSearchDesktop>
                {recentSearch.map((recentSearch) => {
                    return (
                        <ContainerSearchDiv>
                            <ContainerSearchImg>
                                <SearchImg src={recentSearch.img} />
                            </ContainerSearchImg>
                            <SearchDescription>
                                <Title>{recentSearch.title}</Title>
                                <Artist>{recentSearch.artist}</Artist>
                            </SearchDescription>
                            <ContainerTimeDuration>
                                <SpanTimeDuration>
                                    04:35
                                </SpanTimeDuration>
                            </ContainerTimeDuration>
                        </ContainerSearchDiv>
                    )
                })}
            </ContainerSearchDesktop>
        </ContainerSearch>
    )
}