import { db, deleteDoc, doc } from './firebase-config.js'


async function removeFromDatabase(movieID) {        /// This function removes Movie from the database based on ID
    try {
        await deleteDoc(doc(db, 'Favorites', movieID))
    } catch (error) {
        console.log(error);
    }
}

export {removeFromDatabase}


