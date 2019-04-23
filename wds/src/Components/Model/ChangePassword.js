import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFootern, NavLink } from 'reactstrap';
import { PasswordChangeForm } from '../PasswordForget';

class Changeexport extends Component {
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
        <NavLink onClick={this.toggle}>{this.props.buttonLabel}Change Password</NavLink>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} id="modal">
          <ModalHeader toggle={this.toggle}>Change Password</ModalHeader>
          <ModalBody>
              <PasswordChangeForm></PasswordChangeForm>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default Changeexport;