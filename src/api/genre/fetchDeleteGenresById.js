const deleteGenreById = async (id, token) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/genres/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        });
        const deletedGenre = await response.json();
        return deletedGenre;
    } catch (error) {
        console.error(error);
        return { msg: error.message, token };
    }
};

export default deleteGenreById;
