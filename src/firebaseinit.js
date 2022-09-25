// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{getFirestore} from "@firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

//real
const firebaseConfig = {
  apiKey: "AIzaSyCQ7jlQNBe4L_-wh9ALvIP7SuyWVixu_oY",
  authDomain: "firesotre-list.firebaseapp.com",
  projectId: "firesotre-list",
  storageBucket: "firesotre-list.appspot.com",
  messagingSenderId: "13626764616",
  appId: "1:13626764616:web:353795b60798b4fc33577d"
};

//fake

// const firebaseConfig = {
//   apiKey: "AIzaSyA2vhpk7PBGSaT1Xs67TnSzE-nNCgpyB84",
//   authDomain: "firestor-list-sani.firebaseapp.com",
//   projectId: "firestor-list-sani",
//   storageBucket: "firestor-list-sani.appspot.com",
//   messagingSenderId: "347961083523",
//   appId: "1:347961083523:web:71b8bdcb2f2bd4e4d3bdb6"
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)

