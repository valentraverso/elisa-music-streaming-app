import { Link } from "react-router-dom";
import { Album, AlbumBackground, AlbumImage, AlbumTitle, ContainerAlbum } from "../../../../Styles/Pages/Users/HomePageStyles/AlbumsStyle";

export default function PlaylistGrid({ data, type }) {
    return (
        <ContainerAlbum>
            {data &&
                data.map((playlist) => (
                    <Link key={playlist._id} to={`/playlist/${playlist._id}`}>
                        <Album>
                            <AlbumBackground image={playlist.img && playlist.img.secure_url} />
                            <AlbumImage
                                src={playlist.img && playlist.img.secure_url}
                                alt={playlist.title}
                            />
                            <AlbumTitle>{playlist.title}</AlbumTitle>
                        </Album>
                    </Link>
                ))}
        </ContainerAlbum>
    )
}