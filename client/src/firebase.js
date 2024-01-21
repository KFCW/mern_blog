// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_KEY,
  authDomain: "mern-blog-fe9f7.firebaseapp.com",
  projectId: "mern-blog-fe9f7",
  storageBucket: "mern-blog-fe9f7.appspot.com",
  messagingSenderId: "451868485955",
  appId: "1:451868485955:web:6cd68c78267842c851a7f6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export the app instance
export default app;
