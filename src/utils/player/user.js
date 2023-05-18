import { SET_ALBUMS, SET_FOLLOWS, SET_LIKE_PLAYLIST, SET_PLAYLISTS } from "../redux/reducers/user";
import { store } from "../redux/store";

const setLikePlaylist = (playlist) => store.dispatch(SET_LIKE_PLAYLIST(playlist));
const setAlbums = (album) => store.dispatch(SET_ALBUMS(album));
const setFollows = (follows) => store.dispatch(SET_FOLLOWS(follows));
const setPlaylists = (playlist) => store.dispatch(SET_PLAYLISTS(playlist));

export { setLikePlaylist, setAlbums, setFollows, setPlaylists };