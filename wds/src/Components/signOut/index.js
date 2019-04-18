import React from 'react';
import { Button } from 'reactstrap';
import { withFirebase } from '../Firebase';

const SignOutButton = ({ firebase }) => (
  // <button type="button" onClick={firebase.doSignOut}>
  //   Sign Out
  // </button>
  <Button outline color="primary" type="button" className="signOut" onClick={firebase.doSignOut}>
    Sign Out!
  </Button>
);

export default withFirebase(SignOutButton);