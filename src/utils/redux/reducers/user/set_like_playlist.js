const setLikePlaylists = (state, action) => {
    const index = state.data.playlists.findIndex(playlist => playlist._id === action.payload._id);

    const modifyArray = state.data.playlists.map((song) => {
        if (song._id === action.payload._id) {
            return action.payload
        }
        return song
    })

    return {
        ...state,
        data: {
            ...state.data,
            playlists: modifyArray   
        }
    }
}

export default setLikePlaylists