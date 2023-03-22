// import { ListPlaylists } from "./components/ListPlaylists";
import { ListPlaylists } from "./components/ListPlaylists";
import { PageTitle, GeneralDivMenu, DivChangePlaylistAlbum, PageChanger } from "../../../Styles/Pages/Users/MenuPlaylistsStyle";
import { Link } from "react-router-dom";
import { device } from "../../../Styles/config";
import UseWidth from "../../../../helpers/hooks/useWidth";
import { useParams } from "react-router-dom";


export const Library = () => {
  const {type} = useParams();
  console.log(device.desktop);
  const width = UseWidth({
    0: 'mobile',
    720: 'tablet',
    1024: 'desktop',
});
  return (
    <GeneralDivMenu>
        {width === 'desktop' ?
        <DivChangePlaylistAlbum>
          <PageTitle>{type ==="playlist" ? "Playlist":"Album"}</PageTitle>
          <Link to={type !=="playlist" ? "/user/library/playlist":"/user/library/album"}>
            <PageChanger>{type !=="playlist" ? "Playlist":"Album"}</PageChanger>
          </Link>
        </DivChangePlaylistAlbum> : null
        }
        <ListPlaylists name="My Playlists"/>
        <ListPlaylists name="Followed Playlists" />
    </GeneralDivMenu>
  )
}
