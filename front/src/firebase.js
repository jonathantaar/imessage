import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB7kVSLlmsS_mlZq9plXesMSh_2t-L12bA",
  authDomain: "imessage-clone-bcbef.firebaseapp.com",
  projectId: "imessage-clone-bcbef",
  storageBucket: "imessage-clone-bcbef.appspot.com",
  messagingSenderId: "719159169812",
  appId: "1:719159169812:web:368315dfc023a8de656801",
  measurementId: "G-9QEJPM36BB"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
