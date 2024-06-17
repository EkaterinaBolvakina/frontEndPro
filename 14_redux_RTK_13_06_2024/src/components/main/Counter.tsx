import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../redux_rtk/storeRTK'
import {minus, plus } from '../../redux_rtk/counterSlice';
import {fetchUser } from '../../redux_rtk/counterSlice';
import { useEffect } from 'react';

const Counter = () => {
   //const counter = useSelector((state: RootState) => state.counter.value)
   const {value, status, user} = useSelector((state: RootState) => state.counter)
   const dispatch: AppDispatch = useDispatch();

   useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchUser());
   }}, [status, dispatch])
   
   const handleMinus = () => {
  dispatch(minus(1))
   }
   const handlePlus = () => {
   dispatch(plus(1))
   }

  return (
    <div className='counterGeneral'>
        <div>Counter: {value}</div>
        <button onClick={handleMinus}>Minus (Decrement)</button>
        <button onClick={handlePlus}>Plus (Increment)</button>
        { status === 'loading' && <p>Loading Person Info...</p>}
        { status === 'success' && user && <p>{user.name}</p>}
        { status === 'error' && <p>Error with loading person info...Try again later</p>}
    </div>
  )
}

export default Counter


