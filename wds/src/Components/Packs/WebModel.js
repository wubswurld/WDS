import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Input, Label } from 'reactstrap';
import { toast } from 'react-toastify';
import * as actions from '../../actions';
import { resetWarningCache } from 'prop-types';

class WebModel extends React.Component {
  constructor(){
    super();

    this.state = {
        name: '',
        email: '',
        phone: '',
        message: '',
        open: false
    }  
}
handleSubmit = (e) => {
    const Sent = ({ name }) => <div>Thank you {name}. <br /> Your message has been sent!</div>
    const INITIAL_STATE = {
        name: '',
        email: '',
        phone: '',
        message: '',
      };
    //block re render
    e.preventDefault();
    toast(<Sent name={this.state.name} />);
    //axios action sends state
    actions.contact(this.state)
    .then(res => {
        console.log(res.data.message);
        this.setState({ ...INITIAL_STATE })
    })
    this.setState({ ...INITIAL_STATE })
}

updateValue = (event) => {
    this.setState({[event.target.name]: event.target.value});
}

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <div>
        <Button variant="outlined" color="primary" onClick={this.handleClickOpen}>
          Web-Development Inquiry
        </Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        //   className="dialog1"
        >
          <DialogTitle id="form-dialog-title1">Send us a message with all of your questions!</DialogTitle>
          <p id="dp">We will try to get back to you in less than 24 hours.</p>
          <DialogContent>
          <form className='react-form1' onSubmit={this.handleSubmit}>
                <Label for="Name">Name</Label>
                <Input onChange={this.updateValue} className='form-input' id="form-input"value={this.state.name} name='name' type='text' placeholder="Name"/>
                <br />
                <Label for="Email">Email</Label>
                <Input onChange={this.updateValue} className='form-input' name='email' value={this.state.email} type='email' placeholder="Email"/>
                <br />
                <Label for="Phone">Phone</Label>
                <Input onChange={this.updateValue} className='form-input' name='phone' value={this.state.phone} type='phone' placeholder="Phone"/>
                <br />
                <Label for="Message">Message</Label>
                <Input type="textarea" onChange={this.updateValue} className='form-textarea' name='message' value={this.state.message} placeholder="Message" />
                <DialogActions>
                <Button onClick={this.handleClose} color="primary">Cancel</Button>
                <Button outline color="primary" id="send1" type="submit" className="send1" block>Send</Button>
                </DialogActions>
                </form>
          </DialogContent>
        </Dialog>
      </div>
    );
  }
}
export default WebModel
