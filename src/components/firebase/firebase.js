import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import {
  REACT_FIREBASE_API_KEY,
  REACT_FIREBASE_APP_ID,
  REACT_FIREBASE_AUTH_DOMAIN,
  REACT_FIREBASE_MEASUREMENT_ID,
  REACT_FIREBASE_PROJECT_ID,
  REACT_FIREBASE_STORAGE_BUCKET,
} from "../../Config";
console.log("🚀 ~ REACT_FIREBASE_API_KEY:", REACT_FIREBASE_API_KEY);

const firebaseConfig = {
  apiKey: REACT_FIREBASE_API_KEY,
  authDomain: REACT_FIREBASE_AUTH_DOMAIN,
  projectId: REACT_FIREBASE_PROJECT_ID,
  storageBucket: REACT_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: REACT_FIREBASE_MEASUREMENT_ID,
  appId: REACT_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);

const firebaseAuth = getAuth(app);

const provider = new GoogleAuthProvider();

export { firebaseAuth, provider, signInWithPopup };
