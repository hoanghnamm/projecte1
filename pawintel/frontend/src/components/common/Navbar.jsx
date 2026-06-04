import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md p-4 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-blue-600 flex items-center">
          🐾 PawIntel
        </Link>
        <div className="space-x-6">
          <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Home</Link>
          <Link to="/recommendations" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">AI Recommendations</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
