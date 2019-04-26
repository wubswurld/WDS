import React, { Component } from 'react';
import { Form, Input, FormGroup, Label, Button } from 'reactstrap';
import { withFirebase } from '../Firebase';

const INITIAL_STATE = {
  passwordOne: '',
  passwordTwo: '',
  error: null,
};

class PasswordChangeFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { passwordOne } = this.state;

    this.props.firebase
      .doPasswordUpdate(passwordOne)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
      })
      .catch(error => {
        this.setState({ error });
      });

    event.preventDefault();
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { passwordOne, passwordTwo, error } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo || passwordOne === '';

    return (
      <form onSubmit={this.onSubmit}>
        <Label for="PasswordOne">New Password</Label>
            <Input onChange={this.onChange} name="passwordOne" value={passwordOne} type="password" placeholder="New Password" />
        <Label for="PasswordOne" id="p1">Confirm New Password</Label>
            <Input onChange={this.onChange} name="passwordTwo" value={passwordTwo} type="password" placeholder="Confirm New Password" />  
        <br></br>
        <Button outline color="primary" type="submit" disabled={isInvalid}>Change Password</Button>
        {error && <p>{error.message}</p>}
      </form>
    );
  }
}

const PasswordChangeForm = withFirebase(PasswordChangeFormBase);

export default PasswordChangeForm;