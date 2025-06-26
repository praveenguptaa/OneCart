import {getAuth, GoogleAuthProvider} from "firebase/auth"
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyCt0mNNzwhG9sLqW8K9kMLY9a_krR0QLDI",
  authDomain: "onecart-2cc44.firebaseapp.com",
  projectId: "onecart-2cc44",
  storageBucket: "onecart-2cc44.firebasestorage.app",
  messagingSenderId: "335056904332",
  appId: "1:335056904332:web:42512d6fb7dc51e1c59ba9"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()


export {auth , provider}

