import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./AppActive";
// import iconDetails from "./IconDetail";

const store = configureStore({
    reducer: {
        app: appSlice.reducer
        // icon: iconDetails.reducer
    }
})

export default store