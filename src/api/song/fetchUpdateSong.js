const updatePlaylist = async (playlistId, newSongId, token) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/playlists/${playlistId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ songIds: [newSongId] })
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
      return { msg: error.message, token };
    }
  };
  
  export default updatePlaylist;
  