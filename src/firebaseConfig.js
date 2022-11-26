// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import {getAuth} from 'firebase/auth';
import {getFirestore} from "firebase/firestore"
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCBZ1nsJhn6sprJOLTYhBewzJaVs0c8_2M",
  authDomain: "casa-chaupi.firebaseapp.com",
  projectId: "casa-chaupi",
  storageBucket: "casa-chaupi.appspot.com",
  messagingSenderId: "755295864241",
  appId: "1:755295864241:web:514ec10e7e04c963892990",
  measurementId: "G-M7DWJFL7Y4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app)
const db = getFirestore(app)
const storage = getStorage(app)

export { app, auth, db, storage };