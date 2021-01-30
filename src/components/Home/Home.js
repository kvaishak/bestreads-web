import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <section className="text-gray-700 body-font">
      <div className="container px-8 py-48 mx-auto lg:px-4">
        <div className="flex flex-col w-full mb-12 text-left lg:text-center">
            <div
                className="inline-flex items-center justify-center flex-shrink-0 w-20 h-20 mx-auto mb-5 text-blue-800 bg-gray-200 rounded-full">
                <svg className="w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="34" height="24"
                    fill="currentColor">
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path
                        d="M5.68 7.314l-1.82 5.914L12 19.442l8.14-6.214-1.82-5.914L16.643 11H7.356L5.681 7.314zM15.357 9l2.888-6.354a.4.4 0 0 1 .747.048l3.367 10.945a.5.5 0 0 1-.174.544L12 21.958 1.816 14.183a.5.5 0 0 1-.174-.544L5.009 2.694a.4.4 0 0 1 .747-.048L8.644 9h6.712z" />
                </svg>
            </div>
            <h1 className="mb-6 text-2xl font-semibold tracking-tighter text-blue-800 sm:text-6xl title-font">
                Welcome to&nbsp;
                <br className="md:hidden" />
                Best Reads.
            </h1>
            <p className="mx-auto text-base font-medium leading-relaxed text-gray-700 lg:w-1/2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a lectus sagittis,
                convallis purus vel, tristique felis. Sed venenatis eget purus in facilisis. Lorem ipsum dolor sit amet, 
                consectetur adipiscing.

            </p>
        </div>
          <div className="flex lg:justify-center">
              <button
                  className="inline-flex px-4 py-2 font-semibold text-white transition duration-500 ease-in-out transform rounded-lg shadow-xl bg-gradient-to-r from-blue-700 hover:from-blue-600 to-blue-600 hover:to-blue-700 focus:shadow-outline focus:outline-none">
                    <Link to="/signup">Sign-up</Link>
              </button>
              <button
                  className="inline-flex items-center px-4 py-2 ml-4 font-semibold text-blue-800 transition duration-500 ease-in-out transform bg-white border rounded-lg shadow-xl hover:border-gray-600 hover:bg-gray-600 hover:text-white focus:shadow-outline focus:outline-none">
                    <Link to="/login">Log-in</Link>
              </button>
          </div>
        </div>
    </section>                  
  );
}

export default Home;
