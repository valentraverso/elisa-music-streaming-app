const fetchSongAll = async (token) => {
  try {
    const request = await fetch(
      `${process.env.REACT_APP_API_URL}/songs/all`,
      {
        headers: {

          Authorization: `Bearer ${token}`,
        },
      }
    );
    const response = await request.json();

    return response;
  } catch (error) {
    return {
      status: false,
      msg: error.message
    }
  }
};

export default fetchSongAll;

