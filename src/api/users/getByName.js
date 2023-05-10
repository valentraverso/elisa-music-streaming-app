const getUserByName = async (name, token) =>{

    try {
        const request = await fetch(`${process.env.REACT_APP_API_URL}/songs/name/${name}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        const response =await request.json()

        return response
    } catch (error) {
        console.error(error)
        return {msg: error.message, token}
    }
}

export default getUserByName