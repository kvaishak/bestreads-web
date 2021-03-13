import React from 'react';

import Layout from '../Layout/Layout'
import CurrentSectionUI from '../../components/CurrentSectionUI/CurrentSectionUI';

import { useBooks, bookStatus } from '../../hooks/useBooks'
import FinishedSectionUI from '../../components/FinishedSectionUI/FinishedSectionUI';


const Dashboard = () => {

    const { data } = useBooks();

    console.log(data.books);
    var currentlyReadingBooks =[],
        finishedReadingBooks = [];

    data.books.forEach((book) => {
        switch(book.status){
            case bookStatus.currentlyReading : currentlyReadingBooks.push(book);
                                                break;
            case bookStatus.finishedReading : finishedReadingBooks.push(book);
                                                break;
            default : currentlyReadingBooks.push(book);
        }
    })


    return ( 
        <Layout>
            {currentlyReadingBooks.length > 0 && <CurrentSectionUI books={currentlyReadingBooks}/>}
            {finishedReadingBooks.length > 0 && <FinishedSectionUI books={finishedReadingBooks}/>}
        </Layout>
     );
}

export default Dashboard;
