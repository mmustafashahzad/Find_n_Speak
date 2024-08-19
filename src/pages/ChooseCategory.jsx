import React from 'react';

const ChooseCategory = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#1390D2] p-4">
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-yellow text-4xl font-bold">Find -n- Speak</h1>
        <div className="text-white text-right">
          <div>LEVEL: Beginner</div>
          <div className="flex justify-end space-x-1 mt-1">
            <div className="w-6 h-6 bg-yellow"></div>
            <div className="w-6 h-6 bg-white"></div>
            <div className="w-6 h-6 bg-white"></div>
          </div>
        </div>
      </header>
      <h2 className="text-white text-4xl font-bold mb-12 text-center">CHOOSE A CATEGORY</h2>
      <div className="space-y-6 flex-grow">
        <button className="bg-[#E97813] text-white px-6 py-4 rounded-2xl w-full text-3xl font-bold flex items-center">
          <span className="mr-4">🎨</span> COLOR
        </button>
        <button className="bg-[#FEC700] text-black px-6 py-4 rounded-2xl w-full text-3xl font-bold flex items-center">
          <span className="mr-4">📐</span> SHAPE
        </button>
      </div>
    </div>
  );
};

export default ChooseCategory;