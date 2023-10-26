import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCqRnwbUyd3RxuhBvc45UCAc_KkDqClCnM",
  authDomain: "my-ecommerce-cdd9a.firebaseapp.com",
  projectId: "my-ecommerce-cdd9a",
  storageBucket: "my-ecommerce-cdd9a.appspot.com",
  messagingSenderId: "869609323444",
  appId: "1:869609323444:web:43d2cfbed86780342710e1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);
export { fireDB, auth };
