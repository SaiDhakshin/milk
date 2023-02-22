import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBPCvaQ8SATz6BTP8WmgveHr-D-mkCtk4I",
  authDomain: "milk-2c98d.firebaseapp.com",
  projectId: "milk-2c98d",
  storageBucket: "milk-2c98d.appspot.com",
  messagingSenderId: "169051014132",
  appId: "1:169051014132:web:89e61c73ba5de27b3f2fa1",
  measurementId: "G-M6VR10KM2D",
};

export default firebase.initializeApp(firebaseConfig);
