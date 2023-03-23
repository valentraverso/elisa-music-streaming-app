import { ContainerPlaylist, PlaylistBackground, Playlist, PlaylistImage,PlaylistTitle } from "../../../../Styles/Pages/HomePageStyles/PlaylistsStyle"
import useWidth from "../../../../../helpers/hooks/useWidth";

export function Playlists({ playlists, title }) {
  const width = useWidth();
  return (
    <>
     {width !== "mobile" &&(
      <>
    <PlaylistTitle>{title}</PlaylistTitle>
    <ContainerPlaylist>
    {playlists.map((playlist) => (
  <Playlist key={playlist.cancion}>
    <PlaylistBackground image={playlist.foto} />
    <PlaylistImage src={playlist.foto} alt={playlist.cancion} />
    <h3>{playlist.cancion}</h3>
    <p>{playlist.autor}</p>
  </Playlist>
))}
    </ContainerPlaylist>
  </>
)}

{width === "mobile" &&(
        <>
        
        <ContainerPlaylist>
          {playlists.map((playlist) => (
            <Playlist key={playlist.cancion}>
      
              <PlaylistImage src={playlist.foto} alt={playlist.cancion} />
              <h3>{playlist.cancion}</h3>
              <p>{playlist.autor}</p>
            </Playlist>
          ))}
        </ContainerPlaylist>
      </>
)}
    </>
  );
};
