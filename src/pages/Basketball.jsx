import React from 'react';
import { Link } from 'react-router-dom';

const Basketball = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-4">LEVEL: Beginner</h1>
      <p className="text-xl mb-6">I like playing basketball.</p>
      <div className="space-y-4">
        <button className="bg-blue text-white px-6 py-2 rounded-full w-full">Pick Another</button>
        <button className="bg-yellow text-black px-6 py-2 rounded-full w-full">Clue</button>
        <button className="bg-red text-white px-6 py-2 rounded-full w-full">Home</button>
      </div>
      <button className="mt-6 bg-orange text-white px-6 py-2 rounded-full">Speak</button>
      <Link to="/" className="mt-8 text-blue underline">Back to Home</Link>
    </div>
  );
};

export default Basketball;