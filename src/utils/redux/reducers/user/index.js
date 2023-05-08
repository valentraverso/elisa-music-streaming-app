import { createSlice } from "@reduxjs/toolkit";
import addDataUser from "./add_data_user";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        status: false
    },
    reducers: {
        ADD_DATA_USER: addDataUser
    }
})

export const {
    ADD_DATA_USER
} = userSlice.actions;

export default userSlice.reducer;