import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Newspaper, Users, MessageCircle, BookOpen, ArrowRight, Globe, Instagram } from 'lucide-react';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-blue-900 text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-700 opacity-90"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{ 
            backgroundImage: "url('https://imagekit.io/tools/asset-public-link?detail=%7B%22name%22%3A%22IMG-20240706-WA0029%20(1).jpg%22%2C%22type%22%3A%22image%2Fjpeg%22%2C%22signedurl_expire%22%3A%222028-02-28T15%3A24%3A54.257Z%22%2C%22signedUrl%22%3A%22https%3A%2F%2Fmedia-hosting.imagekit.io%2F%2F6f91e43e0eec4210%2FIMG-20240706-WA0029%2520(1).jpg%3FExpires%3D1835364294%26Key-Pair-Id%3DK2ZIVPTIP2VGHC%26Signature%3DhEv4bNfA06TikLVgG72Dsh3S3M1Q1ov1wmZBK0nd~Fy9p6ttuY21PsrCTlzzpXoQDlso3eospw5GEjJzHFzcNfgEQiAkSkaHb9Px-JfpIbF2EI2JUfT1I5hDUh1VCEeQRPnyDkOrsUqc3d1jnn1ytwzWTlEiNCvpYRj8pTcGjishVeQXcMa9t2Gft6SV2nU3GaIsOiLCR7VH8CIiGHm7DZEwuN7j52odOChjFedkaWvpBw2MotM3YjeMTmfNKxqd3ntO8UvDdYc8U-zgPeEtAfIXGmqKChslc-uF3wo4bdxt1dYyA1NVb7B9grfS~zXf~heHwzg8sKq-~mtaaJCQUw__%22%7D')",
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
                src="/Diaspora Picnic.jpeg"
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
                src="/image.png"
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
                src="https://i.im.ge/2025/04/15/vQtLIh.20240727-202200.jpeg" 
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

      {/* Testimonials */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Community Voices</h2>
            <p className="mt-4 text-xl text-gray-600">Hear from our members about their experiences with Intercambio Diaspora</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <img 
                  src="https://i.im.ge/2025/04/15/vQylFC.WhatsApp-Image-2025-04-06-at-20-10-28.jpeg" 
                  alt="Boni" 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold">Bone Mjt</h4>
                  <p className="text-sm text-gray-600">Member since 2023</p>
                </div>
              </div>
              <p className="text-gray-700 italic">"Intercambio Diaspora has been a lifeline for me. I've made friends, found resources, and feel connected to my culture even while being far from home."</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <img 
                  src="https://i.im.ge/2025/04/15/vQtBL8.Telma.png" 
                  alt="Telma" 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold">Telma Tvon</h4>
                  <p className="text-sm text-gray-600">Member since 2022</p>
                </div>
              </div>
              <p className="text-gray-700 italic">"Ótimo para ver todo mundo sorrindo e se divertindo 😄
Somos todos abençoados por fazer parte desse grupo incrível de pessoas 🙌🏾🙌🏾🙌🏾."</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <img 
                  src="https://i.im.ge/2025/04/15/vQtWLa.Naky.png" 
                  alt="African Lisbon Tour" 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold">African Lisbon Tour</h4>
                  <p className="text-sm text-gray-600">Member since 2024</p>
                </div>
              </div>
              <p className="text-gray-700 italic">"I would like to thank y'all for joining the African Lisbon Tour. It was really nice having you especially as locals. Thanks @Malik and team."</p>
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

      {/* Newsletter */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Connected</h2>
            <p className="text-xl mb-8">Subscribe to our newsletter for the latest events, news, and community updates.</p>
            <form className="flex flex-col sm:flex-row gap-4 justify-center">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="px-4 py-3 rounded-md text-gray-900 w-full sm:w-auto flex-grow"
              />
              <button 
                type="submit" 
                className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-md font-medium transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;