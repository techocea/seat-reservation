import React from 'react';
import logo from '/new.png';
import whitelogo from '/white.png';
import dark from '/dark.png';
import light from '/light.png';
import { Link } from 'react-router-dom';

const Navbar = ({ theme, setTheme }) => {
  const toggle_mode = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };

  return (
    <div className={`w-full flex items-center justify-between py-1 px-3 transition ease-in-out delay-100 ${theme === 'light' ? 'bg-blue-800' : 'bg-slate-950'}`}>
      <img src={theme === 'light' ? logo : whitelogo} className="w-35 h-20 cursor-pointer" alt="Logo" />
      <ul className={`flex-1 list-none text-left ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
        <Link to="/home" className="inline-block my-2.5 mx-5 text-lg cursor-pointer">Home</Link>
        <Link to="/busease" className="inline-block my-2.5 mx-5 text-lg cursor-pointer">BusEase</Link>
        <Link to="/lost-&-found" className="inline-block my-2.5 mx-5 text-lg cursor-pointer">Lost & Found</Link>
        <Link to="/about-us" className="inline-block my-2.5 mx-5 text-lg cursor-pointer">About Us</Link>
      </ul>
      <div className="flex items-center">
        <button className={`px-4 py-2 rounded-lg mx-2 cursor-pointer my-2.5 transition hover:bg-gray-300 ${theme === 'dark' ? 'bg-slate-900 text-white border border-white' : 'bg-white text-blue-800'}`}>Login</button>
        <button className={`px-4 py-2 rounded-lg mx-2 cursor-pointer my-2.5  transition hover:bg-blue-700 ${theme === 'dark' ? 'bg-slate-900 text-white border border-white' : 'bg-blue-500 text-white'}`}>Sign In</button>
        <img onClick={toggle_mode} src={theme === 'light' ? dark : light} className="w-10 h-10 cursor-pointer mx-6" alt="Dark Theme Icon" />
      </div>
    </div>
  );
};

export default Navbar;