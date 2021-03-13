import React, { useRef } from 'react';
import { useBooks,  bookStatus} from '../../hooks/useBooks'

function CurrentBookUI({book}) {
    
  const {deleteBook, updateBook} = useBooks();
  const pageNoRef = useRef();
  

  function updatePageNo(){
    updateBook(book.id, {
      pageNo: pageNoRef.current.value
    });
  }

  function pageNoController(isIncrement){
    const updatedPageNumber = isIncrement ? book.pageNo + 1: book.pageNo - 1;
     updateBook(book.id, {
      pageNo: updatedPageNumber
    });
    pageNoRef.current.value = updatedPageNumber;
  }

  function updateBookStatus(){
    updateBook(book.id, {
      status: bookStatus.finishedReading
    });
  }

  return (
    <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-100 p-6 rounded-lg">
        <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/720x400" alt="content" />
        <h2 className="text-lg text-gray-900 font-medium title-font mt-4">{book.bookName}</h2>
        <h3 className="tracking-widest text-blue-500 text-xs font-medium title-font mb-4">{book.authorName}</h3>
        <p className="leading-relaxed text-base">{book.description && book.description}</p>
        <div className="flex flex-wrap mt-4 mb-6 -mx-3">

          <div className="px-3 w-1/3">
            <button onClick={()=>pageNoController(false)} className="px-8 py-2 mt-2 font-semibold text-blue-800 transition duration-500 ease-in-out transform bg-white border rounded-full shadow-xl hover:text-white hover:border-blue-800 hover:bg-blue-800 focus:shadow-outline focus:outline-none">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-minus-circle"><script xmlns=""/><circle cx="12" cy="12" r="10"/><line x1="8" y1="12" x2="16" y2="12"/></svg>
            </button>
          </div>

          <div className="px-3 mb-6 w-1/3 md:mb-0">                         
            <input
                className="block w-full px-4 py-2 mt-2 text-base text-blue-700 bg-white-100 border-transparent rounded-lg ext-blue-700 focus:border-gray-500"
                id="page" type="number" placeholder="Page" ref={pageNoRef} defaultValue={book.pageNo} onChange={updatePageNo} />
          </div>

          <div className="px-3 w-1/3">
            <button onClick={pageNoController} className="px-8 py-2 mt-2 font-semibold text-blue-800 transition duration-500 ease-in-out transform bg-white border rounded-full shadow-xl hover:text-white hover:border-blue-800 hover:bg-blue-800 focus:shadow-outline focus:outline-none">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-plus-circle"><script xmlns=""/><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/></svg>
            </button>
          </div>
          
        </div>

        <div className="flex flex-wrap mt-8 -mx-3">
        
          <div className="px-3 w-3/4">
            <button onClick={updateBookStatus} className="w-full px-8 py-2 font-semibold text-black transition duration-500 ease-in-out transform bg-white border rounded-lg shadow-xl hover:text-white hover:border-black hover:bg-black focus:shadow-outline focus:outline-none">Finished Reading</button>
          </div>

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

export default CurrentBookUI;
