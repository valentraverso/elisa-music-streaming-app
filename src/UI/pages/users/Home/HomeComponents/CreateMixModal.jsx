import React, { useState } from "react";
import styled from "styled-components";
import postPlaylist from "../../../../../api/playlists/postPlaylist";
import { colors } from "../../../../Styles/config";
import  postMix  from "../../../../../api/mixes/postMix";
import { useAuth0 } from "@auth0/auth0-react";
import {
  Button,
  ModalBackground,
  ModalContainer,
  Title,
  Input,
  ErrorMessage,
  ButtonCreate,
} from "../../../../Styles/components/ModalStyle";

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
  
