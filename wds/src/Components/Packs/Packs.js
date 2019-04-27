import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import DetailsModel from '../Model/DetailsModel';
import { withFirebase } from '../Firebase';
import PayPalBtn from '../Checkout/paypal';
import DraggableDialog from '../CheckoutModel/CheckoutModel';
import RadioButtonsGroup from '../CheckoutModel/Select';
import CheckOutFormDialog from '../CheckoutModel/CheckoutModel';

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
        console.log(SubPacks);
        return(
            
            <div>
            {loading && <div>Loading ...</div>}
            <PackagesList SubPacks={SubPacks} />
            </div>
        )
    }
}
const PackagesList = ({ SubPacks }) => (
    <>
      {SubPacks.map(SubPacks => (
        <div key={SubPacks} id="li1">
          <Paper id="product">
          <img src="Basic.jpeg" id="super"></img>
                <h3>{SubPacks.Basic.Price}</h3>
                <hr></hr>
                <h4>{SubPacks.Basic.name}</h4>
                <h5>{SubPacks.Basic.Details}</h5>
                <CheckOutFormDialog></CheckOutFormDialog>
            </Paper>
            <Paper id="product1">
            <img src="premium.jpeg" id="super"></img>
                <h3>{SubPacks.Premium.Price}</h3>
                <hr></hr>
                <h4>{SubPacks.Premium.name}</h4>
                <h5>{SubPacks.Premium.Details}</h5>
                <CheckOutFormDialog></CheckOutFormDialog>
            </Paper>
            <Paper id="product2">
              <img src="super.jpeg" id="super"></img>
                <h3>{SubPacks.Super.Price}</h3>
                <hr></hr>
                <h4>{SubPacks.Super.name}</h4>
                <h5>{SubPacks.Super.Details}</h5>
                <CheckOutFormDialog></CheckOutFormDialog>
            </Paper> 
         </div>
      ))}
    </>
  );

export default withFirebase(Packs);