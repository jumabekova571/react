// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAeXTNlSukD1YMBW9UEAaFAoq0vsBNQlBA",
  authDomain: "blog-aizada.firebaseapp.com",
  projectId: "blog-aizada",
  storageBucket: "blog-aizada.appspot.com",
  messagingSenderId: "622383938117",
  appId: "1:622383938117:web:3fed825ea62607983b812c",
  measurementId: "G-YL2MG2SNPX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);