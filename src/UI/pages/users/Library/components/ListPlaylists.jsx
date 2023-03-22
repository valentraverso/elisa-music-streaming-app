import { GeneralDiv, PageTitle, DivTypePlaylist,Subtitle, ImgPlaylist, DivInfoPlaylist, TitlePlaylist, InfoPlaylist} from "../../../../Styles/Pages/Users/MenuPlaylistsStyle";
import { PlaylistDisplay } from "./PlaylistDisplay";

export const ListPlaylists = ({name, data}) => {
  return (
    <GeneralDiv>
        <DivTypePlaylist>
            <Subtitle>{name}</Subtitle>
            <PlaylistDisplay name = "Sad Playlist" />
            <PlaylistDisplay name ="Chill Playlist" />
            <PlaylistDisplay name ="Rock Playlist"/>
        </DivTypePlaylist>
    </GeneralDiv>
    
  )
}
