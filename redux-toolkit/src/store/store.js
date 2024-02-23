import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../features/login/login";
export const store = configureStore({
    reducer:{
        user: userSlice.reducer
    }
});
