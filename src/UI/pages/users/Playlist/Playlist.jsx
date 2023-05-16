import { ContainerPlaylist } from "../../../Styles/Pages/Users/PlaylistStyle";
import { ButtonAddSong, ContainerPagePlaylist } from "../../../Styles/Pages/Users/PlaylistStyle";
import { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useQuery } from "react-query";
import fetchPlaylistById from "../../../../api/playlists/fetchPlaylistById";
import PlaylistPage from "./components/PlaylistDetails";
import { useLocation } from "react-router-dom";


export function Playlist() {
  const { getAccessTokenSilently } = useAuth0();
  const location = useLocation();
  const playlistId = location.pathname.split("/").pop();

  const { isLoading, isError, data: playlist } = useQuery(
    ["playlist", playlistId],
    async () => {
      const token = await getAccessTokenSilently();
      return fetchPlaylistById(playlistId, token);
    },
    {
      enabled: !!getAccessTokenSilently(),
    }
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching playlist</div>;
  }

  return <PlaylistPage playlist={playlist} />;
}