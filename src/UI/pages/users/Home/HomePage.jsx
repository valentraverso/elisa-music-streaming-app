import React from "react";
import { Playlists } from "./HomeComponents/PlaylistsRecomendados";
import { playlistsRecomendados, Throwbackjams, Throwbackjams2, Throwbackjams3, Throwbackjams4, BighestHits } from "../../../../data/playlists";
import { CategoryeButtons } from "./HomeComponents/CategoryButtons";
import { useQuery } from "react-query";
import { useAuth0 } from "@auth0/auth0-react";
import fetchAllAlbums from "../../../../api/albums/fetchAllAlbums";
import fetchAlbumById from "../../../../api/albums/getById";
import Albums from "./HomeComponents/Albums";
import { store } from "../../../../utils/redux/store";
import fetchDeleteSong from "../../../../api/song/fetchDeleteSong";
import fetchAllPlaylists from "../../../../api/playlists/fetchPlaylistAll";
import CreateMixModal from "./HomeComponents/CreateMixModal";
import fetchAllMixes from "../../../../api/mixes/getAllMixes";
import PlaylistPage from "../Library/components/PlaylistPage";
import CreatePlaylistModal from "../Library/components/playlistModal";

export function HomePage() {
    const {getAccessTokenSilently} = useAuth0()
//     const {data} = useQuery(['songs'], async ()=>{
//         const token = await getAccessTokenSilently()
//         const deleteSong = await fetchDeleteSong("6450edf476aa58e705d61993",token)
//         console.log(deleteSong)
// })
// console.log(data);

const { data: mixesData } = useQuery(['mixes'], async () => {
  const token = await getAccessTokenSilently();
  const data = await fetchAllMixes(token);
  return data;
});



// const { data: albumData } = useQuery(['album', '644bc2b2093ad501e860964d'], async () => {
//     const token = await getAccessTokenSilently();
//     const data = await fetchAlbumById('644bc2b2093ad501e860964d', token);
//     return data;
//   });
  
//   console.log(albumData);
  

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
      <Albums />
      <PlaylistPage />
    </div>
  );
}
