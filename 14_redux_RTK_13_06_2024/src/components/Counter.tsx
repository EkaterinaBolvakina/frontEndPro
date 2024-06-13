import { useDispatch, useSelector } from 'react-redux'
import { counterSlice } from '../redux_rtk/counterSlice'
import { RootState } from '../redux_rtk/storeRTK'

const Counter = () => {
   const counter = useSelector((state: RootState) => state.counter.value)
   const dispatch = useDispatch();
   const handleMinus = () => {
  dispatch(counterSlice.actions.minus(1))
   }
   const handlePlus = () => {
   dispatch(counterSlice.actions.plus(1))
   }

  return (
    <div>
        <div>Counter: {counter}</div>
        <button onClick={handleMinus}>Minus (Decrement)</button>
        <button onClick={handlePlus}>Plus (Increment)</button>
    </div>
  )
}

export default Counter
