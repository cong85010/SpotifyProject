// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDpWpEs0rHa2iH0QRWpY9Gv1kf20e9uT80",
  authDomain: "tiktok-clone-d8f70.firebaseapp.com",
  databaseURL: "https://tiktok-clone-d8f70-default-rtdb.firebaseio.com",
  projectId: "tiktok-clone-d8f70",
  storageBucket: "tiktok-clone-d8f70.appspot.com",
  messagingSenderId: "288614137092",
  appId: "1:288614137092:web:cb6a00db3dabb2b4716451",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
