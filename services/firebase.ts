import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
// Fallback to hardcoded values to prevent white screen in deployments
// without environment variables configured. Firebase config for the web is safe to be public.
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyA8WRAwvgr2IPcntbUOo-3BSjxqkGKd_V4",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "bgirls-212eb.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "bgirls-212eb",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "bgirls-212eb.firebasestorage.app",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "57939816381",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:57939816381:web:eadb5d327285ce6b786cd4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize a secondary app for admin operations (like creating users)
// to prevent the main session from being logged out
const secondaryApp = initializeApp(firebaseConfig, "Secondary");

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize Firebase Storage and get a reference to the service
export const storage = getStorage(app);

// Initialize secondary auth
export const secondaryAuth = getAuth(secondaryApp);
