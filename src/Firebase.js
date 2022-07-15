import { initializeApp } from "firebase/app";
import { collection, getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDthkYA9ETQwnFw_sAwTafL2mTHFL61VQ0",
    authDomain: "fir-136e0.firebaseapp.com",
    projectId: "fir-136e0",
    storageBucket: "fir-136e0.appspot.com",
    messagingSenderId: "357614361193",
    appId: "1:357614361193:web:fa7fbc4a1bdd6d947aa0f8"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore();
export const collectionRef = collection(db, 'Users');