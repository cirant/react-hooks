import React from 'react';
import { AuthDispatchContext } from '../contexts';


export function authReducer(state, action) {
  console.log('state ', state);
  
  switch (action.type) {
    case 'add': {    
      return state
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

export function useAuthdispatch() {
  const context = React.useContext(AuthDispatchContext)
  if (context === undefined) {
    throw new Error('useAuthdispatch must be used within a AuthProvier')
  }
  return context
}