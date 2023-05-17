 import { useState, useEffect } from 'react';
import { Modal, Checkbox, Button } from 'antd';
import styled from 'styled-components';
import { AiOutlineEllipsis } from 'react-icons/ai';
import fetchAllPlaylists from '../../../api/playlists/fetchPlaylistAll';
import { useAuth0 } from '@auth0/auth0-react';
import fetchPlaylistById from '../../../api/playlists/getById';
import updatePlaylist from '../../../api/playlists/updatePlaylist';
import updatePlaylistSongs from '../../../api/playlists/updatePlaylistsSongs';
import fetchPlaylistByTitle from '../../../api/playlists/fetchPlaylistByTitle';
import Dropdown from '../SettingsMenu/SettingsMenu';
import { store } from '../../../utils/redux/store';
import getPlaylistByOwner from '../../../api/playlists/getByOwner';
import { useSelector } from 'react-redux';

const AddButton = styled.button`
  background-color: #000000;
  color: #595959;
  border: none;
  width: 2rem;
  height: 2rem;
  margin-right: 1rem;
  position: absolute;
  top: -3.5vh;
  right: -18vh;
  transform: translateX(100%);
  transition: transform 0.3s ease;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: #ffffff;
    color: #595959;
  }

  &.expanded {
    transform: translateX(0);
  }
`;


const Container = styled.div`
  position: relative;
  left: 400%;
  color: black;
  background-color: blue;
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
  const [selectedPlaylistId, setSelectedPlaylistId] = useState(null);
  const { getAccessTokenSilently } = useAuth0();
  const [playlists, setPlaylists] = useState([]);
  const [selectedPlaylists, setSelectedPlaylists] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const user = useSelector((state) => state.user.data);
 const [ownerPlaylists, setOwnerPlaylists] = useState([]);
 useEffect(() => {
  const fetchSelectedPlaylists = async () => {
    console.log(`Fetching selected playlists for user with ID: ${user._id}`);
    try {
      const token = await getAccessTokenSilently();
      const owner = user._id;
      const selectedPlaylistsData = await getPlaylistByOwner(owner, token);
      console.log('Received selected playlists data:', selectedPlaylistsData.data);
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
    try {
      const token = await getAccessTokenSilently();
      console.log(`Adding song with ID "${songId}" to playlist with ID "${playlist._id}`);
      const updatedPlaylist = await updatePlaylist(playlist._id, [songId], token);
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
    <AddButton onClick={() => setModalVisible(true)}>+</AddButton>
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