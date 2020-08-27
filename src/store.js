import { createStore, combineReducers, compose } from "redux";
import firebase from "firebase";
import "firebase/firestore";
import { reactReduxFirebase, firebaseReducer } from "react-redux-firebase";
import { reduxFirestore, firestoreReducer } from "redux-firestore";
//Reducers
//@todo

const firebaseConfig = {
  apiKey: "AIzaSyC0wf9bxnrzazCf36vU3Rg9zDQn0WQUsBU",
  authDomain: "reactclientpanel-c213f.firebaseapp.com",
  databaseURL: "https://reactclientpanel-c213f.firebaseio.com",
  projectId: "reactclientpanel-c213f",
  storageBucket: "reactclientpanel-c213f.appspot.com",
  messagingSenderId: "1009294450137",
  appId: "1:1009294450137:web:512ac5b74877499acc0dc8",
  measurementId: "G-MX4NTN7GEB",
};
//ract-redux-firebaseconfig
const rrfConfig = {
  userProfile: "users",
  useFirestoreForProfile: true, // Firestore for Profile instead of Realtime DB
};

//init firebase instance
firebase.initializeApp(firebaseConfig);
//Init firestore
const firestore = firebase.firestore();

//Add reactredux firebase enhancer when making store creator
const createStoreWithFirebase = compose(
  reactReduxFirebase(firebase, rrfConfig), //firebase instance as first argument
  reduxFirestore(firebase) //<-needed if using firestore
)(createStore);

// Add firebase to reducers
const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer, // <- needed if using firestore
});
