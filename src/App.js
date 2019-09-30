import React from 'react';
import Btn from './CounterBtn';
import BtnD from './CounterBtnDecrement';

import { CountProvider, ListProvider } from './providers/'
 
export const CountStateContext = React.createContext()
export const ListStateContext = React.createContext()
export const CountDispatchContext = React.createContext()
export const ListDispatchContext = React.createContext()

function CountDisplay() {
    const { count } = React.useContext(CountStateContext)
    return <div> number: {count}</div>
}

function ListDisplay() {
  const { list } = React.useContext(ListStateContext)
  console.log('lista ', list);
  
  return <ul>
    {
      list.map((el, i) => <li key={`element-${i}`} >hola mundo {el}</li>)
    }
  </ul>
}

const App = () => {
  return (
    <CountProvider>
      <ListProvider>
        <CountDisplay />
        <ListDisplay />
        <Btn />
        <BtnD />
      </ListProvider>
    </CountProvider>
  )
}

export default App;