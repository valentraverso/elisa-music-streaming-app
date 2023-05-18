import { ContainerTitlePlaylist, ImgPlaylist, ContainerPlaylistInfo, Title, Info, ContainerLikes, TotalLikes, ButtonLike} from "../../../../../Styles/Pages/Users/PlaylistStyle";
import ButtonFollow from "./ButtonFollow/ButtonFollow";
import { PlaylistModalUpdate } from "./PlaylistModalUpdate";
import { useState } from "react";

export const PlaylistTitle = ({img, playlistName, info, likes, id}) => {
  const [showModal, setShowModal] = useState(false)
  return (
    <ContainerTitlePlaylist>
        <ImgPlaylist 
        src= {img} 
        onClick={() => setShowModal(true)}
        onClose={() => setShowModal(false)}/>
        <PlaylistModalUpdate showModal={showModal}/>
        <ContainerPlaylistInfo>
            <Title>{playlistName}</Title>
            <Info>{info}</Info>
            <ContainerLikes>
                <TotalLikes>{likes}</TotalLikes>
                <ButtonFollow id={id} />
            </ContainerLikes>
        </ContainerPlaylistInfo>
    </ContainerTitlePlaylist>
  )
}
