const fetchAllPlaylists = async (token) => {
    try {
        const request = await fetch(`${process.env.REACT_APP_API_URL}/mixes/all/`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
          }
        });
        const response = await request.json();
        return response;
      } catch (error) {
        console.error(error);
        return {msg: error.message, token};
      }
  };
  
  export default fetchAllPlaylists;
  