  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
  import { getFirestore, collection, addDoc, getDocs, deleteDoc, doc, updateDoc } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-analytics.js";
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
  const db = getFirestore(app);
  const analytics = getAnalytics(app);


/////////////////////

const inputTitle = document.querySelector('#title');
const inputGenre = document.querySelector('#genre');
const inputDate = document.querySelector('#date');

const addFavBtn = document.querySelector('#addFav');
const showFavBtn = document.querySelector('#showFav');




addFavBtn.addEventListener('click',() => {
    console.log('AddFav');
    const addTitle = inputTitle.value;
    const addGenre = inputGenre.value;
    const addDate = inputDate.value;
    addFav(addTitle, addGenre, addDate);
})


showFavBtn.addEventListener('click',() => {
    console.log('ShowFav');
})



async function addFav(addTitle, addGenre, addDate) {
   
    try {
        await addDoc(collection(db, 'Favorites'), { // Lägger till en ny todo i vår databas i vår collection todos
            Movie: addTitle,
            Genre: addGenre,
            Release_Date: addDate
        });
    } catch (error) {
        console.log('ERROR:', error);
    }
}
