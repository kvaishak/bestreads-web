import React, {useState} from 'react';
import NewBook from '../../containers/NewBook/NewBook';


function AddBookUI({type}) {

    const [open, setOpen] = useState(false);

    function openModal(){
        setOpen(true);
    }
    
    function closeModal(){
        setOpen(false);
    }

    if(open){
        return (
            <NewBook close={closeModal}/>
        )
    }else{
        return (
    
            <div className="xl:w-1/4 md:w-1/2 p-4">
                <div className="bg-gray-100 p-6 rounded-lg">
                
                <h2 className="text-lg text-gray-900 font-medium title-font mt-4">Add a Book here.</h2>
               
        
                <div className="flex flex-wrap mt-8 -mx-3">
                
                    <button onClick={openModal}
                        className="w-full px-8 py-2 font-semibold text-black transition duration-500 ease-in-out transform bg-white border rounded-lg shadow-xl hover:text-white hover:border-black hover:bg-black focus:shadow-outline focus:outline-none">Add New Book</button>
                  
                </div>
        
              </div>
            </div>         
          );
    }
  
}

export default AddBookUI;
