
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCIJ_03ApD-z0_1WmgxN4FC5KEWecLNbbE",
  authDomain: "virtual-computer-classes-245da.firebaseapp.com",
  projectId: "virtual-computer-classes-245da",
  storageBucket: "virtual-computer-classes-245da.firebasestorage.app",
  messagingSenderId: "991886314373",
  appId: "1:991886314373:web:7de00203656a286acc52ec"
};

// Firebase initialize
const app = getApps().length
  ? getApp()
  : initializeApp(firebaseConfig);

// Firestore database
export const db = getFirestore(app);

// Firebase Authentication
export const auth = getAuth(app);
