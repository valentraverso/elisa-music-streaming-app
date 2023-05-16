import { useState, useEffect } from 'react';
import { Modal, Checkbox, Button } from 'antd';
import styled from 'styled-components';
import { AiOutlineEllipsis } from 'react-icons/ai';
import fetchAllPlaylists from '../../../api/playlists/fetchPlaylistAll';
import { useAuth0 } from '@auth0/auth0-react';
import fetchPlaylistById from '../../../api/playlists/fetchPlaylistById';
import updatePlaylist from '../../../api/playlists/updatePlaylist';
import updatePlaylistSongs from '../../../api/playlists/updatePlaylistsSongs';
import fetchPlaylistByTitle from '../../../api/playlists/fetchPlaylistByTitle';

const AddButton = styled(Button)`
  background-color: #000000;
  color: #595959;
  border: none;

  &:hover {
    background-color: #ffffff;
    color: #595959;
  }
`;

const Container = styled.div`
  position: relative;
`;

const OptionsButton = styled(Button)`
  position: absolute;
  top: 0;
  right: 0;
`;

const PlaylistItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
background-color: black;
  &:last-child {
    margin-bottom: 0;
  }
`;

const PlaylistTitle = styled.span`
  margin-left: 8px;
`;

const AddToPlaylistModal = ({ onAddToPlaylist, onClose, songId }) => {
    const [selectedPlaylistId, setSelectedPlaylistId] = useState(null);
    const { getAccessTokenSilently } = useAuth0();
    const [playlists, setPlaylists] = useState([]);
    const [selectedPlaylists, setSelectedPlaylists] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    
    const selectedPlaylistIds = selectedPlaylists.map((playlist) => playlist._id);
  
    useEffect(() => {
        const fetchPlaylists = async () => {
          console.log('Fetching all playlists');
          const token = await getAccessTokenSilently();
          const playlistsData = await fetchAllPlaylists(token);
          console.log('Received playlists data:', playlistsData);
          setPlaylists(playlistsData);
        };
      
        if (selectedPlaylists.length === 0) {
          fetchPlaylists();
        } else {
          const fetchSelectedPlaylists = async () => {
            console.log(`Fetching ${selectedPlaylists.length} selected playlists`);
            const token = await getAccessTokenSilently();
            const selectedPlaylistsData = await Promise.all(
              selectedPlaylists.map((playlist) => fetchPlaylistById(playlist._id, token))
            );
            console.log('Received selected playlists data:', selectedPlaylistsData);
            setPlaylists((prevPlaylists) => {
              const existingPlaylistIds = new Set(prevPlaylists.map((playlist) => playlist._id));
              const updatedPlaylists = [...prevPlaylists];
              selectedPlaylistsData.forEach((playlistData) => {
                if (!existingPlaylistIds.has(playlistData._id)) {
                  updatedPlaylists.push(playlistData);
                }
              });
              return updatedPlaylists;
            });
          };
          fetchSelectedPlaylists();
        }
      }, [getAccessTokenSilently, selectedPlaylists]);
  
    const handleAddToPlaylist = async (playlist) => {
      try {
        const token = await getAccessTokenSilently();
        console.log(`Adding song with ID "${songId}" to playlist with ID "${playlist._id}"`);
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
      <div>
        <AiOutlineEllipsis onClick={() => setModalVisible(true)} />
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
              <span>{playlist.title}</span>
            </div>
              ))}
              </Modal>
            </div>
    );
  };
  
  export default AddToPlaylistModal;
  