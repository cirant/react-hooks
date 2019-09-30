import React from 'react';

import { ListStateContext, AuthStateContext } from '../contexts';

function ListDisplay() {
  const { list } = React.useContext(ListStateContext)
  const [state, setState] = React.useState();

  const submit = (e) => {
    e.preventDefault();
    console.log('list', list);
    console.log('aqui se va a enviar la data ', state); 
  }

  const handleChanges = (value) => {
    setState({ ...state, ...value})
  }

  return <div>
    login
    <form onSubmit={submit} >
      <input type="text" name="rut" onChange={({target: { value }}) => handleChanges({ rut: value })}/>
      <br/>
      <input type="password" name="password" onChange={({target: { value }}) => handleChanges({ password: value })}/>
      <br/>
      <button>Login</button>
    </form>
    
  </div>
}

export default ListDisplay;