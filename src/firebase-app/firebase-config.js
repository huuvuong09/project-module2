// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAP0TICjAjSO7tAftMArv96c90_zbyigZo",
  authDomain: "simple-blog-510c7.firebaseapp.com",
  projectId: "simple-blog-510c7",
  storageBucket: "simple-blog-510c7.appspot.com",
  messagingSenderId: "297390575590",
  appId: "1:297390575590:web:563d1f873206bcc6601027",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
