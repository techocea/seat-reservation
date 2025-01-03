import React from 'react';

function Home({ theme }) {


  
  return (
    <div className={`w-full min-h-screen transition ease-in-out delay-100 ${theme === 'light' ? 'bg-cyan-500' : 'bg-slate-900'}`}>
      <h1>Home Page</h1>
      <p>Welcome to the Home Page!</p>
    </div>
  );
}

export default Home;