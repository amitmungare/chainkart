// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBl4aHguxUmjucL3lV3nGFgIMjtjcetWoE",
  authDomain: "chainkart-a7664.firebaseapp.com",
  projectId: "chainkart-a7664",
  storageBucket: "chainkart-a7664.appspot.com",
  messagingSenderId: "790322054550",
  appId: "1:790322054550:web:9e1a7b366d28f6d48d49b7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const storage = getStorage(app);

export default storage;
