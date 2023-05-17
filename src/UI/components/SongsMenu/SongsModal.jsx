import { useState, useEffect } from 'react';
import { Modal, Checkbox, Button } from 'antd';
import styled from 'styled-components';
import { BsMusicNoteList } from 'react-icons/bs';
import { useAuth0 } from '@auth0/auth0-react';
import updatePlaylist from '../../../api/playlists/updatePlaylist';
import Dropdown from '../SettingsMenu/SettingsMenu';
import { store } from '../../../utils/redux/store';
import getPlaylistByOwner from '../../../api/playlists/getByOwner';
import { useSelector } from 'react-redux';

const AddButton = styled(BsMusicNoteList)`
    color: rgb(89, 89, 89);
    border: none;
    width: 2rem;
    height: 2rem;

  &:hover {
    color: #595959;
  }

  &.expanded {
    transform: translateX(0);
  }
`;


const Container = styled.div`
  position: relative;
  color: black;
`;

const OptionsButton = styled(Button)`
  position: absolute;
  top: 0;
  right: 0;
`;
const ModalWrapper = styled.div`
  .modal {
    background-color: blue; 
  }
`;

const Title = styled.span`
color: black;
`

const AddToPlaylistModal = ({ onAddToPlaylist, onClose, songId }) => {
  const { getAccessTokenSilently } = useAuth0();
  const [playlists, setPlaylists] = useState([]);
  const [selectedPlaylists, setSelectedPlaylists] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const user = useSelector((state) => state.user.data);

  console.log(selectedPlaylists)
  useEffect(() => {
    const fetchSelectedPlaylists = async () => {
      try {
        const token = await getAccessTokenSilently();
        const owner = user._id;

        const selectedPlaylistsData = await getPlaylistByOwner(owner, token);

        setPlaylists(selectedPlaylistsData.data);
      } catch (error) {
        console.error('Failed to fetch selected playlists:', error);
      }
    };

    if (selectedPlaylists.length === 0) {
      fetchSelectedPlaylists();
    }
  }, [getAccessTokenSilently, selectedPlaylists, user._id]);



  const handleAddToPlaylist = async (playlist) => {
    console.log(playlist)
    try {
      const token = await getAccessTokenSilently();
      console.log(`Adding song with ID "${songId}" to playlist with ID "${playlist._id}`);

      const data = {
        playlistId: playlist._id,
        songId
      } 
      const updatedPlaylist = await updatePlaylist(data, token);
      console.log(updatedPlaylist)
      console.log(`Song successfully added to playlist "${updatedPlaylist.name}" with ID "${updatedPlaylist._id}".`);
      setSelectedPlaylists([]);
      setModalVisible(false);
    } catch (error) {
      console.error('Failed to add song to playlist:', error);
    }
  };

  const togglePlaylistSelection = (playlist) => {
    const index = selectedPlaylists.findIndex((p) => p._id === playlist._id);
    if (index === -1) {
      setSelectedPlaylists([...selectedPlaylists, playlist]);
    } else {
      const updatedSelections = [...selectedPlaylists];
      updatedSelections.splice(index, 1);
      setSelectedPlaylists(updatedSelections);
    }
    console.log('Selected playlists:', selectedPlaylists);
  };


  return (
    <Container>
      <AddButton onClick={() => setModalVisible(true)} />
      <ModalWrapper>
        <Modal
          title="Add to Playlist"
          open={modalVisible}
          onCancel={() => {
            setSelectedPlaylists([]);
            setModalVisible(false);
          }}
          onOk={() => {
            selectedPlaylists.forEach((playlist) => handleAddToPlaylist(playlist));
          }}
        >
          {playlists.map((playlist) => (
            <div key={playlist._id}>
              <Checkbox
                checked={selectedPlaylists.includes(playlist)}
                onChange={() => togglePlaylistSelection(playlist)}
              />
              <Title >{playlist.title}</Title >
            </div>
          ))}
        </Modal>
      </ModalWrapper>
    </Container>
  );
};

export default AddToPlaylistModal;