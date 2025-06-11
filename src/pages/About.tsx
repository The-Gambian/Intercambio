import React from 'react';
import { Globe, Users, BookOpen, Heart, Calendar, MessageCircle, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const About = () => {
  const { t } = useLanguage();

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-pan-red text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">{t('about.title')}</h1>
          <p className="text-xl max-w-3xl">{t('about.subtitle')}</p>
        </div>
      </div>

      {/* Mission and Vision */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex md:items-center md:gap-12">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <img 
                src="https://i.imgur.com/j7O5Vuv.jpg" 
                alt="Intercâmbio Diáspora community gathering" 
                className="rounded-lg shadow-md w-full h-auto"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-pan-black mb-6">{t('about.mission.title')}</h2>
              <p className="text-lg text-gray-700 mb-6">
                {t('about.mission.content')}
              </p>
              <h2 className="text-3xl font-bold text-pan-black mb-6">{t('about.vision.title')}</h2>
              <p className="text-lg text-gray-700">
                {t('about.vision.content')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-pan-black mb-12 text-center">{t('about.values.title')}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-pan-green/10 p-6 rounded-lg">
              <div className="bg-pan-gold/20 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Globe className="h-6 w-6 text-pan-gold" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-pan-black">{t('about.values.culturalPride.title')}</h3>
              <p className="text-gray-700">
                {t('about.values.culturalPride.content')}
              </p>
            </div>
            
            <div className="bg-pan-green/10 p-6 rounded-lg">
              <div className="bg-pan-gold/20 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-pan-gold" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-pan-black">{t('about.values.community.title')}</h3>
              <p className="text-gray-700">
                {t('about.values.community.content')}
              </p>
            </div>
            
            <div className="bg-pan-green/10 p-6 rounded-lg">
              <div className="bg-pan-gold/20 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <BookOpen className="h-6 w-6 text-pan-gold" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-pan-black">{t('about.values.knowledge.title')}</h3>
              <p className="text-gray-700">
                {t('about.values.knowledge.content')}
              </p>
            </div>
            
            <div className="bg-pan-green/10 p-6 rounded-lg">
              <div className="bg-pan-gold/20 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Heart className="h-6 w-6 text-pan-gold" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-pan-black">{t('about.values.solidarity.title')}</h3>
              <p className="text-gray-700">
                {t('about.values.solidarity.content')}
              </p>
            </div>
            
            <div className="bg-pan-green/10 p-6 rounded-lg">
              <div className="bg-pan-gold/20 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Calendar className="h-6 w-6 text-pan-gold" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-pan-black">{t('about.values.exchange.title')}</h3>
              <p className="text-gray-700">
                {t('about.values.exchange.content')}
              </p>
            </div>
            
            <div className="bg-pan-green/10 p-6 rounded-lg">
              <div className="bg-pan-gold/20 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <MessageCircle className="h-6 w-6 text-pan-gold" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-pan-black">{t('about.values.narrative.title')}</h3>
              <p className="text-gray-700">
                {t('about.values.narrative.content')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-pan-black mb-8 text-center">{t('about.story.title')}</h2>
          
          <div className="bg-white p-8 rounded-lg shadow-md">
            <p className="text-lg text-gray-700 mb-6">
              {t('about.story.content1')}
            </p>
            <p className="text-lg text-gray-700 mb-6">
              {t('about.story.content2')}
            </p>
            <p className="text-lg text-gray-700">
              {t('about.story.content3')}
            </p>
          </div>
        </div>
      </section>

      {/* Get Involved */}
      <section className="py-16 bg-pan-red text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">{t('about.getInvolved.title')}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-red-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">{t('about.getInvolved.events.title')}</h3>
              <p className="mb-4">
                {t('about.getInvolved.events.content')}
              </p>
              <Link 
                to="/events" 
                className="inline-block bg-white text-pan-red px-4 py-2 rounded-md font-medium hover:bg-pan-gold hover:text-pan-black transition"
              >
                {t('about.getInvolved.events.button')}
              </Link>
            </div>
            
            <div className="bg-red-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">{t('about.getInvolved.story.title')}</h3>
              <p className="mb-4">
                {t('about.getInvolved.story.content')}
              </p>
              <a 
                href="https://5pzn0sic.forms.app/lead-generation-form" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-block bg-white text-pan-red px-4 py-2 rounded-md font-medium hover:bg-pan-gold hover:text-pan-black transition"
              >
                {t('about.getInvolved.story.button')}
              </a>
            </div>
            
            <div className="bg-red-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">{t('about.getInvolved.partner.title')}</h3>
              <p className="mb-4">
                {t('about.getInvolved.partner.content')}
              </p>
              <a 
                href="https://5pzn0sic.forms.app/lead-generation-form" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-block bg-white text-pan-red px-4 py-2 rounded-md font-medium hover:bg-pan-gold hover:text-pan-black transition"
              >
                {t('about.getInvolved.partner.button')}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-pan-black mb-12 text-center">{t('about.contact.title')}</h2>
          
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-pan-black">{t('about.contact.title')}</h3>
                <p className="text-gray-700 mb-6">
                  {t('about.contact.subtitle')}
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Mail className="h-6 w-6 text-pan-red mr-3 mt-0.5" />
                    <div>
                      <p className="font-medium text-pan-black">{t('about.contact.email')}</p>
                      <a href="mailto:info@intercambiodiaspora.com" className="text-pan-red hover:underline">info@intercambiodiaspora.com</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Calendar className="h-6 w-6 text-pan-red mr-3 mt-0.5" />
                    <div>
                      <p className="font-medium text-pan-black">{t('about.contact.events')}</p>
                      <p className="text-gray-700">{t('about.contact.eventsDesc1')}</p>
                      <p className="text-gray-700">{t('about.contact.eventsDesc2')}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Globe className="h-6 w-6 text-pan-red mr-3 mt-0.5" />
                    <div>
                      <p className="font-medium text-pan-black">{t('about.contact.location')}</p>
                      <p className="text-gray-700">{t('about.contact.locationDesc1')}</p>
                      <p className="text-gray-700">{t('about.contact.locationDesc2')}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4 text-pan-black">{t('about.contact.form.title')}</h3>
                <form>
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">{t('about.contact.form.name')}</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pan-red"
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">{t('about.contact.form.email')}</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pan-red"
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">{t('about.contact.form.subject')}</label>
                    <input 
                      type="text" 
                      id="subject" 
                      className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pan-red"
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="message" className="block text-gray-700 font-medium mb-2">{t('about.contact.form.message')}</label>
                    <textarea 
                      id="message" 
                      rows={4}
                      className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pan-red"
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="bg-pan-red hover:bg-red-800 text-white px-6 py-3 rounded-md font-medium transition"
                  >
                    {t('about.contact.form.send')}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;