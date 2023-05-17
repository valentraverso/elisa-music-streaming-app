const updateBasic = async (userId, userData, token) => {
    try {
        const response = await fetch(`/users/${userId}`, {
            method: 'PUT',
            headers: {
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(userData),
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

export default updateBasic
