const updatePlaylist = async (playlistId, playlistData, token) => {
    try {
      const formData = new FormData();
      formData.append("title", playlistData.title);
      formData.append("img", playlistData.img[0].file);
  
      const request = await fetch(`${process.env.REACT_APP_API_URL}/playlists/${playlistId}`, {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${token}`,
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