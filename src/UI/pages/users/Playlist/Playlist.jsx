import { useParams } from "react-router-dom";
import { ContainerPlaylist } from "../../../Styles/Pages/Users/PlaylistStyle";
import { ButtonAddSong, ContainerPagePlaylist } from "../../../Styles/Pages/Users/PlaylistStyle";
import { PlaylistTitle } from "./components/PlaylistTitle/PlaylistTitle";
import { SongsList } from "./components/SongsList/SongsList";
import { useAuth0 } from "@auth0/auth0-react";
import { useQuery } from "react-query";
import fetchPlaylistById from "../../../../api/playlists/getById";

export const Playlist = () => {
  const { id } = useParams();
  const { getAccessTokenSilently } = useAuth0();

  const { data, isLoading } = useQuery(["playlistSong", id], async () => {
    const token = await getAccessTokenSilently();
    const data = await fetchPlaylistById(id, token);

    return data;
  });

  console.log(data);

  return (
    isLoading ?
      <p>Loading playlist...</p>
      :
      <ContainerPagePlaylist>
        <ContainerPlaylist >
          <PlaylistTitle img={data.data.img.secure_url} playlistName={data.data.title} info={""} likes={""} btnLike={true} />
          {
            data.data.songs.length < 1 ?
              <>
                <p>This playlist is empty.</p>
                <span>Add songs and save your favorite music</span>
              </>
              :
              <SongsList data={data.data.songs} />
          }
        </ContainerPlaylist>
        <ButtonAddSong>Add songs</ButtonAddSong>
      </ ContainerPagePlaylist>
  )
}

  // return <PlaylistPage playlist={playlist} />;
// };