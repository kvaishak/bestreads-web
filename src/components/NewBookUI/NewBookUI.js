import React from 'react';

function NewBookUI(props) {
    
  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
    
        {/* This element is to trick the browser into centering the modal contents. */}
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
       
        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full" role="dialog" aria-modal="true" aria-labelledby="modal-headline">

        <div className="w-full px-8 py-24 border-gray-100 rounded-lg bg-blue-1300  lg:px-24 lg:py-4 lg:rounded-l-none s">
              <div className="relative z-10 text-left ">
                
                  <form className="mt-6" action="#" method="POST">
                      <div>
                          <label className="block text-base font-medium leading-relaxed text-gray-700">Enter your Book
                              Name</label>
                          <input type="text" name="" id="" placeholder="Your Book Name " ref={props.bookRef}
                              className="w-full px-4 py-2 mt-2 text-base bg-gray-100 border-transparent rounded-lg ext-blue-700 focus:border-gray-500"
                              autoFocus autoComplete="true" required />
                      </div>
                      <div className="mt-4">
                          <label className="block text-base font-medium leading-relaxed text-gray-700">Enter Author
                              Name</label>
                          <input type="email" name="" id="" placeholder="Author Name" ref={props.authorRef}
                              className="w-full px-4 py-2 mt-2 text-base bg-gray-100 border-transparent rounded-lg ext-blue-700 focus:border-gray-500"
                               autoComplete="true" required />
                      </div>
                      
                      <button type="submit" onClick={props.handleSubmit} className="block w-full px-4 py-3 mt-6 font-semibold text-white transition duration-500 ease-in-out transform rounded-lg bg-gradient-to-r from-blue-700 hover:from-blue-500 to-blue-500 hover:to-blue-700 focus:shadow-outline focus:outline-none">Add Book</button>
        
                  </form>
                  <p className="mt-8 text-center"><span onClick={props.close}
                          className="font-semibold text-blue-500 hover:text-blue-700">
                              Cancel
                      </span></p>
              </div>
          </div>
              
        </div>
      </div>
    </div>
            
  );
}

export default NewBookUI;
