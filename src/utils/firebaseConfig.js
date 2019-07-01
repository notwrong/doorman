import firebase from 'firebase/app';
import 'firebase/firestore';

var config = {
  apiKey: "AIzaSyCOF0KWg8BqaM4w9M_m5bRkzgqGfuuIzHE",
  authDomain: "not-wrong-doorman.firebaseapp.com",
  databaseURL: "https://not-wrong-doorman.firebaseio.com",
  projectId: "not-wrong-doorman",
  storageBucket: "not-wrong-doorman.appspot.com",
  messagingSenderId: "367648692865",
  appId: "1:367648692865:web:a0174f65df65237a"
};

firebase.initializeApp(config);

const db = firebase.firestore();

// date issue fix according to firebase
const settings = {
    timestampsInSnapshots: true
};

db.settings(settings);

export {
    db
};