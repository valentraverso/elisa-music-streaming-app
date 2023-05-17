import { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import postPlaylist from "../../../../../api/playlists/postPlaylist";
import fetchSongById from "../../../../../api/song/fetchSongById";
import {
    Button,
    ModalBackground,
    ModalContainer,
    Title,
    Input,
    ErrorMessage,
    ButtonCreate,
  } from "../../../../Styles/components/ModalStyle";


const CreatePlaylistModal = ({ token, user, onCreateSuccess }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    img: { public_id: "", secure_url: "" },
    private: true,
    songs: [] // add songs array to formData state
  });
  const [errorMsg, setErrorMsg] = useState("");
  const { getAccessTokenSilently } = useAuth0();

  const handleModalOpen = () => setIsModalOpen(true);

  const handleModalClose = () => {
    setIsModalOpen(false);
    setFormData({
      title: "",
      img: { public_id: "", secure_url: "" },
      private: true,
      songs: []
    });
    setErrorMsg("");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: checked,
    }));
  };

  const handleSongSelect = (songId) => {
    if (formData.songs.includes(songId)) {
      // remove song from list if already selected
      setFormData(prevState => ({
        ...prevState,
        songs: prevState.songs.filter(id => id !== songId)
      }));
    } else {
      // add song to list if not already selected
      setFormData(prevState => ({
        ...prevState,
        songs: [...prevState.songs, songId]
      }));
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = await getAccessTokenSilently();

    const { success, errors } = await postPlaylist(
      {
        title: formData.title,
        songs: formData.songs // pass selected song IDs to postPlaylist function
      },
      token
    );

    if (success) {
      onCreateSuccess("Playlist created successfully.");
      handleModalClose();
    } else {
      const errorMessages = errors ? Object.values(errors).join(", ") : "Unknown error";
      setErrorMsg(errorMessages);
    }
  };
  
    return (
      <>
      <Button onClick={handleModalOpen}>Create Playlist</Button>
      {isModalOpen && (
        <ModalBackground>
          <ModalContainer>
            <Title>Create New Playlist</Title>
            {errorMsg && <ErrorMessage>{errorMsg}</ErrorMessage>}
            <form onSubmit={handleSubmit}>
              <Input
                type="text"
                name="title"
                placeholder="Title"
                value={formData.title}
                onChange={handleInputChange}
              />
              <ButtonCreate type="submit">Create</ButtonCreate>
              <Button onClick={handleModalClose}>Cancel</Button>
            </form>
          </ModalContainer>
        </ModalBackground>
      )}
    </>
    );
  };
  
  export default CreatePlaylistModal;