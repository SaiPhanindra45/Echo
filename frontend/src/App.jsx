import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Register from './pages/Register';
import Login from './pages/Login';

function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white pt-28 px-4 md:px-8">
      <h1 className="text-3xl lg:text-7xl leading-tight font-bold text-left">
        Welcome to Echo!
      </h1>
      <h1 className="text-2xl lg:text-4xl text-gray-400 leading-tight pt-5 mb-8 font-bold text-left">
        Your live streaming journey starts here.
      </h1>
      <div className="text-center pt-16">
        <Link to="/login">
          <button 
            type="button"
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500"
          >
            Go Live
          </button>
        </Link>
      </div>
    </div>
  );
}

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;

