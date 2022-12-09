import { db, collection, addDoc, getDocs, deleteDoc, doc, updateDoc, query, where, increment } from './firebase-config.js';

const inputTitle = document.querySelector('#title');
const inputGenre = document.querySelector('#genre');
const inputDate = document.querySelector('#date');

const addFavBtn = document.querySelector('#addFav');
const showFavBtn = document.querySelector('#showFav');

const mainElem = document.querySelector('main');
const favMovElem = document.querySelector('#favMovies');


addFavBtn.addEventListener('click', () => {       /// .  This Button Adds the Movie with Genre and Release Date to Database collection
    console.log('AddFav');
    const addTitle = inputTitle.value;
    const addGenre = inputGenre.value;
    const addDate = inputDate.value;
    // if (addTitle || addGenre || addDate == '')
    addFav(addTitle, addGenre, addDate);
});


showFavBtn.addEventListener('click', () => {
    console.log('ShowFav');
    getFavMovie()
})


async function getFavMovie() {
    try {
        const favMovies = await getDocs(collection(db, 'Favorites'));
        showFavMovie(favMovies);
    } catch (error) {
        console.log(error);
    }
}


function showFavMovie(favMovies) {
    favMovies.forEach((movie) => {
        const favorites = `
            <article>
                <h3>${movie.data().Movie}</h3>
                <p>Genre: ${movie.data().Genre}</p>
                <p>Relase Date: ${movie.data().Release_Date}</p>
                <button onclick="removeFav()">Remove Favorite</button>
            </article>
        `;
        mainElem.style.display = 'none'
        favMovElem.insertAdjacentHTML('beforeend', favorites);
    })
}





async function addFav(addTitle, addGenre, addDate) {  ///     This function adds MovieTitle Genre and Relase Date to database.

    try {
        await addDoc(collection(db, 'Favorites'), {
            Movie: addTitle,
            Genre: addGenre,
            Release_Date: addDate
        });
    } catch (error) {
        console.log('ERROR:', error);
    }
}
