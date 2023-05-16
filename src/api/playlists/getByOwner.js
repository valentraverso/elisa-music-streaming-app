const getPlaylistByOwner = async (id, token) =>{

    try {
        const request = await fetch(`${process.env.REACT_APP_API_URL}/playlists/owner/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        const response =await request.json();

        return response
    } catch (error) {
        return {msg: error.message}
    }
}

export default getPlaylistByOwner;