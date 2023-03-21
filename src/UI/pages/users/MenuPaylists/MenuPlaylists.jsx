import { ListPlaylists } from "./components/ListPlaylists"
import { PageTitle } from "../../../Styles/Pages/Users/MenuPlaylistsStyle"

export const MenuPlaylists = () => {
  return (
    <div>
        <PageTitle>Playlists</PageTitle>
        <ListPlaylists name="My Playlists"/>
        <ListPlaylists name="Followed Playlists" />
    </div>
  )
}
