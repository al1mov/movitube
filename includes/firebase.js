import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  projectId: "movitube-tv",
  appId: "1:468966137912:web:2c66f1e2c287369b2706cd",
  measurementId: "G-1WP1SBLNZ2",
};

const app = initializeApp(firebaseConfig);
