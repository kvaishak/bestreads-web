import React from 'react'
import CurrentBookUI from '../CurrentBookUI/CurrentBookUI'
import AddBookUI from '../AddBookUI/AddBookUI'

function CurrentSectionUI({books}) {

    // const tempBooks = [
    //     {
    //         'bookName': '1984',
    //         'authorName': 'Orwell, George',
    //         'description': 'Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.',
    //         'pageNo': '23',
    //         'id': '123'
    //     },
    //     {
    //         'bookName': '1984',
    //         'authorName': 'Orwell, George',
    //         'description': 'Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.',
    //         'pageNo': '23',
    //         'id': '456'
    //     },
    //     {
    //         'bookName': '1984',
    //         'authorName': 'Orwell, George',
    //         'description': 'Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.',
    //         'pageNo': '23',
    //         'id': '789'
    //     },  
    // ];

    const booksContainer = books.map(book => {
        return (
            <CurrentBookUI key={book.id} book={book} />
        );
    })
    
  return (
    <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap w-full mb-10">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Currenlty Reading</h1>
                <div className="h-1 w-20 bg-blue-500 rounded"></div>
            </div>
            </div>
            <div className="flex flex-wrap -m-4">
                {booksContainer}
                <AddBookUI />
            </div>
        </div>
    </section>              
  );
}

export default CurrentSectionUI;
