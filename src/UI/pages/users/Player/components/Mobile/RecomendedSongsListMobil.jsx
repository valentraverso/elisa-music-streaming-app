import React, { useState } from "react";
import { RecomendedSongs, MiniatureSong, Td, Tr,ShowSongs, PlainButton, HideSongs, SongsContainer  } from "../../../../../Styles/Pages/Users/components/PlayerStyles/PlayerMobileStyle";

// function RecomendedSongsListMobile() {
//     const [showSongs, setShowSongs] = useState(false);

//     return (
//       <SongsContainer>
//       <ShowSongs>
//         <PlainButton onClick={() => setShowSongs(true)}>Mostrar canciones recomendadas</PlainButton>
//         </ShowSongs>
//         <RecomendedSongs show={showSongs}>
//           {/* {cancionesRecomendadas.map(cancion => ( */}
//             <Tr key={cancion.id}>
//               <Td>{cancion.cancion}</Td>
//               <Td>{cancion.autor}</Td>
//               <Td>
//                 <MiniatureSong src={cancion.foto} alt={cancion.cancion} />
//               </Td>
//             </Tr>
//           ))}
//           <HideSongs>
//           <PlainButton onClick={() => setShowSongs(false)}>Cerrar</PlainButton>
//           </HideSongs>
//         </RecomendedSongs>
//       </SongsContainer>
//     );
//   }

// export default RecomendedSongsListMobile;