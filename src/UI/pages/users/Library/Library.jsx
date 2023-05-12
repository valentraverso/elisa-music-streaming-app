import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { useQuery } from "react-query";
import { ContainerListPlaylists } from "./components/ContainerListPlaylists";
import LibraryGrid from "../../../components/LibraryGrid/LibraryGrid";
import getPlaylistByOwner from "../../../../api/playlists/getByOwner";
import { PageTitle, DivChangePlaylistAlbum, PageChanger, ContainerLibrary } from "../../../Styles/Pages/Users/MenuPlaylistsStyle";
import { store } from "../../../../utils/redux/store";

export const Library = () => {
  const { type } = useParams();
  const { _id: idUser } = store.getState().user.data[0];
  const { getAccessTokenSilently } = useAuth0()

  const switchLibraryData = async (token) => {
    switch (type) {
      case "playlist":
        return await getPlaylistByOwner(idUser, token);
      default:
        return;
    }
  }

  const { data, isLoading } = useQuery(['library'], async () => {
    const token = getAccessTokenSilently();
    const data = await switchLibraryData(token);
    return data;
  })

  return (

    isLoading ?
      <p>Loading library</p>
      :
      <ContainerLibrary>
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
      </ContainerLibrary>
  )
}
