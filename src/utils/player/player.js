import { SET_QUEU } from "../redux/reducers/player";
import { store } from "../redux/store";

const setPlayer = (data) => store.dispatch(SET_QUEU(data));

export { setPlayer };