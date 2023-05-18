import React from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import fetchAllPlaylists from "../../../../../api/playlists/fetchPlaylistAll";
import { useAuth0 } from "@auth0/auth0-react";
import { ContainerPlaylist, PlaylistBackground, Playlist, PlaylistTitle, PlaylistImage } from "../../../../Styles/Pages/Users/HomePageStyles/PlaylistsStyle";

const PlaylistPage = () => {
  const { getAccessTokenSilently } = useAuth0();

  const { data: playlists } = useQuery(
    "playlists",
    async () => {
      const token = await getAccessTokenSilently();
      const data = await fetchAllPlaylists(token);
      return data;
    }
  );

  const limitedPlaylists = playlists?.slice(0, 8); // Limit the playlists to the first 8 items

  return (
    <div>
      <h2>Your Playlists</h2>
      <ContainerPlaylist>
        {Array.isArray(limitedPlaylists) &&
          limitedPlaylists.map((playlist) => (
            <Link key={playlist._id} to={`/playlist/${playlist._id}`}>
              <Playlist>
                <PlaylistBackground
                  image={playlist.img && playlist.img.secure_url}
                />
                <PlaylistImage
                  src={playlist.img && playlist.img.secure_url}
                  alt={playlist.title}
                />
                <PlaylistTitle>{playlist.title}</PlaylistTitle>
              </Playlist>
            </Link>
          ))}
      </ContainerPlaylist>
    </div>
  );
}

export default PlaylistPage;