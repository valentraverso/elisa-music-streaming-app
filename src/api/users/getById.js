const getUserById = async (id, token) =>{

    try {
        const request = await fetch(`${process.env.REACT_APP_API_URL}/users/id/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        const response =await request.json()
        console.log("id2", id);
        return response
    } catch (error) {
        return {msg: error.message}
    }
}

export default getUserById