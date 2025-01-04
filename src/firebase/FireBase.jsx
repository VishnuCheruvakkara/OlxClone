
import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCoPdzYGTSIGiNt0eKVJG0UN-o7wUKo564",
  authDomain: "olxclone-eacfb.firebaseapp.com",
  projectId: "olxclone-eacfb",
  storageBucket: "olxclone-eacfb.firebasestorage.app",
  messagingSenderId: "216821994934",
  appId: "1:216821994934:web:f8b3ef03d5b29054da5d17",
  measurementId: "G-KGS2BERX4J"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const googleProvider=new GoogleAuthProvider()