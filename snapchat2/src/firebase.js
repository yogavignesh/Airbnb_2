// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';
const firebaseConfig = {

    apiKey: "AIzaSyBg8rc51zJMMrbLKnfkQOor93nTXkjV1YE",
  
    authDomain: "snapchat-630cd.firebaseapp.com",
  
    projectId: "snapchat-630cd",
  
    storageBucket: "snapchat-630cd.appspot.com",
  
    messagingSenderId: "742673467304",
  
    appId: "1:742673467304:web:e0fce6e6b675a70809ff9d",
  
    measurementId: "G-NE98HXMNP9"
  
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db= firebaseApp.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { db,auth,storage,provider};