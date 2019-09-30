import React from 'react';
import { countReducer, listReducer, authReducer } from '../reducers'
import { counterStore, listStore, authStore } from '../store'
import { 
  CountStateContext,
  CountDispatchContext,
  ListStateContext,
  ListDispatchContext,
  AuthDispatchContext,
  AuthStateContext } from '../contexts'

function CountProvider({ children }) {
    const [state, dispatch] = React.useReducer(countReducer, counterStore)
    return (
        <CountStateContext.Provider value={state}>
        <CountDispatchContext.Provider value={dispatch}>
            { children }
        </CountDispatchContext.Provider>
        </CountStateContext.Provider>
    )
}

function ListProvider({ children }) {
  const [state, dispatch] = React.useReducer(listReducer, listStore)  
  return (
      <ListStateContext.Provider value={state}>
        <ListDispatchContext.Provider value={dispatch}>
            { children }
        </ListDispatchContext.Provider>
      </ListStateContext.Provider>
  )
}

function AuthProvier({ children }) {
  const [state, dispatch] = React.useReducer(authReducer, authStore) 
  return (
      <AuthStateContext.Provider value={state}>
        <AuthDispatchContext.Provider value={dispatch}>
            { children }
        </AuthDispatchContext.Provider>
      </AuthStateContext.Provider>
  )
}

export { CountProvider, ListProvider, AuthProvier }