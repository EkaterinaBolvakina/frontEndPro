import { useDispatch, useSelector } from 'react-redux';
import { sandwichSlice } from '../redux_rtk/sandwichSlice';
import { RootState } from '../redux_rtk/storeRTK';

const Sandwich = () => {
    const ingredients = useSelector((state: RootState) => state.sandwich.ingredients)
    const dispatch = useDispatch();

    const handleAddIngredient = (ingredient: string) => {
      dispatch(sandwichSlice.actions.addIngredient(ingredient))
    }

    const handleResetIngredients = () => {
     dispatch(sandwichSlice.actions.resetIngredients())
    }

    return (
        <div>
            <div><h3>Choose your sandwich:</h3></div>
            <div>Sandwich: {ingredients.join(' ')}</div>
            <button onClick={() => { handleAddIngredient('Bread') }}> Add bread </button>
            <button onClick={() => { handleAddIngredient('Cheese') }}> Add cheese</button>
            <button onClick={() => { handleAddIngredient('Sausage') }}> Add sausage </button>
            <button onClick={handleResetIngredients}> Reset all ingredients</button>
        </div>
    )
}

export default Sandwich
