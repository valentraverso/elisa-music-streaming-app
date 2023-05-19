const fetchUsersRandom = async (token, count) => {
    try {
      const request = await fetch(
        `${process.env.REACT_APP_API_URL}/users/random?count=${count}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const response = await request.json();
      
      if (response.status) {
        return response.data;
      } else {
        console.error(response.msg);
        return [];
      }
    } catch (error) {
      console.error(error);
      return [];
    }
  };
  
  export default fetchUsersRandom;
  