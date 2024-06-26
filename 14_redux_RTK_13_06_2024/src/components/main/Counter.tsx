import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../redux_rtk/storeRTK'
import { minus, plus } from '../../redux_rtk/counterSlice';

const Counter = () => {
  const counter = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch();

  const handleMinus = () => {
    dispatch(minus(1))
  }
  const handlePlus = () => {
    dispatch(plus(1))
  }

  return (
    <div className='counterGeneral'>
      <div className='counterDiv'>
        <div className='counter'>Counter: {counter}</div>
        <button onClick={handleMinus}>Minus (Decrement)</button>
        <button onClick={handlePlus}>Plus (Increment)</button>
      </div>
    </div>
  )
}

export default Counter


