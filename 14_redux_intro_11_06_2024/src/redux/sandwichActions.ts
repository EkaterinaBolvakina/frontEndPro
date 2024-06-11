type Action =
    | { type: 'add/ingredient', payload: string }
    | { type: 'reset/ingredients' }
export default Action
