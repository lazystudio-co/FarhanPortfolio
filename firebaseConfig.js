// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCqJskAn9WUfwdpUAmnbmYaqmgK-Cq4rsE",
  authDomain: "farhanirtiza-sportfolio.firebaseapp.com",
  databaseURL: "https://farhanirtiza-sportfolio-default-rtdb.firebaseio.com",
  projectId: "farhanirtiza-sportfolio",
  storageBucket: "farhanirtiza-sportfolio.appspot.com",
  messagingSenderId: "832148936740",
  appId: "1:832148936740:web:ffa8ad1620fef80d4060b1",
  measurementId: "G-QJJP23D62X",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getDatabase(app);
