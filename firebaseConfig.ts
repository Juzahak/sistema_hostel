// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCNBq0FwPKJEfe4DZ52A2Ed1cdGVj3VgSQ",
  authDomain: "sistema-bc6a1.firebaseapp.com",
  projectId: "sistema-bc6a1",
  storageBucket: "sistema-bc6a1.appspot.com",
  messagingSenderId: "430345511308",
  appId: "1:430345511308:web:9ec4e05282e442b70cf6a9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const storage = getStorage();