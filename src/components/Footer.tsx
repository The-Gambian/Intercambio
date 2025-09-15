import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Instagram, Youtube, Linkedin, MessageCircle } from 'lucide-react';
import CookieConsent, { Cookies } from 'react-cookie-consent';
import { useLanguage } from '../contexts/LanguageContext';
import EmailSubscription from './EmailSubscription';

const Footer = () => {
  const { t } = useLanguage();

  const handleAccept = () => {
    console.log('Cookies accepted');
  };

  const handleDecline = () => {
    Cookies.remove('intercambio_diaspora_cookie_consent');
    console.log('Cookies declined');
  };

  const joinWhatsApp = () => {
    // Replace with your actual WhatsApp group link
    window.open('https://chat.whatsapp.com/your-group-link', '_blank');
  };

  return (
    <>
      <footer className="bg-pan-black text-white">
        {/* WhatsApp and Email Subscription Section */}
        <div className="bg-gradient-to-r from-amber-100 to-amber-50 text-gray-800 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* WhatsApp Section */}
              <div className="flex flex-col items-center lg:items-start">
                <h3 className="text-2xl font-bold mb-2 text-gray-800">Follow Us</h3>
                <div className="flex space-x-4 mb-6">
                  <a href="https://www.facebook.com/groups/717321330191930/" target="_blank" rel="noopener noreferrer" className="bg-white p-3 rounded-full shadow-md hover:shadow-lg transition">
                    <Facebook className="h-6 w-6 text-blue-600" />
                  </a>
                  <a href="https://www.instagram.com/intercambios_diaspora/" target="_blank" rel="noopener noreferrer" className="bg-white p-3 rounded-full shadow-md hover:shadow-lg transition">
                    <Instagram className="h-6 w-6 text-pink-600" />
                  </a>
                  <a href="https://www.linkedin.com/company/intercambio-diaspora/" target="_blank" rel="noopener noreferrer" className="bg-white p-3 rounded-full shadow-md hover:shadow-lg transition">
                    <Linkedin className="h-6 w-6 text-blue-700" />
                  </a>
                  <button onClick={joinWhatsApp} className="bg-white p-3 rounded-full shadow-md hover:shadow-lg transition">
                    <MessageCircle className="h-6 w-6 text-green-600" />
                  </button>
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-gray-800">Get Announcements On WhatsApp</h3>
                <button 
                  onClick={joinWhatsApp}
                  className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-full font-medium transition flex items-center shadow-lg"
                >
                  Join The WhatsApp Chat <MessageCircle className="ml-2 h-5 w-5" />
                </button>
              </div>

              {/* Email Subscription Section */}
              <EmailSubscription variant="footer" />
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center">
                <img 
                  src="https://yt3.googleusercontent.com/h-WATyK3LGNwBj3dG-UdED2mB7J_tY2FVzVY9MEk5PQtY6sQ2mWUZf9YFMlba3oO6Roij3Xn8A=s160-c-k-c0x00ffffff-no-rj" 
                  alt="Intercambio Diaspora Logo" 
                  className="h-10 w-10 rounded-full"
                />
                <span className="ml-2 text-xl font-bold text-white">Intercambio Diaspora</span>
              </div>
              <p className="mt-2 text-sm text-white">
                Led by and for the African diaspora — open to everyone building a more connected, culturally aware, and inclusive Portugal.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">{t('footer.quickLinks')}</h3>
              <ul className="space-y-2">
                <li><Link to="/" className="text-white hover:text-pan-gold">{t('nav.home')}</Link></li>
                <li><Link to="/events" className="text-white hover:text-pan-gold">{t('nav.events')}</Link></li>
                <li><Link to="/news" className="text-white hover:text-pan-gold">{t('nav.news')}</Link></li>
                <li><Link to="/stories" className="text-white hover:text-pan-gold">{t('nav.stories')}</Link></li>
                <li><Link to="/discussions" className="text-white hover:text-pan-gold">{t('nav.discussions')}</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">{t('footer.resources')}</h3>
              <ul className="space-y-2">
                <li><Link to="/services" className="text-white hover:text-pan-gold">Services</Link></li>
                <li><Link to="/about" className="text-white hover:text-pan-gold">{t('nav.about')}</Link></li>
                <li><Link to="/contact" className="text-white hover:text-pan-gold">{t('nav.contact')}</Link></li>
                <li><Link to="/privacy-policy" className="text-white hover:text-pan-gold">Privacy Policy</Link></li>
                <li><Link to="/terms-of-service" className="text-white hover:text-pan-gold">Terms of Service</Link></li>
                <li><Link to="/admin/login" className="text-white hover:text-pan-gold">Admin Login</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">{t('footer.contact')}</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Mail className="h-5 w-5 mr-2 text-pan-gold" />
                  <a href="mailto:info@intercambiodiaspora.com" className="text-white hover:text-pan-gold">info@intercambiodiaspora.com</a>
                </li>
                <li className="flex items-center">
                  <Phone className="h-5 w-5 mr-2 text-pan-gold" />
                  <a href="tel:+351123456789" className="text-white hover:text-pan-gold">+351 123 456 789</a>
                </li>
                <li className="flex items-center">
                  <MapPin className="h-5 w-5 mr-2 text-pan-gold" />
                  <span className="text-white">Lisbon, Portugal</span>
                </li>
              </ul>
              
              <div className="mt-4 flex space-x-4">
                <a href="https://www.facebook.com/groups/717321330191930/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-pan-gold">
                  <Facebook className="h-6 w-6" />
                </a>
                <a href="https://www.instagram.com/intercambios_diaspora/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-pan-gold">
                  <Instagram className="h-6 w-6" />
                </a>
                <a href="https://www.linkedin.com/company/intercambio-diaspora/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-pan-gold">
                  <Linkedin className="h-6 w-6" />
                </a>
                <a href="https://www.youtube.com/@IntercâmbioDiaspora" target="_blank" rel="noopener noreferrer" className="text-white hover:text-pan-gold">
                  <Youtube className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-white/20 text-center text-sm text-white">
            <p>&copy; {new Date().getFullYear()} Intercambio Diaspora. {t('footer.copyright')}</p>
          </div>
        </div>
      </footer>

      <CookieConsent
        location="bottom"
        buttonText={t('footer.cookies.accept')}
        declineButtonText={t('footer.cookies.decline')}
        enableDeclineButton
        onAccept={handleAccept}
        onDecline={handleDecline}
        style={{ background: "#000000" }}
        buttonStyle={{ 
          background: "#FDBD00",
          color: "#000000",
          fontSize: "14px",
          borderRadius: "0.375rem",
          padding: "0.5rem 1rem"
        }}
        declineButtonStyle={{
          background: "#BE0002",
          color: "white",
          fontSize: "14px",
          borderRadius: "0.375rem",
          padding: "0.5rem 1rem"
        }}
        expires={150}
      >
        {t('footer.cookies.text')}{" "}
        <Link to="/privacy-policy" className="text-pan-gold hover:text-white underline">
          {t('footer.cookies.learnMore')}
        </Link>
      </CookieConsent>
    </>
  );
};

export default Footer;