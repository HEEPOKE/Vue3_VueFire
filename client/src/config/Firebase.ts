import { VueFire } from "vuefire";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getDatabase, ref } from "firebase/database";

const firebaseApp = initializeApp({
  apiKey: "AIzaSyDLVVvXp8ucRSIqTvDwcAxBXbOY7IQsuKA",
  authDomain: "vuefire-d13c4.firebaseapp.com",
  projectId: "vuefire-d13c4",
  storageBucket: "vuefire-d13c4.appspot.com",
  messagingSenderId: "111296958587",
  appId: "1:111296958587:web:813016db4aaf8b7e5d92de",
  measurementId: "G-6PV0QMZXMG",
});

// const db = getDatabase(firebaseApp);
export const db = getDatabase(firebaseApp);

export const namesRef = ref(db, "names");
