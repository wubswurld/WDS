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

class AccountInfo extends Component {
    render () {
        return (
            <div>
                <Paper id="acctpaper">
                    <h3>Web App Developement</h3>
                </Paper>
                <Paper id="acctpaper2">
                    <h3>Web App Developement</h3>
                </Paper>
            </div>
        )
    }
}
 
export default AccountInfo;