import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import SignInPage, { SignInForm } from '../SignIn/SignIn';

class Modalexport extends Component {
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
    return (
      <div className="signin">
        <Button color="primary" onClick={this.toggle}>{this.props.buttonLabel}Login</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} id="modal">
          <ModalHeader toggle={this.toggle}>Sign In</ModalHeader>
          <ModalBody>
              <SignInForm></SignInForm>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default Modalexport;