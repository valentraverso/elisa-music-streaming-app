import React from "react";
import { useParams } from "react-router-dom";
import { ContainerImage, ContainerImageMobile, PlaylistBackground, PlaylistBackgroundMobile  } from "../../../../../Styles/Pages/Users/components/PlayerStyles/PlayerStyle";

import { useSelector } from "react-redux";

function Playlist() {
  const { songId } = useParams(); 

  
  const albumImg = useSelector(state => state.player.queu.imgAlbum);

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