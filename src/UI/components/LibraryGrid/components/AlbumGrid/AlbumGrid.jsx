import { Link } from "react-router-dom";
import { Album, AlbumBackground, AlbumImage, AlbumTitle, ContainerAlbum } from "../../../../Styles/Pages/Users/HomePageStyles/AlbumsStyle";

export default function AlbumGrid({ data }) {
    return (
        <ContainerAlbum>
            {data &&
                data.map((album) => (
                    <Link key={album.id} to={`/album/${album._id}`}>
                        <Album>
                            <AlbumBackground image={album.img && album.img.secure_url} />
                            <AlbumImage
                                src={album.img && album.img.secure_url}
                                alt={album.title}
                            />
                            <AlbumTitle>{album.title}</AlbumTitle>
                        </Album>
                    </Link>
                ))}
        </ContainerAlbum>
    )
}