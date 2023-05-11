import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import fetchAlbumById from "../../../../api/albums/fetchAlbumById";
import fetchSongById from "../../../../api/song/fetchSongById";
import SongList from "./songdetails";
import fetchAllAlbums from "../../../../api/albums/fetchAllAlbums";

export const AlbumDetail = () => {
  const { id: albumId } = useParams(); // get the album id from the URL
  const { getAccessTokenSilently } = useAuth0();
  const { data: albums } = useQuery(
    "albums",
    async () => {
      const token = await getAccessTokenSilently();
      const data = await fetchAllAlbums(token);
      return data;
    }
  );
  
  // Filter the albums array by the album id passed in the URL
  const album = albums?.find((album) => album._id === albumId);

  return album ? (
    <div>
      <h2>{album.title}</h2>
      <p>{album.artist}</p>
      <p>{album.release}</p>
      {album.img && <img src={album.img.secure_url} alt={album.title} />}
      <h3>Songs</h3>
      <SongList album={album} />
    </div>
  ) : (
    <div>Loading...</div>
  );
};
