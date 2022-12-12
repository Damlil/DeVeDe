import { db, collection, addDoc, getDocs, deleteDoc, doc, updateDoc, query, where, increment, collectionGroup } from './firebase-config.js';


const inputTitle = document.querySelector('#title');
const inputGenre = document.querySelector('#genre');
const inputDate = document.querySelector('#date');
const queryInput = document.querySelector('#query');

const addFavBtn = document.querySelector('#addFav');
const showFavBtn = document.querySelector('#showFav');
const backBtn = document.querySelector('#backBtn');


const mainElem = document.querySelector('main');
const footerElem = document.querySelector('footer');
const qfavEl = document.querySelector('.queryFav');
const q = document.querySelector('.qContainer');
const favMovElem = document.querySelector('#favMovies');

/////////////////////////////////////////////

addFavBtn.addEventListener('click', () => {       /// .  This Button Adds the Movie with Genre and Release Date to Database collection
    console.log('AddFav');
    const addTitle = inputTitle.value;
    const addGenre = inputGenre.value;
    const addDate = inputDate.value;
    if (addTitle == '' || addGenre == '' || addDate == '') {
        alert('Please fill out all fields')
        return
    }
    addFav(addTitle, addGenre, addDate);
});

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

showFavBtn.addEventListener('click', () => {                        // .  This button show all our favorite movies
    getFavMovie()
})

backBtn.addEventListener('click', () => {                 //// .  Takes us Back to Start Page 
    window.location.reload();
})

async function getFavMovie() {                                             /////                This function show all our saved favorite movies
    try {
        showFavMovie(favMovies);
    } catch (error) {
        console.log(error);
    }
}

async function showFavMovie() {        /// .  Show all saved Favorite movies in the DOM

    const favMovies = await getDocs(collection(db, 'Favorites'));
    favMovies.forEach((movie) => {

        const favorites = `
            <article>
                <div class="favMovieDiv">
                <h3>${movie.data().Movie}:</h3>
                <p>${movie.data().Genre},</p>
                <p>Relase Date: ${movie.data().Release_Date}</p>
                <button class="removeFavBtn" movie_id="${movie.id}">Remove</button>
                </div>
            </article>    
        `;
        mainElem.style.display = 'none'
        footerElem.style.display = 'none'
        backBtn.style.display = 'flex'

        favMovElem.insertAdjacentHTML('beforeend', favorites);
    })

    addRemoveClick()
}

function addRemoveClick() {               ////                       Adds click function to Remove Favorite BTN,  that delete movie from collection
    const noFavBtn = document.querySelectorAll('.removeFavBtn')

    noFavBtn.forEach((btn) => {
        btn.addEventListener('click', async (event) => {
            const movieID = event.target.getAttribute('movie_id');
            await removeFromDatabase(movieID)


            const movieDelete = document.querySelectorAll('.favMovieDiv')
            movieDelete.forEach((div) => {
                div.remove()
            });
            showFavMovie();

        })
    })
}

async function removeFromDatabase(movieID) {        /// This function removes Movie from the database based on ID
    try {
        await deleteDoc(doc(db, 'Favorites', movieID))
    } catch (error) {
        console.log(error);
    }
}









const showQueryBtn = document.querySelector('#queryBtn');
showQueryBtn.addEventListener('click', () => {
    const queryValue = queryInput.value

    console.log(queryValue);
    movieQuery(queryValue)

})







async function movieQuery(queryValue) {





    try {

        const movieTitle = query(collection(db, 'Favorites'), where('Movie', '==', queryValue));
        const result = await getDocs(movieTitle);

        result.forEach((movie) => {
            
            const favoritesMov = `
                    
                    <h3>${movie.data().Movie}: Was found in the database</h3>
              
            `;
            qfavEl.insertAdjacentHTML('beforeend', favoritesMov);
        });

    } catch (error) {
        console.log(error);
    }
}

