import Particles from 'react-particles-js';

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
import Modalexport from '../Model/Model';
import Particalexport from '../Particles/Partical';

class landingPage extends Component {
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
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
        </div>
          <div className="main">
            <Jumbotron className="bg-img">
                <Container fluid>
                <h1 className="display-2 ">Scalable Solutions</h1>
                <p className="lead displa-2">Your Web-Development and Digital Marketing done correctly</p>
                </Container>
            </Jumbotron>
          </div>
          <div>
            <div id="container">
          <video id="background-video" loop autoPlay>
                <source src="6387.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            </div> 
            <Paper className="paper">
              <h6>Sign up now!</h6>
              <hr></hr>
              <SignUpPage></SignUpPage>
            </Paper>
            <Paper className="paper2">
              <h6>Contact our team</h6>
              <hr></hr>
              
            </Paper>
          </div>
          <footer id="footer">
          <div id="foot"></div>
            <i id="copyright">© 2019 Scalable Solutions llc</i>
            <br></br>
            <a href="https://www.instagram.com/?hl=en" id="insta" className="fab fa-instagram fa-2x"></a>
            <a href="https://www.linkedin.com" className="fab fa-linkedin fa-2x" id="linked"></a>
            <a href="https://www.facebook.com" className="fab fa-facebook-square fa-2x" id="face"></a>
          </footer>
        </div>
        )
    }
}
export default landingPage;