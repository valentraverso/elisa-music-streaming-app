import { store } from "../../utils/redux/store";


const updatePlaylistImg = async (data, token) => {
    const {_id: userId } = store.getState().user.data
    const formData = new FormData();

    formData.append('title', data.title);
    formData.append('playlistImg', data.picture.file)
    formData.append("private", data.private)
    formData.append("userId", userId)

    
    try {
        const request = await fetch(`${process.env.REACT_APP_API_URL}/playlists/update/image/${data.playlistId}`, {
            method: 'PATCH',
            headers: {
                Authorization: `Bearer ${token}`,
            },
            body: formData
        });

        const response = await request.json();

        return response;
    } catch (error) {
        throw new Error(error.message);
    }
};

export default updatePlaylistImg