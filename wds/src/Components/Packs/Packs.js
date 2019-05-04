import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import DetailsModel from '../Model/DetailsModel';
import { withFirebase } from '../Firebase';
import PayPalBtn from '../CheckoutModel/paypal';
import DraggableDialog from '../CheckoutModel/CheckoutModel';
import RadioButtonsGroup from '../CheckoutModel/Select';
import CheckOutFormDialog from '../CheckoutModel/CheckoutModel';
import SubscribeFormDialog from '../SubscribeModel/MainModel';

class Packs extends Component {
    constructor(props) {
        super(props);
        this.state = {
          loading: false,
          SubPacks: [],
        };
      }
      componentDidMount() {
        this.setState({ loading: true });
    
        this.props.firebase.SSref().on('value', snapshot => {
            const SubPacksObject = snapshot.val();

            const SubPacksList = Object.keys(SubPacksObject).map(key => ({
              ...SubPacksObject[key],
              uid: key,
            }));
          this.setState({
            SubPacks: SubPacksList,
            loading: false,
          });
        });
      }
      componentWillUnmount() {
        this.props.firebase.packages().off();
      }
    render() {
        const { SubPacks, loading } = this.state;
        const { authUser } = this.props; 
        // console.log(open)
        return(
            
            <div>
            {loading && <div>Loading ...</div>}
            <PackagesList SubPacks={SubPacks} authUser={authUser}/>
            </div>
        )
    }
}
const PackagesList = ({ SubPacks, authUser }) => (
    <>
      {SubPacks.map(SubPacks => (
        <div key={SubPacks} id="li1" className="com">
        <div>
          <Paper id="product">
          <img src="Basic.jpeg" id="super"></img>
                <h3 id="hey">{SubPacks.Basic.Price}</h3>
                {/* <h4>{SubPacks.Basic.name}</h4> */}
                <ul id="listul">
                  <li id="listli">Strategic Ad Campaigns</li>
                  <li id="listli">Social Media Management</li>
                  <li id="listli">Trending Content Creation</li>
                  <li id="listli">Google Keyword Optimization</li>
                  <li id="listli">1 week trial period</li>
                  <li id="listli"><i className="fab fa-facebook-square fa-2x" id="fb"></i><i className="fab fa-linkedin fa-2x" id="link"></i><i className="fab fa-snapchat fa-2x" id="snap"></i><i id="instag" className="fab fa-instagram fa-2x"></i><i id="goog" className="fab fa-google fa-2x"></i></li>
                </ul>
                {/* <h5>{SubPacks.Basic.Details}</h5> */}
                <CheckOutFormDialog authUser={authUser}></CheckOutFormDialog>
                {/* <SubscribeFormDialog></SubscribeFormDialog> */}
            </Paper>
            </div>
            <div className="prod1">
            <Paper id="product1">
            <img src="premium.jpeg" id="super"></img>
                <h3 id="hey">{SubPacks.Premium.Price}</h3>
                <ul id="listul">
                  <li id="listli">Strategic Ad Campaigns</li>
                  <li id="listli">Social Media Management</li>
                  <li id="listli">Trending Content Creation</li>
                  <li id="listli">Google Keyword Optimization</li>
                  <li id="listli">1 week trial period</li>
                  <li id="listli"><i className="fab fa-facebook-square fa-2x" id="fb"></i><i className="fab fa-linkedin fa-2x" id="link"></i><i className="fab fa-snapchat fa-2x" id="snap"></i><i id="instag" className="fab fa-instagram fa-2x"></i><i id="goog" className="fab fa-google fa-2x"></i></li>
                </ul>
                <CheckOutFormDialog></CheckOutFormDialog>
                {/* <SubscribeFormDialog></SubscribeFormDialog> */}
            </Paper>
            </div>
            <div className="prod2">
            <Paper id="product2">
              <img src="super.jpeg" id="super"></img>
                <h3 id="hey">{SubPacks.Super.Price}</h3>
                <ul id="listul">
                  <li id="listli">Strategic Ad Campaigns</li>
                  <li id="listli">Social Media Management</li>
                  <li id="listli">Trending Content Creation</li>
                  <li id="listli">Google Keyword Optimization</li>
                  <li id="listli">1 week trial period</li>
                  <li id="listli"><i className="fab fa-facebook-square fa-2x" id="fb"></i><i className="fab fa-linkedin fa-2x" id="link"></i><i className="fab fa-snapchat fa-2x" id="snap"></i><i id="instag" className="fab fa-instagram fa-2x"></i><i id="goog" className="fab fa-google fa-2x"></i></li>
                </ul>
                <CheckOutFormDialog></CheckOutFormDialog>
                {/* <SubscribeFormDialog></SubscribeFormDialog> */}
            </Paper> 
            </div>
         </div>
      ))}
    </>
  );

export default withFirebase(Packs);