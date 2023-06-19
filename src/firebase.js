// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth' 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCfxg0f7UUW54OaRbV-MGRiTIsbYfy2fXo",
  authDomain: "react-dashboard-5df37.firebaseapp.com",
  projectId: "react-dashboard-5df37",
  storageBucket: "react-dashboard-5df37.appspot.com",
  messagingSenderId: "450997072944",
  appId: "1:450997072944:web:1d3f1be4c48098e87b29f5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };