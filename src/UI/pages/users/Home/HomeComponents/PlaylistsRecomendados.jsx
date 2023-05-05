import { ContainerPlaylist, PlaylistBackground, Playlist, PlaylistImage,PlaylistTitle } from "../../../../Styles/Pages/Users/HomePageStyles/PlaylistsStyle"
import UseWidth from "../../../../../utils/hooks/useWidth";
import { NavLink } from "react-router-dom";

export function Playlists({ playlists, title }) {
  const width = UseWidth();
  return (
    <>
     {width !== "mobile" &&(
       <>
       <PlaylistTitle>{title}</PlaylistTitle>
       <ContainerPlaylist>
       {playlists.map((playlist, songIndex) => (
        <NavLink
  to={`/PlayerPage/${playlist.id}`}
  key={playlist.id}
  >  
      <Playlist>
           <PlaylistBackground image={playlist.foto} />
            <PlaylistImage src={playlist.foto} alt={playlist.cancion} />
            <h3>{playlist.cancion}</h3>
            <p>{playlist.autor}</p>
          </Playlist>
          
        </NavLink>
      ))}
       </ContainerPlaylist>
     </>
    )}
  

{width === "mobile" &&(
        <>
        
        <ContainerPlaylist>
          {playlists.map((playlist) => (
            <NavLink
            to={`/PlayerPage/${playlist.id}`}
            key={playlist.id}
            >  
            <Playlist key={playlist.cancion}>
      
              <PlaylistImage src={playlist.foto} alt={playlist.cancion} />
              <h3>{playlist.cancion}</h3>
              <p>{playlist.autor}</p>
            </Playlist>
            </NavLink>
          ))}
        </ContainerPlaylist>
      </>
)}
    </>
  );
};
