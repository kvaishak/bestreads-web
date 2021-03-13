import { useReducer, useEffect } from "react"
import { useAuth } from "../utils/firebase/AuthContext"
import { database } from "../utils/firebase/firebase"


const ACTIONS = {
    FETCH_USER_BOOKS: "fetch-books"
}

export const bookStatus = {
    currentlyReading: "CURRENTLY_READING",
    finishedReading: "FINISHED_READING"
}

function reducer(state, { type, payload }) {
    switch (type) {
        case ACTIONS.FETCH_USER_BOOKS:
            return {
                books: payload.books
            }
        default:
            return state
    }
}

export function useBooks() {
    const [state, dispatch] = useReducer(reducer, {
        books: []
    })
    const { currentUser } = useAuth()

    useEffect(() => {
        return database.books
            .where("userId", "==", currentUser.uid)
            .get().then(docs => {
                dispatch({
                    type: ACTIONS.FETCH_USER_BOOKS,
                    payload: {books: docs.docs.map(doc => database.formatDoc(doc))},
                });
            });
    },[currentUser]);

    useEffect(() => {
        database.books
            .where("userId", "==", currentUser.uid)
            .onSnapshot(snapshot => {
                dispatch({
                    type: ACTIONS.FETCH_USER_BOOKS,
                    payload: {books: snapshot.docs.map(doc => database.formatDoc(doc))},
                });
            })
    },[currentUser]);

    function newBook(bookName, authorName, pageNo = 1, status = bookStatus.currentlyReading){
         database.books.add({
            bookName,
            authorName,
            pageNo,
            status,
            userId: currentUser.uid,
            createdAt: database.getCurrentTimeStamp()
        });
    }

    function deleteBook(id){
        database.books.doc(id).delete().then(() => console.log("Deleted"));
    }

    function updateBook(id, updatedProps){
        database.books.doc(id).update({
            ...updatedProps
        }).then(() => console.log("Updated"));
    }

    return {
        data: state,
        newBook,
        deleteBook,
        updateBook
    }
}