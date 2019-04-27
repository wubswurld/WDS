import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import PayPalBtn from '../Checkout/paypal';
import ControlledOpenSelect from './Select'
import MultipleSelect from './Select'
class CheckOutFormDialog extends React.Component {
        state = {
        data: '',    
        open: false,
    };

    onChange = () => {}

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
      console.log(this.state.data)
    return (
      <div>
       <Button variant="outlined" color="primary" onClick={this.handleClickOpen} id="checkout" outlined color="inherit">
            Check Out!
        </Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Buy now for a one time payment!</DialogTitle>
          <DialogContent>
            <DialogContentText>
                Select The Package That Works For You.
            </DialogContentText>
            <ControlledOpenSelect></ControlledOpenSelect>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <PayPalBtn></PayPalBtn>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
// console.log(this.state.data)

export default CheckOutFormDialog