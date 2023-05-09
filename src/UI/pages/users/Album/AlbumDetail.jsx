import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import fetchSongsByAlbumId from "../../../../api/albums/fetchByAlbumId";
import { useAuth0 } from "@auth0/auth0-react";

export const AlbumDetail = () => {
  const { id } = useParams(); // get the album id from the URL
  const { getAccessTokenSilently } = useAuth0();

  const { data: songs } = useQuery(
    ["songs", id], // pass the album id as a key
    async () => {
      const token = await getAccessTokenSilently();
      const data = await fetchSongsByAlbumId(id, token); // fetch songs by album id
      return data;
    }
  );

  // render the songs
  return (
    <div>
      <h2>Songs</h2>
      {songs &&
        songs.map((song) => (
          <div key={song.id}>
            <p>{song.title}</p>
            <p>{song.artist}</p>
           
          </div>
        ))}
    </div>
  );
};





