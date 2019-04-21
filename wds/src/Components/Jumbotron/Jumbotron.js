import React, { Component } from 'react';
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

class Jumbo extends Component {
    render () {
        return (
            <>
            <Jumbotron className="bg-img">
            <Container fluid>
            <h1 className="display-2 ">Scalable Solutions</h1>
            <p className="lead displa-2">Your Smart Contract, Web-Development and Digital Marketing done correctly</p>
            </Container>
            </Jumbotron>
            </>
        ) 
    }
}

export default Jumbo;