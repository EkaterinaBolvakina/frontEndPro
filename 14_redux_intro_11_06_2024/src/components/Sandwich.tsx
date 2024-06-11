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
            <div>Sandwich: {ingredients.join(' ')}</div>
            <button onClick={() => { handleAddIngredient('Bread') }}> Bread </button>
            <button onClick={() => { handleAddIngredient('Cheese') }}> Cheese</button>
            <button onClick={() => { handleAddIngredient('Sausage') }}> Sausage </button>
            <button onClick={handleResetIngredients}> Reset</button>
        </div>
    )
}

export default Sandwich
