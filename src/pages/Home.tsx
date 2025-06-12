import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Newspaper, Users, MessageCircle, BookOpen, ArrowRight, Globe, Instagram, Mail, Heart, Quote } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

function Home() {
  const { t } = useLanguage();

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
            <p className="text-xl md:text-2xl mb-8 font-light">{t('home.hero.subtitle')}</p>
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

      {/* Latest News Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-pan-black">{t('home.news.title')}</h2>
            <p className="mt-4 text-xl text-gray-600">{t('home.news.subtitle')}</p>
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

      {/* Features Section */}
      <section className="py-16 bg-pan-green/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-pan-black">{t('home.features.title')}</h2>
            <p className="mt-4 text-xl text-gray-600">{t('home.features.subtitle')}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature cards with Pan-African colors */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <div className="bg-pan-gold/20 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Calendar className="h-6 w-6 text-pan-gold" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{t('home.features.events.title')}</h3>
              <p className="text-gray-600 mb-4">{t('home.features.events.description')}</p>
              <Link to="/events" className="text-pan-red font-medium flex items-center hover:text-pan-red/80">
                {t('home.features.events.link')} <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <div className="bg-pan-gold/20 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Newspaper className="h-6 w-6 text-pan-gold" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{t('home.features.news.title')}</h3>
              <p className="text-gray-600 mb-4">{t('home.features.news.description')}</p>
              <Link to="/news" className="text-pan-red font-medium flex items-center hover:text-pan-red/80">
                {t('home.features.news.link')} <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <div className="bg-pan-gold/20 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-pan-gold" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{t('home.features.stories.title')}</h3>
              <p className="text-gray-600 mb-4">{t('home.features.stories.description')}</p>
              <Link to="/stories" className="text-pan-red font-medium flex items-center hover:text-pan-red/80">
                {t('home.features.stories.link')} <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <div className="bg-pan-gold/20 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <MessageCircle className="h-6 w-6 text-pan-gold" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{t('home.features.discussions.title')}</h3>
              <p className="text-gray-600 mb-4">{t('home.features.discussions.description')}</p>
              <Link to="/discussions" className="text-pan-red font-medium flex items-center hover:text-pan-red/80">
                {t('home.features.discussions.link')} <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <div className="bg-pan-gold/20 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <BookOpen className="h-6 w-6 text-pan-gold" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{t('home.features.learning.title')}</h3>
              <p className="text-gray-600 mb-4">{t('home.features.learning.description')}</p>
              <Link to="/learning-hub" className="text-pan-red font-medium flex items-center hover:text-pan-red/80">
                {t('home.features.learning.link')} <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <div className="bg-pan-gold/20 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Globe className="h-6 w-6 text-pan-gold" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{t('home.features.network.title')}</h3>
              <p className="text-gray-600 mb-4">{t('home.features.network.description')}</p>
              <Link to="/about" className="text-pan-red font-medium flex items-center hover:text-pan-red/80">
                {t('home.features.network.link')} <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
              <img 
                src="https://i.imgur.com/3KJGfwj.jpg"
                alt="Diaspora Picnic" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="text-sm text-pan-red font-semibold mb-2">May 31, 2025 • 13:00 - 18:00</div>
                <h3 className="text-xl font-bold mb-2">{t('home.upcomingEvents.diasporaPicnic.title')}</h3>
                <p className="text-gray-600 mb-4">{t('home.upcomingEvents.diasporaPicnic.description')}</p>
                <a 
                  href="https://forms.gle/AKjtjV5xmU8cNAXE7"
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="text-pan-red font-medium flex items-center hover:text-pan-red/80"
                >
                  {t('home.upcomingEvents.diasporaPicnic.register')} <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
              <img 
                src="https://i.imgur.com/vchikwW.jpg"
                alt="Africa Day Celebration" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="text-sm text-pan-red font-semibold mb-2">May 25, 2025 • 14:00 - 23:00</div>
                <h3 className="text-xl font-bold mb-2">{t('home.upcomingEvents.africaDay.title')}</h3>
                <p className="text-gray-600 mb-4">{t('home.upcomingEvents.africaDay.description')}</p>
                <Link to="/events" className="text-pan-red font-medium flex items-center hover:text-pan-red/80">
                  {t('home.upcomingEvents.learnMore')} <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
              <img 
                src="/WhatsApp Image 2025-06-10 at 21.17.23.jpeg" 
                alt="Language Exchange Event" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="text-sm text-pan-red font-semibold mb-2">June 28, 2025 • 18:00 - 20:00</div>
                <h3 className="text-xl font-bold mb-2">{t('home.upcomingEvents.languageExchange.title')}</h3>
                <p className="text-gray-600 mb-4">{t('home.upcomingEvents.languageExchange.description')}</p>
                <a 
                  href="https://www.facebook.com/events/701026239495168/"
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="text-pan-red font-medium flex items-center hover:text-pan-red/80"
                >
                  {t('home.upcomingEvents.diasporaPicnic.register')} <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-pan-green/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-pan-black">{t('home.testimonials.title')}</h2>
            <p className="mt-4 text-xl text-gray-600">{t('home.testimonials.subtitle')}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 - Telma */}
            <div className="bg-white p-8 rounded-lg shadow-md relative">
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
            <div className="bg-white p-8 rounded-lg shadow-md relative">
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
            <div className="bg-white p-8 rounded-lg shadow-md relative">
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

      {/* Newsletter Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-pan-black">{t('home.newsletter.title')}</h2>
            <p className="mt-4 text-xl text-gray-600">{t('home.newsletter.subtitle')}</p>
          </div>
          <div className="max-w-xl mx-auto">
            <form className="bg-white p-6 rounded-lg shadow-md">
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">{t('home.newsletter.name')}</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pan-red"
                  placeholder={t('home.newsletter.namePlaceholder')}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">{t('home.newsletter.email')}</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pan-red"
                  placeholder={t('home.newsletter.emailPlaceholder')}
                />
              </div>
              <button
                type="submit"
                className="w-full bg-pan-red text-white py-2 px-4 rounded-md hover:bg-pan-red/90 transition flex items-center justify-center"
              >
                {t('home.newsletter.subscribe')} <Mail className="ml-2 h-4 w-4" />
              </button>
            </form>
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
            <div className="bg-white p-6 rounded-lg text-center shadow-md">
              <div className="bg-pan-gold/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-pan-gold" />
              </div>
              <h3 className="text-xl font-bold mb-2">{t('home.contribute.shareStory.title')}</h3>
              <p className="text-gray-600 mb-4">{t('home.contribute.shareStory.description')}</p>
              <Link to="/stories" className="inline-block bg-pan-red text-white px-6 py-2 rounded-md hover:bg-pan-red/90 transition">
                {t('home.contribute.shareStory.button')}
              </Link>
            </div>
            <div className="bg-white p-6 rounded-lg text-center shadow-md">
              <div className="bg-pan-gold/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-pan-gold" />
              </div>
              <h3 className="text-xl font-bold mb-2">{t('home.contribute.volunteer.title')}</h3>
              <p className="text-gray-600 mb-4">{t('home.contribute.volunteer.description')}</p>
              <Link to="/contact" className="inline-block bg-pan-red text-white px-6 py-2 rounded-md hover:bg-pan-red/90 transition">
                {t('home.contribute.volunteer.button')}
              </Link>
            </div>
            <div className="bg-white p-6 rounded-lg text-center shadow-md">
              <div className="bg-pan-gold/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-pan-gold" />
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

      {/* Social Media */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-pan-black mb-4">{t('home.social.title')}</h2>
            <a 
              href="https://www.instagram.com/intercambios_diaspora/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center text-pan-red hover:text-pan-red/80"
            >
              <Instagram className="h-6 w-6 mr-2" />
              <span className="font-medium">{t('home.social.instagram')}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;