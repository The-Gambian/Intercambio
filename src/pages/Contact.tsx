import React, { useState } from 'react';
import { Mail, Phone, MapPin, Globe, Clock, Send, Facebook, Instagram, Youtube, Linkedin } from 'lucide-react';

const Contact = () => {
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
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl max-w-3xl">Get in touch with our team for questions, partnerships, or to learn more about our programs and services.</p>
        </div>
      </div>

      {/* Contact Information and Form */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="md:flex">
            {/* Contact Information */}
            <div className="md:w-1/3 bg-red-800 text-white p-8">
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <p className="mb-8 text-red-100">Have questions or want to get involved? Reach out to us using any of the methods below.</p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-red-300 mr-4 mt-1" />
                  <div>
                    <p className="font-medium">Email</p>
                    <a href="mailto:info@intercambiodiaspora.com" className="text-red-100 hover:text-white">
                      info@intercambiodiaspora.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-red-300 mr-4 mt-1" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <a href="tel:+351213531932" className="text-red-100 hover:text-white">
                      21 353 1932
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-red-300 mr-4 mt-1" />
                  <div>
                    <p className="font-medium">Address</p>
                    <p className="text-red-100">
                      R. Duque de Palmela 2 8° andar<br />
                      1250-098 Lisboa
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="h-6 w-6 text-red-300 mr-4 mt-1" />
                  <div>
                    <p className="font-medium">Office Hours</p>
                    <p className="text-red-100">
                      Monday - Friday: 9:00 AM - 5:00 PM<br />
                      Saturday: 10:00 AM - 2:00 PM (by appointment)
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <h3 className="font-medium mb-4">Follow Us</h3>
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
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Name <span className="text-red-500">*</span>
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
                      Your Email <span className="text-red-500">*</span>
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
                    Subject <span className="text-red-500">*</span>
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
                    Message <span className="text-red-500">*</span>
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
                  Send Message
                  <Send className="ml-2 h-5 w-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Map */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Our Location</h2>
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="aspect-w-16 aspect-h-9 h-96">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3112.8656419791396!2d-9.153799323540632!3d38.72236597259455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd19339f6a8440e5%3A0x8b4bd6f6d3b3c1c4!2sR.%20Duque%20de%20Palmela%202%2C%201250-098%20Lisboa%2C%20Portugal!5e0!3m2!1sen!2s!4v1709642844045!5m2!1sen!2s" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Intercambio Diaspora Location"
            ></iframe>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Frequently Asked Questions</h2>
        
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">What is Intercâmbio Diáspora?</h3>
                <p className="text-gray-700">
                  We are a grassroots community platform based in Lisbon that brings together individuals of African descent and allies from around the world to learn, share, and grow together through language exchanges, cultural meetups, museum visits, educational workshops, storytelling sessions, and local tours.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">How can I participate in your events?</h3>
                <p className="text-gray-700">
                  You can join our events by checking our Events page for upcoming activities and registering through our online form. We offer various activities including language exchanges, cultural meetups, workshops, and community gatherings.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Do I need to be from the African diaspora to participate?</h3>
                <p className="text-gray-700">
                  While our focus is on connecting African and Afro-descendant communities, we welcome allies and anyone interested in learning about and celebrating African cultures, fostering cross-cultural understanding and solidarity.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">How can I support or partner with Intercâmbio Diáspora?</h3>
                <p className="text-gray-700">
                  There are several ways to support our work: attend our events, volunteer your skills, share your stories, or partner with us on community initiatives. Contact us through our form or email to discuss collaboration opportunities.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">What languages are used in your events?</h3>
                <p className="text-gray-700">
                  Our events primarily use Portuguese and English, but we celebrate multilingualism and often incorporate other languages through our cultural exchange activities and language learning programs.
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