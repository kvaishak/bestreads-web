import React from 'react';
import { useBooks } from '../../hooks/useBooks'

function FinishedBookUI({book}) {
    
  const {deleteBook} = useBooks();
  
  return (
    <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-100 p-6 rounded-lg">
        <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/720x400" alt="content" />
        <h2 className="text-lg text-gray-900 font-medium title-font mt-4">{book.bookName}</h2>
        <h3 className="tracking-widest text-blue-500 text-xs font-medium title-font mb-4">{book.authorName}</h3>
        <p className="leading-relaxed text-base">{book.description && book.description}</p>
        <div className="flex flex-wrap mt-4 mb-6 -mx-3">
          
        </div>

        <div className="flex flex-wrap mt-8 -mx-3">
    
          <div className="px-3 w-1/4">
            <button onClick={() => deleteBook(book.id)} className="px-4 py-2 font-semibold text-red-600 transition duration-500 ease-in-out transform bg-white border rounded-lg shadow-xl hover:text-white hover:border-red-600 hover:bg-red-600 focus:shadow-outline focus:outline-none">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-trash-2"><script xmlns=""/><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><line x1="10" y1="11" x2="10" y2="17"/><line x1="14" y1="11" x2="14" y2="17"/></svg>
            </button>
          </div>

        </div>

      </div>
    </div>         
  );
}

export default FinishedBookUI;
