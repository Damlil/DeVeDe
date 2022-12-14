import { db, collection, getDocs, query, where } from './firebase-config.js'

const qfavEl = document.querySelector('.queryFav');


async function movieQuery(queryValue) {      /// This function checks the database for the Value we put into the textfield on the site
    /// If we get a match, it also displays that movie in the DOM
    try {
        const movieTitle = query(collection(db, 'Favorites'), where('Movie', '==', queryValue));
        const result = await getDocs(movieTitle);

        if (queryValue == '') {
            alert('Please enter title')
        }
        result.forEach((movie) => {
            const favoritesMov = `
                <div class="qContainer">
                    <h3>${movie.data().Movie}:</h3>
                    <p>${movie.data().Genre}</p>
                    <p>Relase Date: ${movie.data().Release_Date}</p>
                </div> `;
            qfavEl.insertAdjacentHTML('beforeend', favoritesMov);
        });

    } catch (error) {
        console.log(error);
    }
};


export { movieQuery }