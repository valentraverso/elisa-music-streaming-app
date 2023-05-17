const fetchPlaylistById = async (id, token) => {
  try {
    const request = await fetch(`${process.env.REACT_APP_API_URL}/playlists/id/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const response = await request.json();

    console.log("Fetched playlist data:", response); 

    return response;
  } catch (error) {
    console.log("Error fetching playlist:", error); 
    return { msg: error.message };
  }
};

export default fetchPlaylistById;

  