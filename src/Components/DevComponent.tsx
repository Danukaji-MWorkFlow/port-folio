import React from 'react';

interface DevVariables {
  name: string;
  imgPath: string;
  description: string;
  github: string;
  linkedin: string;
  email: string;
  projects: string;
}

const DevComponents: React.FC<DevVariables> = ({ name, imgPath, description, github, linkedin, email, projects }) => {
  return (
    <div className="p-0 grid grid-cols-1 shadow-md rounded-3xl bg-black bg-opacity-10 border border-gray-200 border-opacity-20 w-64 h-full relative">
      <div className="col-span-1 relative">
        <img src={"src/assets/94730271 (1).jpeg"} alt={name} className="rounded-3xl w-full h-auto" />
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-black to-transparent rounded-b-3xl"></div>
      </div>
      <div className="col-span-1 p-4 justify-center text-center">
        <h1 className='text-center text-3xl text-white font-googleRoboto mt-3' >{name}</h1>
        <h1 className='text-center text-2xl text-gray-400 font-Aldrich mt-3' >{description}</h1>
        <p className='text-center text-2xl text-gray-400 font-Aldrich mt-3' >
          <span className="material-symbols-outlined relative top-1">
            location_on
          </span>{"Location"}
        </p>
        <button className='bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow mt-3'>
          <span className="material-symbols-outlined relative top-1">
            person
          </span>{"GET IN TOUCH"}
        </button>
      </div>
    </div>
  );
};

export default DevComponents;
