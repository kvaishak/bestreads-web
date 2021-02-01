import React from 'react';

function CurrentBookUI({book}) {
    
  return (
    <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-100 p-6 rounded-lg">
        <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/720x400" alt="content" />
        <h2 className="text-lg text-gray-900 font-medium title-font mt-4">{book.title}</h2>
        <h3 className="tracking-widest text-blue-500 text-xs font-medium title-font mb-4">{book.author}</h3>
        <p className="leading-relaxed text-base">{book.description}</p>
        <div className="flex flex-wrap mt-4 mb-6 -mx-3">

          <div className="px-3 w-1/3">
            <button className="px-8 py-2 mt-2 font-semibold text-blue-800 transition duration-500 ease-in-out transform bg-white border rounded-full shadow-xl hover:text-white hover:border-blue-800 hover:bg-blue-800 focus:shadow-outline focus:outline-none">-</button>
          </div>

          <div className="px-3 mb-6 w-1/3 md:mb-0">                         
            <input
                className="block w-full px-4 py-2 mt-2 text-base text-blue-700 bg-white-100 border-transparent rounded-lg ext-blue-700 focus:border-gray-500"
                id="page" type="number" placeholder="Page" defaultValue={book.page} />
          </div>

          <div className="px-3 w-1/3">
            <button className="px-8 py-2 mt-2 font-semibold text-blue-800 transition duration-500 ease-in-out transform bg-white border rounded-full shadow-xl hover:text-white hover:border-blue-800 hover:bg-blue-800 focus:shadow-outline focus:outline-none">+</button>
          </div>
          
        </div>

        <button className="w-full px-8 py-2 mt-4 font-semibold text-black transition duration-500 ease-in-out transform bg-white border rounded-lg shadow-xl hover:text-white hover:border-black hover:bg-black focus:shadow-outline focus:outline-none">Finished Reading</button>

      </div>
    </div>         
  );
}

export default CurrentBookUI;
