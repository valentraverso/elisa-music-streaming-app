import { ContainerRecentImg, ContainerRecentSearchAll, RecentDescription, RecentImg} from "../../../../Styles/Pages/Users/components/RecentBarStyle"
import { Playlist } from "../../../../Styles/Pages/Users/components/TypeOfSearchStyle"

export default function PlaylistResults({ playlistResults }) {
    return (
        <>
            {
                playlistResults.map((playlist) => (
                    <ContainerRecentSearchAll>
                        <ContainerRecentImg>
                            <RecentImg src={playlist.img} />
                        </ContainerRecentImg>
                        <RecentDescription>
                            <Playlist>{playlist.title}</Playlist>
                        </RecentDescription>
                    </ContainerRecentSearchAll>
                ))
            }
        </>
    )
}