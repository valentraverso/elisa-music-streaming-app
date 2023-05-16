import { Link } from 'react-router-dom';
import { ContainerRecentImg, ContainerRecentSearchAll, RecentDescription, RecentImg } from '../../../../Styles/Pages/Users/components/RecentBarStyle';
import { Playlist } from '../../../../Styles/Pages/Users/components/TypeOfSearchStyle';

export default function PlaylistResults({ playlistResults }) {
    return (
            playlistResults?.map((playlist) => (
                <div>
                    <Link to={`/playlist/${playlist._id}`}>
                        <ContainerRecentSearchAll key={playlist._id}>
                            <ContainerRecentImg>
                                <RecentImg src={playlist.img} />
                            </ContainerRecentImg>
                            <RecentDescription>
                                <Playlist>{playlist.title}</Playlist>
                            </RecentDescription>
                        </ContainerRecentSearchAll>
                    </Link>
                </div>
            ))
    );
}
