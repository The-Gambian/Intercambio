import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img 
                src="https://yt3.googleusercontent.com/h-WATyK3LGNwBj3dG-UdED2mB7J_tY2FVzVY9MEk5PQtY6sQ2mWUZf9YFMlba3oO6Roij3Xn8A=s160-c-k-c0x00ffffff-no-rj" 
                alt="Intercambio Diaspora Logo" 
                className="h-10 w-10 rounded-full"
              />
              <span className="ml-2 text-xl font-bold">Intercambio Diaspora</span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-800">Home</Link>
              <Link to="/events" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-800">Events</Link>
              <Link to="/news" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-800">News</Link>
              <Link to="/stories" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-800">Stories</Link>
              <Link to="/discussions" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-800">Discussions</Link>
              <Link to="/learning-hub" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-800">Learning Hub</Link>
              <Link to="/about" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-800">About</Link>
              <Link to="/contact" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-800">Contact</Link>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-blue-800 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-blue-800">
            <Link to="/" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700" onClick={toggleMenu}>Home</Link>
            <Link to="/events" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700" onClick={toggleMenu}>Events</Link>
            <Link to="/news" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700" onClick={toggleMenu}>News</Link>
            <Link to="/stories" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700" onClick={toggleMenu}>Stories</Link>
            <Link to="/discussions" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700" onClick={toggleMenu}>Discussions</Link>
            <Link to="/learning-hub" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700" onClick={toggleMenu}>Learning Hub</Link>
            <Link to="/about" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700" onClick={toggleMenu}>About</Link>
            <Link to="/contact" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700" onClick={toggleMenu}>Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;