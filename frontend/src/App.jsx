import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import PrivateRoute from './components/PrivateRoute';
import Register from './pages/Register';
import Login from './pages/Login';

function Home() {
  return (
    <div className="relative min-h-screen bg-gray-900 text-white pt-28 px-4 md:px-8 overflow-hidden">
      
      <h1 className="relative z-10 text-3xl lg:text-7xl leading-tight font-bold text-left">
        Welcome to Echo!
      </h1>
      <h1 className="relative z-10 text-2xl lg:text-4xl text-gray-400 leading-tight pr-10 pt-5 mb-8 font-bold text-left">
        Your live streaming journey starts here. Join now to broadcast your world.
      </h1>

      <div className="relative flex justify-center pt-16">
        
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-32 bg-indigo-600 rounded-full filter blur-3xl opacity-60"></div>

        <Link to="/go-live" className="relative z-10">
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
function GoLiveDashboard() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold">Go Live Dashboard</h1>
        <p className="mt-4 text-gray-300">Your streaming setup and controls will be here.</p>
        <p className="mt-2 text-indigo-400">This page is protected!</p>
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

        <Route element={<PrivateRoute />}>
          <Route path="/go-live" element={<GoLiveDashboard />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

