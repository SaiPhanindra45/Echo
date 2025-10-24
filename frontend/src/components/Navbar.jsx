import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function Navbar() {
  const { isAuthenticated, logout } = useAuth();

  return (
    <header className="absolute top-0 left-0 w-full z-10 bg-gray-900 text-white shadow-md">
      <nav className="container mx-auto px-4 py-3 flex justify-between items-center border-b border-gray-800">
        <Link to="/" className="flex items-center">
          <img 
            src="/echo.png" 
            alt="ECHO Logo" 
            className="h-10 w-auto"
            onError={(e) => { e.target.style.display = 'none'; }}
          />
        </Link>
        
        <div className="space-x-2">
          {isAuthenticated ? (
            <button
              onClick={logout}
              className="px-4 py-2 rounded-md text-sm font-medium bg-indigo-600 hover:bg-indigo-700 transition-colors"
            >
              Logout
            </button>
          ) : (
            <>
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
            </>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;

