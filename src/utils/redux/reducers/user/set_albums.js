export default function setAlbums(state, action){
    return {
        ...state,
        data: {
            ...state.data,
            albums: action.payload
        }
    }
}