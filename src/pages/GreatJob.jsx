import React from 'react';
import { Link } from 'react-router-dom';

const GreatJob = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-4">LEVEL: Beginner</h1>
      <p className="text-xl mb-6">Tell me something about your picture.</p>
      <button className="bg-red text-white px-6 py-2 rounded-full mb-6">Speak</button>
      <h2 className="text-3xl font-bold text-green-600">GREAT JOB</h2>
      <Link to="/describe-image" className="mt-8 text-blue underline">Next</Link>
    </div>
  );
};

export default GreatJob;