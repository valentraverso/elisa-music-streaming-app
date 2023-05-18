import { store } from "../../utils/redux/store";

const updateBasic = async (data, token) => {
    const {_id: userId } = store.getState().user.data;
    const formData = new FormData();

    formData.append('name', data.name);
    try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/users/update/${userId}`, {
            method: 'PATCH',
            headers: {
                Authorization: `Bearer ${token}`,
            },
            body: formData
        });

        const data = await response.json();

        return data;
    } catch (error) {
        throw new Error(error.message);
    }
};

export default updateBasic
