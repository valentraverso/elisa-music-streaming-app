 const fetchSongsByAlbumId = async (albumId, token) => {
    console.log('albumId:', albumId);
    try {
      const request = await fetch(`${process.env.REACT_APP_API_URL}/songs/album/${albumId}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const response = await request.json();
      return response;
    } catch (error) {
      console.error(error);
      return { status: false, msg: error.message };
    }
  };
  
  export default fetchSongsByAlbumId;
  