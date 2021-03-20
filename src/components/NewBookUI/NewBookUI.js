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

                      <div className="mt-4 ">
                        <label className="block text-base font-medium leading-relaxed text-gray-700">
                            Book Status</label>
                            <select
                                className="w-full px-4 py-2 mt-2 bg-gray-100 border-transparent rounded-lg focus:border-gray-500 focus:bg-white focus:ring-0">
                                <option>Corporate event</option>
                                <option>Wedding</option>
                                <option>Birthday</option>
                                <option>Other</option>
                            </select>
                        
                    </div>

                      <div className="flex flex-wrap mt-4 mb-6 -mx-3">

                        <div className="px-3 w-1/3">
                          <button className="px-8 py-2 mt-2 font-semibold text-blue-800 transition duration-500 ease-in-out transform bg-white border rounded-full shadow-xl hover:text-white hover:border-blue-800 hover:bg-blue-800 focus:shadow-outline focus:outline-none">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-minus-circle"><script xmlns=""/><circle cx="12" cy="12" r="10"/><line x1="8" y1="12" x2="16" y2="12"/></svg>
                          </button>
                        </div>

                        <div className="px-3 mb-6 w-1/3 md:mb-0">                         
                          <input
                              className="block w-full px-4 py-2 mt-2 text-base text-blue-700 bg-white-100 border-transparent rounded-lg ext-blue-700 focus:border-gray-500"
                              id="page" type="number" placeholder="Page"  defaultValue='0'  />
                        </div>

                        <div className="px-3 w-1/3">
                          <button  className="px-8 py-2 mt-2 font-semibold text-blue-800 transition duration-500 ease-in-out transform bg-white border rounded-full shadow-xl hover:text-white hover:border-blue-800 hover:bg-blue-800 focus:shadow-outline focus:outline-none">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-plus-circle"><script xmlns=""/><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/></svg>
                          </button>
                        </div>

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
