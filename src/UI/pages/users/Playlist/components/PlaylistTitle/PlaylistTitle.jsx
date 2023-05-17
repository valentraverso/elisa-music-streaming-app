import { ContainerTitlePlaylist, ImgPlaylist, ContainerPlaylistInfo, Title, Info, ContainerLikes, TotalLikes, ButtonLike} from "../../../../../Styles/Pages/Users/PlaylistStyle";
import ButtonFollow from "./ButtonFollow/ButtonFollow";

export const PlaylistTitle = ({img, playlistName, info, likes, id}) => {
  return (
    <ContainerTitlePlaylist>
        <ImgPlaylist src= {img} />
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
