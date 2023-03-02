import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBPCvaQ8SATz6BTP8WmgveHr-D-mkCtk4I",
  authDomain: "milk-2c98d.firebaseapp.com",
  projectId: "milk-2c98d",
  storageBucket: "milk-2c98d.appspot.com",
  messagingSenderId: "169051014132",
  appId: "1:169051014132:web:89e61c73ba5de27b3f2fa1",
  measurementId: "G-M6VR10KM2D",
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();

const storage = firebase.storage();

const userCollection = db.collection("users");
const fileCollection = db.collection("files");

export { auth, db, userCollection, storage, fileCollection };
