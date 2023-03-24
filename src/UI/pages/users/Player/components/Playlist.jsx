import React from "react";
import { useParams } from "react-router-dom";
import { playlistsRecomendados } from "../../../../../data/playlists";
import { ContainerImage, PlaylistBackground, MainContainer, SongTitle, AudioReproductor } from "../../../../Styles/Pages/PlayerStyles/PlayerStyle";

function Playlist() {
const { id } = useParams();
const playlist = playlistsRecomendados.find(p => p.id === id);

return (
<>
<PlaylistBackground image={playlist.foto} />
<ContainerImage src={playlist.foto} alt="Playlist" />

  <MainContainer>
    <AudioReproductor src="./onlymp3.to - Howl's Moving Castle.mp3" />
    <SongTitle>{playlist.cancion}</SongTitle>
  </MainContainer>
</>
);
}

export default Playlist;