import React, { Component } from 'react'
import Header from './Header'
import Home from './Home' 
import FavDegmond from './FavDegmond'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


export class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Header/>
         <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route  path="/fav">
            <FavDegmond/>
          </Route>
        </Switch>    
      </Router>
      </>
    )
  }
}

export default App
