import React, { Component } from 'react';
// import Button from '@material-ui/core/Button'; 
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, NavLink } from 'reactstrap';
// import Changeexport from '../Model/ChangePassword';
// import SignOutButton from '../signOut/index'
// import { PasswordChangeForm } from '../PasswordForget';
import ChangePage from '../../Components/Model/ChangePassword';
import Contain from '../../Components/Navbar/DialogDetails';

class PhoneAlertDialog extends Component {
    constructor(props) {
      super(props);
      this.state = {
        modal: false
      };
  
      this.toggle = this.toggle.bind(this);
    }
  
    toggle() {
      this.setState(prevState => ({
        modal: !prevState.modal
      }));
    }
    render() {
        const { authUser } = this.props;
        // console.log(authUser);
      return (
        <div className="signinphone">
          <Button outline color="primary" size="sm" className="phoneAccount" onClick={this.toggle}>{this.props.buttonLabel}Account</Button>
          <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} id="modal">
            <ModalHeader toggle={this.toggle}>Account Info</ModalHeader>
            <ModalBody>
                {/* <DialogDetails authUser={authUser}></DialogDetails> */}
                <Contain authUser={authUser}></Contain>
            </ModalBody>
          </Modal>
        </div>
      );
    }
  }

const ChangePasswordLink = () => (
    <div>
      <ChangePage></ChangePage>
    </div>
  );

export { ChangePasswordLink };
export default PhoneAlertDialog;