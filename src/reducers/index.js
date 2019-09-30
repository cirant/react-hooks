import React from 'react';

import { CountDispatchContext } from '../App';
import { useListDispatch, listReducer } from './listReducer';

function countReducer(state, action) {
  console.log('countReducer !!!!! =====');
  
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

export { countReducer, useCountDispatch, listReducer, useListDispatch }
