import {
  ContainerSong, ContainerSongInfo, ContainerSongsList, ImgSong, NameArtist, SongSettings, TitleSmall
} from '../../../../../Styles/Pages/Users/PlaylistStyle';
import { NavLink } from 'react-router-dom';
import { songs } from "../../../../../../songs.js";
import { setPlayer } from '../../../../../../utils/player/player';
import { store } from '../../../../../../utils/redux/store';
import { useState } from 'react';
import AddToPlaylistModal from '../../../../../components/SongsMenu/SongsModal';
import { Playlist } from '../../../Playlist/Playlist';
import Dropdown from '../../../../../components/SettingsMenu/SettingsMenu';

export const SongsListAlbum = ({ data, imgAlbum }) => {
  const player = store.getState().player;
  const [showModal, setShowModal] = useState(false);
  const [selectedSongId, setSelectedSongId] = useState(null);

  const handleAddToPlaylist = (playlistId) => {
    console.log(`Adding song with ID ${selectedSongId} to playlist with ID ${playlistId}`);
    setShowModal(false);
  };

  const openModal = (songId) => {
    setSelectedSongId(songId);
    setShowModal((prevShowModal) => !prevShowModal);
  };

  const handleClickSong = (songId, index) => {
    // Set the player state
    setPlayer({
      ...player,
      withSong: true,
      queu: {
        data,
        imgAlbum
      },
      index: index
    });
  };

  return (
    <ContainerSongsList>
      {data?.map((song, index) => {
        return (
          <ContainerSong key={index}>
            <NavLink
              to={{
                pathname: `/PlayerPage/${song._id}`,
                state: { albumImg: imgAlbum }
              }}
              onClick={() => handleClickSong(song._id, index)}
              activeClassName="active"
            >
              <ImgSong src={imgAlbum} />
              <ContainerSongInfo>
                <TitleSmall>{data[index].title}</TitleSmall>
                <NameArtist>{data[index].artist}</NameArtist>
              </ContainerSongInfo>
            </NavLink>
            <SongSettings onClick={() => openModal(song._id)}>...</SongSettings>
            {showModal && selectedSongId === song._id && (
              <AddToPlaylistModal
                onAddToPlaylist={handleAddToPlaylist}
                onClose={() => setShowModal(false)}
                songId={selectedSongId}
              />
            )}
          </ContainerSong>
        );
      })}
    </ContainerSongsList>
  );
};