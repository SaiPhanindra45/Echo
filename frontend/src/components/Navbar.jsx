import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const Logo = () => (
    <svg className="w-6 h-6 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  );
  
  return (
    <header className="absolute top-0 left-0 w-full z-10 bg-gray-900 text-white shadow-md">
      <nav className="container mx-auto px-4 py-3 flex justify-between items-center border-b border-gray-800">
        <Link to="/" className="flex items-center">
        <img 
                src="/echo.png" 
                alt="ECHO Logo" 
                className="h-10 w-auto"
              />
        </Link>
        <div className="space-x-2">
          <Link
            to="/login"
            className="px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-700 transition-colors"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="px-4 py-2 rounded-md text-sm font-medium bg-indigo-600 hover:bg-indigo-700 transition-colors"
          >
            Register
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;

