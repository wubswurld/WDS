import app from 'firebase/app';
//implement auth API
import 'firebase/auth';
import 'firebase/database';
//config for firebase application
var config = {
    apiKey: "AIzaSyCAW7C6kwnS1ujA_HL3zHUaxjtAh5Gq3W8",
    authDomain: "world-development-solutions.firebaseapp.com",
    databaseURL: "https://world-development-solutions.firebaseio.com",
    projectId: "world-development-solutions",
    storageBucket: "world-development-solutions.appspot.com",
    messagingSenderId: "998616883736"
    // apiKey: process.env.REACT_APP_API_KEY,
    // authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    // databaseURL: process.env.REACT_APP_DATABASE_URL,
    // projectId: process.env.REACT_APP_PROJECT_ID,
    // storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    // messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID
  };
// firebase.initializeApp(config);

// export default firebase

class firebase {
  //initializes app with firebase database using your config file.  
  constructor() {
      app.initializeApp(config);
      this.auth = app.auth();
      this.db = app.database();
    }
    //communicate with firebase api
    //creates user with email and password
    doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);
    //signs user in with email and password
    doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);
    doSignOut = () => this.auth.signOut();
    doPasswordReset = email => this.auth.sendPasswordResetEmail(email);
    doPasswordUpdate = password =>
      this.auth.currentUser.updatePassword(password);
    
    user = uid => this.db.ref(`users/${uid}`);
    users = () => this.db.ref('users');
    packages = () => this.db.ref('SS');
}

export default firebase;