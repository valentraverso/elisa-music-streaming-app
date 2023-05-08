const postAlbum = async (data, token) => {
    if (!data) {
        return {
            status: false,
            msg: "There is no info in post."
        }
    }

    const formData = new FormData();

    formData.append('owner', data.owner);
    formData.append('title', data.albumTitle);
    formData.append('artist', data.artist);
    formData.append('img', data.imgAlbum[0].file);
    formData.append('release', data.release);
    formData.append('discography', data.discography);

    try {
        const request = await fetch(`${process.env.REACT_APP_API_URL}/albums/create`, {
            method: "POST",
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

export default postAlbum;