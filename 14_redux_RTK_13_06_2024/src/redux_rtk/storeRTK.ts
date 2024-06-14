import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import { sandwichSlice } from "./sandwichSlice";
import { librarySlice } from "./librarySlice";

export const storeRTK = configureStore({
    reducer: {
        counter: counterReducer,
        sandwich: sandwichSlice.reducer,
        library: librarySlice.reducer
    }
});
export type RootState = ReturnType<typeof storeRTK.getState>

