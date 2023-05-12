import React from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import fetchAllAlbums from "../../../../../api/albums/fetchAllAlbums";
import { useAuth0 } from "@auth0/auth0-react";
import { ContainerAlbum, AlbumBackground, Album, AlbumTitle, AlbumImage,} from "../../../../Styles/Pages/Users/HomePageStyles/AlbumsStyle"

const Albums = () => {
    const { getAccessTokenSilently } = useAuth0();

      const { data: albums } = useQuery(
    "albums",
    async () => {
      const token = await getAccessTokenSilently();
      const data = await fetchAllAlbums(token);
      return data;
    }
  );
  
    return (
      <div>
      <h2>Albums</h2>
      <ContainerAlbum>
        {albums &&
          albums.map((album) => (
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
    </div>
    );
  }
  
  export default Albums;


