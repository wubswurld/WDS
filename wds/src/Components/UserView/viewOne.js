import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '/Users/wubs/WDS/wds/src/App.css';
import '/Users/wubs/WDS/wds/src/App.css';
import Paper from '@material-ui/core/Paper';
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
             <Navbar color="lightblue" light expand="md">
          <NavbarBrand href="/">S.S</NavbarBrand>
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
                  Specializations
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Web-Development
                  </DropdownItem>
                  <DropdownItem>
                    Digital Marketing
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
        </div>
          <div className="main2">
            <Jumbotron className="bg-img" id="jumbo">
                <Container fluid>
                <h1 className="display-3" id="big-logo">Scalable Solutions</h1>
                <p className="lead display-6">Your Web-Development and Digital Marketing done correctly</p>
                </Container>
            </Jumbotron>
          </div>
          <footer id="footer2">
          <div id="foot2"></div>
            <i id="copyright">© 2019 Scalable Solutions llc</i>
            <br></br>
            <i id="insta" className="fab fa-instagram fa-2x"></i>
            <i className="fab fa-linkedin fa-2x" id="linked"></i>
            <i className="fab fa-facebook-square fa-2x" id="face"></i>
          </footer>
        </div>
        )
    }
}
export default viewOne;