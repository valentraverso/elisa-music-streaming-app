const getPlaylistByOwner = async (id, token) =>{

    try {
        const request = await fetch(`${process.env.REACT_APP_API_URL}/playlists/owner/${id}`, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            }
        })
        const response =await request.json()
        return response
    } catch (error) {
        return {msg: error.message}
    }
}

export default getPlaylistByOwner;