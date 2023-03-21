import { GeneralDiv, PageTitle, DivTypePlaylist,Subtitle, ImgPlaylist, DivInfoPlaylist, TitlePlaylist, InfoPlaylist} from "../../../../Styles/Pages/Users/MenuPlaylistsStyle";
import { PlaylistDisplay } from "./PlaylistDisplay";

export const ListPlaylists = (props) => {
  return (
    <GeneralDiv>
        <DivTypePlaylist>
            <Subtitle>{props.name}</Subtitle>
            <PlaylistDisplay name ="Sad Playlist"/>
            <PlaylistDisplay name ="Chill Playlist"/>
            <PlaylistDisplay name ="Rock Playlist"/>
        </DivTypePlaylist>
    </GeneralDiv>
    
  )
}
