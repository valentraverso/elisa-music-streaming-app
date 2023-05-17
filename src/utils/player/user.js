import { SET_FOLLOWS, SET_LIKE_PLAYLIST } from "../redux/reducers/user";
import { store } from "../redux/store";

const setLikePlaylist = (playlist) => store.dispatch(SET_LIKE_PLAYLIST(playlist));
const setFollows = (follows) => store.dispatch(SET_FOLLOWS(follows))

export { setLikePlaylist, setFollows };