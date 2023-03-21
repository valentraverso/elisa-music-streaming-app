import {ContainerPlaylist} from "../../../Styles/Pages/Users/PlaylistStyle";
import { ButtonAddSong } from "../../../Styles/Pages/Users/PlaylistStyle";
import { PlaylistTitle } from "./components/PlaylistTitle/PlaylistTitle";
import { SongsList } from "./components/SongsList/SongsList";


export const Playlist = () => {
  const url = "https://i.scdn.co/image/ab67616d0000b27396384c98ac4f3e7c2440f5b5";
  return (
    <>
        
        <ContainerPlaylist >
            <PlaylistTitle img = {url}  playlistName="Sad PLaylist" info="50 Songs" likes="50 Likes"/>
            <SongsList />
        </ContainerPlaylist>
        <ButtonAddSong> + Add new Song</ButtonAddSong>
    </>
  )
}
