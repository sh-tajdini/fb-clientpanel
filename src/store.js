import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import firebase, { firestore } from "firebase/app";
import "firebase/auth";
import "firebase/firestore"; // <- needed if using firestore
import "firebase/functions"; // <- needed if using httpsCallable
import { createStore, combineReducers, compose } from "redux";
import {
  ReactReduxFirebaseProvider,
  firebaseReducer,
  reactReduxFirebase,
} from "react-redux-firebase";
import {
  createFirestoreInstance,
  firestoreReducer,
  reduxFirestore,
} from "redux-firestore"; // <- needed if using firestore
//Reducers

import notifyReducer from "./reducers/notifyReducer";
import settingsReducer from "./reducers/settingsReducer";

const fbConfig = {
  apiKey: "AIzaSyC0wf9bxnrzazCf36vU3Rg9zDQn0WQUsBU",
  authDomain: "reactclientpanel-c213f.firebaseapp.com",
  databaseURL: "https://reactclientpanel-c213f.firebaseio.com",
  projectId: "reactclientpanel-c213f",
  storageBucket: "reactclientpanel-c213f.appspot.com",
  messagingSenderId: "1009294450137",
  appId: "1:1009294450137:web:512ac5b74877499acc0dc8",
  measurementId: "G-MX4NTN7GEB",
};

// react-redux-firebase config
const rrfConfig = {
  userProfile: "users",
  useFirestoreForProfile: true, // Firestore for Profile instead of Realtime DB
};

// Initialize firebase instance
firebase.initializeApp(fbConfig);

// Initialize other services on firebase instance
//const firestore = firebase.firestore(); // <- needed if using firestore
firebase.functions(); // <- needed if using httpsCallable
//baraye add
//const settings = { timestampsInSnapshots: true };
//firestore.settings(settings);

const createStoreWithFirebase = compose(
  reactReduxFirebase(firebase, rrfConfig),
  reduxFirestore(firebase)
)(createStore);

// Add firebase to reducers
const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer, // <- needed if using firestore
  notify: notifyReducer,
  settings: settingsReducer,
});

// Create store with reducers and initial state
const initialState = {};
const store = createStoreWithFirebase(
  rootReducer,
  initialState,
  compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

// const rrfProps = {
//   firebase,
//   config: rrfConfig,
//   dispatch: store.dispatch,
//   createFirestoreInstance, // <- needed if using firestore
// };

export default store;
