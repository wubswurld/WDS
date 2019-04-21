// import React from 'react';
// import { Link } from 'react-router-dom';

// // import SignOutButton from '../SignOut';
// // import * as ROUTES from '../../constants/routes';
// import AuthLinks from './AuthLinks';
// import NoAuthLinks from './NoAuthLinks';

// const Navigation = ({ authUser }) => (
//   <div>{authUser ? <AuthLinks /> : <NoAuthLinks />}</div>
// );

// export default Navigation;

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AuthLinks from './AuthLinks';
import NoAuthLinks from './NoAuthLinks';
// import SignOutButton from '../SignOut';
import SignOutButton from '../signOut/index';
import Modalexport from '../Model/Model';
import {  Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';

const Navigation = ({ authUser }) => (
    <Navbar color="lightblue" light expand="md" id="navb">
    <NavbarBrand href="/" id="navb-logo">Scalable Solutions</NavbarBrand>
  <div id="mob">{authUser ? <NavigationAuth id="navb" /> : <NavigationNonAuth id="navb"/>}</div>
  </Navbar>
);

class NavigationAuth extends Component {
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
            <NavbarToggler onClick={this.toggle} />
                   <Collapse isOpen={this.state.isOpen} navbar>
                     <Nav className="ml-auto" navbar>
                     <NavItem>
                         <SignOutButton></SignOutButton>
                       </NavItem>
                       <NavItem>
                         <NavLink href="/">Home</NavLink>
                       </NavItem>
                       <NavItem>
                         <NavLink href="">About</NavLink>
                       </NavItem>
                       <UncontrolledDropdown nav inNavbar>
                         <DropdownToggle nav caret>
                           My Account
                         </DropdownToggle>
                         <DropdownMenu right>
                           <DropdownItem>
                           <NavLink href="">Subscriptions</NavLink>
                           </DropdownItem>
                           <DropdownItem>
                           <NavLink href="">Account Info</NavLink>
                           </DropdownItem>
                         </DropdownMenu>
                       </UncontrolledDropdown>
                     </Nav>
                   </Collapse>
         </div>
        )
    }
}


class NavigationNonAuth extends Component {
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
        return(
            <div>
                <NavbarToggler onClick={this.toggle} />
              <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                <NavItem>
                    <Modalexport></Modalexport>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/">Home</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/About">About</NavLink>
                  </NavItem>
                  <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                      Specializations
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem>
                        Web-Development
                      </DropdownItem>
                      <DropdownItem>
                        Digital Marketing
                      </DropdownItem>
                      <DropdownItem>
                        Smart Contract Development
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </Nav>
              </Collapse>
            </div>
        )
    }
}

export { NavigationAuth, NavigationNonAuth };

export default Navigation;