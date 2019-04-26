import React from 'react';
import { Button } from 'reactstrap';
import { withFirebase } from '../Firebase';

const SignOutButton = ({ firebase }) => (
  <Button outline color="primary" size="sm" type="button" className="signOut" id="signout" onClick={firebase.doSignOut}>
    Sign Out!
  </Button>
);

export default withFirebase(SignOutButton);