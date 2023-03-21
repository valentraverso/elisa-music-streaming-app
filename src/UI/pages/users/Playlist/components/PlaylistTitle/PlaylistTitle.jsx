import { ContainerTitlePlaylist, ImgPlaylist, ContainerPlaylistInfo, Title, Info, ContainerLikes, TotalLikes, ButtonLike} from "../../../../../Styles/Pages/Users/PlaylistStyle";


export const PlaylistTitle = () => {
  return (
    <ContainerTitlePlaylist>
        <ImgPlaylist src="https://chartex.com/_next/image?url=https%3A%2F%2Fi.scdn.co%2Fimage%2Fab67706f0000000360b57682c9a3e8708eda27d8&w=640&q=75" />
        <ContainerPlaylistInfo>
            <Title>Sad Playlist </Title>
            <Info>50 songs</Info>
            <ContainerLikes>
                <TotalLikes>100 likes</TotalLikes>
                <ButtonLike>Like</ButtonLike>
            </ContainerLikes>
        </ContainerPlaylistInfo>
    </ContainerTitlePlaylist>
  )
}
