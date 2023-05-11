import { ContainerPlaylist } from "../../../Styles/Pages/Users/PlaylistStyle";
import { ButtonAddSong, ContainerPagePlaylist } from "../../../Styles/Pages/Users/PlaylistStyle";
import { PlaylistTitle } from "./components/PlaylistTitle/PlaylistTitle";
import { SongsList } from "./components/SongsList/SongsList";

export const Playlist = ({ data }) => {
  const { img, title } = data;

  return (
    <ContainerPagePlaylist>
      <ContainerPlaylist >
        <PlaylistTitle img={img.secure_url} playlistName={title} info={""}  likes={""} btnLike={true} />
        <SongsList data={data.songs} />
      </ContainerPlaylist>
      <ButtonAddSong> + Add new Song</ButtonAddSong>
    </ ContainerPagePlaylist>
  )
}
