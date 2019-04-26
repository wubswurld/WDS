import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import { Link } from 'reactstrap';
import { withFirebase } from '../Firebase';
import PasswordChangeForm from '../PasswordForget/change';
import ResetModel from '../Model/ResetModel';
import { Button, Label, Input } from 'reactstrap';

const PasswordForgetPage = () => (
  <div>
    <PasswordForgetForm />
  </div>
);

const INITIAL_STATE = {
  email: '',
  error: null,
};

class PasswordForgetFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { email } = this.state;

    this.props.firebase
      .doPasswordReset(email)
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
    const { email, error } = this.state;

    const isInvalid = email === '';

    return (
    //   <form onSubmit={this.onSubmit}>
    //     <input
    //       name="email"
    //       value={this.state.email}
    //       onChange={this.onChange}
    //       type="text"
    //       placeholder="Email Address"
    //     />
    //     <button disabled={isInvalid} type="submit">
    //       Reset My Password
    //     </button>

    //     {error && <p>{error.message}</p>}
    //   </form>
       <form onSubmit={this.onSubmit}>
       <Label for="email">Email</Label>
           <Input onChange={this.onChange} name="email" value={this.state.email} type="text" placeholder="Email address" />
       <br></br>
       <Button outline color="primary" type="submit" disabled={isInvalid}>Reset Password</Button>
       {error && <p>{error.message}</p>}
     </form>
    );
  }
}

const PasswordForgetLink = () => (
  <p>
    <ResetModel></ResetModel>
  </p>
);

export default PasswordForgetPage;

const PasswordForgetForm = withFirebase(PasswordForgetFormBase);

export { PasswordForgetForm, PasswordForgetLink, PasswordChangeForm };