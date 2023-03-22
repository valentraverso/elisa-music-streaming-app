import { GeneralDiv, PageTitle, DivTypePlaylist,Subtitle, ImgPlaylist, DivInfoPlaylist, TitlePlaylist, DivAllPlaylist} from "../../../../Styles/Pages/Users/MenuPlaylistsStyle";
import { PlaylistDisplay } from "./PlaylistDisplay";
import { Link} from "react-router-dom";

export const ListPlaylists = ({name}) => {
  return (
    <GeneralDiv>
        <DivTypePlaylist>
            <Subtitle>{name}</Subtitle>
            <DivAllPlaylist>
              <Link to = "/playlist">
                <PlaylistDisplay name = "Sad Playlist"/>
              </Link>
              <Link to = "/playlist">
                <PlaylistDisplay name ="Chill Playlist" />
              </Link>
              <Link to = "/playlist">
              < PlaylistDisplay name ="Rock Playlist"/>
              </Link>
              <Link to = "/playlist">
                <PlaylistDisplay name = "Sad Playlist"/>
              </Link>
            </DivAllPlaylist>
        </DivTypePlaylist>
    </GeneralDiv>
    
  )
}
