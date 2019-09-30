import React from 'react';

import { CountStateContext } from './contexts';
import { useCountDispatch, useListDispatch } from './reducers/'

const CounterBtn = () => {
  const { count } = React.useContext(CountStateContext)
  
  const dispatch = useCountDispatch();
  const listDispatch = useListDispatch();

  const clickFunction = () => {
    dispatch({ type: 'increment'});
    listDispatch({ type: 'add' });
  }

  return <button onClick={clickFunction}>plus {count} </button>
}


export default CounterBtn;
