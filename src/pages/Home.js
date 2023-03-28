import React from 'react';
import axios from "axios";

// import Card from '../components/Card';

const Home = () => {
  return (
    <div className="min-h-screen bg-[#1c2541] py-10">
      <div className="container mx-auto flex flex-col gap-4">
        <div>
          <h1 className="text-4xl font-medium text-center text-gray-100">React Movies</h1>
        </div>
        <div className="w-1/3 self-center">
          <form>
            <div>
              <div className="flex rounded-md overflow-hidden w-full">
                <input type="text" className="w-full rounded-md rounded-r-none outline-none pl-4" placeholder='Your next movie'/>
                <button className="bg-indigo-600 text-white px-6 text-lg font-semibold py-2 rounded-r-md outline-none">Go</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;
