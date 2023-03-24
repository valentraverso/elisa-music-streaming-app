import React from "react";
import { Playlists } from "./HomeComponents/PlaylistsRecomendados";
import { playlistsRecomendados, Throwbackjams, Throwbackjams2, Throwbackjams3, Throwbackjams4, BighestHits } from "../../../../data/playlists";

export function HomePage() {
const allPlaylists = [
{ playlists: playlistsRecomendados, title: "Mis recomendaciones" },
{ playlists: Throwbackjams, title: "Throwback jams" },
{ playlists: Throwbackjams2, title: "Throwback jams2" },
{ playlists: Throwbackjams3, title: "Throwback jams3" },
{ playlists: Throwbackjams4, title: "Throwback jams4" },
{ playlists: BighestHits, title: "Los mayores éxitos" }
];

return (
<>



{allPlaylists.map((playlist) => (
<Playlists playlists={playlist.playlists} title={playlist.title} />
))}
</>
);
}