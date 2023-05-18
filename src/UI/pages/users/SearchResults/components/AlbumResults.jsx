import { Link } from 'react-router-dom';
import { ContainerRecentImg, ContainerRecentSearchAll, RecentDescription, RecentImg } from '../../../../Styles/Pages/Users/components/RecentBarStyle';
import { Album } from '../../../../Styles/Pages/Users/components/TypeOfSearchStyle';

export default function AlbumResults({ albumResults }) {
    return (
            albumResults?.map((album) => (
                <div>
                <Link to={`/album/${album._id}`}>
                <ContainerRecentSearchAll key={album._id}>
                        <ContainerRecentImg>
                            <RecentImg src={album.img.secure_url} />
                        </ContainerRecentImg>
                        <RecentDescription>
                            <Album>{album.title}</Album>
                        </RecentDescription>
                        </ContainerRecentSearchAll>
                    </Link>
                </div>
            ))
    );
}

