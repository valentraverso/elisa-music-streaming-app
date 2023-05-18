import { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import postPlaylist from "../../../../../api/playlists/postPlaylist";
import {
  Button,
  ModalBackground,
  ModalContainer,
  Title,
  ErrorMessage,
  ButtonCreate,
  ContainerButtonsCreate,
  ContainerTitle,
} from "../../../../Styles/components/ModalStyle";
import { InputForm } from "../../../../Styles/Pages/Users/UploadStyle";
import { ButtonArtist, ContainerButtonsArtist } from "../../../../Styles/Pages/Users/Register";
import { store } from "../../../../../utils/redux/store";
import { setPlaylists } from "../../../../../utils/player/user";

const CreatePlaylistModal = () => {
  const { getAccessTokenSilently } = useAuth0();
  const user = store.getState().user.data;

  const [errorMsg, setErrorMsg] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [formData, setFormData] = useState({
    title: "",
    private: true,
    owner: user._id
  });

  const handleModalOpen = () => setIsModalOpen(true);

  const handleModalClose = () => {
    setIsModalOpen(false);
    setFormData({
      title: "",
      private: true,
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = await getAccessTokenSilently();
    const createPlaylist = await postPlaylist(formData, token);

    if (createPlaylist.status) {
      setPlaylists(createPlaylist.data.playlists);

      setErrorMsg("Playlist created successfully.");
      handleModalClose();
    }

    setErrorMsg(createPlaylist.msg);
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
              <ContainerTitle>
                <InputForm
                  type="text"
                  name="title"
                  placeholder="My playlist"
                  value={formData.title}
                  onChange={handleInputChange}
                  required
                  minLength={2}
                  maxLength={20}
                />
              </ContainerTitle>
              <ContainerButtonsArtist>
                <ButtonArtist
                  isActive={formData.private && "#3B46F1"}
                  type="button"
                  onClick={() => setFormData({ ...formData, private: true })}>Private</ButtonArtist>
                <ButtonArtist
                  isActive={!formData.private && "#3B46F1"}
                  type="button"
                  onClick={() => setFormData({ ...formData, private: false })}>Public</ButtonArtist>
              </ContainerButtonsArtist>
              <ContainerButtonsCreate>
                <ButtonCreate type="submit">Create</ButtonCreate>
                <Button onClick={handleModalClose}>Cancel</Button>
              </ContainerButtonsCreate>
            </form>
          </ModalContainer>
        </ModalBackground>
      )}
    </>
  );
};

export default CreatePlaylistModal;