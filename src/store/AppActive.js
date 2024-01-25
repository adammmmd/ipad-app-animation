import { createSlice } from '@reduxjs/toolkit';

const appSlice = createSlice({
    name: "app",
    initialState: {
        app: [],
        y: 0
    },
    reducers: {
        addAppActive(state, action) {
            state.app.push(action.payload)
            console.log(state.app)
        },
        deleteAppActive(state, action) {
            state.app = state.app.filter(app => app !== action.payload);
            console.log(state.app)
        },
    }
})

export const appActions = appSlice.actions

export default appSlice