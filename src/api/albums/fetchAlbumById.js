const fetchAlbumById = async (albumId, token) => {
  try {
    const request = await fetch(`${process.env.REACT_APP_API_URL}/albums/id/${albumId}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const response = await request.json();
    console.log(response);
    return response;
  } catch (error) {
    console.error(error);
    return { msg: error.message, token };
  }
};

export default fetchAlbumById;
