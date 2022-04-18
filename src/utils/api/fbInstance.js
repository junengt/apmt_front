import { initializeApp } from "firebase/app";
import "firebase/auth";
import { getAuth } from "firebase/auth";
import "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGIN_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUR_ID,

  // apiKey: "AIzaSyAQRzx93mMQFPO4WhsH-ywlr971rP04Sbg",
  // authDomain: "applemart-eeb42.firebaseapp.com",
  // databaseURL:
  //   "https://applemart-eeb42-default-rtdb.asia-southeast1.firebasedatabase.app",
  // projectId: "applemart-eeb42",
  // storageBucket: "applemart-eeb42.appspot.com",
  // messagingSenderId: "183153102294",
  // appId: "1:183153102294:web:72c4a2190f5bf9ec82e877",
};

export const firebaseInstance = initializeApp(firebaseConfig);

export const authService = getAuth(firebaseInstance);
export const dbService = getFirestore();
export const storageService = getStorage();
