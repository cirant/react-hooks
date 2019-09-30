import React from 'react';
import Btn from '../CounterBtn';
import BtnD from '../CounterBtnDecrement';

import { ListStateContext, CountStateContext } from '../contexts';


function CountDisplay() {
  const { count } = React.useContext(CountStateContext)
  return <div> number: {count}</div>
}

function ListDisplay() { 
const { list } = React.useContext(ListStateContext)

return <ul>
  {
    list.map((el, i) => <li key={`element-${i}`} >hola mundo = {el}</li>)
  }
</ul>
}

const Home = () => {
return <div>
  <CountDisplay />
  <Btn />
  <BtnD />
  <ListDisplay />
</div>
}


export default Home;