import { SET_INDEX, SET_QUEU } from "../redux/reducers/player";
import { store } from "../redux/store";

const setPlayer = (data) => store.dispatch(SET_QUEU(data));
const setIndex = (index) => store.dispatch(SET_INDEX(index));

export { setPlayer, setIndex };