export default function setPlaylist(state, action){
    return {
        ...state,
        data: {
            ...state.data,
            playlists: action.payload
        }
    }
}