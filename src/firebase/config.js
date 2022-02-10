import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCAezAmudBY0srNCeP4uednnz8C9Bc3rk0",
  authDomain: "ecommercereact-a7921.firebaseapp.com",
  projectId: "ecommercereact-a7921",
  storageBucket: "ecommercereact-a7921.appspot.com",
  messagingSenderId: "905468183456",
  appId: "1:905468183456:web:5036c8b6551b9408751ac5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default function getFirestoreApp() {
  return app
}

