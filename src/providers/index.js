import React from 'react';
import { countReducer, listReducer } from '../reducers'
import { counterStore, listStore } from '../store'
import { CountStateContext, CountDispatchContext, ListStateContext,  ListDispatchContext } from '../App'

function CountProvider({children}) {
    const [state, dispatch] = React.useReducer(countReducer, counterStore)
    return (
        <CountStateContext.Provider value={state}>
        <CountDispatchContext.Provider value={dispatch}>
            { children }
        </CountDispatchContext.Provider>
        </CountStateContext.Provider>
    )
}

function ListProvider({children}) {
  const [state, dispatch] = React.useReducer(listReducer, listStore)
  return (
      <ListStateContext.Provider value={state}>
        <ListDispatchContext.Provider value={dispatch}>
            { children }
        </ListDispatchContext.Provider>
      </ListStateContext.Provider>
  )
}

export { CountProvider, ListProvider }