import React, { useState } from "react";
import styled from "styled-components";
import postPlaylist from "../../../../../api/playlists/postPlaylist";
import { colors } from "../../../../Styles/config";
import  postMix  from "../../../../../api/mixes/postMix";
import { useAuth0 } from "@auth0/auth0-react";

const ButtonAddPlaylist = styled.button`
  width: 125px;
  height: 24px;
  border: 1px ${colors.white} solid;
  border-radius: 5px;
  padding: 0.1rem;
  position: fixed;
  bottom: 16%;
  right: 10%;
  background-color: ${colors.blue};
`;

const ModalBackground = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContainer = styled.div`
  background-color: ${colors["dark-blue"]};
  border-radius: 5px;
  padding: 20px;
  width: 500px;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  color: black;
  margin-bottom: 20px;
  border: 1px solid ${colors.grey};
  border-radius: 5px;
`;

const Button = styled.button`
  width: 100px;
  height: 40px;
  background-color: ${colors.blue};
  color: ${colors.white};
  border: none;
  border-radius: 5px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
`;

const ErrorMessage = styled.p`
  color: ${colors.red};
  font-size: 16px;
  margin-bottom: 20px;
`;
const ButtonCreate = styled(Button)`
  background-color: ${colors.green};
  margin-right: 10px;
`;

const CreateMixModal = ({ token, user, onCreateSuccess }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    songs: [],
  });
  const [errorMsg, setErrorMsg] = useState("");
  const { getAccessTokenSilently } = useAuth0();

  const handleModalOpen = () => setIsModalOpen(true);

  const handleModalClose = () => {
    setIsModalOpen(false);
    setFormData({
      name: "",
      description: "",
      songs: [],
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


    const response = await postMix(
      {
        name: formData.name,
        description: formData.description,
        songs: formData.songs,
      },
      token
    );
    const songIds = formData.songs.map((songId) => String(songId));
    if (response.status) {
      onCreateSuccess(response.data);
      handleModalClose();
    } else {
      setErrorMsg(response.msg);
    }
  };

  const handleAddSong = (e) => {
    e.preventDefault();
    setFormData((prevState) => ({
      ...prevState,
      songs: [...prevState.songs, ""],
    }));
  };

  const handleSongChange = (e, index) => {
    const { value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      songs: prevState.songs.map((song, i) => (i === index ? value : song)),
    }));
  };
  
  const getSongIdByName = async (name) => {
    try {
      const token = await getAccessTokenSilently();
      const response = await getSongIdByName(name, token);
      if (response.status) {
        return response.data[0]._id; // assumes the first match is the correct one
      } else {
        throw new Error(response.msg);
      }
    } catch (error) {
      console.error(error);
      setErrorMsg(error.message);
    }
  };
  

  const handleSongIdChange = (index, songId) => {
    setFormData((prevState) => ({
      ...prevState,
      songs: prevState.songs.map((song, i) =>
        i === index ? songId : song
      ),
    }));
  };

  return (
    <>
      <Button onClick={handleModalOpen}>Create Mix</Button>
      {isModalOpen && (
        <ModalBackground>
          <ModalContainer>
            <Title>Create New Mix</Title>
            {errorMsg && <ErrorMessage>{errorMsg}</ErrorMessage>}
            <form onSubmit={handleSubmit}>
              <Input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleInputChange}
              />
              <Input
                as="textarea"
                name="description"
                placeholder="Description"
                value={formData.description}
                onChange={handleInputChange}
              />
              {formData.songs.map((songId, index) => (
                <Input
                  key={index}
                  type="text"
                  placeholder={`Song ${index + 1}`}
                  value={songId}
                  onChange={(e) => handleSongChange(e, index)}
                />
              ))}
              <div>
                {formData.songs.map((songId, index) => (
                  <div key={index}>
                    <input
                      type="text"
                      placeholder={`Song ${index + 1} ID`}
                      value={songId}
                      onChange={(e) =>
                        handleSongIdChange(index, e.target.value)
                      }
                    />
                  </div>
                ))}
              </div>
            <ButtonCreate type="submit">Create</ButtonCreate>
            <Button onClick={handleModalClose}>Cancel</Button>
          </form>
        </ModalContainer>
      </ModalBackground>
    )}
  </>
  );
};

export default CreateMixModal;
  
