const postUser = async (data, token) => {
    const formData = new FormData();

    formData.append('name', data.name);
    formData.append('email', data.email);
    formData.append('picture', data.picture);
    formData.append('sub', data.sub);

    try {
        const request = await fetch(`${process.env.REACT_APP_API_URL}/users/create`, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`
            },
            body: formData
        })
        const response = await request.json();

        return response;
    } catch (error) {
        return {
            msg: error.message
        }
    }
}

export default postUser