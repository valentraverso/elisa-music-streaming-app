import { ContainerRecentImg, ContainerRecentSearchAll, RecentDescription, RecentImg, Title } from "../../../../Styles/Pages/Users/components/RecentBarStyle"
import { Artist } from "../../../../Styles/Pages/Users/components/TypeOfSearchStyle"
import { Link } from 'react-router-dom';

export default function Results({ songsResults }) {
    return (
                songsResults?.map((song) => (
                    <div>
                        <Link to={`/song/${song._id}`}>
                        <ContainerRecentSearchAll key={song._id}>
                            <ContainerRecentImg>
                                <RecentImg src={song.album.img.secure_url} />
                            </ContainerRecentImg>
                            <RecentDescription>
                                <Title>{song.title}</Title>
                                <Artist>{song.artist}</Artist>
                            </RecentDescription>
                        </ContainerRecentSearchAll>
                        </Link>
                    </div>
                ))
    )
}


