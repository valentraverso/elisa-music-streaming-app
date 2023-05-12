import { createSlice } from "@reduxjs/toolkit";
import setQueu from "./set_queu";

const playerSlice = createSlice({
    name: 'player',
    initialState: {
        withSong: false,
        queu: undefined,
        index: undefined
    },
    reducers: {
        SET_QUEU: setQueu
    }
})

export const {
    SET_QUEU
} = playerSlice.actions;

export default playerSlice.reducer;