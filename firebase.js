import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyCbG3956HR4zMdlRP-BFtUaudeeXqyq78M',
  authDomain: 'file-upload-5d3ba.firebaseapp.com',
  projectId: 'file-upload-5d3ba',
  storageBucket: 'file-upload-5d3ba.appspot.com',
  messagingSenderId: '533502614265',
  appId: '1:533502614265:web:d2b311e8e499f5da47e028',
};

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
const db = app.firestore();
export { db };
