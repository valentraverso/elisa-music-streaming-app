import { store } from "../../utils/redux/store";

const updatePlaylistInfo = async (data, token) => {

  const {_id: idUser} = store.getState().user.data

  const formData = new FormData();

  formData.append('title', data.title);
  formData.append("private", data.private)
  formData.append("userId", idUser)
  
  try {
    const request = await fetch(`${process.env.REACT_APP_API_URL}/playlists/update/info/${data.playlistId}`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${token}`
      },
      body: formData,
    });
    const response = await request.json();

    return response;
  } catch (error) {
    console.error(error);
    return { status: false, msg: error.message };
  }
};

export default updatePlaylistInfo;
