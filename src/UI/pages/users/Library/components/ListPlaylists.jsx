import { GeneralDiv, DivTypePlaylist,Subtitle, DivAllPlaylist, BtnAddNew, DivBtnAddNew} from "../../../../Styles/Pages/Users/MenuPlaylistsStyle";
import { PlaylistDisplay } from "./PlaylistDisplay";
import { Link} from "react-router-dom";
import { useParams } from "react-router-dom";

export const ListPlaylists = ({name}) => {
  const {type} = useParams();
  return (
    <GeneralDiv>
        <DivTypePlaylist>
            <Subtitle>{name}</Subtitle>
            <DivAllPlaylist>
              <Link to = "/playlist">
                <PlaylistDisplay name = {"Sad "+ type}/>
              </Link>
              <Link to = "/playlist">
                <PlaylistDisplay name ={"Chill "+ type} />
              </Link>
              <Link to = "/playlist">
              < PlaylistDisplay name ={"Rock "+ type}/>
              </Link>
              <Link to = "/playlist">
                <PlaylistDisplay name = {"Hola Beats "+ type}/>
              </Link>
            </DivAllPlaylist>
        </DivTypePlaylist>
        <DivBtnAddNew>
          <BtnAddNew>Add new {type}</BtnAddNew>
        </DivBtnAddNew>
    </GeneralDiv>
    
  )
}
