import React from "react";
import { useParams } from "react-router-dom";
import { ContainerImage, PlaylistBackground, MainContainer, SongTitle, AudioReproductor } from "../../../../Styles/Pages/Users/components/PlayerStyles/PlayerStyle";

import { useSelector } from "react-redux";

function Playlist() {
  const { songId } = useParams(); 

  // Retrieve the queu object from local storage
  const queu = JSON.parse(localStorage.getItem("playerQueue"));
  
  const albumImg = queu?.imgAlbum;

  return (
    <>
      {albumImg && (
        <>
          <PlaylistBackground image={albumImg} />
          <ContainerImage src={albumImg} alt="Playlist" />
        </>
      )}
    </>
  );
}

export default Playlist;