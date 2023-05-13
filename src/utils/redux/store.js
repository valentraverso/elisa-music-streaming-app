import { configureStore } from '@reduxjs/toolkit'
import { userSlice, playerSlice } from './reducers'

const store = configureStore({
    reducer: {
        user: userSlice,
        player: playerSlice
    }
})

export { store };