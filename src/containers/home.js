import React from 'react';

import { ListStateContext, AuthStateContext } from '../contexts';

function ListDisplay() {
  const { list } = React.useContext(ListStateContext)
  return <ul>
    {
      list.map((el, i) => <li key={`element-${i}`} >hola mundo2 {el}</li>)
    }
  </ul>
}

export default ListDisplay;