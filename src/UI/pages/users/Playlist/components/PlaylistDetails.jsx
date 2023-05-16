import { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import fetchPlaylistById from "../../../../../api/playlists/fetchPlaylistById";
import fetchSongById from "../../../../../api/song/fetchSongById";
import { useLocation } from "react-router-dom";

export default function PlaylistPage() {
  const { getAccessTokenSilently } = useAuth0();
  const { id } = useParams();

  // Use useQuery to fetch the playlist data from the API
  const { data: playlist, isLoading, isError } = useQuery(
    ["playlist", id],
    async () => {
      const token = await getAccessTokenSilently();
      return fetchPlaylistById(id, token);
    }
  );

  // Use state to keep track of the songs fetched from the API
  const [songs, setSongs] = useState([]);

  // Use useEffect to fetch the songs when the playlist data changes
  useEffect(() => {
    const fetchSongs = async () => {
      const token = await getAccessTokenSilently();
      const songsData = await Promise.all(
        playlist.songIds.map((id) => fetchSongById(id, token))
      );
      setSongs(songsData);
    };

    if (playlist) {
      fetchSongs();
    }
  }, [playlist, getAccessTokenSilently]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching playlist data</div>;
  }

  return (
      <div>
        <h1>Songs from "{playlist.title}"</h1>
        {console.log(playlist.songs)}
        {playlist.songs.map((song) => (
          <div key={song._id}>
            <p>{song.title}</p>
            <p>{song.artist}</p>
            <img src={song.img} alt={song.title} />
          </div>
        ))}
      </div>
    );
  }
