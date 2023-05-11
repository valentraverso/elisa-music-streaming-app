import { ContainerRecentImg, ContainerRecentSearchAll, RecentDescription, RecentImg} from "../../../../Styles/Pages/Users/components/RecentBarStyle"
import { Album } from "../../../../Styles/Pages/Users/components/TypeOfSearchStyle"

export default function AlbumResults({ albumResults }) {
    console.log(albumResults)
    return (
        <>
            {
                albumResults?.map((album) => (
                    <ContainerRecentSearchAll>
                        <ContainerRecentImg>
                            <RecentImg src={album.img} />
                        </ContainerRecentImg>
                        <RecentDescription>
                            <Album>{album.artist}</Album>
                        </RecentDescription>
                    </ContainerRecentSearchAll>
                ))
            }
        </>
    )
}
