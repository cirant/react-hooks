import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Btn from '../CounterBtn';
import BtnD from '../CounterBtnDecrement';
import Home from './home';

import { CountProvider, ListProvider, AuthProvier } from '../providers'

import {
  CountStateContext,
  ListStateContext,
} from '../contexts';

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

const Test = () => {
  return <div>
    <CountDisplay />
    <Btn />
    <BtnD />
    <ListDisplay />
  </div>
}

const App = () => {
  return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>

          <hr />

            <CountProvider>
              <ListProvider>
                <Route exact path="/" component={Test} />
                <AuthProvier>
                    <Route path="/about" component={Home} />
                </AuthProvier>
              </ListProvider>
            </CountProvider>
        </div>
      </Router>
  )
}

export default App;