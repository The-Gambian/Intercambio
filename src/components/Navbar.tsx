import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Search, Facebook, Instagram, Youtube, Linkedin } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white">
      <div className="flex items-center h-16">
        {/* Logo Section - Black Background */}
        <div className="bg-black px-6 h-full flex items-center">
          <Link to="/" className="flex items-center">
            <img 
              src="https://yt3.googleusercontent.com/h-WATyK3LGNwBj3dG-UdED2mB7J_tY2FVzVY9MEk5PQtY6sQ2mWUZf9YFMlba3oO6Roij3Xn8A=s160-c-k-c0x00ffffff-no-rj" 
              alt="Intercambio Diaspora Logo" 
              className="h-12 w-12 rounded-full object-cover"
            />
          </Link>
        </div>

        {/* Navigation Section - Black Background */}
        <div className="bg-black flex-grow h-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
            <div className="flex items-center justify-between h-full">
              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-8">
                <Link to="/" className="text-white hover:text-pan-gold transition-colors font-medium">Home</Link>
                <Link to="/about" className="text-white hover:text-pan-gold transition-colors font-medium">About</Link>
                <Link to="/events" className="text-white hover:text-pan-gold transition-colors font-medium">Events</Link>
                <Link to="/news" className="text-white hover:text-pan-gold transition-colors font-medium">News</Link>
                <Link to="/stories" className="text-white hover:text-pan-gold transition-colors font-medium">Stories</Link>
                <Link to="/discussions" className="text-white hover:text-pan-gold transition-colors font-medium">Discussions</Link>
                <Link to="/learning-hub" className="text-white hover:text-pan-gold transition-colors font-medium">Learning Hub</Link>
                <Link to="/contact" className="text-white hover:text-pan-gold transition-colors font-medium">Contact</Link>
              </div>

              {/* Mobile menu button */}
              <div className="md:hidden flex items-center">
                <span className="text-white text-xs font-medium mr-2">MENU</span>
                <button
                  onClick={toggleMenu}
                  className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-pan-gold focus:outline-none"
                >
                  {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Search and Social Section - Red Background (Desktop Only) */}
        <div className="bg-pan-red px-6 h-full hidden lg:flex items-center space-x-4">
          {/* Search Bar */}
          <div className="flex items-center bg-white rounded-md px-3 py-2 min-w-[200px]">
            <Search className="h-4 w-4 text-gray-400 mr-2" />
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent border-none outline-none text-sm flex-grow text-gray-700 placeholder-gray-400"
            />
          </div>

          {/* Social Media Icons */}
          <div className="flex items-center space-x-3">
            <a href="https://www.facebook.com/groups/717321330191930/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-pan-gold transition-colors">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="https://www.instagram.com/intercambios_diaspora/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-pan-gold transition-colors">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="https://www.linkedin.com/company/intercambio-diaspora/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-pan-gold transition-colors">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="https://www.youtube.com/@IntercâmbioDiaspora" target="_blank" rel="noopener noreferrer" className="text-white hover:text-pan-gold transition-colors">
              <Youtube className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Mobile Search and Social Section - Red Background (Tablet Only) */}
        <div className="bg-pan-red px-3 h-full flex lg:hidden md:flex items-center space-x-2">
          {/* Mobile Search Icon */}
          <button className="text-white hover:text-pan-gold transition-colors">
            <Search className="h-4 w-4" />
          </button>
          
          {/* Mobile Social Icons */}
          <a href="https://www.facebook.com/groups/717321330191930/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-pan-gold transition-colors">
            <Facebook className="h-4 w-4" />
          </a>
          <a href="https://www.instagram.com/intercambios_diaspora/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-pan-gold transition-colors">
            <Instagram className="h-4 w-4" />
          </a>
          <a href="https://www.linkedin.com/company/intercambio-diaspora/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-pan-gold transition-colors">
            <Linkedin className="h-4 w-4" />
          </a>
          <a href="https://www.youtube.com/@IntercâmbioDiaspora" target="_blank" rel="noopener noreferrer" className="text-white hover:text-pan-gold transition-colors">
            <Youtube className="h-4 w-4" />
          </a>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-black border-t border-gray-700">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {/* Navigation Links */}
            <Link to="/" className="block px-3 py-2 rounded-md text-white hover:text-pan-gold hover:bg-gray-800 transition-colors font-medium" onClick={toggleMenu}>Home</Link>
            <Link to="/about" className="block px-3 py-2 rounded-md text-white hover:text-pan-gold hover:bg-gray-800 transition-colors font-medium" onClick={toggleMenu}>About</Link>
            <Link to="/events" className="block px-3 py-2 rounded-md text-white hover:text-pan-gold hover:bg-gray-800 transition-colors font-medium" onClick={toggleMenu}>Events</Link>
            <Link to="/news" className="block px-3 py-2 rounded-md text-white hover:text-pan-gold hover:bg-gray-800 transition-colors font-medium" onClick={toggleMenu}>News</Link>
            <Link to="/stories" className="block px-3 py-2 rounded-md text-white hover:text-pan-gold hover:bg-gray-800 transition-colors font-medium" onClick={toggleMenu}>Stories</Link>
            <Link to="/discussions" className="block px-3 py-2 rounded-md text-white hover:text-pan-gold hover:bg-gray-800 transition-colors font-medium" onClick={toggleMenu}>Discussions</Link>
            <Link to="/learning-hub" className="block px-3 py-2 rounded-md text-white hover:text-pan-gold hover:bg-gray-800 transition-colors font-medium" onClick={toggleMenu}>Learning Hub</Link>
            <Link to="/contact" className="block px-3 py-2 rounded-md text-white hover:text-pan-gold hover:bg-gray-800 transition-colors font-medium" onClick={toggleMenu}>Contact</Link>
            
            {/* Divider */}
            <div className="border-t border-gray-700 my-2"></div>
            
            {/* Mobile Search */}
            <div className="px-3 py-2">
              <label className="block text-white text-sm font-medium mb-2">Search</label>
              <div className="flex items-center bg-white rounded-md px-3 py-2">
                <Search className="h-4 w-4 text-gray-400 mr-2" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="bg-transparent border-none outline-none text-sm flex-grow text-gray-700 placeholder-gray-400"
                />
              </div>
            </div>
            
            {/* Mobile Social Icons */}
            <div className="px-3 py-2">
              <label className="block text-white text-sm font-medium mb-2">Follow Us</label>
              <div className="flex space-x-4">
                <a href="https://www.facebook.com/groups/717321330191930/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-pan-gold transition-colors p-2 bg-gray-800 rounded-md">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="https://www.instagram.com/intercambios_diaspora/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-pan-gold transition-colors p-2 bg-gray-800 rounded-md">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="https://www.linkedin.com/company/intercambio-diaspora/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-pan-gold transition-colors p-2 bg-gray-800 rounded-md">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="https://www.youtube.com/@IntercâmbioDiaspora" target="_blank" rel="noopener noreferrer" className="text-white hover:text-pan-gold transition-colors p-2 bg-gray-800 rounded-md">
                  <Youtube className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;