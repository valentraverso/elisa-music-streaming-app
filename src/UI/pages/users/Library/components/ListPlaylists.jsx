import { GeneralDiv, PageTitle, DivTypePlaylist,Subtitle, ImgPlaylist, DivInfoPlaylist, TitlePlaylist, InfoPlaylist} from "../../../../Styles/Pages/Users/MenuPlaylistsStyle";
import { PlaylistDisplay } from "./PlaylistDisplay";
import { useNavigate } from "react-router-dom";

export const ListPlaylists = ({name, data}) => {
  const navigate = useNavigate();
  return (
    <GeneralDiv>
        <DivTypePlaylist>
            <Subtitle>{name}</Subtitle>
            <PlaylistDisplay name = "Sad Playlist" onClick ={navigate("/playlist")}/>
            <PlaylistDisplay name ="Chill Playlist" />
            <PlaylistDisplay name ="Rock Playlist"/>
        </DivTypePlaylist>
    </GeneralDiv>
    
  )
}
