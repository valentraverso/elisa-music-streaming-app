const fetchAlbumById = async (id, token) => {
    try {
      const request = await fetch(`${process.env.REACT_APP_API_URL}/albums/id/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const response = await request.json();
      
      return response;
    } catch (error) {
      console.error(error);
      return { msg: error.message, token };
    }
  };
  
  export default fetchAlbumById;
  