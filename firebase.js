// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAVmIOP2GDmOJ2HlAjd-TJoLlpmAxL3c50",
  authDomain: "medium-app-9345b.firebaseapp.com",
  projectId: "medium-app-9345b",
  storageBucket: "medium-app-9345b.appspot.com",
  messagingSenderId: "957724776615",
  appId: "1:957724776615:web:542c57cc07081a0ccda382",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, db, provider };
