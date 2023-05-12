export const postMix = async (data, token) => {
    console.log(data); // log the data before making the API call

    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('description', data.description);
    formData.append('user', data.user);
    if (Array.isArray(data.songs)) {
        data.songs.forEach((song) => formData.append('songs[]', song));
      }
      
    
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/mixes/create`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });
  
      const responseData = await response.json();
      return { status: true, data: responseData };
    } catch (error) {
      console.error(error);
      return { status: false, msg: error.message };
    }
  };
  