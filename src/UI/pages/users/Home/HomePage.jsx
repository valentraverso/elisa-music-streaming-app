import React from "react";
import { Playlists } from "./HomeComponents/PlaylistsRecomendados";
import { playlistsRecomendados, Throwbackjams, Throwbackjams2, Throwbackjams3, Throwbackjams4, BighestHits } from "../../../../data/playlists";
import { CategoryeButtons } from "./HomeComponents/CategoryButtons";
import { useQuery } from "react-query";
import fetchSongByTitle from "../../../../api/song/fetchSongByTitle";
import { useAuth0 } from "@auth0/auth0-react";
import fetchAllAlbums from "../../../../api/albums/fetchAllAlbums";
import fetchAlbumById from "../../../../api/albums/fetchAlbumById";
import Albums from "./HomeComponents/Albums";

export function HomePage() {
  const { getAccessTokenSilently } = useAuth0();
  const { data: songs } = useQuery(
    "songs",
    async () => {
      const token = await getAccessTokenSilently();
      const data = await fetchSongByTitle("song", token);
      return data;
    }
  );

//   const { data: albums } = useQuery(
//     "albums",
//     async () => {
//       const token = await getAccessTokenSilently();
//       const data = await fetchAllAlbums(token);
//       return data;
//     }
//   );

  const allPlaylists = [
    { playlists: playlistsRecomendados, title: "Mis recomendaciones" },
    { playlists: Throwbackjams, title: "Throwback jams" },
    { playlists: Throwbackjams2, title: "Throwback jams2" },
    { playlists: Throwbackjams3, title: "Throwback jams3" },
    { playlists: Throwbackjams4, title: "Throwback jams4" },
    { playlists: BighestHits, title: "Los mayores éxitos" }
  ];

  return (
    <div>
      <CategoryeButtons />
      {allPlaylists.map((playlist) => (
        <Playlists playlists={playlist.playlists} title={playlist.title} />
      ))}
    
    
      {/* {albums && albums.map((album) => (
      <div key={album.id}>
    <div key={album._id}>
      <img src={album.img && album.img.secure_url} alt={album.title} />
      <h2>{album.title}</h2>
    </div>
      </div>
    ))} */}
      
      <Albums />
    </div>
  );
}
