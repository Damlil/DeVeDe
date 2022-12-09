 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
 import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-analytics.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
   apiKey: "AIzaSyCxUkyyCiZeNg7V4t2JHA9ZTsU-ys-7xdc",
   authDomain: "devede-7ad16.firebaseapp.com",
   projectId: "devede-7ad16",
   storageBucket: "devede-7ad16.appspot.com",
   messagingSenderId: "1075767418780",
   appId: "1:1075767418780:web:2ca60a68e6a7632ca97259",
   measurementId: "G-1T100EF4CF"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const analytics = getAnalytics(app);