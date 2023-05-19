import { useSelector } from "react-redux";
import { ContainerTitlePlaylist, ImgPlaylist, ContainerPlaylistInfo, Title, Info, ContainerLikes, TotalLikes, ButtonLike } from "../../../../../Styles/Pages/Users/PlaylistStyle";
import ButtonFollow from "./ButtonFollow/ButtonFollow";
import PlaylistModalUpdate  from "./PlaylistModalUpdate";
import { useState } from "react";

export const PlaylistTitle = ({ img, playlistName, info, likes, id, isPrivate, owner }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const {playlists, _id: userId} = useSelector(state => state.user.data);

  return (
    <ContainerTitlePlaylist>
      <ImgPlaylist
        src={img}
        onClick={() => {
          owner === userId && id !== playlists[0]._id &&
          setIsModalOpen(true)
        }}
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
          <ButtonFollow id={id} playlists={playlists} userId={userId} />
        </ContainerLikes>
      </ContainerPlaylistInfo>
    </ContainerTitlePlaylist>
  )
}
