import React from 'react';
import { useSelector } from 'react-redux';

function Counter2() {
  const count = useSelector(state => state.counter.value);
  return (
    <>
      <h1>redux2</h1>
      <div>
        <button>{count}</button>
      </div>
    </>
  );
}

export default Counter2;
