import React, { useState } from 'react';
import { Calendar, MapPin, Clock, Filter, Search } from 'lucide-react';
import { format } from 'date-fns';

// Sample event data
const eventsData = [
  {
    id: 1,
    title: "Annual Cultural Festival",
    date: new Date(2025, 5, 15, 14, 0), // June 15, 2025, 2:00 PM
    location: "Central Community Center",
    description: "Celebrate diverse cultures with food, music, dance, and art from around the world.",
    category: "Cultural",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
  },
  {
    id: 2,
    title: "Language Exchange Workshop",
    date: new Date(2025, 5, 22, 18, 0), // June 22, 2025, 6:00 PM
    location: "Intercambio Learning Center",
    description: "Practice language skills and connect with native speakers in a friendly environment.",
    category: "Educational",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  },
  {
    id: 3,
    title: "Professional Networking Mixer",
    date: new Date(2025, 6, 5, 19, 0), // July 5, 2025, 7:00 PM
    location: "Urban Business Hub",
    description: "Connect with professionals from diverse backgrounds and expand your network.",
    category: "Networking",
    image: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  },
  {
    id: 4,
    title: "Community Health Fair",
    date: new Date(2025, 6, 12, 10, 0), // July 12, 2025, 10:00 AM
    location: "Riverside Park",
    description: "Free health screenings, wellness workshops, and information on healthcare resources.",
    category: "Health",
    image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  },
  {
    id: 5,
    title: "Youth Leadership Workshop",
    date: new Date(2025, 6, 18, 15, 0), // July 18, 2025, 3:00 PM
    location: "Community Youth Center",
    description: "Empowering young people with leadership skills, mentorship, and community engagement opportunities.",
    category: "Educational",
    image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f8e1c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2049&q=80"
  },
  {
    id: 6,
    title: "Culinary Exchange: Global Flavors",
    date: new Date(2025, 6, 25, 17, 0), // July 25, 2025, 5:00 PM
    location: "Diaspora Community Kitchen",
    description: "Learn to cook dishes from around the world and share your own cultural recipes.",
    category: "Cultural",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  },
  {
    id: 7,
    title: "Immigration Resources Workshop",
    date: new Date(2025, 7, 8, 13, 0), // August 8, 2025, 1:00 PM
    location: "Civic Center",
    description: "Information on immigration processes, legal resources, and support services.",
    category: "Support",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  },
  {
    id: 8,
    title: "Diaspora Film Festival",
    date: new Date(2025, 7, 15, 18, 0), // August 15, 2025, 6:00 PM
    location: "Arts Cinema",
    description: "Showcasing films that explore diaspora experiences, migration stories, and cultural identity.",
    category: "Cultural",
    image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  }
];

// Available categories for filtering
const categories = ["All", "Cultural", "Educational", "Networking", "Health", "Support"];

const Events = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedEvent, setSelectedEvent] = useState<number | null>(null);

  // Filter events based on search term and category
  const filteredEvents = eventsData.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          event.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || event.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Community Events</h1>
          <p className="text-xl max-w-3xl">Join our vibrant community gatherings, workshops, and celebrations. Connect, learn, and grow with fellow diaspora members.</p>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-grow relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search events..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Filter className="h-5 w-5 text-gray-400" />
              </div>
              <select
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-full md:w-48 focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredEvents.map(event => (
            <div 
              key={event.id} 
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition cursor-pointer"
              onClick={() => setSelectedEvent(event.id)}
            >
              <img 
                src={event.image} 
                alt={event.title} 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center text-sm text-blue-700 font-medium mb-2">
                  <Calendar className="h-4 w-4 mr-1" />
                  {format(event.date, "MMMM d, yyyy")} • {format(event.date, "h:mm a")}
                </div>
                <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                <div className="flex items-center text-gray-600 mb-4">
                  <MapPin className="h-4 w-4 mr-1" />
                  {event.location}
                </div>
                <p className="text-gray-600 mb-4">{event.description}</p>
                <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                  {event.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        {filteredEvents.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-xl font-medium text-gray-600">No events found matching your criteria</h3>
            <p className="mt-2 text-gray-500">Try adjusting your search or filter settings</p>
          </div>
        )}
      </div>

      {/* Event Modal */}
      {selectedEvent && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            {eventsData.filter(event => event.id === selectedEvent).map(event => (
              <div key={event.id}>
                <img 
                  src={event.image} 
                  alt={event.title} 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h2 className="text-2xl font-bold mb-4">{event.title}</h2>
                  
                  <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6">
                    <div className="flex items-center text-gray-700">
                      <Calendar className="h-5 w-5 mr-2 text-blue-700" />
                      {format(event.date, "MMMM d, yyyy")}
                    </div>
                    <div className="flex items-center text-gray-700">
                      <Clock className="h-5 w-5 mr-2 text-blue-700" />
                      {format(event.date, "h:mm a")}
                    </div>
                    <div className="flex items-center text-gray-700">
                      <MapPin className="h-5 w-5 mr-2 text-blue-700" />
                      {event.location}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-2">About This Event</h3>
                    <p className="text-gray-700">{event.description}</p>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                      {event.category}
                    </span>
                    <div className="flex gap-3">
                      <button 
                        className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-md font-medium transition"
                        onClick={() => setSelectedEvent(null)}
                      >
                        Close
                      </button>
                      <button className="bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded-md font-medium transition">
                        Register
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Events;