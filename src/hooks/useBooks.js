import { useReducer, useEffect } from "react"
import { useAuth } from "../utils/firebase/AuthContext"
import { database } from "../utils/firebase/firebase"


const ACTIONS = {
    FETCH_USER_BOOKS: "fetch-books"
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
    },[]);

    useEffect(() => {
        database.books
            .where("userId", "==", currentUser.uid)
            .onSnapshot(snapshot => {
                dispatch({
                    type: ACTIONS.FETCH_USER_BOOKS,
                    payload: {books: snapshot.docs.map(doc => database.formatDoc(doc))},
                });
            })
    },[]);

    function updatePages(){

    }

    return {
        data: state,
        updatePages
    }
}