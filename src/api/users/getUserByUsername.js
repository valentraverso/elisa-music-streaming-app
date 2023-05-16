
const getUserByUsername = async (username, token) =>{

    try {
        const request = await fetch(`${process.env.REACT_APP_API_URL}/users/username/${username}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        const response =await request.json()
        
        return response
    } catch (error) {
        return {msg: error.message}
    }
}

export default getUserByUsername