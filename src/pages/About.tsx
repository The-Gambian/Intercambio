import React from 'react';
import { Globe, Users, BookOpen, Heart, Calendar, MessageCircle, Mail } from 'lucide-react';

const About = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">About Intercâmbio Diáspora</h1>
          <p className="text-xl max-w-3xl">Connecting African and Afro-descendant communities through cultural exchange, education, and solidarity.</p>
        </div>
      </div>

      {/* Mission and Vision */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex md:items-center md:gap-12">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <img 
                src="https://i.im.ge/2025/04/21/vunbbW.WhatsApp-Image-2025-04-06-at-10-47-45.jpeg" 
                alt="Intercâmbio Diáspora community gathering" 
                className="rounded-lg shadow-md w-full h-auto"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-700 mb-6">
                To empower and connect African and Afro-descendant communities across the diaspora by creating inclusive spaces for language learning, cultural exchange, storytelling, and solidarity-building in Portugal and beyond.
              </p>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h2>
              <p className="text-lg text-gray-700">
                We envision a world where diasporic communities thrive through shared knowledge, cultural pride, and meaningful collaboration — building bridges between people, generations, and continents.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Values</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-blue-50 p-6 rounded-lg">
              <div className="bg-blue-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Globe className="h-6 w-6 text-blue-700" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Cultural Pride</h3>
              <p className="text-gray-700">
                We celebrate the rich diversity of African and Afro-descendant cultures, fostering pride in our heritage and creating spaces for authentic expression.
              </p>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg">
              <div className="bg-blue-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-blue-700" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Community Connection</h3>
              <p className="text-gray-700">
                We build strong bonds within the diaspora community, creating a supportive network that spans cultures, languages, and generations.
              </p>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg">
              <div className="bg-blue-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <BookOpen className="h-6 w-6 text-blue-700" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Knowledge Sharing</h3>
              <p className="text-gray-700">
                We facilitate learning exchanges that empower our community, from language skills to cultural knowledge and historical understanding.
              </p>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg">
              <div className="bg-blue-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Heart className="h-6 w-6 text-blue-700" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Solidarity</h3>
              <p className="text-gray-700">
                We stand together in unity, supporting each other's growth and well-being while advocating for our collective interests.
              </p>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg">
              <div className="bg-blue-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Calendar className="h-6 w-6 text-blue-700" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Cultural Exchange</h3>
              <p className="text-gray-700">
                We create meaningful opportunities for sharing traditions, stories, and experiences that strengthen our connections and understanding.
              </p>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg">
              <div className="bg-blue-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <MessageCircle className="h-6 w-6 text-blue-700" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Narrative Reclamation</h3>
              <p className="text-gray-700">
                We empower our community to tell their own stories, challenging stereotypes and celebrating the richness of our diverse experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Story</h2>
          
          <div className="bg-white p-8 rounded-lg shadow-md">
            <p className="text-lg text-gray-700 mb-6">
              Intercâmbio Diáspora is a grassroots community platform based in Lisbon that brings together individuals of African descent and allies from around the world to learn, share, and grow together. Through language exchanges, cultural meetups, museum visits, educational workshops, storytelling sessions, and local tours, we foster a deep sense of belonging, pride, and connection.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              We celebrate the diversity of the diaspora, while reclaiming narratives and creating opportunities for learning and healing. Whether you're new to Portugal or have roots deeply planted, our community offers a warm space to connect through African heritage, lived experiences, and collective resilience.
            </p>
            <p className="text-lg text-gray-700">
              Join us to practice Portuguese, explore local history, attend diaspora events, share your story, and find support within a global family grounded in culture and community.
            </p>
          </div>
        </div>
      </section>

      {/* Get Involved */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Get Involved</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-blue-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Join Our Events</h3>
              <p className="mb-4">
                Participate in our language exchanges, cultural meetups, workshops, and community gatherings. Connect with others and share experiences.
              </p>
              <button className="bg-white text-blue-900 px-4 py-2 rounded-md font-medium hover:bg-blue-100 transition">
                View Events
              </button>
            </div>
            
            <div className="bg-blue-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Share Your Story</h3>
              <p className="mb-4">
                Contribute to our community's narrative by sharing your experiences, skills, and cultural knowledge. Every voice matters.
              </p>
              <button className="bg-white text-blue-900 px-4 py-2 rounded-md font-medium hover:bg-blue-100 transition">
                Get Started
              </button>
            </div>
            
            <div className="bg-blue-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Partner With Us</h3>
              <p className="mb-4">
                Collaborate with us to create impactful programs and events that serve the African and Afro-descendant diaspora community.
              </p>
              <button className="bg-white text-blue-900 px-4 py-2 rounded-md font-medium hover:bg-blue-100 transition">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Contact Us</h2>
          
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
                <p className="text-gray-700 mb-6">
                  We'd love to hear from you! Reach out with questions, ideas, or to learn more about our community and events.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Mail className="h-6 w-6 text-blue-700 mr-3 mt-0.5" />
                    <div>
                      <p className="font-medium">Email</p>
                      <a href="mailto:intercambiodiaspora@gmail.com" className="text-blue-700 hover:underline">info@intercambiodiaspora.org</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Calendar className="h-6 w-6 text-blue-700 mr-3 mt-0.5" />
                    <div>
                      <p className="font-medium">Events</p>
                      <p>Regular meetups and activities throughout Lisbon</p>
                      <p>Check our events calendar for details about upcoming events</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Globe className="h-6 w-6 text-blue-700 mr-3 mt-0.5" />
                    <div>
                      <p className="font-medium">Location</p>
                      <p>Lisbon, Portugal</p>
                      <p>Various community spaces across the city</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4">Send Us a Message</h3>
                <form>
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">Subject</label>
                    <input 
                      type="text" 
                      id="subject" 
                      className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
                    <textarea 
                      id="message" 
                      rows={4}
                      className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-md font-medium transition"
                  >
                    Send Message
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