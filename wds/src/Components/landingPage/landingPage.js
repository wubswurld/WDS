import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '/Users/wubs/WDS/wds/src/App.css';
import '/Users/wubs/WDS/wds/src/App.css';
import Paper from '@material-ui/core/Paper';
import SignUpPage from '../SignUp/SignUpForm';
import Modalexport from '../Model/Model';
// import Contact from '/Users/wubs/WDS/wds/src/Components/Contact/contact.js';
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
import TeamPage from '/Users/wubs/WDS/wds/src/Components/teamPage/teamPage.js';

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
            <div id="container">
          <video id="background-video" loop autoPlay>
                <source src="160929_133_London_TowerBridgeTimeLapse_1080p.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            </div> 
            <div>
            <Paper className="paper">
              <h6>Sign up now to access <br />Subscriptions and Services!</h6>
              <hr></hr>
              <SignUpPage></SignUpPage>
            </Paper>
            </div>
            <div>
            <Paper id="teampaper">
              <TeamPage></TeamPage>
            </Paper>
            </div>
            <div>
            <Paper className="paper2">
              <h3><i className="far fa-star" id="star"></i>Accreditations:</h3>
              <hr></hr>
              <h3>Over 20 Digital Marketing Clients!</h3>
              <h4>From Instagram influencers to Financial Advisory groups</h4>
              <br></br>
              <h3>10+ completed Website builds</h3>
              <h4>Crypto Gambling site, Siri recreation, fashion and more</h4>
              <br></br>
              <h3>Multiple smart contract creations and Dapp development</h3>
              <h4>Every client was completely satisfied with results</h4>
            </Paper>
            </div>
            <div>
            <Paper className="paper2">
              <h6>Contact our team</h6>
              <hr></hr>
            </Paper>
            </div>
          </div>
        </div>
        )
    }
}
export default landingPage;