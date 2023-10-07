// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA_7RGEeIe3kNZGx3K9_GDMaNIxpVV2i_g",
  authDomain: "marsify-967c5.firebaseapp.com",
  projectId: "marsify-967c5",
  storageBucket: "marsify-967c5.appspot.com",
  messagingSenderId: "756364991656",
  appId: "1:756364991656:web:5ac03ec657872e0bdb369d",
  measurementId: "G-3GCMV43Y8Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);