import React from "react";
import { Playlists } from "./HomeComponents/PlaylistsRecomendados";
import { playlistsRecomendados, Throwbackjams, Throwbackjams2, Throwbackjams3, Throwbackjams4, BighestHits } from "../../../../data/playlists";
import { CategoryeButtons } from "./HomeComponents/CategoryButtons";
import { useQuery } from "react-query";
import fetchSongByTitle from "../../../../api/song/fetchSongByTitle";
import { useAuth0 } from "@auth0/auth0-react";

export function HomePage() {
    const {getAccessTokenSilently} = useAuth0()
    const {data} = useQuery(['songs'], async ()=>{
        const token = await getAccessTokenSilently()
        const data = await fetchSongByTitle("song", token)
        return data
})
console.log(data);
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
</div>
);
}