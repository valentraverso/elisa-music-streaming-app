const updateAlbum = async (albumId, albumData, token) => {
  try {
    const formData = new FormData();
    formData.append("title", albumData.title);
    formData.append("artist", albumData.artist);
    formData.append("release", albumData.release);
    formData.append("discography", albumData.discography);
    formData.append("img", albumData.img);

    const request = await fetch(`${process.env.REACT_APP_API_URL}/albums/${albumId}`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    });

    const response = await request.json();
    return response;
  } catch (error) {
    return { status: false, msg: error.message };
  }
};

export default updateAlbum;
