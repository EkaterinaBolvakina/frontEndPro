import Action from "./sandwichActions";

const initialState = {
    ingredients: [] as string[]
}

export default function sandwichReducer(state = initialState, action: Action) {
    switch (action.type) {
        case "add/ingredient":
            return { ...state, ingredients: [...state.ingredients, action.payload] };
        case "reset/ingredients":
            return { ...state, ingredients: [] };
        default:
            return state;
    }
}
