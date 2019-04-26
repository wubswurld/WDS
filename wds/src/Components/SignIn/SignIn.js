import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { withFirebase } from '../Firebase';
import { Form, Input, FormGroup, Label, Button } from 'reactstrap';
import { PasswordForgetLink } from '../PasswordForget';

const SignInPage = () => (
    <div>
      <SignInForm />
    </div>
  );
  const INITIAL_STATE = {
    email: '',
    password: '',
    error: null,
  };
class SignInFormBase extends Component {
    constructor(props) {
      super(props);
      this.state = { ...INITIAL_STATE };
    }
    onSubmit = event => {
      const { email, password } = this.state;
      this.props.firebase
        .doSignInWithEmailAndPassword(email, password)
        .then(() => {
          this.setState({ ...INITIAL_STATE });
          console.log(this.state)
          this.props.history.push('/view');
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
      const { email, password, error } = this.state;
        const isInvalid = password === '' || email === '';
      return (
        <form onSubmit={this.onSubmit}>
            <Label for="Email">Email</Label>
           <Input onChange={this.onChange} name="email" value={email} type="text" placeholder="Email Address" />
           <Label for="Password">Password</Label>
            <Input name="password" onChange={this.onChange} value={password} type="password" placeholder="password" />
          <br></br>
          <Button outline color="primary" type="submit" disabled={isInvalid} className="signin">Sign In!</Button>
          {error && <p>{error.message}</p>}
          <div id="password">
          <PasswordForgetLink />
          </div>
        </form>
      );
    }
  }
const SignInForm = compose(withRouter,withFirebase)(SignInFormBase);

export default SignInPage;

export { SignInForm };