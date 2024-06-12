import Action from "./sandwichAction";

/* const initialState = { ingredients: ''}

export default function sandwichReducer(state = initialState, action: Action) {
    switch (action.type) {
        case "add/ingredient":
            return { ...state, ingredients: `${state.ingredients} ${action.payload}` };
        case "reset/ingredients":
            return { ...state, ingredients: [] };
        default:
            return state;
    }
}
*/
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
