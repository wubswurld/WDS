import React, { Component } from 'react';
import '/Users/wubs/WDS/wds/src/App.css';
import '/Users/wubs/WDS/wds/src/App.css';
import firebase from '../Firebase';
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
import WebModel from './WebModel';

class Consult extends Component {
    render () {
        return (
            <div>
                <div>
                <Paper id="acctpaper">
                    <h3>Web App Development</h3>
                    <hr />
                    <ul id="listul1">
                    <li id="listli1">Our Web Development is priced accordingly.</li>
                    <li id="listli1">We can build anything from static front end websites to full Oauth Web apps.</li>
                    <li id="listli1">To get a quote Contact us below! </li>
                    </ul>
                    <WebModel></WebModel>
                </Paper>
                </div>
                <div>
                <Paper id="acctpaper2">
                    <h3>Smart Contract Development</h3>
                    <hr />
                    <ul id="listul1">
                    <li id="listli1">Our Smart Contract and Dapp Development is priced accordingly and run by Eliot.</li>
                    <li id="listli1">Eliot is an Specilized Engineer in Solidity and Hyperledger</li>
                    <li id="listli1">To get a quote Contact us below! </li>
                    </ul>
                </Paper>
                </div>
            </div>
        )
    }
}
 
export default Consult;