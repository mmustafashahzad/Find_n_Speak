import React from 'react';

function HomeScreen() {
  return (
    <div className="bg-[rgba(19,144,210,0.7)] flex items-center justify-center min-h-screen p-4">
      <div className="bg-[#1390D2] w-full max-w-4xl p-8 rounded-lg shadow-lg flex flex-col items-center">
          <img src='home.png' alt="Find n Speak" className="w-full mb-6 shadow-lg rounded-lg" />

        <div className="flex justify-center space-x-4 mt-6">
          <button className="bg-[#FEC700] text-black font-bold py-2 px-6 rounded-md text-lg">
            Commencer
          </button>
          <button className="bg-[#FEC700] text-black font-bold py-2 px-6 rounded-md text-lg">
            English
          </button>
          <button className="bg-[#FEC700] text-black font-bold py-2 px-6 rounded-md text-lg">
            یبدأ
          </button>
        </div>
      </div>
    </div>
  );
}

export default HomeScreen;
