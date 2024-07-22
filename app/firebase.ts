// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB_Dh25hT1KSDEsFdB7o84cnGzX-NKy1Pc",
  authDomain: "expense-tracker-b5b77.firebaseapp.com",
  projectId: "expense-tracker-b5b77",
  storageBucket: "expense-tracker-b5b77.appspot.com",
  messagingSenderId: "820543990155",
  appId: "1:820543990155:web:d857849a9e6a13627be78e",
  measurementId: "G-1E7Q7CP98E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
if (typeof window !== "undefined") {
  try {
    getAnalytics(app);
  } catch (error) {
    console.error("Firebase Analytics is not supported in this environment:", error);
  }
}
export const db = getFirestore(app)