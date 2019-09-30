import React from 'react';
import { ListDispatchContext } from '../App';

export function listReducer(state, action) {
  switch (action.type) {
    case 'add': {
      const tem = [(state.list.length + 1).toString()].concat(state.list);      
      return {...state, list: tem}
    }
    case 'remove': {
      return { ...state, list: state.list.filter((elment, i) => i !== 0)}
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

export function useListDispatch() {
  const context = React.useContext(ListDispatchContext)
  if (context === undefined) {
    throw new Error('useListDispatch must be used within a ListProvider')
  }
  return context
}