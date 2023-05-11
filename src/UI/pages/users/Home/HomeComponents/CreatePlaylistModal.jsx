import React, { useState } from "react";
import styled from "styled-components";
import postPlaylist from "../../../../../api/playlists/postPlaylist";
import { colors } from "../../../../Styles/config";
import { postMix } from "../../../../../api/mixes/postMix";

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
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [songs, setSongs] = useState([]);
    const [errorMsg, setErrorMsg] = useState("");
  
    const handleModalOpen = () => setIsModalOpen(true);
  
    const handleModalClose = () => {
      setIsModalOpen(false);
      setName("");
      setDescription("");
      setSongs([]);
      setErrorMsg("");
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      const formData = new FormData();
      formData.append("name", name);
      formData.append("description", description);
      formData.append("user", user);
      songs.forEach((songId) => formData.append("songs[]", songId));
  
      const response = await postMix(formData, token);
      if (response.status) {
        onCreateSuccess(response.data);
        handleModalClose();
      } else {
        setErrorMsg(response.msg);
      }
    };
  
    const handleAddSong = (e) => {
      e.preventDefault();
      setSongs([...songs, ""]);
    };
  
    const handleSongChange = (e, index) => {
      const newSongs = [...songs];
      newSongs[index] = e.target.value;
      setSongs(newSongs);
    };
  
    return (
      <>
        <button onClick={handleModalOpen}>Create Mix</button>
        {isModalOpen && (
          <div>
            <h2>Create New Mix</h2>
            {errorMsg && <p>{errorMsg}</p>}
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <textarea
                name="description"
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
              {songs.map((songId, index) => (
                <input
                  key={index}
                  type="text"
                  placeholder={`Song ${index + 1}`}
                  value={songId}
                  onChange={(e) => handleSongChange(e, index)}
                />
              ))}
              <button onClick={handleAddSong}>Add Song</button>
              <button type="submit">Create</button>
              <button onClick={handleModalClose}>Cancel</button>
            </form>
          </div>
        )}
      </>
    );
  };
  
  export default CreateMixModal;
  
