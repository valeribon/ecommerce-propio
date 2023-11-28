import { initializeApp } from "firebase/app";

import {
  signInWithEmailAndPassword,
  getAuth,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";

import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD3hebONEg5ht2qJmtX_AOyawBMkwz0ZE0",
  authDomain: "workshop-dos.firebaseapp.com",
  projectId: "workshop-dos",
  storageBucket: "workshop-dos.appspot.com",
  messagingSenderId: "1010932220142",
  appId: "1:1010932220142:web:d9773b7feafaab672f33ff",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export const db = getFirestore(app);

// LOS SERVICIOS

// auth

// Login

export const onSignIn = async ({ email, password }) => {
  try {
    const res = await signInWithEmailAndPassword(auth, email, password);
    return res;
  } catch (error) {
    console.log(error);
  }
};

// Logout

export const logout = () => {
  signOut(auth);
};

// Login con Google

let googleProvider = new GoogleAuthProvider();
export const loginGoogle = async () => {
  const res = await signInWithPopup(auth, googleProvider);
  return res;
};

// Registro

export const signUp = async ({ email, password }) => {
  try {
    let res = await createUserWithEmailAndPassword(auth, email, password);
    return res;
  } catch (error) {
    return error;
  }
};

// Forgot password

export const forgotPassword = async (email) => {
  let res = await sendPasswordResetEmail(auth, email);
  return res;
};

// database
// storage
