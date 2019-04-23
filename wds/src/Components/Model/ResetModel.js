import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Modal, ModalHeader, ModalBody, ModalFootern, NavLink } from 'reactstrap';
import { PasswordChangeForm } from '../PasswordForget';
import PasswordForgetPage from '../PasswordForget/index'

class ResetModel extends Component {
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
        <Link onClick={this.toggle}>Forgot Password?</Link>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} id="modal">
          <ModalHeader toggle={this.toggle}>Change Password</ModalHeader>
          <ModalBody>
              <PasswordForgetPage></PasswordForgetPage>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default ResetModel;