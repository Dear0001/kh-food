// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBPdBuomG-U-JsCccJbnXefHNLaO64war8",
  authDomain: "khmer-food-e95dd.firebaseapp.com",
  projectId: "khmer-food-e95dd",
  storageBucket: "khmer-food-e95dd.appspot.com",
  messagingSenderId: "721627382189",
  appId: "1:721627382189:web:923e2bfa85d4e78f2f6124",
  measurementId: "G-F7X8K8GTLL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default getFirestore();