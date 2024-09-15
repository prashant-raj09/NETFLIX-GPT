// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCET9_eK6jvi0ZiqIW2mG4R9HvrpQtI27Q",
  authDomain: "netflix-gpt-67ecc.firebaseapp.com",
  projectId: "netflix-gpt-67ecc",
  storageBucket: "netflix-gpt-67ecc.appspot.com",
  messagingSenderId: "382191178833",
  appId: "1:382191178833:web:bf4feb68207d0d0079d470",
  measurementId: "G-9ZLJYGTN4R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();