import { store } from "../../../../../../utils/redux/store";
import { ContainerTitlePlaylist, ImgPlaylist, ContainerPlaylistInfo, Title, Info, ContainerLikes, TotalLikes, ContainerPlaylistDescription } from "../../../../../Styles/Pages/Users/PlaylistStyle";
import ButtonFollow from "./ButtonFollow/ButtonFollow";
import DeleteAlbum from "./DeleteAlbum/DeleteAlbum";

export const AlbumTitle = ({ img, id, playlistName, info, likes, owner }) => {
  const { _id: userId } = store.getState().user.data;

  return (
    <ContainerTitlePlaylist>
      <ImgPlaylist src={img} />
      <ContainerPlaylistInfo>
        <ContainerPlaylistDescription>
          <Title>{playlistName}</Title>
          <Info>{info}</Info>
          <ContainerLikes>
            <ContainerLikes>
              <TotalLikes>{likes}</TotalLikes>
              <ButtonFollow id={id} owner={owner} />
            </ContainerLikes>
          </ContainerLikes>
        </ContainerPlaylistDescription>
        {
          owner === userId &&
          <div>
            <DeleteAlbum id={id} />
          </div>
        }
      </ContainerPlaylistInfo>
    </ContainerTitlePlaylist>
  )
}