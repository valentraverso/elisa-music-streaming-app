// const fetchPostSong = async (id, token) =>{
// const formData = new formData()
//     try {
//         const request = await fetch(`${process.env.REACT_APP_API_URL}/songs/post/`, {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//                 Authorization: `Bearer ${token}`
//             },
//             body: JSON.stringify({
//                 title
//             })
//         })
//         const response =await request.json()
//         return response
//     } catch (error) {
//         console.error(error)
//         return {msg: error.message, token}
//     }
// }

// export default fetchPostSong