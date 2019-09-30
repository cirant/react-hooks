import React from 'react';

import { CountStateContext } from './App';
import { useCountDispatch, useListDispatch } from './reducers/'

const CounterBtn = (y) => {
  const { count } = React.useContext(CountStateContext)
  
  const dispatch = useCountDispatch();
  const listDispatch = useListDispatch();

  //console.log(y, 'listDispatch ',dispatch,  listDispatch);

  const clickFunction = () => {
    dispatch({ type: 'increment'});
    listDispatch({ type: 'add' });
  }

  return <button onClick={clickFunction}>plus {count} </button>
}


export default CounterBtn;
