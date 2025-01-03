import React from 'react';

function LostandFound({ theme }) {
  const backgroundImage = '/bus.jpg'; 

  return (
    <div
      className="min-h-screen flex flex-col justify-start items-center relative"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className={`w-full h-full flex flex-col justify-start items-center pt-10 ${theme === 'light' ? 'bg-white/70' : 'bg-black/70'}`}>
        <h1 className={`text-4xl font-bold mb-9 flex justify-center items-center ${theme === 'light' ? 'text-black' : 'text-white'}`}>Lost and Found</h1>
      </div>
      <div className="absolute bottom-12 flex space-x-40">
        <button className="px-4 py-2 text-3xl bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-700 transition">Lost Items</button>
        <button className="px-4 py-2 text-3xl bg-green-500 text-white rounded-lg shadow-md hover:bg-green-700 transition">Found Items</button>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSexMDAza0P8_1H8q6rwOsyFl1EQnmP4SZJySxKpW2jgCwSvIQ/viewform?usp=sharing" 
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-red-500 text-3xl text-white rounded-lg shadow-md hover:bg-red-700 transition"
        >
          Submit Lost/Found Items
        </a>
      </div>
    </div>
  );
}

export default LostandFound;