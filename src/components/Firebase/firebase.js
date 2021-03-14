import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

  // Your web app's Firebase configuration
  const config = {
    apiKey: "AIzaSyDzj6IuPKXCgENxMllHuulNb9ygbOqphWk",
    authDomain: "report-log.firebaseapp.com",
    projectId: "report-log",
    storageBucket: "report-log.appspot.com",
    messagingSenderId: "977554747007",
    appId: "1:977554747007:web:63558a74ac07b34b4d994a"
  };

class Firebase {
  constructor() {
    app.initializeApp(config);

    this.auth = app.auth();
    this.db = app.database();
  }
  // *** Auth API ***

  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = password =>
    this.auth.currentUser.updatePassword(password);

    // *** User API ***

  user = uid => this.db.ref(`users/${uid}`);

  users = () => this.db.ref('users');
}

export default Firebase;
