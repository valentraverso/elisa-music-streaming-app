import {ContainerPlaylist} from "../../../Styles/Pages/Users/PlaylistStyle";
import { ButtonAddSong, ContainerPagePlaylist } from "../../../Styles/Pages/Users/PlaylistStyle";
import { PlaylistTitle } from "./components/PlaylistTitle/PlaylistTitle";
import { SongsList } from "./components/SongsList/SongsList";

export const Playlist = (props) => {
  return (
    <ContainerPagePlaylist>
        <ContainerPlaylist >
            <PlaylistTitle img = {props.img}  playlistName={props.playlistName} info={props.info} likes={props.likes} btnLike={props.btnLike}/>
            <SongsList />
        </ContainerPlaylist>
        <ButtonAddSong> + Add new Song</ButtonAddSong>
    </ ContainerPagePlaylist>
  )
}
