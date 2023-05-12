const getAllGenres = async (token) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/genres/all/`, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        });
        const genres = await response.json();
        return genres;
    } catch (error) {
        console.error(error);
        return { msg: error.message, token };
    }
};

export default getAllGenres;
