import { LayoutLibrary } from "../../../layouts/Users"
import {ContainerPlaylist} from "../../../Styles/Pages/Users/PlaylistStyle";
import { ContainerTitlePlaylist } from "../../../Styles/Pages/Users/PlaylistStyle";
import { PlaylistTitle } from "./components/PlaylistTitle/PlaylistTitle";
import { SongsList } from "./components/SongsList/SongsList";

export const Playlist = () => {
  return (
    <>
        
        <ContainerPlaylist >
            <PlaylistTitle />
            <SongsList />
        </ContainerPlaylist>
    </>
  )
}
