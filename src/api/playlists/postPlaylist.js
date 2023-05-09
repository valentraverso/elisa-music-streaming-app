const postPlaylist = async (data, token) => {
    if (!data) {
      return {
        status: false,
        msg: "There is no info in post.",
      };
    }
  
    try {
      const request = await fetch(`${process.env.REACT_APP_API_URL}/playlists/create`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const response = await request.json();
  
      return response;
    } catch (err) {
      return {
        status: false,
        msg: err,
      };
    }
  };
  
  export default postPlaylist;