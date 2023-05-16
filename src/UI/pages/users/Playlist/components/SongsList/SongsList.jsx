import { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useQuery } from "react-query";
import fetchSongById from "../../../../../../api/song/fetchSongById";

export default function SongList({ playlist }) {
  const { getAccessTokenSilently } = useAuth0();

  // Use state to keep track of the songs fetched from the API
  const [songs, setSongs] = useState([]);

  // Use useEffect to fetch the songs when the component mounts
  useEffect(() => {
    const fetchSongs = async () => {
      const token = await getAccessTokenSilently();
      const songsData = await Promise.all(
        playlist.songIds.map((id) => fetchSongById(id, token))
      );
      setSongs(songsData);
    };

    fetchSongs();
  }, [playlist, getAccessTokenSilently]);

  return (
    <div>
      <h1>Songs from "{playlist.title}"</h1>
      {songs.length === 0 ? (
        <p>No songs added yet.</p>
      ) : (
        songs.map((song) => (
          <div key={song._id}>
            <p>{song.title}</p>
            <p>{song.artist}</p>
            <img src={song.img} alt={song.title} />
          </div>
        ))
      )}
      <button>Add a song</button>
    </div>
  );
}
