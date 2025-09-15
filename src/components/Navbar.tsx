import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Facebook, Instagram, Youtube, Linkedin } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useAuth } from '../contexts/AuthContext';
import LanguageSwitcher from './LanguageSwitcher';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguage();
  const { user, isAdmin } = useAuth();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white">
      <div className="flex items-center h-16">
        {/* Logo Section - Black Background with consistent sizing */}
        <div className="bg-black px-4 sm:px-6 md:px-8 h-full flex items-center">
          <Link to="/" className="flex items-center">
            <img 
              src="https://yt3.googleusercontent.com/h-WATyK3LGNwBj3dG-UdED2mB7J_tY2FVzVY9MEk5PQtY6sQ2mWUZf9YFMlba3oO6Roij3Xn8A=s160-c-k-c0x00ffffff-no-rj" 
              alt="Intercambio Diaspora Logo" 
              className="h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 rounded-full object-cover"
            />
            <span className="ml-2 sm:ml-3 text-white font-semibold text-sm sm:text-base md:text-lg hidden sm:block">
              Intercâmbio Diáspora
            </span>
          </Link>
        </div>

        {/* Navigation Section - Black Background */}
        <div className="bg-black flex-grow h-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
            <div className="flex items-center justify-between h-full">
              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-8">
                <Link to="/" className="text-white hover:text-pan-gold transition-colors font-medium">{t('nav.home')}</Link>
                <Link to="/about" className="text-white hover:text-pan-gold transition-colors font-medium">{t('nav.about')}</Link>
                <Link to="/events" className="text-white hover:text-pan-gold transition-colors font-medium">{t('nav.events')}</Link>
                <Link to="/news" className="text-white hover:text-pan-gold transition-colors font-medium">{t('nav.news')}</Link>
                <Link to="/stories" className="text-white hover:text-pan-gold transition-colors font-medium">{t('nav.stories')}</Link>
                <Link to="/discussions" className="text-white hover:text-pan-gold transition-colors font-medium">{t('nav.discussions')}</Link>
                <Link to="/learning-hub" className="text-white hover:text-pan-gold transition-colors font-medium">{t('nav.learningHub')}</Link>
                <Link to="/contact" className="text-white hover:text-pan-gold transition-colors font-medium">{t('nav.contact')}</Link>
                {user && isAdmin && (
                  <Link to="/admin/dashboard" className="bg-pan-gold text-pan-black px-3 py-1 rounded-md hover:bg-yellow-400 transition-colors font-medium text-sm">
                    Admin Panel
                  </Link>
                )}
              </div>

              {/* Mobile menu button */}
              <div className="md:hidden flex items-center">
                <span className="text-white text-xs font-medium mr-2">{t('nav.menu')}</span>
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

        {/* Language and Social Section - Red Background (Desktop Only) */}
        <div className="bg-pan-red px-6 h-full hidden md:flex items-center space-x-4">
          {/* Language Switcher */}
          <LanguageSwitcher />

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

        {/* Mobile Language and Social Section - Red Background (Mobile/Tablet Only) */}
        <div className="bg-pan-red px-3 sm:px-4 h-full flex md:hidden items-center space-x-2 sm:space-x-3">
          {/* Language Switcher */}
          <LanguageSwitcher />
          
          {/* Mobile Social Icons - Only show 2 main ones */}
          <a href="https://www.instagram.com/intercambios_diaspora/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-pan-gold transition-colors">
            <Instagram className="h-4 w-4" />
          </a>
          <a href="https://www.facebook.com/groups/717321330191930/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-pan-gold transition-colors">
            <Facebook className="h-4 w-4" />
          </a>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-black border-t border-gray-700">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {/* Navigation Links */}
            <Link to="/" className="block px-3 py-2 rounded-md text-white hover:text-pan-gold hover:bg-gray-800 transition-colors font-medium" onClick={toggleMenu}>{t('nav.home')}</Link>
            <Link to="/about" className="block px-3 py-2 rounded-md text-white hover:text-pan-gold hover:bg-gray-800 transition-colors font-medium" onClick={toggleMenu}>{t('nav.about')}</Link>
            <Link to="/events" className="block px-3 py-2 rounded-md text-white hover:text-pan-gold hover:bg-gray-800 transition-colors font-medium" onClick={toggleMenu}>{t('nav.events')}</Link>
            <Link to="/news" className="block px-3 py-2 rounded-md text-white hover:text-pan-gold hover:bg-gray-800 transition-colors font-medium" onClick={toggleMenu}>{t('nav.news')}</Link>
            <Link to="/stories" className="block px-3 py-2 rounded-md text-white hover:text-pan-gold hover:bg-gray-800 transition-colors font-medium" onClick={toggleMenu}>{t('nav.stories')}</Link>
            <Link to="/discussions" className="block px-3 py-2 rounded-md text-white hover:text-pan-gold hover:bg-gray-800 transition-colors font-medium" onClick={toggleMenu}>{t('nav.discussions')}</Link>
            <Link to="/services" className="block px-3 py-2 rounded-md text-white hover:text-pan-gold hover:bg-gray-800 transition-colors font-medium" onClick={toggleMenu}>Services</Link>
            <Link to="/contact" className="block px-3 py-2 rounded-md text-white hover:text-pan-gold hover:bg-gray-800 transition-colors font-medium" onClick={toggleMenu}>{t('nav.contact')}</Link>
            
            {user && isAdmin && (
              <Link to="/admin/dashboard" className="block px-3 py-2 rounded-md bg-pan-gold text-pan-black hover:bg-yellow-400 transition-colors font-medium" onClick={toggleMenu}>
                Admin Panel
              </Link>
            )}
            
            {/* Divider */}
            <div className="border-t border-gray-700 my-2"></div>
            
            {/* Mobile Social Icons - All icons in mobile menu */}
            <div className="px-3 py-2">
              <label className="block text-white text-sm font-medium mb-2">{t('nav.followUs')}</label>
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