import React from 'react';

import { CountStateContext } from './contexts';
import { useCountDispatch, useListDispatch } from './reducers/'

const CounterBtn = () => {
  const { count } = React.useContext(CountStateContext)
  const dispatch = useCountDispatch();
  const listDispatch = useListDispatch();

  const clickFunction = () => {
    dispatch({ type: 'decrement'});
    listDispatch({ type: 'remove' });
  }

  return <button onClick={clickFunction}>minus {count} </button>
}


export default CounterBtn;
