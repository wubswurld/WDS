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
    Card, 
    CardImg, 
    CardText, 
    CardBody,
    CardTitle, 
    CardSubtitle, 
    Button
} from 'reactstrap';
import firebase from "firebase";

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
          <NavbarBrand href="/">WDS</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
            <NavItem>
                <NavLink href="">Log in</NavLink>
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
          <div className="main">
            <Jumbotron className="bg-img">
                <Container fluid>
                <h1 className="display-2 ">World Development Solutions</h1>
                <p className="lead displa-2">Your Web-Development and Digital Marketing done correctly</p>
                </Container>
            </Jumbotron>
          </div>
          <div>
            <Paper className="paper">
              <h6>About</h6>
              <hr></hr>
              <h6>Learn more about WDS, Web-Development and Digital Marketing</h6>
            </Paper>
            <Paper className="paper2">
              <h6>Sign up now!</h6>
              <hr></hr>
              <h6>sign up:  </h6>
            </Paper>
            <Paper className="paper3">
              <h6>Contact Us:</h6>
              <hr></hr>
            </Paper>
          </div>

        </div>
        )
    }
}
export default landingPage;