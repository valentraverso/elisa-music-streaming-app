const updatePlaylistSongs = async (playlistId, songs, token) => {
    try {
      const request = await fetch(`${process.env.REACT_APP_API_URL}/playlists/${playlistId}/songs`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
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
  
  export default updatePlaylistSongs;
  
  
  