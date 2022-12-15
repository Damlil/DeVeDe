import { db, collection, getDocs } from './modules/firebase-config.js'
import { movieQuery } from './modules/movieQuery.js';
import { removeFromDatabase } from './modules/removeData.js';
import { addFav } from './modules/saveData.js';

const inputTitle = document.querySelector('#title');
const inputGenre = document.querySelector('#genre');
const inputDate = document.querySelector('#date');
const queryInput = document.querySelector('#query')

const addFavBtn = document.querySelector('#addFav')
const showFavBtn = document.querySelector('#showFav');
const backBtn = document.querySelector('#backBtn');
const inputF = document.querySelector('.inputFields')

const mainElem = document.querySelector('main');
const footerElem = document.querySelector('footer');
const q = document.querySelector('.qContainer');
const favMovElem = document.querySelector('#favMovies');
const showQueryBtn = document.querySelector('#queryBtn');    

/////////////////////////////////////////////

addFavBtn.addEventListener('click', () => {       /// .  This Button Adds the Movie with Genre and Release Date to Database collection
    const addTitle = inputTitle.value;
    const addGenre = inputGenre.value;
    const addDate = inputDate.value;
    if (addTitle == '' || addGenre == '' || addDate == '') {
        alert('Please fill out all fields')
       return
    } else { alert ('Thanks for your submit!')}
 
    addFav(addTitle, addGenre, addDate);
    document.getElementById('formReset').reset();

});

showFavBtn.addEventListener('click', () => {                        // .  This button show all our favorite movies
    getFavMovie()
})

backBtn.addEventListener('click', () => {                 //// .  Takes us Back to Start Page 
    window.location.reload();
})
   
showQueryBtn.addEventListener('click', () => {             /// .  Takes the input field value and searches the Database collection Favorites
    const queryValue = queryInput.value
    movieQuery(queryValue)
    document.getElementById('queryForm').reset();

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
        // <div class="favMovieDiv">
        //          </div>
        const favorites = `
            <article>
              
                <h3>${movie.data().Movie}:</h3>
                <p>${movie.data().Genre}</p>
                <p>Relase Date: ${movie.data().Release_Date}</p>
                <button class="removeFavBtn" movie_id="${movie.id}">Remove</button>
           
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

            const movieDelete = document.querySelectorAll('article')
            movieDelete.forEach((div) => {
                div.remove()
            });
            showFavMovie();

        })
    })
}

