import { ContainerPlaylist } from "../../../Styles/Pages/Users/PlaylistStyle";
import { ButtonAddSong, ContainerPagePlaylist } from "../../../Styles/Pages/Users/PlaylistStyle";
import { PlaylistTitle } from "./components/PlaylistTitle/PlaylistTitle";
import { SongsList } from "./components/SongsList/SongsList";

export const Playlist = ({ data }) => {
  const { img: {secure_url: imgAlbum}, title } = data;

  return (
    <ContainerPagePlaylist>
      <ContainerPlaylist >
        <PlaylistTitle img={imgAlbum} playlistName={title} info={""}  likes={""} btnLike={true} />
        <SongsList data={data.songs} imgAlbum={imgAlbum} />
      </ContainerPlaylist>
      <ButtonAddSong> + Add new Song</ButtonAddSong>
    </ ContainerPagePlaylist>
  )
}
