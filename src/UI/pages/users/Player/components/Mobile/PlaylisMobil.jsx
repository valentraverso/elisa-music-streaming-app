import React from "react";
import { useParams } from "react-router-dom";
import { ContainerImage, ContainerImageMobile, PlaylistBackground, PlaylistBackgroundMobile  } from "../../../../../Styles/Pages/Users/components/PlayerStyles/PlayerStyle";

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
          <PlaylistBackgroundMobile image={albumImg} />
          <ContainerImageMobile src={albumImg} alt="Playlist" />
        </>
      )}
    </>
  );
}

export default Playlist;