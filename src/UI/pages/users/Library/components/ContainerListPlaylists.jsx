import { GeneralDiv, DivTypePlaylist,Subtitle, DivAllPlaylist, BtnAddNew, DivBtnAddNew} from "../../../../Styles/Pages/Users/MenuPlaylistsStyle";
import { PlaylistDisplay } from "./PlaylistDisplay";
import { Link} from "react-router-dom";
import { useParams } from "react-router-dom";
import CreatePlaylistModal from "./playlistModal";

export const ContainerListPlaylists = ({name}) => {
  const {type} = useParams();
  return (
    <GeneralDiv>
        <DivTypePlaylist>
            <Subtitle>{name}</Subtitle>
            <DivAllPlaylist>
              <Link to = "/playlist">
                <PlaylistDisplay name = {"Sad "+ type}/>
              </Link>
            </DivAllPlaylist>
        </DivTypePlaylist>
        <DivBtnAddNew>
          <BtnAddNew>Add new {type}</BtnAddNew>
          <CreatePlaylistModal />
        </DivBtnAddNew>
    </GeneralDiv>
  )
}
