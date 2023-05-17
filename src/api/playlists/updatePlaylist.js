const updatePlaylist = async (data, token) => {

  const formData = new FormData();

  formData.append("songId", data.songId);
  console.log("data", data)
  try {
    const request = await fetch(`${process.env.REACT_APP_API_URL}/playlists/update/${data.playlistId}`, {
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

export default updatePlaylist;
