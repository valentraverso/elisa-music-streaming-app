import { SET_LIKE_PLAYLIST } from "../redux/reducers/user";
import { store } from "../redux/store";

const setLikePlaylist = (playlist) => store.dispatch(SET_LIKE_PLAYLIST(playlist));

export { setLikePlaylist };