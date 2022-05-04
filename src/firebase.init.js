// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDVR1qk64hf1yUZmQuYWUSJYKCsH6k_u3o",
  authDomain: "warehouse-management-1a464.firebaseapp.com",
  projectId: "warehouse-management-1a464",
  storageBucket: "warehouse-management-1a464.appspot.com",
  messagingSenderId: "379807006193",
  appId: "1:379807006193:web:452a89b34ca2f190f85850",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;