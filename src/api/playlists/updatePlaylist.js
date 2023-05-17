const updatePlaylist = async (playlistId, songs, token) => {
  try {
    const request = await fetch(`${process.env.REACT_APP_API_URL}/playlists/update/${playlistId}`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ songs }),
    });

    const response = await request.json();
    return response;
  } catch (error) {
    console.error(error);
    return { status: false, msg: error.message };
  }
};

export default updatePlaylist;
