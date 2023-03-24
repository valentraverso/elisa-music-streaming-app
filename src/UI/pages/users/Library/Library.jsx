// import { ListPlaylists } from "./components/ListPlaylists";
import { ListPlaylists } from "./components/ListPlaylists";
import { PageTitle, GeneralDivMenu, DivChangePlaylistAlbum, PageChanger, BtnAddNew} from "../../../Styles/Pages/Users/MenuPlaylistsStyle";
import { Link } from "react-router-dom";
import { device } from "../../../Styles/config";
import UseWidth from "../../../../helpers/hooks/useWidth";
import { useParams } from "react-router-dom";
import { Player } from "../../../components/Player/Player";


export const Library = () => {
  const {type} = useParams();
  console.log(device.desktop);
  const width = UseWidth({
    0: 'mobile',
    720: 'tablet',
    1024: 'desktop',
});
  return (
    <>
    <GeneralDivMenu>
        {
        <DivChangePlaylistAlbum>
          <PageTitle>{type ==="Playlist" ? "Playlist":"Albums"}</PageTitle>
          <Link to={type !=="Playlist" ? "/user/library/Playlist":"/user/library/Album"}>
            <PageChanger>{type !=="Playlist" ? "Playlist":"Albums"}</PageChanger>
          </Link>
        </DivChangePlaylistAlbum>
        }
        <ListPlaylists name={"My " + type + "s"}/>
        <ListPlaylists name={"Followed " + type + "s"} />
    </GeneralDivMenu>
    <Player/>
    </>
  )
}
