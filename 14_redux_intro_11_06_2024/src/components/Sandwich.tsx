import React from 'react'
import { RootState } from '../redux/store';
import { useDispatch, useSelector } from 'react-redux';

const Sandwich = () => {
    const ingredients = useSelector((state: RootState) => state.sandwich.ingredients)
    const dispatch = useDispatch();

    const handleAddIngredient = (ingredient: string) => {
        dispatch({ type: 'add/ingredient', payload: ingredient })
    }

    const handleResetIngredients = () => {
        dispatch({ type: 'reset/ingredients' })
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
