import React, { Component } from 'react';
import '/Users/wubs/WDS/wds/src/App.css';
import '/Users/wubs/WDS/wds/src/App.css';
import firebase from '../Firebase';
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

// const PackDetails = (props) => {
//     const id = props.match.params.id;  
//     return (
//         <div>
//             <div>
//              <h3>price</h3>
//              <hr></hr>
//              <h4>title</h4>
//              <h5>info</h5>
//              <h5>{id}</h5>
//              </div>
//              <footer id="footer2"></footer>
//         </div>
//     )
// }
class PackDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Packs: []
        }
    }
    componentDidMount() {
        const itemsRef = firebase.database().ref('ss');
        itemsRef.on('value', (snapshot) => {
          let items = snapshot.val();
          let newState = [];
          for (let item in items) {
            newState.push({
              id: item,
              title: items[item].title,
              user: items[item].user
            });
          }
          this.setState({
            items: newState
          });
        });
      }
    render() {
        return(
            <div>

            </div>
        )
    }
}
 
export default PackDetails;