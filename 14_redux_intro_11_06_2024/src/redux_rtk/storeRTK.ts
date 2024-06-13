import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./counterSlice";
import { sandwichSlice } from "./sandwichSlice";
import { librarySlice } from "./librarySlice";

export const storeRTK = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        sandwich: sandwichSlice.reducer,
        library: librarySlice.reducer
    }
});
export type RootState = ReturnType<typeof storeRTK.getState>

