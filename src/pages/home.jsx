import React from 'react';

function HomeScreen() {
  // Handler function for button clicks
  const handleClick = (language) => {
    console.log(`You clicked the ${language} button!`);
    // Add your custom logic here, such as navigation or updating state
  };

  // Function to handle the text-to-speech
 

  return (
    <div className="bg-[rgba(19,144,210,0.7)] flex items-center justify-center min-h-screen p-4">
      <div className="bg-[#1390D2] w-full max-w-4xl p-8 rounded-lg shadow-lg flex flex-col items-center">
        <img src="home.png" alt="Find n Speak" className="w-full mb-6 shadow-lg rounded-lg" />

        <div className="flex justify-center space-x-4 mt-6">
          <button
            className="bg-[#FEC700] text-black font-bold py-2 px-6 rounded-md text-lg"
            onClick={() => handleClick('Commencer')}
          >
            Commencer
          </button>
          <button
            className="bg-[#FEC700] text-black font-bold py-2 px-6 rounded-md text-lg"
            onClick={() => handleClick('Start')}
          >
            Start
          </button>
          <button
            className="bg-[#FEC700] text-black font-bold py-2 px-6 rounded-md text-lg"
            onClick={() => handleClick('یبدأ')}
          >
            یبدأ
          </button>
          
        </div>
      </div>
    </div>
  );
}

export default HomeScreen;
