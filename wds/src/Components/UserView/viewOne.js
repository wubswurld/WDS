import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '/Users/wubs/WDS/wds/src/App.css';
import '/Users/wubs/WDS/wds/src/App.css';
import Paper from '@material-ui/core/Paper';
import firebase from 'firebase'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem ,
    Jumbotron,
    Container,
} from 'reactstrap';
import SignUpPage from '../SignUp/SignUpForm';
import SignOutButton from '../signOut/index';
import Packs from '../Packs/Packs';


// import Navigation from '../Navbar/navbar';

class viewOne extends Component {
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          isOpen: false
        };
      }
      toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }
    render() {
        return (
        <div>
          <div>
            <h3>Current Social Marketing Plans</h3>
            <br></br>
            <div className="packs">
              <Packs></Packs>
            </div>
          </div>
          <footer id="footer2"></footer>
        </div>
        )
    }
}
export default viewOne;