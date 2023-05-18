import { ContainerTitlePlaylist, ImgPlaylist, ContainerPlaylistInfo, Title, Info, ContainerLikes, TotalLikes, ButtonLike } from "../../../../../Styles/Pages/Users/PlaylistStyle";
import ButtonFollow from "./ButtonFollow/ButtonFollow";
import PlaylistModalUpdate  from "./PlaylistModalUpdate";
import { useState } from "react";

export const PlaylistTitle = ({ img, playlistName, info, likes, id, isPrivate }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  return (
    <ContainerTitlePlaylist>
      <ImgPlaylist
        src={img}
        onClick={() => setIsModalOpen(true)}
      />
      <PlaylistModalUpdate
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        id={id}
        playlistName={playlistName}
        img={img}
        isPrivate={isPrivate}
      />
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
