import { createSlice } from "@reduxjs/toolkit";
import addDataUser from "./add_data_user";
import setLikePlaylists from "./set_like_playlist";
import setAlbums from "./set_albums";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        status: false
    },
    reducers: {
        ADD_DATA_USER: addDataUser,
        SET_LIKE_PLAYLIST: setLikePlaylists,
        SET_ALBUMS: setAlbums
    }
})

export const {
    ADD_DATA_USER,
    SET_LIKE_PLAYLIST,
    SET_ALBUMS
} = userSlice.actions;

export default userSlice.reducer;