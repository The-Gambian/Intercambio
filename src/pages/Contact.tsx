import React, { useState } from 'react';
import { Mail, Phone, MapPin, Globe, Clock, Send, Facebook, Instagram, Youtube, Linkedin } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Contact = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-pan-red text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">{t('contact.title')}</h1>
          <p className="text-xl max-w-3xl">{t('contact.subtitle')}</p>
        </div>
      </div>

      {/* Contact Information and Form */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="md:flex">
            {/* Contact Information */}
            <div className="md:w-1/3 bg-red-800 text-white p-8">
              <h2 className="text-2xl font-bold mb-6">{t('contact.info.title')}</h2>
              <p className="mb-8 text-red-100">{t('contact.info.subtitle')}</p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-red-300 mr-4 mt-1" />
                  <div>
                    <p className="font-medium">{t('contact.info.email')}</p>
                    <a href="mailto:info@intercambiodiaspora.com" className="text-red-100 hover:text-white">
                      info@intercambiodiaspora.com
                    </a>
                  </div>
                </div>
                
                
                <div className="flex items-start">
                  <Clock className="h-6 w-6 text-red-300 mr-4 mt-1" />
                  <div>
                    <p className="font-medium">{t('contact.info.hours')}</p>
                    <p className="text-red-100">
                      {t('contact.info.hoursDesc')}
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <h3 className="font-medium mb-4">{t('nav.followUs')}</h3>
                <div className="flex space-x-4">
                  <a href="https://www.facebook.com/groups/717321330191930/" target="_blank" rel="noopener noreferrer" className="bg-red-700 p-2 rounded-full hover:bg-red-600 transition">
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a href="https://www.instagram.com/intercambios_diaspora/" target="_blank" rel="noopener noreferrer" className="bg-red-700 p-2 rounded-full hover:bg-red-600 transition">
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a href="https://www.linkedin.com/company/intercambio-diaspora/" target="_blank" rel="noopener noreferrer" className="bg-red-700 p-2 rounded-full hover:bg-red-600 transition">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href="https://www.youtube.com/@IntercâmbioDiaspora" target="_blank" rel="noopener noreferrer" className="bg-red-700 p-2 rounded-full hover:bg-red-600 transition">
                    <Youtube className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="md:w-2/3 p-8">
              <h2 className="text-2xl font-bold mb-6">{t('contact.form.title')}</h2>
              
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      {t('contact.form.name')} <span className="text-red-500">{t('contact.form.required')}</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      {t('contact.form.email')} <span className="text-red-500">{t('contact.form.required')}</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    {t('contact.form.subject')} <span className="text-red-500">{t('contact.form.required')}</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    {t('contact.form.message')} <span className="text-red-500">{t('contact.form.required')}</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="bg-red-700 hover:bg-red-800 text-white px-6 py-3 rounded-md font-medium transition flex items-center"
                >
                  {t('contact.form.send')}
                  <Send className="ml-2 h-5 w-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>


      {/* FAQ Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">{t('contact.faq.title')}</h2>
        
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('contact.faq.what.question')}</h3>
                <p className="text-gray-700">
                  {t('contact.faq.what.answer')}
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('contact.faq.participate.question')}</h3>
                <p className="text-gray-700">
                  {t('contact.faq.participate.answer')}
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('contact.faq.diaspora.question')}</h3>
                <p className="text-gray-700">
                  {t('contact.faq.diaspora.answer')}
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('contact.faq.support.question')}</h3>
                <p className="text-gray-700">
                  {t('contact.faq.support.answer')}
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('contact.faq.languages.question')}</h3>
                <p className="text-gray-700">
                  {t('contact.faq.languages.answer')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;