import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAXh6n8qaKnCeUfzcJjh9OiTS7PzXvQRwg",
  authDomain: "whatsapp-clone-921e1.firebaseapp.com",
  databaseURL: "https://whatsapp-clone-921e1.firebaseio.com",
  projectId: "whatsapp-clone-921e1",
  storageBucket: "whatsapp-clone-921e1.appspot.com",
  messagingSenderId: "416004965981",
  appId: "1:416004965981:web:055058f0b4ead40312afb4",
  measurementId: "G-MF4XW9QT1Q",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
