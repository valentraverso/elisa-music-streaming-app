import { ContainerRecentImg, ContainerRecentSearchAll, RecentDescription, RecentImg, Title } from "../../../../Styles/Pages/Users/components/RecentBarStyle"
import { Artist } from "../../../../Styles/Pages/Users/components/TypeOfSearchStyle"

export default function Results({ songsResults }) {
    return (
        <>
            {
                songsResults.map((song) => (
                    
                        <ContainerRecentSearchAll>
                            <ContainerRecentImg>
                                <RecentImg src={song.img} />
                            </ContainerRecentImg>
                            <RecentDescription>
                                <Title>{song.title}</Title>
                                <Artist>{song.artist}</Artist>
                            </RecentDescription>
                        </ContainerRecentSearchAll>
                    
                ))
            }
        </>
    )
}


