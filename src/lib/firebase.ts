import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCHdeJBSCOQCAQuWi1o3g327vbp-ygKQyQ",
  authDomain: "hash13.firebaseapp.com",
  projectId: "hash13",
  storageBucket: "hash13.firebasestorage.app",
  messagingSenderId: "893896634724",
  appId: "1:893896634724:web:77799cc345636b6f5cca71"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app; 