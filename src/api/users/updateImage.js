import { store } from "../../utils/redux/store";

const updateImageUser = async (data, token) => {
    const {_id: userId } = store.getState().user.data;
    const formData = new FormData();

    formData.append('name', data.name);
    formData.append('userImg', data.picture.file)
    
    try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/users/update/image/${userId}`, {
            method: 'PATCH',
            headers: {
                Authorization: `Bearer ${token}`,
            },
            body: formData
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.msg);
        }

        return data;
    } catch (error) {
        throw new Error(error.message);
    }
};

export default updateImageUser