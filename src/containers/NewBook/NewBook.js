import React, { useRef } from 'react';
import NewBookUI from '../../components/NewBookUI/NewBookUI';
import { useBooks } from '../../hooks/useBooks'

function NewBook(props) {
    const { newBook } = useBooks();

    const bookRef = useRef();
    const authorRef = useRef();
    const bookStatusRef = useRef();

    async function handleSubmit(e){
        e.preventDefault();
        
        newBook(
            bookRef.current.value,
            authorRef.current.value,
            bookStatusRef.current.value
        );

        props.close();
    }
    
  return (
        <NewBookUI 
            close={props.close}
            bookRef={bookRef}
            authorRef={authorRef}
            bookStatusRef={bookStatusRef}
            handleSubmit={handleSubmit}    
        />
  );
}

export default NewBook;
