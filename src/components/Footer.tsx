import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Instagram, Youtube, Linkedin } from 'lucide-react';
import CookieConsent, { Cookies } from 'react-cookie-consent';

const Footer = () => {
  const handleAccept = () => {
    console.log('Cookies accepted');
  };

  const handleDecline = () => {
    Cookies.remove('intercambio_diaspora_cookie_consent');
    console.log('Cookies declined');
  };

  return (
    <>
      <footer className="bg-pan-black text-white">
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
                Connecting diaspora communities through cultural exchange, education, and support.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link to="/" className="text-white hover:text-pan-gold">Home</Link></li>
                <li><Link to="/events" className="text-white hover:text-pan-gold">Events</Link></li>
                <li><Link to="/news" className="text-white hover:text-pan-gold">News</Link></li>
                <li><Link to="/stories" className="text-white hover:text-pan-gold">Stories</Link></li>
                <li><Link to="/discussions" className="text-white hover:text-pan-gold">Discussions</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Resources</h3>
              <ul className="space-y-2">
                <li><Link to="/learning-hub" className="text-white hover:text-pan-gold">Learning Hub</Link></li>
                <li><Link to="/about" className="text-white hover:text-pan-gold">About Us</Link></li>
                <li><Link to="/contact" className="text-white hover:text-pan-gold">Contact</Link></li>
                <li><Link to="/privacy-policy" className="text-white hover:text-pan-gold">Privacy Policy</Link></li>
                <li><Link to="/terms-of-service" className="text-white hover:text-pan-gold">Terms of Service</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Contact Us</h3>
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
            <p>&copy; {new Date().getFullYear()} Intercambio Diaspora. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <CookieConsent
        location="bottom"
        buttonText="Accept"
        declineButtonText="Decline"
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
        This website uses cookies to enhance the user experience. By continuing to browse the site, you agree to our use of cookies.{" "}
        <Link to="/privacy-policy" className="text-pan-gold hover:text-white underline">
          Learn more
        </Link>
      </CookieConsent>
    </>
  );
};

export default Footer;