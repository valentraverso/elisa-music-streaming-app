

const fetchUpdateSong = async (id, token) =>{
const formData = new FormData()

formData.append("title", "Temazo Albert");

console.log(formData.get('title'))

    try {
        const request = await fetch(`${process.env.REACT_APP_API_URL}/songs/update/${id}`, {
            method: "PATCH",
            headers: {
                Authorization: `Bearer ${token}`
            },
            body: formData
        })
        const response =await request.json()
        return response
    } catch (error) {
        console.error(error)
        return {msg: error.message, token}
    }
}

export default fetchUpdateSong