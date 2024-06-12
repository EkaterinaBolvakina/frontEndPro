/* type Ingredient = 'bread' | 'cheese' | 'sausage';
type Action =
    | { type: 'add/ingredient', payload: Ingredient }
    | { type: 'reset/ingredients' }
export default Action
*/

type Action =
    | { type: 'add/ingredient', payload: string }
    | { type: 'reset/ingredients' }
export default Action
