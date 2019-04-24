import React, { Component } from 'react';
import {Route, BrowserRouter, Switch } from "react-router-dom";
import './App.css';
import { Link } from 'react-router-dom';
import landingPage from './Components/landingPage/landingPage';
import viewOne from './Components/UserView/viewOne';
import PackDetails from './Components/Packs/PackDetails';
import Jumbo from './Components/Jumbotron/Jumbotron';
import Foot from './Components/Footer/footer';
import { withFirebase } from './Components/Firebase';
// import * as ROUTES from '../../constants/routes';
import Navigation from './Components/Navbar/navigation';
import PasswordForgetPage from './Components/PasswordForget';
import PasswordChangeForm from './Components/PasswordForget';
import AdminPage from './Components/Admin';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      authUser: null,
    };
  }
  componentDidMount() {
    this.listener = this.props.firebase.auth.onAuthStateChanged(
      authUser => {
        authUser
          ? this.setState({ authUser })
          : this.setState({ authUser: null });
      },
    );
  }
  componentWillUnmount() {
    this.listener();
  }
  render() {
    return (
      <BrowserRouter>
      <div className="App">
      <Navigation authUser={this.state.authUser} />
      <Jumbo></Jumbo>
        <Switch>
          <Route path="/" exact component={landingPage}/>
          <Route path="/view" exact component={viewOne}/>
          <Route path="/view/:id" exact component={PackDetails}/>
          <Route path="/Admin" exact component={AdminPage}/>
        </Switch>
        <Foot></Foot>
      </div>
      </BrowserRouter>
    );
  }
}

export default withFirebase(App);
