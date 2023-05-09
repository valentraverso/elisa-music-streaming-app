const postSong = async (data, token) => {

    const formData = new FormData()

    data.forEach(song => {
        formData.append("songFile", song.file);
        formData.append('owner', song.owner);
        formData.append('title', song.songTitle);
        formData.append("album", song.album);
        formData.append("feat", song.feat);
    });

    try {
        const request = await fetch(`${process.env.REACT_APP_API_URL}/songs/post/`, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`
            },
            body: formData
        })
        const response = await request.json()
        return response
    } catch (error) {
        console.error(error)
        return { msg: error.message, token }
    }

}

export default postSong