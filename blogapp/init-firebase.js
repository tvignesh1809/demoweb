import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyACVgg99qkg_8ItXkRIkQGRd3N3vif6TdA",
  authDomain: "venzorq-a09f5.firebaseapp.com",
  databaseURL: "https://venzorq-a09f5-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "venzorq-a09f5",
  storageBucket: "venzorq-a09f5.firebasestorage.app",
  messagingSenderId: "363753687281",
  appId: "1:363753687281:web:201103b31ffe3f6161c150",
  measurementId: "G-5RQPYLPLSD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
