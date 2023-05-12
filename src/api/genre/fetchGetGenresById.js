const getGenreById = async (id, token) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/genres/id/${id}`, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        });
        const genre = await response.json();
        return genre;
    } catch (error) {
        console.error(error);
        return { msg: error.message, token };
    }
};

export default getGenreById;
