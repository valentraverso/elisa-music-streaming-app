const postSong = async (data, token) => {

    const formData = new FormData()

    const IdSongs = [];

    data.forEach(song => {
        formData.append("songFile", song.file);
        formData.append('owner', song.owner);
        formData.append('title', song.title);
        formData.append("album", song.album);
        formData.append("feat", song.feat);
        formData.append("artist", song.artist);
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