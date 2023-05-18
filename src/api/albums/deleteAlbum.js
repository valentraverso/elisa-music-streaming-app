import { store } from "../../utils/redux/store";

const deleteAlbum = async (id, token) => {
  const { _id: userId } = store.getState().user.data;

  const formData = new FormData();
  formData.append("userId", userId);

  try {
    const request = await fetch(`${process.env.REACT_APP_API_URL}/albums/delete/${id}`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData
    });

    const response = await request.json();

    return response;
  } catch (error) {
    console.error(error);
    return { status: false, msg: error.message };
  }
};
export default deleteAlbum;
