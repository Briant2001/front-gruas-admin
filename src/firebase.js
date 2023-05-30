// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
///import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDAEJXI5wLu-M8yTGjlq66EMJekD0AJHxw",
  authDomain: "sistemadegruas.firebaseapp.com",
  projectId: "sistemadegruas",
  storageBucket: "sistemadegruas.appspot.com",
  messagingSenderId: "691443277876",
  appId: "1:691443277876:web:39f07c152690f68991aa61",
  measurementId: "G-KM8P8BL5YE"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);


//const analytics = getAnalytics(app);
