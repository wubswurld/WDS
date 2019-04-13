import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '/Users/wubs/WDS/wds/src/App.css';
import '/Users/wubs/WDS/wds/src/App.css';
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
    Toast, 
    ToastBody, 
    ToastHeader,
    Row,
    Col 
} from 'reactstrap';

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
            <div>
            <Jumbotron className="bg-img">
                <Container fluid>
                <h1 className="display-2 ">World Development Solutions</h1>
                <p className="lead displa-2">Your Web-Development and Digital Marketing done correctly</p>
                </Container>
            </Jumbotron>
            </div>
            <div className="p-3 my-2 rounded">
                 <Toast>
                    <ToastHeader>
                        Web-Development
                    </ToastHeader>
                    <ToastBody>
                       Our team of software engineers will complete any of your needs.
                    </ToastBody>
                </Toast>
            </div>
            <div className="p-3 my-2 rounded" id="dig">
                <Toast>
                    <ToastHeader>
                        Digital Marketing
                    </ToastHeader>
                    <ToastBody>
                        Our 2019 marketing strategy will bring more customers or leads than any other company
                    </ToastBody>
                </Toast>
            </div>
        </div>
        )
    }
}
export default landingPage;