// src/firebase.ts
import { initializeApp } from "firebase/app";

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDp9lVHnBwRr1vsdfRG96-Q7Qsix-9qGQI",
  authDomain: "personal-portfolio-6d4a1.firebaseapp.com",
  projectId: "personal-portfolio-6d4a1",
  storageBucket: "personal-portfolio-6d4a1.firebasestorage.app",
  messagingSenderId: "318869978104",
  appId: "1:318869978104:web:8523abf212888b71f0f40d"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;
