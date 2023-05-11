const deleteAlbum = async (albumId, token) => {
    try {
      const request = await fetch(`${process.env.REACT_APP_API_URL}/albums/delete/${albumId}`, {
        method: "DELETE",
        headers: {
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
  export default deleteAlbum;
  