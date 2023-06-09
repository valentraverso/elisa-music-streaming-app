import { store } from "../../utils/redux/store";

export default async function updateFollowType(data, token) {
    const { _id: userId } = store.getState().user.data;

    const formData = new FormData();

    formData.append("userId", userId);

    try {
        const request = await fetch(`${process.env.REACT_APP_API_URL}/users/update/${data.type}/follow/${data.id}`, {
            method: "PATCH",
            headers: {
                Authorization: `Bearer ${token}`,
            },
            body: formData,
        });
        const response = await request.json();

        return response;
    } catch (err) {
        return {
            status: false,
            msg: err.message
        };
    }
}