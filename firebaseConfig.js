// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-5Bm5h1MsuWd8LC_l-WEQ37_LwdWNlEU",
  authDomain: "assginment-9.firebaseapp.com",
  projectId: "assginment-9",
  storageBucket: "assginment-9.firebasestorage.app",
  messagingSenderId: "483242566067",
  appId: "1:483242566067:web:5aa1348625afc740bd6bc6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;