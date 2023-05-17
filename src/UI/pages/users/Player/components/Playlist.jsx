import React from "react";
import { useParams } from "react-router-dom";
import { playlistsRecomendados } from "../../../../../data/playlists";
import { ContainerImage, PlaylistBackground, MainContainer, SongTitle, AudioReproductor } from "../../../../Styles/Pages/Users/components/PlayerStyles/PlayerStyle";

import { useSelector } from "react-redux";

function Playlist() {
  const { songId } = useParams(); // Change the variable name to `songId`
  const playlist = playlistsRecomendados.find(p => p.id === songId);
  
  const albumImg = useSelector(state => state.player.queu.imgAlbum);

  return (
    <>
      {albumImg && (
        <>
          <PlaylistBackground image={albumImg} />
          <ContainerImage src={albumImg} alt="Playlist" />
        </>
      )}

    </>
  );
}

export default Playlist;
