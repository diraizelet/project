import React from 'react';
import { Car } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-gray-900/90 backdrop-blur-md border-b border-gray-800">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Car className="h-8 w-8 text-blue-500" />
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            CustomCars 3D
          </h1>
        </div>
        
        <nav className="hidden md:flex space-x-8">
          <a href="#" className="text-white hover:text-blue-400 transition-colors">Home</a>
          <a href="#" className="text-white hover:text-blue-400 transition-colors">Gallery</a>
          <a href="#" className="text-white hover:text-blue-400 transition-colors">About</a>
        </nav>
        
        <div className="flex items-center space-x-4">
          <button className="hidden md:block px-4 py-2 rounded-md bg-blue-600 hover:bg-blue-500 transition-colors">
            Sign In
          </button>
          <button className="md:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;