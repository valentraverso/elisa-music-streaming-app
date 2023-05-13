const postMix = async (data, token) => {
  const formData = new FormData();

   formData.append("name", data.name);
    formData.append("description", data.description);
   


    // if (data.songs) {
    //   const songIds = data.songs.map((songId) => ({ song: songId }));
    //   formData.append("songs", JSON.stringify(songIds));
    // }
console.log(data );
  try {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/mixes/create/`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`
      },
      body: formData
    });
    
console.log(token);
    const responseData = await response.json();
    return { status: true, data: responseData };
  } catch (error) {
    console.error(error);
    return { status: false, msg: error.message };
  }
};

export default postMix;



