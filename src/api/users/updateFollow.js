const updatefollows = async (data, token) => {

    const formData = new FormData
    formData.append('userId', data.userId);
    formData.append('idVisiting', data.idVisiting);
     
    try {
      const request = await fetch(`${process.env.REACT_APP_API_URL}/users/updatefollows`, {
          method: "PATCH",
          headers: {
              Authorization: `Bearer ${token}`
          },
          body: formData
      });
      const response = request.json();
    
      return response;
    } catch (err) {
      return {
          status: false,
          msg: err
      }
    }
    
}

export default updatefollows