import React from 'react';
import { Link } from 'react-router-dom';

const DescribeImage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-4">LEVEL: Beginner</h1>
      <p className="text-xl mb-6">Can you describe this image?</p>
      <button className="bg-red text-white px-6 py-2 rounded-full mb-6">Speak</button>
      <p className="text-center mt-6">
        Your picture was yellow. Here is something red.
      </p>
      <div className="w-32 h-32 bg-red mt-4"></div>
      <Link to="/basketball" className="mt-8 text-blue underline">Next</Link>
    </div>
  );
};

export default DescribeImage;