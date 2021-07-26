import React, { Component } from 'react'
import Header from './componants/Header'
import Home from './componants/Home' 
import FavDegmond from './componants/FavDegmond'
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
          <Route exact path="/fav">
            <FavDegmond/>
          </Route>
        </Switch>    
      </Router>
      </>
    )
  }
}

export default App
