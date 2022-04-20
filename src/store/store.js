import { configureStore } from "@reduxjs/toolkit";
import authorSlice from "./autherJoinSlice";
const store = configureStore({
    reducer: {
        author:  authorSlice
    }
});

export default store;