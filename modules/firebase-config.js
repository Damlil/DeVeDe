  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
  import { getFirestore, collection, addDoc, getDocs, deleteDoc, doc, updateDoc, collectionGroup, query, where , increment } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use

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



// const firebaseConfig = {                                  CARLS API
//     apiKey: "AIzaSyCXEL9NtaXEAzXJo0M7lHibBF4QbBOSkEg",
//     authDomain: "solaris-f6c95.firebaseapp.com",
//     projectId: "solaris-f6c95",
//     storageBucket: "solaris-f6c95.appspot.com",
//     messagingSenderId: "164463429902",
//     appId: "1:164463429902:web:8a932b69a30fd42480af5f"
//   };
  

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);


  export { getFirestore, db, collection, addDoc, getDocs, deleteDoc, doc, updateDoc, query, where, collectionGroup , increment }
/////////////////////