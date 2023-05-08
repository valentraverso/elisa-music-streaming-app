import { configureStore } from '@reduxjs/toolkit'
import { userSlice } from './reducers'

const store = configureStore({
    reducer: {
        user: userSlice
    }
})

export { store };