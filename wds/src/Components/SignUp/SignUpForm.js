import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FirebaseContext } from '../Firebase';
import { Button } from 'reactstrap';
import { Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { withFirebase } from '../Firebase';

const SignUpPage = () => (
  <div>
    <SignUpForm />
  </div>
);
const INITIAL_STATE = {
  username: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  error: null,
};

class SignUpFormBase extends Component {
    constructor(props) {
      super(props);
      this.state = { ...INITIAL_STATE };
    }
  
    onSubmit = event => {
      const { username, email, passwordOne } = this.state;

      this.props.firebase
        .doCreateUserWithEmailAndPassword(email, passwordOne)
        .then(authUser => {
          this.setState({ ...INITIAL_STATE });
        })
        .catch(error => {
          this.setState({ error });
        });
  
      event.preventDefault();
    }
  
    onChange = event => {
  
    };
    onChange = event => {
      this.setState({ [event.target.name]: event.target.value });
    };
    render() {
      const {
        username,
        email,
        passwordOne,
        passwordTwo,
        error,
      } = this.state;
      const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === '' ||
      email === '' ||
      username === '';
      return (
        <Form onSubmit={this.onSubmit}>
           <FormGroup>
          <Label for="exampleEmail">Username</Label>
          <Input type="username" name="username" value={username} onChange={this.onChange} type="text" placeholder="Full Name" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input type="email" name="email" value={email} onChange={this.onChange} type="text" placeholder="Email Address"/>
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">Password</Label>
          <Input type="password" name="passwordOne" value={passwordOne} onChange={this.onChange} type="password" placeholder="Password"/>
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">Re-type Password</Label>
          <Input type="password" name="passwordTwo" value={passwordTwo} onChange={this.onChange} type="password" placeholder="Confirm Password"/>
        </FormGroup>
        <br></br>
         <Button outline color="primary" type="submit" disabled={isInvalid} className="signupbtn">Sign Up!</Button>
          {error && <p>{error.message}</p>}
        </Form>
      );
    }
  }
  const SignUpForm = withFirebase(SignUpFormBase);
  
  export default SignUpPage;

  export { SignUpForm };