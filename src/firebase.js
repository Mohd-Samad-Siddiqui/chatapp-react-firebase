import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  // apiKey: "AIzaSyBd-s4Q7cJJG9u2nn4PxRWbxEo5744eRN4",
  // authDomain: "newchatapp-a3b47.firebaseapp.com",
  // databaseURL: "https://newchatapp-a3b47.firebase.com",
  // projectId: "newchatapp-a3b47",
  // storageBucket: "newchatapp-a3b47.appspot.com",
  // messagingSenderId: "204872845759",
  // appId: "1:204872845759:web:2dd91b295d3a5b1c36790a",

  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);
