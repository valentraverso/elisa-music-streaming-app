// import { ListPlaylists } from "../library/components/ListPlaylists";
import { ListPlaylists } from "../Library/components/ListPlaylists";
import { PageTitle, GeneralDivMenu, DivChangePlaylistAlbum, PageChanger } from "../../../Styles/Pages/Users/MenuPlaylistsStyle";
import { Link } from "react-router-dom";

export const LibraryAlbums = () => {
  return (
    <GeneralDivMenu>
        <DivChangePlaylistAlbum>
          <Link to={"/library"}>
            <PageChanger>Playlists</PageChanger>
          </Link>
          <PageTitle>Albums</PageTitle>
        </DivChangePlaylistAlbum>
        <ListPlaylists name="My Playlists"/>
        <ListPlaylists name="Followed Playlists" />
    </GeneralDivMenu>
  )
}