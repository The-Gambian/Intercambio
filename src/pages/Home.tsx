import React from 'react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import { Calendar, Newspaper, Users, MessageCircle, BookOpen, ArrowRight, Briefcase, Mail, Heart, Quote } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import EmailSubscription from '../components/EmailSubscription';
import { getRecentUpcomingEvents } from '../data/events';

function Home() {
  const { t } = useLanguage();
  
  // Get the 6 most recent upcoming events
  const recentEvents = getRecentUpcomingEvents(6);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-pan-red text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-earth-red to-pan-red opacity-90"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{ 
            backgroundImage: "url('https://i.imgur.com/aFewmTX.jpg')",
            opacity: 0.4
          }}
        ></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 font-serif">{t('home.hero.title')}</h1>
            <p className="text-xl md:text-2xl mb-8 font-light">Led by and for the African diaspora — open to everyone building a more connected, culturally aware, and inclusive Portugal.</p>
            <div className="flex flex-wrap gap-4">
              <Link to="/about" className="bg-pan-gold text-pan-black px-6 py-3 rounded-md font-medium hover:bg-pan-gold/90 transition text-lg">
                {t('home.hero.learnMore')}
              </Link>
              <Link to="/events" className="bg-transparent border-2 border-pan-gold text-pan-gold px-6 py-3 rounded-md font-medium hover:bg-pan-gold/10 transition text-lg">
                {t('home.hero.upcomingEvents')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Features Section - What We Offer */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-pan-green/5 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-96 h-96 bg-pan-gold rounded-full -translate-x-48 -translate-y-48"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-pan-red rounded-full translate-x-48 translate-y-48"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-pan-red to-earth-red rounded-full mb-6">
              <Heart className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-pan-black mb-6">
              {t('home.features.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {t('home.features.subtitle')}
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-pan-gold to-pan-red mx-auto mt-6"></div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature Card 1 - Events */}
            <Link 
              to="/events"
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden cursor-pointer"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pan-red to-earth-red"></div>
              <div className="p-8">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-pan-red/10 to-pan-red/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Calendar className="h-8 w-8 text-pan-red" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-pan-gold rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-pan-black group-hover:text-pan-red transition-colors">
                  {t('home.features.events.title')}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {t('home.features.events.description')}
                </p>
                <div className="inline-flex items-center text-pan-red font-semibold hover:text-earth-red transition-colors group-hover:translate-x-1 transform duration-300">
                  {t('home.features.events.link')} 
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>

            {/* Feature Card 2 - News */}
            <Link 
              to="/news"
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden cursor-pointer"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pan-gold to-amber-500"></div>
              <div className="p-8">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-pan-gold/10 to-pan-gold/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Newspaper className="h-8 w-8 text-pan-gold" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-pan-red rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-pan-black group-hover:text-pan-gold transition-colors">
                  {t('home.features.news.title')}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {t('home.features.news.description')}
                </p>
                <div className="inline-flex items-center text-pan-gold font-semibold hover:text-amber-600 transition-colors group-hover:translate-x-1 transform duration-300">
                  {t('home.features.news.link')} 
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>

            {/* Feature Card 3 - Stories */}
            <Link 
              to="/stories"
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden cursor-pointer"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pan-green to-emerald-500"></div>
              <div className="p-8">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-pan-green/10 to-pan-green/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Users className="h-8 w-8 text-pan-green" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-pan-gold rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-pan-black group-hover:text-pan-green transition-colors">
                  {t('home.features.stories.title')}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {t('home.features.stories.description')}
                </p>
                <div className="inline-flex items-center text-pan-green font-semibold hover:text-emerald-600 transition-colors group-hover:translate-x-1 transform duration-300">
                  {t('home.features.stories.link')} 
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>

            {/* Feature Card 4 - Discussions */}
            <Link 
              to="/discussions"
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden cursor-pointer"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-500"></div>
              <div className="p-8">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <MessageCircle className="h-8 w-8 text-blue-600" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-pan-gold rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-pan-black group-hover:text-blue-600 transition-colors">
                  {t('home.features.discussions.title')}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {t('home.features.discussions.description')}
                </p>
                <div className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors group-hover:translate-x-1 transform duration-300">
                  {t('home.features.discussions.link')} 
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>

            {/* Feature Card 5 - Learning */}
            <Link 
              to="/services"
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden cursor-pointer"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-violet-500"></div>
              <div className="p-8">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <BookOpen className="h-8 w-8 text-purple-600" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-pan-gold rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-pan-black group-hover:text-purple-600 transition-colors">
                  Services & Resources
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Access professional services, resources, and support from our diaspora community members and trusted partners.
                </p>
                <div className="inline-flex items-center text-purple-600 font-semibold hover:text-purple-700 transition-colors group-hover:translate-x-1 transform duration-300">
                  Explore Services
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>

            {/* Feature Card 6 - Professional Services */}
            <Link 
              to="/contact"
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden cursor-pointer"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-500 to-cyan-500"></div>
              <div className="p-8">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-teal-50 to-teal-100 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Briefcase className="h-8 w-8 text-teal-600" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-pan-gold rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-pan-black group-hover:text-teal-600 transition-colors">
                  Professional Services
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Connect with trusted professionals including lawyers, real estate agents, accountants, and other essential services for immigrants and expats in Portugal.
                </p>
                <div className="inline-flex items-center text-teal-600 font-semibold hover:text-teal-700 transition-colors group-hover:translate-x-1 transform duration-300">
                  Find Services
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-pan-red to-earth-red text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              <Heart className="h-5 w-5" />
              <Link to="/about" className="text-white">
                Join Our Community Today
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section - Moved up for early conversion */}
      <section className="py-16 bg-pan-green/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-pan-black">{t('home.newsletter.title')}</h2>
            <p className="mt-4 text-xl text-gray-600">{t('home.newsletter.subtitle')}</p>
          </div>
          <EmailSubscription />
        </div>
      </section>

      {/* Upcoming Events Preview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-pan-black">{t('home.upcomingEvents.title')}</h2>
            <Link to="/events" className="text-pan-red font-medium flex items-center hover:text-pan-red/80">
              {t('home.upcomingEvents.viewAll')} <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentEvents.map(event => (
              <div key={event.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
                <img 
                  src={event.image}
                  alt={event.title} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="text-sm text-pan-red font-semibold mb-2">
                    {format(event.date, "MMMM d, yyyy")} • {format(event.date, "HH:mm")}
                    {event.endTime && ` - ${event.endTime}`}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{event.description}</p>
                  {event.registrationLink ? (
                    <a 
                      href={event.registrationLink}
                      target={event.registrationLink.startsWith('http') ? "_blank" : "_self"}
                      rel={event.registrationLink.startsWith('http') ? "noopener noreferrer" : undefined}
                      className="text-pan-red font-medium flex items-center hover:text-pan-red/80"
                    >
                      {event.registrationLink.includes('facebook') ? 'Register on Facebook' : 
                       event.registrationLink.includes('forms.gle') ? 'Register Now' : 
                       'Learn More'} <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  ) : (
                    <Link to="/events" className="text-pan-red font-medium flex items-center hover:text-pan-red/80">
                      {t('home.upcomingEvents.learnMore')} <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="py-16 bg-pan-green/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-3xl font-bold text-pan-black">{t('home.news.title')}</h2>
              <p className="mt-4 text-xl text-gray-600">{t('home.news.subtitle')}</p>
            </div>
            <Link to="/news" className="text-pan-red font-medium flex items-center hover:text-pan-red/80">
              See More News <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          <div className="bg-white rounded-lg shadow-xl overflow-hidden mb-12">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img 
                  src="https://i.imgur.com/aFewmTX.jpg"
                  alt="Diaspora Community Gathering"
                  className="w-full h-96 object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8">
                <div className="text-sm text-pan-red mb-4">May 31, 2025</div>
                <h3 className="text-2xl font-bold mb-4">{t('home.news.featured.title')}</h3>
                <p className="text-gray-600 mb-6">
                  {t('home.news.featured.content')}
                </p>
                <Link to="/news" className="text-pan-red font-medium flex items-center hover:text-pan-red/80">
                  {t('home.news.readMore')} <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-pan-black">{t('home.testimonials.title')}</h2>
            <p className="mt-4 text-xl text-gray-600">{t('home.testimonials.subtitle')}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 - Telma */}
            <div className="bg-white p-8 rounded-lg shadow-md relative border border-gray-100">
              <div className="absolute top-4 left-4">
                <Quote className="h-8 w-8 text-pan-gold" />
              </div>
              <div className="flex items-center mb-6 mt-8">
                <img 
                  src="https://i.imgur.com/wcqx18C.jpg" 
                  alt="Telma" 
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-lg">Telma</h4>
                  <p className="text-gray-600">Writer and author of "um preto muito português"</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "Sharing my experiences with the Intercâmbio Diáspora community has been incredibly rewarding. Through my writing and storytelling, I've been able to help others navigate their own identity journeys while building meaningful connections with people who share similar experiences."
              </p>
            </div>

            {/* Testimonial 2 - Naky */}
            <div className="bg-white p-8 rounded-lg shadow-md relative border border-gray-100">
              <div className="absolute top-4 left-4">
                <Quote className="h-8 w-8 text-pan-gold" />
              </div>
              <div className="flex items-center mb-6 mt-8">
                <img 
                  src="https://i.imgur.com/w9tjPNZ.jpg" 
                  alt="Naky" 
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-lg">Naky</h4>
                  <p className="text-gray-600">Founder of "African Lisbon Tour"</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "Leading cultural tours for the Intercâmbio Diáspora community has allowed me to share my knowledge of African heritage in Lisbon while creating spaces for cultural education and connection. It's amazing to see how these experiences bring people together and strengthen our community bonds."
              </p>
            </div>

            {/* Testimonial 3 - Boni */}
            <div className="bg-white p-8 rounded-lg shadow-md relative border border-gray-100">
              <div className="absolute top-4 left-4">
                <Quote className="h-8 w-8 text-pan-gold" />
              </div>
              <div className="flex items-center mb-6 mt-8">
                <img 
                  src="https://i.imgur.com/Bi5Fxvk.jpg" 
                  alt="Boni" 
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-lg">Boni</h4>
                  <p className="text-gray-600">Cultural event organiser</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "Organizing cultural events for Intercâmbio Diáspora has been one of my most fulfilling professional experiences. Using my event planning expertise to create celebrations that honor our heritage while fostering community connections has shown me the true power of bringing people together through culture."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contribute Section */}
      <section className="py-16 bg-pan-green/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-pan-black">{t('home.contribute.title')}</h2>
            <p className="mt-4 text-xl text-gray-600">{t('home.contribute.subtitle')}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg text-center shadow-md border border-gray-100">
              <div className="bg-pan-gold/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-pan-gold" />
              </div>
              <h3 className="text-xl font-bold mb-2">{t('home.contribute.shareStory.title')}</h3>
              <p className="text-gray-600 mb-4">{t('home.contribute.shareStory.description')}</p>
              <Link to="/stories" className="inline-block bg-pan-red text-white px-6 py-2 rounded-md hover:bg-pan-red/90 transition">
                {t('home.contribute.shareStory.button')}
              </Link>
            </div>
            <div className="bg-white p-6 rounded-lg text-center shadow-md border border-gray-100">
              <div className="bg-pan-gold/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-pan-gold" />
              </div>
              <h3 className="text-xl font-bold mb-2">{t('home.contribute.volunteer.title')}</h3>
              <p className="text-gray-600 mb-4">{t('home.contribute.volunteer.description')}</p>
              <Link to="/contact" className="inline-block bg-pan-red text-white px-6 py-2 rounded-md hover:bg-pan-red/90 transition">
                {t('home.contribute.volunteer.button')}
              </Link>
            </div>
            <div className="bg-white p-6 rounded-lg text-center shadow-md border border-gray-100">
              <div className="bg-pan-gold/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Briefcase className="h-8 w-8 text-pan-gold" />
              </div>
              <h3 className="text-xl font-bold mb-2">{t('home.contribute.partner.title')}</h3>
              <p className="text-gray-600 mb-4">{t('home.contribute.partner.description')}</p>
              <Link to="/contact" className="inline-block bg-pan-red text-white px-6 py-2 rounded-md hover:bg-pan-red/90 transition">
                {t('home.contribute.partner.button')}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;