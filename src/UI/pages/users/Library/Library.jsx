import { ListPlaylists } from "./components/ListPlaylists";
import { PageTitle, GeneralDivMenu } from "../../../Styles/Pages/Users/MenuPlaylistsStyle";

export const Library = () => {
  return (
    <GeneralDivMenu>
        <PageTitle>Playlists</PageTitle>
        <ListPlaylists name="My Playlists"/>
        <ListPlaylists name="Followed Playlists" />
    </GeneralDivMenu>
  )
}
