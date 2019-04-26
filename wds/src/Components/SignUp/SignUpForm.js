import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { FirebaseContext } from '../Firebase';
import { Button } from 'reactstrap';
import { Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { withFirebase } from '../Firebase';
import * as ROUTES from '/Users/wubs/WDS/wds/src/Routes.js';
import { compose } from 'recompose';


const SignUpPage = () => (
  <div className="form">
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
        //if user was created and stored successfully in firebase limited database, create new user in realtime data base
        .then(authUser => {
          // Create a user in your Firebase realtime database
          return this.props.firebase
          //takes Uid already created 
            .user(authUser.user.uid)
            //sets data to new ref and uses the initial username
            .set({
              username,
              email,
            });
        })
        .then(authUser => {
          this.setState({ ...INITIAL_STATE });
          this.props.history.push(ROUTES.USER);
        })
        .catch(error => {
          this.setState({ error });
        });
      event.preventDefault();
    }
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
          <Label for="exampleEmail">Full Name</Label>
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
         <Button outline color="primary" type="submit" disabled={isInvalid} className="signupbtn">Sign Up!<i className="far fa-arrow-alt-circle-right" id="arr"></i></Button>
          {error && <p>{error.message}</p>}
        </Form>
      );
    }
  }
  const SignUpForm = compose(
    withRouter,
    withFirebase
  )(SignUpFormBase);

  export default SignUpPage;

  export { SignUpForm };