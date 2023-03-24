import { cancionesRecomendadas } from "../../../../../data/recomendedSongs";
import { RecomendedSongs, MiniatureSong, Td, Tr } from "../../../../Styles/Pages/PlayerStyles/PlayerStyle";

function RecomendedSongsList() {
return (
<RecomendedSongs>
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
);
}

export default RecomendedSongsList;