import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import fetchAlbumById from "../../../../api/albums/getById";
import AlbumStructure from "./components/AlbumStructure/AlbumStructure";

export const Album = () => {
  const { id } = useParams();
  const { getAccessTokenSilently } = useAuth0();

  const { data: album, isLoading } = useQuery(["albumSong", id], async () => {
    const token = await getAccessTokenSilently();
    const data = await fetchAlbumById(id, token);

    return data;
  });

  return (
    isLoading ?
      <p>Loading</p>
      :
      <AlbumStructure album={album.data}/>
  );
};





