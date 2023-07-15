import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  decrement,
  increment,
  incrementByAmount,
} from '../../store/counterSlice';

function Counter() {
  const count = useSelector(state => state.counter.value);
  const dispatch = useDispatch();
  return (
    <>
      <h1>redux</h1>
      <div>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button>{count}</button>
        <button onClick={() => dispatch(decrement())}>decrement</button>
        <button onClick={() => dispatch(incrementByAmount(count))}>
          incrementByAmount
        </button>
      </div>
    </>
  );
}

export default Counter;
