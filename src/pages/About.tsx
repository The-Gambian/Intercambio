import React from 'react';
import { Globe, Users, BookOpen, Heart, Calendar, MessageCircle, Mail } from 'lucide-react';

const About = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">About Intercambio Diaspora</h1>
          <p className="text-xl max-w-3xl">Connecting diaspora communities through cultural exchange, education, and support.</p>
        </div>
      </div>

      {/* Mission and Vision */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex md:items-center md:gap-12">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <img 
                src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Diverse group of people" 
                className="rounded-lg shadow-md w-full h-auto"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-700 mb-6">
                Intercambio Diaspora is dedicated to empowering diaspora communities by creating spaces for cultural exchange, providing educational resources, and fostering connections that support integration while honoring cultural heritage.
              </p>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h2>
              <p className="text-lg text-gray-700">
                We envision a world where diaspora communities thrive through meaningful connections, where cultural diversity is celebrated as a source of strength, and where every individual has the resources and support to build a fulfilling life that honors both their heritage and their new home.
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
              <h3 className="text-xl font-semibold mb-3">Cultural Respect</h3>
              <p className="text-gray-700">
                We honor the diverse cultural backgrounds, traditions, and perspectives of all community members, recognizing that cultural identity is a source of strength and resilience.
              </p>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg">
              <div className="bg-blue-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-blue-700" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Community Connection</h3>
              <p className="text-gray-700">
                We believe in the power of community to provide support, share knowledge, and create a sense of belonging for people navigating life between cultures.
              </p>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg">
              <div className="bg-blue-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <BookOpen className="h-6 w-6 text-blue-700" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Lifelong Learning</h3>
              <p className="text-gray-700">
                We are committed to providing educational resources that empower individuals to develop skills, pursue opportunities, and navigate new environments with confidence.
              </p>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg">
              <div className="bg-blue-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Heart className="h-6 w-6 text-blue-700" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Compassion</h3>
              <p className="text-gray-700">
                We approach our work with empathy and understanding, recognizing the challenges of migration and cultural adaptation while celebrating the courage and resilience of diaspora communities.
              </p>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg">
              <div className="bg-blue-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Calendar className="h-6 w-6 text-blue-700" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Cultural Exchange</h3>
              <p className="text-gray-700">
                We create opportunities for meaningful cultural exchange that enrich both diaspora communities and the broader society, fostering mutual understanding and appreciation.
              </p>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg">
              <div className="bg-blue-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <MessageCircle className="h-6 w-6 text-blue-700" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Inclusive Dialogue</h3>
              <p className="text-gray-700">
                We foster open, respectful dialogue that welcomes diverse perspectives and creates space for all voices to be heard, particularly those that have been historically marginalized.
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
              Intercambio Diaspora was founded in 2020 by a group of community leaders from diverse diaspora backgrounds who recognized the need for a space where people navigating life between cultures could connect, learn, and support each other.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              What began as informal gatherings for language exchange and cultural celebrations has grown into a comprehensive community organization offering educational programs, cultural events, professional development resources, and support services for diaspora communities.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Our name, "Intercambio Diaspora," reflects our commitment to exchange (intercambio) among diaspora communities – exchange of knowledge, skills, traditions, and support. We believe that when people from different cultural backgrounds come together to share their experiences and resources, everyone benefits.
            </p>
            <p className="text-lg text-gray-700">
              Today, Intercambio Diaspora serves thousands of community members from over 50 different cultural backgrounds. While our programs and services have expanded, our core mission remains the same: to create spaces where diaspora communities can thrive while honoring both their cultural heritage and their new home.
            </p>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Team</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" 
                alt="Maria Gonzalez" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">Maria Gonzalez</h3>
                <p className="text-blue-700 mb-4">Executive Director</p>
                <p className="text-gray-700 mb-4">
                  With over 15 years of experience in community development and education, Maria leads our organization with passion and vision. Originally from Venezuela, she understands firsthand the challenges and opportunities of diaspora life.
                </p>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" 
                alt="Ahmed Hassan" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">Ahmed Hassan</h3>
                <p className="text-blue-700 mb-4">Director of Education Programs</p>
                <p className="text-gray-700 mb-4">
                  Ahmed oversees our educational initiatives, bringing his background in curriculum development and adult education. His innovative approaches to language learning and cultural education have transformed our programs.
                </p>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1976&q=80" 
                alt="Priya Sharma" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">Priya Sharma</h3>
                <p className="text-blue-700 mb-4">Community Engagement Manager</p>
                <p className="text-gray-700 mb-4">
                  Priya builds partnerships with community organizations, businesses, and government agencies to expand our impact. Her background in social work and community organizing helps create meaningful connections.
                </p>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1531384441138-2736e62e0919?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" 
                alt="Gabriel Okafor" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">Gabriel Okafor</h3>
                <p className="text-blue-700 mb-4">Mental Health Program Coordinator</p>
                <p className="text-gray-700 mb-4">
                  Gabriel leads our mental health initiatives, bringing his expertise as a licensed therapist specializing in trauma and cultural adjustment. His advocacy for culturally responsive care has been transformative.
                </p>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" 
                alt="Sofia Kim" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">Sofia Kim</h3>
                <p className="text-blue-700 mb-4">Youth Programs Director</p>
                <p className="text-gray-700 mb-4">
                  Sofia develops and oversees programs for children and youth from diaspora backgrounds. Her background in education and child development informs her approach to supporting young people navigating multiple cultures.
                </p>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" 
                alt="Carlos Mendez" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">Carlos Mendez</h3>
                <p className="text-blue-700 mb-4">Economic Empowerment Coordinator</p>
                <p className="text-gray-700 mb-4">
                  Carlos leads our initiatives supporting entrepreneurship, professional development, and financial literacy. His background in business and community economic development helps create pathways to economic security.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Get Involved */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Get Involved</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-blue-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Volunteer</h3>
              <p className="mb-4">
                Share your skills and time to support our community programs. We have opportunities for language partners, event volunteers, professional mentors, and more.
              </p>
              <button className="bg-white text-blue-900 px-4 py-2 rounded-md font-medium hover:bg-blue-100 transition">
                Learn More
              </button>
            </div>
            
            <div className="bg-blue-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Donate</h3>
              <p className="mb-4">
                Your financial support helps us expand our programs and reach more community members. All donations are tax-deductible and directly support our mission.
              </p>
              <button className="bg-white text-blue-900 px-4 py-2 rounded-md font-medium hover:bg-blue-100 transition">
                Support Our Work
              </button>
            </div>
            
            <div className="bg-blue-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Partner With Us</h3>
              <p className="mb-4">
                We collaborate with businesses, schools, community organizations, and government agencies to create greater impact. Explore partnership opportunities.
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
                  We'd love to hear from you! Reach out with questions, ideas, or to learn more about our programs and services.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Mail className="h-6 w-6 text-blue-700 mr-3 mt-0.5" />
                    <div>
                      <p className="font-medium">Email</p>
                      <a href="mailto:info@intercambiodiaspora.org" className="text-blue-700 hover:underline">info@intercambiodiaspora.org</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Calendar className="h-6 w-6 text-blue-700 mr-3 mt-0.5" />
                    <div>
                      <p className="font-medium">Office Hours</p>
                      <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
                      <p>Saturday: 10:00 AM - 2:00 PM (by appointment)</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Globe className="h-6 w-6 text-blue-700 mr-3 mt-0.5" />
                    <div>
                      <p className="font-medium">Location</p>
                      <p>123 Community Avenue</p>
                      <p>City, State 12345</p>
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