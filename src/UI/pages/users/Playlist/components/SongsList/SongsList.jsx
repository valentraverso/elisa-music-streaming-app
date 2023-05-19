import { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import {
  ContainerSong, ContainerSongInfo, ContainerSongsList, ImgSong, NameArtist, SongSettings, TitleSmall
} from '../../../../../Styles/Pages/Users/PlaylistStyle';
import {   Button,ModalBackground,ModalContainer,Title,ErrorMessage,ButtonCreate,ContainerButtonsCreate,ContainerTitle, ButtonConfirm, ButtonCancel, ButtonOpen } from '../../../../../Styles/components/ModalStyle';
import { setPlayer } from '../../../../../../utils/player/player';
import { store } from '../../../../../../utils/redux/store';
import deleteSongFromPlaylist from '../../../../../../api/playlists/deleteSongs';
import { useParams } from "react-router-dom";
import { useSelector } from 'react-redux';
import AddToPlaylistModal from '../../../../../components/SongsMenu/SongsModal';



export const SongsList = ({ data, owner }) => {
  const { id } = useParams();
  const { getAccessTokenSilently } = useAuth0();
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [songToDelete, setSongToDelete] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleDeleteSong = async (playlistId, songId) => {
    try {
      const token = await getAccessTokenSilently();
      const response = await deleteSongFromPlaylist(playlistId, songId, token);
      setShowConfirmation(false);

    } catch (error) {
      console.error(error);
    }
  };

  const user = store.getState().user.data;
  const userId = user._id;
  const playlistOwnerId = owner;

  const cancelDelete = () => {
    setShowConfirmation(null);
  };
  const confirmDelete = (songId) => {
    setShowConfirmation(songId);
  };

  const handleAddToPlaylist = (playlistId) => {
    // Handle adding song to playlist here
  };

  return (
    <ContainerSongsList>
      {data?.map((song, index) => {
        return (
          <ContainerSong key={index} onClick={() => setPlayer({ withSong: true, queu: data, index: index })}>
            <ImgSong src={song.album.img.secure_url} />
            <ContainerSongInfo>
              <TitleSmall>{song.title}</TitleSmall>
              <NameArtist>{song.artist}</NameArtist>
            </ContainerSongInfo>
            <SongSettings>
              {userId === playlistOwnerId && (
                <>
                  <ButtonOpen className="delete-button" onClick={() => confirmDelete(song._id)}>x</ButtonOpen>
                  {showConfirmation === song._id && (
                    <ModalBackground>
                      <ModalContainer>
                        <Title>Are you sure you want to delete this song?</Title>
                        <ContainerButtonsCreate>
                          <ButtonConfirm onClick={() => handleDeleteSong(id, song._id)}>Yes</ButtonConfirm>
                          <ButtonCancel onClick={cancelDelete}>No</ButtonCancel>
                        </ContainerButtonsCreate>
                      </ModalContainer>
                    </ModalBackground>
                  )}
                </>
              )}
              {userId !== playlistOwnerId && (
                <AddToPlaylistModal
                  // onAddToPlaylist={handleAddToPlaylist}
                  onClose={() => setShowModal(false)}
                  songId={song._id}
                />
              )}
            </SongSettings>
          </ContainerSong>
        );
      })}
    </ContainerSongsList>
  );
};