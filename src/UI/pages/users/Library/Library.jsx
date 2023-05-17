import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { useQuery } from "react-query";
import LibraryGrid from "../../../components/LibraryGrid/LibraryGrid";
import getPlaylistByOwner from "../../../../api/playlists/getByOwner";
import { PageTitle, DivChangePlaylistAlbum, PageChanger, ContainerLibrary } from "../../../Styles/Pages/Users/MenuPlaylistsStyle";
import { store } from "../../../../utils/redux/store";
import fetchManyAlbumById from "../../../../api/albums/getManyById";
import CreatePlaylistModal from "./components/playlistModal";

export const Library = () => {
  const { type } = useParams();
  const { _id: idUser, albums } = store.getState().user.data;
  const { getAccessTokenSilently } = useAuth0()

  const switchLibraryData = async (token) => {
    switch (type) {
      case "playlist":
        return await getPlaylistByOwner(idUser, token);
      case "album":
        if (albums.length < 1) {
          return {
            status: false,
            msg: "You don't have albums."
          }
        }
        return await fetchManyAlbumById(albums, token);
      default:
        return;
    }
  }

  const { data, isLoading } = useQuery(['library', type], async () => {
    const token = await getAccessTokenSilently();
    const data = await switchLibraryData(token);

    return data;
  })

  // console.log("datalibrary", data)

  return (
    isLoading ?
      <p>Loading library</p>
      :
      <ContainerLibrary>
        <DivChangePlaylistAlbum>
          <PageTitle>{type === "playlist" ? "Playlist" : "Albums"}</PageTitle>
          <Link to={type !== "playlist" ? "/user/library/playlist" : "/user/library/album"}>
            <PageChanger>{type !== "playlist" ? "Playlist" : "Albums"}</PageChanger>
          </Link>
        </DivChangePlaylistAlbum>
        <LibraryGrid data={data.data} type={type}/>
        {
          type === 'playlist' &&
          <CreatePlaylistModal />
        }
      </ContainerLibrary>
  )
}
