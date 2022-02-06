import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA7bfcOQhM-if4IYRKOYRyX-pqa7BUxzqo",
  authDomain: "ecom-ad884.firebaseapp.com",
  projectId: "ecom-ad884",
  storageBucket: "ecom-ad884.appspot.com",
  messagingSenderId: "790282001959",
  appId: "1:790282001959:web:9d8831cbd2c10a2ffab802",
  measurementId: "G-3PX4FFPPLF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);

export default fireDB;
