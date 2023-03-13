import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// import { getFirestore } from "firebase/firestore";

export const provider = new GoogleAuthProvider();
provider.addScope("https://www.googleapis.com/auth/contacts.readonly");
provider.setCustomParameters({
  login_hint: "user@example.com",
});

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
export const firebaseConfig = {
  apiKey: "AIzaSyCIBo8R9JhvGZEMBce4BcVp-uIEkRXDjus",
  authDomain: "pokedex-1752f.firebaseapp.com",
  projectId: "pokedex-1752f",
  storageBucket: "pokedex-1752f.appspot.com",
  messagingSenderId: "744216837080",
  appId: "1:744216837080:web:7a8cefae25d823b75e10ad",
  measurementId: "G-XF5F6BWSLG",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// analytics and firestore
// // export const db = getFirestore(app);
// import { getAnalytics } from "firebase/analytics";
