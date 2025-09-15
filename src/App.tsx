import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import { AuthProvider } from './contexts/AuthContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Events from './pages/Events';
import News from './pages/News';
import Stories from './pages/Stories';
import Discussions from './pages/Discussions';
import LearningHub from './pages/LearningHub';
import About from './pages/About';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import AdminEventForm from './pages/AdminEventForm';

function App() {
  return (
    <LanguageProvider>
      <AuthProvider>
        <Router>
          <ScrollToTop />
          <div className="flex flex-col min-h-screen">
            <Routes>
              {/* Admin Routes */}
              <Route path="/admin/login" element={<AdminLogin />} />
              <Route path="/admin/dashboard" element={<AdminDashboard />} />
              <Route path="/admin/events/new" element={<AdminEventForm />} />
              
              {/* Public Routes */}
              <Route path="/*" element={
                <>
                  <Navbar />
                  <main className="flex-grow">
                    <Routes>
                      <Route path="/" element={<Home />} />
                      <Route path="/events" element={<Events />} />
                      <Route path="/news" element={<News />} />
                      <Route path="/stories" element={<Stories />} />
                      <Route path="/stories/:storyId" element={<Stories />} />
                      <Route path="/discussions" element={<Discussions />} />
                      <Route path="/services" element={<LearningHub />} />
                      <Route path="/learning-hub" element={<LearningHub />} />
                      <Route path="/about" element={<About />} />
                      <Route path="/contact" element={<Contact />} />
                      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                      <Route path="/terms-of-service" element={<TermsOfService />} />
                    </Routes>
                  </main>
                  <Footer />
                </>
              } />
            </Routes>
          </div>
        </Router>
      </AuthProvider>
    </LanguageProvider>
  );
}

export default App;