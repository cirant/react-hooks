import React from 'react';

import { CountDispatchContext } from '../contexts';
import { listReducer, useListDispatch } from './listReducer';
import { authReducer, useAuthdispatch } from './authReducer';

function countReducer(state, action) {
  switch (action.type) {
    case 'increment': {
    return { ...state, count: state.count + 1 }
    }
    case 'decrement': {
    return { ...state, count: state.count - 1 }
    }
    default: {
    throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

function useCountDispatch() {
    const context = React.useContext(CountDispatchContext)
    if (context === undefined) {
      throw new Error('useCountDispatch must be used within a CountProvider')
    }
    return context
}

export { 
  countReducer,
  useCountDispatch,
  listReducer,
  useListDispatch,
  useAuthdispatch,
  authReducer
}
