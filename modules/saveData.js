
import { db, collection, addDoc } from './firebase-config.js'

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

export { addFav };