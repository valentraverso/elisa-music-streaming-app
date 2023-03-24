import {ContainerPlaylist} from "../../../Styles/Pages/Users/PlaylistStyle";
import { ButtonAddSong, ContainerPagePlaylist } from "../../../Styles/Pages/Users/PlaylistStyle";
import { PlaylistTitle } from "./components/PlaylistTitle/PlaylistTitle";
import { SongsList } from "./components/SongsList/SongsList";


export const Playlist = (props) => {
  const url = "https://i.scdn.co/image/ab67616d0000b27396384c98ac4f3e7c2440f5b5";
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
