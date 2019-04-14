import firebase from 'firebase/app';
import 'firebase/auth';

var config = {
    apiKey: "AIzaSyCAW7C6kwnS1ujA_HL3zHUaxjtAh5Gq3W8",
    authDomain: "world-development-solutions.firebaseapp.com",
    databaseURL: "https://world-development-solutions.firebaseio.com",
    projectId: "world-development-solutions",
    storageBucket: "world-development-solutions.appspot.com",
    messagingSenderId: "998616883736"
  };

class Firebase {
    constructor() {
      firebase.initializeApp(config);
      this.auth = firebase.auth();
    }
  }
export default Firebase;