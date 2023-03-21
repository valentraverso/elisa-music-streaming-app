import { ContainerTitlePlaylist, ImgPlaylist, ContainerPlaylistInfo, Title, Info, ContainerLikes, TotalLikes, ButtonLike} from "../../../../../Styles/Pages/Users/PlaylistStyle";


export const PlaylistTitle = (props) => {
  return (
    <ContainerTitlePlaylist>
        <ImgPlaylist src= {props.img} />
        <ContainerPlaylistInfo>
            <Title>{props.playlistName}</Title>
            <Info>{props.info}</Info>
            <ContainerLikes>
                <TotalLikes>{props.likes}</TotalLikes>
                <ButtonLike>Like</ButtonLike>
            </ContainerLikes>
        </ContainerPlaylistInfo>
    </ContainerTitlePlaylist>
  )
}
