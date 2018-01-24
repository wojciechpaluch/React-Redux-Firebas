import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyDN47GmKjcw5xxDAApVi32HtVPM-mOhvEw",
  authDomain: "react-fa476.firebaseapp.com",
  databaseURL: "https://react-fa476.firebaseio.com",
  projectId: "react-fa476",
  storageBucket: "react-fa476.appspot.com",
  messagingSenderId: "1043971829995"
};


const firebaseApp = firebase.initializeApp(config);

export const database = firebaseApp.database();