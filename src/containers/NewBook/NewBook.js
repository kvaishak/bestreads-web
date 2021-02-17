import React, {useRef} from 'react';
import NewBookUI from '../../components/NewBookUI/NewBookUI';
import {database} from '../../utils/firebase/firebase';
import {useAuth} from '../../utils/firebase/AuthContext';

function NewBook(props) {

    const {currentUser} = useAuth();
    const bookRef = useRef();
    const authorRef = useRef();

    async function handleSubmit(e){
        e.preventDefault();
        console.log(bookRef.current.value);
        console.log(authorRef.current.value);
        
        database.books.add({
            bookName: bookRef.current.value,
            authorName: authorRef.current.value,
            pageNo: 1,
            status: 'CURRENTLY_READING',
            userId: currentUser.uid,
            createdAt: database.getCurrentTimeStamp()
        });

        props.close();
    }
    
  return (
        <NewBookUI 
            close={props.close}
            bookRef={bookRef}
            authorRef={authorRef}
            handleSubmit={handleSubmit}    
        />
  );
}

export default NewBook;
