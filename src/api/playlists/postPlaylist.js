const postPlaylist = async (data, token) => {
  if (!data) {
    return {
      status: false,
      msg: "There is no info in post.",
    };
  }

  const formData = new FormData();
  
  formData.append("title", data.title);
  formData.append("owner", data.owner);
  formData.append("private", data.private);

  try {
    const request = await fetch(`${process.env.REACT_APP_API_URL}/playlists/create`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    });
    const response = await request.json();

    return response;
  } catch (err) {
    return {
      status: false,
      msg: err.message,
    };
  }
};

export default postPlaylist;