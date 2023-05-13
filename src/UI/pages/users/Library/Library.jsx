import { ContainerListPlaylists } from "./components/ContainerListPlaylists";
import { PageTitle, GeneralDivMenu, DivChangePlaylistAlbum, PageChanger, BtnAddNew } from "../../../Styles/Pages/Users/MenuPlaylistsStyle";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import LibraryGrid from "../../../components/LibraryGrid/LibraryGrid";
import { useQuery } from "react-query";
import getPlaylistByOwner from "../../../../api/playlists/getByOwner";
import { store } from "../../../../utils/redux/store";
import { useAuth0 } from "@auth0/auth0-react";

export const Library = () => {
  const { type } = useParams();
  const { _id: idUser } = store.getState().user.data[0];
  const { getAccessTokenSilently } = useAuth0()

  console.log("id", idUser)

  const switchLibraryData = async (token) => {
    switch (type) {
      case "playlist":
        return await getPlaylistByOwner(idUser, token);
      default:
        return;
    }
  }

  const { data, isLoading } = useQuery(['library'], async () => {
    console.log("entradno en use")
    const token = getAccessTokenSilently();
    const data = await switchLibraryData(token);
    console.log("inside", data)
    return data;
  })

  console.log(data)

  return (

    isLoading ?
      <p>Loading library</p>
      :
      <GeneralDivMenu>
        {
          <DivChangePlaylistAlbum>
            <PageTitle>{type === "playlist" ? "Playlist" : "Albums"}</PageTitle>
            <Link to={type !== "playlist" ? "/user/library/playlist" : "/user/library/album"}>
              <PageChanger>{type !== "playlist" ? "Playlist" : "Albums"}</PageChanger>
            </Link>
          </DivChangePlaylistAlbum>
        }
        <LibraryGrid title={"My " + type + "s"} data={data.data} type={type} />
        <ContainerListPlaylists name={"Followed " + type + "s"} />
      </GeneralDivMenu>

  )
}
