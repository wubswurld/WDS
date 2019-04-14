import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { withFirebase } from '../Firebase';
import { Form, Input, FormGroup, Label, Button } from 'reactstrap';

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
        //   this.props.history.push('/about');
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
          {/* <input
            name="email"
            value={email}
            onChange={this.onChange}
            type="text"
            placeholder="Email Address"
          /> */}
            <Label for="Email">Email</Label>
           <Input onChange={this.onChange} name="email" value={email} type="text" placeholder="Email Address" />
           <Label for="Password">Password</Label>
            <Input name="password" onChange={this.onChange} type="password" placeholder="password" />
          {/* <input
            name="password"
            value={password}
            onChange={this.onChange}
            type="password"
            placeholder="Password"
          /> */}
          <br></br>
          <Button outline color="primary" type="submit" disabled={isInvalid} className="signin">Sign In!</Button>
          {error && <p>{error.message}</p>}
        </form>
        // <Form onSubmit={this.onSubmit}>
        //     <FormGroup>
        //         <Label for="Email">Email</Label>
        //         <Input onChange={this.onChange} name="email" value={email} type="text" placeholder="Email Address" />
        //     </FormGroup>
        //     <FormGroup>
        //         <Label for="Password">Password</Label>
        //         <Input name="password" onChange={this.onChange} type="password" placeholder="password" />
        //     </FormGroup>
        //     <br></br>
        //     <Button outline color="primary" type="submit"className="signin">Sign In!</Button>
        //     <Button color="danger" onClick={this.toggle} id="cancle">Cancel</Button>
        //     {error && <p>{error.message}</p>}
        // </Form>
      );
    }
  }
const SignInForm = compose(withRouter,withFirebase,)(SignInFormBase);
export { SignInForm };
export default SignInPage;