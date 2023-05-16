import { store } from "../../utils/redux/store";

export default async function updateLikedSongsPlaylist(id, token) {
    const { _id: userId, likePlaylist } = store.getState().user.data;

    const formData = new FormData();

    formData.append("userId", userId);
    formData.append("likePlaylist", likePlaylist)

    try {
        const request = await fetch(`${process.env.REACT_APP_API_URL}/playlists/update/likes/${id}`, {
            method: "PATCH",
            headers: {
                Authorization: `Bearer ${token}`,
            },
            body: formData
        });

        const response = await request.json();
        return response;
    } catch (error) {
        return {
            status: false,
            msg: error.message
        };
    }
}