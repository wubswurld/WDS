import React, { Component } from 'react';
// import Button from '@material-ui/core/Button'; 
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Changeexport from '../Model/ChangePassword';
import SignOutButton from '../signOut/index'
import { PasswordChangeForm } from '../PasswordForget';
import ChangePage from '../Model/ChangePassword';
import Contain from '../Navbar/DialogDetails';

class AlertDialog extends Component {
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
        <div className="signin">
          <Button outline color="primary" size="sm" id="login" onClick={this.toggle}>{this.props.buttonLabel}My account</Button>
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

// class AlertDialog extends React.Component {
//   state = {
//     open: false,
//   };

//   handleClickOpen = () => {
//     this.setState({ open: true });
//   };

//   handleClose = () => {
//     this.setState({ open: false });
//   };

//   render() {
//     return (
//       <div>
//         <Button size="sm" outline color="primary" id="login" onClick={this.handleClickOpen}>
//           My Account
//         </Button>
//         <Dialog
//           open={this.state.open}
//           onClose={this.handleClose}
//           aria-labelledby="alert-dialog-title"
//           aria-describedby="alert-dialog-description"
//         >
//           <DialogTitle id="alert-dialog-title">Account Information</DialogTitle>
//           <DialogContent>
//             <DialogContentText id="alert-dialog-description">
//             <ChangePasswordLink></ChangePasswordLink>
//             {/* <Changeexport onClick={this.handleClose}></Changeexport> */}
//             </DialogContentText>
//           </DialogContent>
//           <DialogActions>
//               {/* <Changeexport></Changeexport> */}
//             <SignOutButton></SignOutButton>
//             <Button size="sm" onClick={this.handleClose} outline color="primary">
//               Cancel
//             </Button>
//           </DialogActions>
//         </Dialog>
//       </div>
//     );
//   }
// }

const ChangePasswordLink = () => (
    <div>
      <ChangePage></ChangePage>
    </div>
  );

export { ChangePasswordLink };
export default AlertDialog;