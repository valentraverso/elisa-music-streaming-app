import { GeneralDiv, PageTitle, DivTypePlaylist,Subtitle, ImgPlaylist, DivInfoPlaylist, TitlePlaylist, DivAllPlaylist} from "../../../../Styles/Pages/Users/MenuPlaylistsStyle";
import { PlaylistDisplay } from "./PlaylistDisplay";
import { useNavigate } from "react-router-dom";

export const ListPlaylists = ({name, data}) => {
  const navigate = useNavigate();
  return (
    <GeneralDiv>
        <DivTypePlaylist>
            <Subtitle>{name}</Subtitle>
            <DivAllPlaylist>
              <PlaylistDisplay name = "Sad Playlist" onClick ={navigate("/playlist")}/>
              <PlaylistDisplay name ="Chill Playlist" />
              <PlaylistDisplay name ="Rock Playlist"/>
            </DivAllPlaylist>
        </DivTypePlaylist>
    </GeneralDiv>
    
  )
}
