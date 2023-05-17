import { ContainerTitlePlaylist, ImgPlaylist, ContainerPlaylistInfo, Title, Info, ContainerLikes, TotalLikes, ButtonLike } from "../../../../../Styles/Pages/Users/PlaylistStyle";
import ButtonFollow from "./ButtonFollow/ButtonFollow";

export const AlbumTitle = ({ img, id, playlistName, info, likes, type }) => {
  return (
    <ContainerTitlePlaylist>
      <ImgPlaylist src={img} />
      <ContainerPlaylistInfo>
        <Title>{playlistName}</Title>
        <Info>{info}</Info>
        <ContainerLikes>
          <TotalLikes>{likes}</TotalLikes>
          <ButtonFollow id={id} type={type} />
        </ContainerLikes>
      </ContainerPlaylistInfo>
    </ContainerTitlePlaylist>
  )
}