// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA97T4OfTrdOi8hq-z1wA4yVaaPGPEt0Gg",
  authDomain: "finals-vue-72668.firebaseapp.com",
  projectId: "finals-vue-72668",
  storageBucket: "finals-vue-72668.firebasestorage.app",
  messagingSenderId: "161717572620",
  appId: "1:161717572620:web:c96a5527b1837f1ffa0a29"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
