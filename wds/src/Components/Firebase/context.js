import React from 'react';

//creates firebase instance at top level of component hierarchy
const FirebaseContext = React.createContext(null);

export const withFirebase = Component => props => (
    <FirebaseContext.Consumer>
      {firebase => <Component {...props} firebase={firebase} />}
    </FirebaseContext.Consumer>
  );
export default FirebaseContext;