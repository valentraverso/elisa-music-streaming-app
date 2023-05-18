import { createSlice } from "@reduxjs/toolkit";
import setQueu from "./set_queu";
import setIndex from "./set_index";

const playerSlice = createSlice({
    name: 'player',
    initialState: {
        withSong: false,
        queu: undefined,
        index: undefined
    },
    reducers: {
        SET_QUEU: setQueu,
        SET_INDEX: setIndex
    }
})

export const {
    SET_QUEU,
    SET_INDEX
} = playerSlice.actions;

export default playerSlice.reducer;