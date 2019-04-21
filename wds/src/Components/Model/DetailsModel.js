import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class DetailsModel extends Component {
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
        <Button outline color="primary" size="sm" id="login" onClick={this.toggle}>{this.props.buttonLabel}More Details</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} id="modal">
          <ModalHeader toggle={this.toggle}>package Name</ModalHeader>
          <ModalBody>
              <div>

              </div>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default DetailsModel;