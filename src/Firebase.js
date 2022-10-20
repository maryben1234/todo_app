import { getAnalytics } from "firebase/analytics";
import { initializeApp } from 'firebase/app';
// import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyD9ZqVyZl3vl6qD-6bZ-g2ZliaTGIUQgyU",
    authDomain: "todo-crud-97cea.firebaseapp.com",
    projectId: "todo-crud-97cea",
    storageBucket: "todo-crud-97cea.appspot.com",
    messagingSenderId: "749732083104",
    appId: "1:749732083104:web:b865a3c44ef43abf02e0c5",
    measurementId: "G-4048GPG5QN"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getAnalytics(app);

  export { db}; 