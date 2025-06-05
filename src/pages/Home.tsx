import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Newspaper, Users, MessageCircle, BookOpen, ArrowRight, Globe, Instagram, Mail, Heart } from 'lucide-react';

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-blue-900 text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-700 opacity-90"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{ 
            backgroundImage: "url('https://i.im.ge/2025/04/22/vOgb0L.IMG-20240706-WA0029-1.jpeg')",
            opacity: 0.3
          }}
        ></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Connecting Diaspora Communities Worldwide</h1>
            <p className="text-xl mb-8">Join our vibrant community of language cultural exchange, support, and growth for diaspora communities in Portugal.</p>
            <div className="flex flex-wrap gap-4">
              <Link to="/about" className="bg-white text-blue-900 px-6 py-3 rounded-md font-medium hover:bg-blue-100 transition">
                Learn More
              </Link>
              <Link to="/events" className="bg-transparent border-2 border-white px-6 py-3 rounded-md font-medium hover:bg-white/10 transition">
                Upcoming Events
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Latest News</h2>
            <p className="mt-4 text-xl text-gray-600">Stay updated with our community highlights</p>
          </div>

          <div className="bg-white rounded-lg shadow-xl overflow-hidden mb-12">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img 
                  src="https://i.im.ge/2025/04/22/vOgb0L.IMG-20240706-WA0029-1.jpeg"
                  alt="Diaspora Picnic Event"
                  className="w-full h-96 object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8">
                <div className="text-sm text-blue-600 mb-4">May 31, 2025</div>
                <h3 className="text-2xl font-bold mb-4">Successful Diaspora Picnic Brings Community Together</h3>
                <p className="text-gray-600 mb-6">
                  Our recent Diaspora Picnic was a wonderful celebration of community and cultural exchange. Members from various African and Afro-descendant communities came together, sharing traditional dishes, stories, and creating new connections. The event featured games, music, and meaningful conversations that strengthened our community bonds.
                </p>
                <Link to="/news" className="text-blue-600 font-medium flex items-center hover:text-blue-800">
                  Read More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">What We Offer</h2>
            <p className="mt-4 text-xl text-gray-600">Explore our community resources and activities</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <div className="bg-blue-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Calendar className="h-6 w-6 text-blue-700" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Community Events</h3>
              <p className="text-gray-600 mb-4">Join cultural celebrations, workshops, and networking opportunities.</p>
              <Link to="/events" className="text-blue-700 font-medium flex items-center hover:text-blue-800">
                View Events <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <div className="bg-blue-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Newspaper className="h-6 w-6 text-blue-700" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Local News</h3>
              <p className="text-gray-600 mb-4">Stay updated with news relevant to diaspora communities.</p>
              <Link to="/news" className="text-blue-700 font-medium flex items-center hover:text-blue-800">
                Read News <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <div className="bg-blue-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-blue-700" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Member Stories</h3>
              <p className="text-gray-600 mb-4">Read inspiring stories from our community members.</p>
              <Link to="/stories" className="text-blue-700 font-medium flex items-center hover:text-blue-800">
                Explore Stories <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <div className="bg-blue-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <MessageCircle className="h-6 w-6 text-blue-700" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Discussions</h3>
              <p className="text-gray-600 mb-4">Engage in meaningful conversations with community members.</p>
              <Link to="/discussions" className="text-blue-700 font-medium flex items-center hover:text-blue-800">
                Join Discussions <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <div className="bg-blue-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <BookOpen className="h-6 w-6 text-blue-700" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Learning Hub</h3>
              <p className="text-gray-600 mb-4">Access educational resources, language courses, and more.</p>
              <Link to="/learning-hub" className="text-blue-700 font-medium flex items-center hover:text-blue-800">
                Start Learning <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <div className="bg-blue-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Globe className="h-6 w-6 text-blue-700" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Global Network</h3>
              <p className="text-gray-600 mb-4">Connect with diaspora communities from around the world.</p>
              <Link to="/about" className="text-blue-700 font-medium flex items-center hover:text-blue-800">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events Preview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Upcoming Events</h2>
            <Link to="/events" className="text-blue-700 font-medium flex items-center hover:text-blue-800">
              View All <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
              <img 
                src="https://i.im.ge/2025/04/22/vOgb0L.IMG-20240706-WA0029-1.jpeg"
                alt="Diaspora Picnic" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="text-sm text-blue-700 font-semibold mb-2">May 31, 2025 • 13:00 - 18:00</div>
                <h3 className="text-xl font-bold mb-2">Diáspora Picnic</h3>
                <p className="text-gray-600 mb-4">Join us for a community picnic featuring games, fellowship, and cultural exchange.</p>
                <a 
                  href="https://forms.gle/AKjtjV5xmU8cNAXE7"
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="text-blue-700 font-medium flex items-center hover:text-blue-800"
                >
                  Register Now <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
              <img 
                src="https://i.im.ge/2025/04/22/vOgWCJ.WhatsApp-Image-2025-03-22-at-21-11-43.jpeg"
                alt="Africa Day Celebration" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="text-sm text-blue-700 font-semibold mb-2">May 25, 2025 • 14:00 - 23:00</div>
                <h3 className="text-xl font-bold mb-2">Africa Day Celebration</h3>
                <p className="text-gray-600 mb-4">Celebrate African cultures with concerts, traditional food, DJ sets, dance, and projections.</p>
                <Link to="/events" className="text-blue-700 font-medium flex items-center hover:text-blue-800">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
              <img 
                src="https://i.im.ge/2025/04/22/vOggex.WhatsApp-Image-2025-03-18-at-16-10-11-1.jpeg" 
                alt="Language Exchange Event" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="text-sm text-blue-700 font-semibold mb-2">April 26, 2025 • 6:00 PM</div>
                <h3 className="text-xl font-bold mb-2">Language Exchange Event</h3>
                <p className="text-gray-600 mb-4">Practice language skills and connect with native speakers in a friendly environment.</p>
                <Link to="/events" className="text-blue-700 font-medium flex items-center hover:text-blue-800">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Stay Connected</h2>
            <p className="mt-4 text-xl text-gray-600">Join our newsletter to receive updates about events, stories, and community initiatives</p>
          </div>
          <div className="max-w-xl mx-auto">
            <form className="bg-white p-6 rounded-lg shadow-md">
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your name"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your email address"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition flex items-center justify-center"
              >
                Subscribe <Mail className="ml-2 h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Contribute Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Support Our Community</h2>
            <p className="mt-4 text-xl text-gray-600">Help us create more opportunities for connection and cultural exchange</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-blue-50 p-6 rounded-lg text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Share Your Story</h3>
              <p className="text-gray-600 mb-4">Contribute to our community narrative by sharing your experiences and journey</p>
              <Link to="/stories" className="inline-block bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition">
                Share Now
              </Link>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Volunteer</h3>
              <p className="text-gray-600 mb-4">Join our team of volunteers and help organize community events and programs</p>
              <Link to="/contact" className="inline-block bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition">
                Get Involved
              </Link>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Partner With Us</h3>
              <p className="text-gray-600 mb-4">Collaborate with us to create meaningful impact in our community</p>
              <Link to="/contact" className="inline-block bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Connect With Us</h2>
            <a 
              href="https://www.instagram.com/intercambios_diaspora/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center text-blue-700 hover:text-blue-800"
            >
              <Instagram className="h-6 w-6 mr-2" />
              <span className="font-medium">Follow us on Instagram</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;