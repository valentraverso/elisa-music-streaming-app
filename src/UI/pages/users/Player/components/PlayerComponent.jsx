import React from "react";
import AudioPlayer from "react-h5-audio-player";
import { useParams } from "react-router-dom";
import { playlistsRecomendados } from "../../../../../data/playlists";
import { cancionesRecomendadas } from "../../../../../data/recomendedSongs";
import { ContainerImage, PlaylistBackground, MainContainer, SongTitle, AudioReproductor, RecomendedSongs, MiniatureSong, Td, Tr, CurrentSong  } from "../../../../Styles/Pages/PlayerStyles/PlayerStyle";

export function PlayerComponent() {
  const { id } = useParams();
  const playlist = playlistsRecomendados.find(p => p.id === id);
  return (
    <>
      <PlaylistBackground image={playlist.foto} />
      <ContainerImage src={playlist.foto} alt="Playlist" />

    <MainContainer>
      <SongTitle>{playlist.cancion}</SongTitle>
      <AudioReproductor src="./onlymp3.to - Howl's Moving Castle [OST - Theme Song]-UwxatzcYf9Q-256k-1654380458841.mp3" />
    </MainContainer>

    <RecomendedSongs>
    <SongTitle>{playlist.cancion}</SongTitle>
    <CurrentSong src={playlist.foto} alt="Playlist" />
        {cancionesRecomendadas.map(cancion => (
                
          <Tr key={cancion.id}>

            <Td>{cancion.cancion}</Td>
            <Td>{cancion.autor}</Td>
            <Td>
              <MiniatureSong src={cancion.foto} alt={cancion.cancion} />
            </Td>
          </Tr>
        ))}
      </RecomendedSongs>

    </>
  );
}