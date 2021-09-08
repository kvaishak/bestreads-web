import React from "react";
import person from "../../assets/images/people_1.png";

function ProfileUI(props) {
  return (
    <section className="text-gray-700 body-font">
      <div className="container flex flex-col items-center px-5 py-16 mx-auto lg:px-20 lg:py-24 md:flex-row">
        <div className="w-5/6 mb-10 lg:max-w-lg lg:w-full md:w-1/2 md:mb-0">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src={person}
          />
        </div>
        <div className="flex flex-col items-center text-center lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 md:items-start md:text-left">
          <h2 className="mb-1 text-xs font-medium tracking-widest text-blue-500 title-font">
            Welcome
          </h2>
          <h1 className="mb-8 text-2xl font-bold tracking-tighter text-center text-blue-800 lg:text-left lg:text-5xl title-font">
            {props.userName}
          </h1>
          <div className="flex justify-center">
            <p className="mb-8 text-base leading-relaxed text-center text-gray-700 lg:text-left lg:text-1xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a
              lectus sagittis, convallis purus vel, tristique felis. Sed
              venenatis eget purus in facilisis. Lorem ipsum dolor sit amet,
              consectetur adipiscing.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProfileUI;
