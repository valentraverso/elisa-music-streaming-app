import { useParams } from "react-router-dom";
import { ContainerPlaylist, IconContainer, InfoIcon } from "../../../Styles/Pages/Users/PlaylistStyle";
import { ButtonAddSong, ContainerPagePlaylist, PlaylistInfo, PlaylistAdvice, PlaylistInfoContainer } from "../../../Styles/Pages/Users/PlaylistStyle";
import { PlaylistTitle } from "./components/PlaylistTitle/PlaylistTitle";
import { SongsList } from "./components/SongsList/SongsList";
import { useAuth0 } from "@auth0/auth0-react";
import { useQuery } from "react-query";
import fetchPlaylistById from "../../../../api/playlists/getById";
import { store } from "../../../../utils/redux/store";

export const Playlist = () => {
  const { id } = useParams();
  const { getAccessTokenSilently } = useAuth0();

  const { data, isLoading } = useQuery(["playlistSong", id], async () => {
    const token = await getAccessTokenSilently();
    const data = await fetchPlaylistById(id, token);

    return data;
  });

  return (
    isLoading ?
      <p>Loading playlist...</p>
      :
      <ContainerPagePlaylist>
        <ContainerPlaylist >
          <PlaylistTitle owner={data.data.owner} id={id} img={data.data.img.secure_url} playlistName={data.data.title} isPrivate={data.data.private}/>
          {
            data.data.songs.length < 1 ?
              <PlaylistInfoContainer>
                <IconContainer>
                  <InfoIcon />
                </IconContainer>
                <PlaylistInfo>This playlist is empty.</PlaylistInfo>
                <PlaylistAdvice>Add songs and save your favorite music</PlaylistAdvice>
              </PlaylistInfoContainer>
              :
              <SongsList data={data.data.songs} owner={data.data.owner}/>
          }
        </ContainerPlaylist>
        <ButtonAddSong>Add songs</ButtonAddSong>
      </ ContainerPagePlaylist>
  )
}
