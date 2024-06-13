import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    ingredients: [] as string[]
}

export const sandwichSlice = createSlice({
    name: 'sandwich',
    initialState,
    reducers: {
        addIngredient(state, action) {
            state.ingredients.push(action.payload);
        },
        resetIngredients(state) {
            state.ingredients = []
        }
    }
})
 