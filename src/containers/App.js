import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Home from './home';
import Login from './login'

import { CountProvider, ListProvider, AuthProvier } from '../providers'

const App = () => {
  return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>

          <hr />

            <CountProvider>
              <ListProvider>
                <AuthProvier>
                    <Route exact path="/" component={Home} />
                </AuthProvier>
                    <Route path="/login" component={Login} />
              </ListProvider>
            </CountProvider>
        </div>
      </Router>
  )
}

export default App;