import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDT2L28WyJ7ouz1XU4ASF7FgCif7TITkAY",
  authDomain: "disneyplus-82b06.firebaseapp.com",
  projectId: "disneyplus-82b06",
  storageBucket: "disneyplus-82b06.appspot.com",
  messagingSenderId: "58113461576",
  appId: "1:58113461576:web:d0bd8b0c3ae1739b25b77d"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;