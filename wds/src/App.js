import React, { Component } from 'react';
import {Route, BrowserRouter, Switch } from "react-router-dom";
import './App.css';
import { Link } from 'react-router-dom';
import landingPage from './Components/landingPage/landingPage';

class App extends Component {
  render() {
    return (
      <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={landingPage}/>
        </Switch>
      </BrowserRouter>
      </div>
    );
  }
}

export default App;
