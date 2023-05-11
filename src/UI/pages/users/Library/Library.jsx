// import { ListPlaylists } from "./components/ListPlaylists";
import { ListPlaylists } from "./components/ListPlaylists";
import { PageTitle, GeneralDivMenu, DivChangePlaylistAlbum, PageChanger, BtnAddNew } from "../../../Styles/Pages/Users/MenuPlaylistsStyle";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

export const Library = () => {
  const { type } = useParams();
  
  return (
    <>
      <GeneralDivMenu>
        {
          <DivChangePlaylistAlbum>
            <PageTitle>{type === "Playlist" ? "Playlist" : "Albums"}</PageTitle>
            <Link to={type !== "Playlist" ? "/user/library/Playlist" : "/user/library/Album"}>
              <PageChanger>{type !== "Playlist" ? "Playlist" : "Albums"}</PageChanger>
            </Link>
          </DivChangePlaylistAlbum>
        }
        <ListPlaylists name={"My " + type + "s"} />
        <ListPlaylists name={"Followed " + type + "s"} />
      </GeneralDivMenu>

    </>
  )
}
