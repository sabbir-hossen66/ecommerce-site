// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC9Jc7wGcxNmNI_7xgVzaCUMLMfw42Wgzw",
    authDomain: "ecommerce-site-2d73d.firebaseapp.com",
    projectId: "ecommerce-site-2d73d",
    storageBucket: "ecommerce-site-2d73d.appspot.com",
    messagingSenderId: "456633695261",
    appId: "1:456633695261:web:3df215ad8cbb57057b9af4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;

