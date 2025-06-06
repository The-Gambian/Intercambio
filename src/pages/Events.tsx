import React, { useState } from 'react';
import { Calendar, MapPin, Clock, Filter, Search } from 'lucide-react';
import { format } from 'date-fns';

// Updated events data with real upcoming events
const upcomingEvents = [
  {
    id: 1,
    title: "Diáspora Picnic",
    date: new Date(2025, 4, 31, 13, 0), // May 31, 2025, 1:00 PM
    location: "Parque da Bela Vista, Quinta do Pombeiro, Casa Senhorial Norte, Azinhaga do Pombeiro, 1900-793 Lisboa",
    description: "Join us for a community picnic featuring games, fellowship, and cultural exchange. This is a potluck event - bring a dish to share! Connect with fellow Zillennials in Portugal while enjoying an afternoon of fun and community building.",
    category: "Cultural",
    image: "/Diaspora Picnic.jpeg",
    registrationLink: "https://forms.gle/AKjtjV5xmU8cNAXE7",
    endTime: "18:00"
  },
  {
    id: 2,
    title: "Africa Day Celebration",
    date: new Date(2025, 4, 25, 14, 0), // May 25, 2025, 2:00 PM
    location: "Rua da Fábrica de Material de Guerra, 1, 1950-128 Lisbon, Portugal",
    description: "Join us for a vibrant celebration of African cultures with concerts, traditional food, DJ sets, dance performances, and cultural projections. Experience the rich heritage of Africa through music, art, and community.",
    category: "Cultural",
    image: "/image.png",
    endTime: "23:00"
  },
  {
    id: 3,
    title: "Language Exchange Event",
    date: new Date(2025, 3, 26, 18, 0), // April 26, 2025, 6:00 PM
    location: "Intercâmbio Learning Center, Lisbon",
    description: "Practice your language skills and connect with native speakers in a friendly, supportive environment. This weekly event focuses on Portuguese and English language exchange, creating opportunities for cultural learning and community building.",
    category: "Educational",
    image: "https://i.im.ge/2025/04/15/vQtLIh.20240727-202200.jpeg"
  },
  {
    id: 4,
    title: "Professional Networking Mixer",
    date: new Date(2025, 6, 5, 19, 0), // July 5, 2025, 7:00 PM
    location: "Urban Business Hub, Lisbon",
    description: "Connect with professionals from diverse backgrounds and expand your network. This event features structured networking activities, professional development discussions, and opportunities to build meaningful business relationships.",
    category: "Networking",
    image: "https://i.im.ge/2025/04/15/vQNpyz.468379422-18292585060232775-1964059377380777353-n.jpeg"
  }
];

// Past events from LinkedIn and Instagram
const pastEvents = [
  {
    id: 101,
    title: "African Lisbon Tour",
    date: new Date(2024, 2, 22, 15, 0), // March 22, 2024
    location: "Lisbon City Center",
    description: "Join us for a unique walking tour exploring Lisbon's African heritage and contemporary African presence. Learn about historical connections, visit significant sites, and discover the vibrant African influence in modern Lisbon.",
    category: "Cultural",
    image: "https://i.im.ge/2025/04/22/vOgWCJ.WhatsApp-Image-2025-03-22-at-21-11-43.jpeg"
  },
  {
    id: 102,
    title: "Language Exchange & Cultural Meetup",
    date: new Date(2024, 2, 18, 18, 30), // March 18, 2024
    location: "Intercâmbio Learning Center",
    description: "An evening of language practice and cultural exchange, featuring Portuguese-English conversation groups and discussions about African diaspora experiences.",
    category: "Educational",
    image: "https://i.im.ge/2025/04/22/vOggex.WhatsApp-Image-2025-03-18-at-16-10-11-1.jpeg"
  },
  {
    id: 103,
    title: "Community Gathering & Story Circle",
    date: new Date(2024, 2, 10, 16, 0), // March 10, 2024
    location: "Community Center, Lisbon",
    description: "A special gathering for sharing stories, experiences, and building connections within our diaspora community. Featured traditional music, food, and storytelling.",
    category: "Community",
    image: "https://i.im.ge/2025/04/22/vOgb0L.IMG-20240706-WA0029-1.jpeg"
  },
  {
    id: 104,
    title: "Intercâmbio Diaspora Meetup",
    date: new Date(2024, 2, 5, 18, 0),
    location: "Lisbon, Portugal",
    description: "A vibrant community gathering featuring language exchange, cultural sharing, and networking opportunities. Join us for an evening of connection and learning.",
    category: "Community",
    image: "https://i.im.ge/2025/04/22/vOgYlc.IMG-20231125-WA0027.jpeg"
  },
  {
    id: 105,
    title: "Cultural Exchange Workshop",
    date: new Date(2024, 1, 25, 14, 0),
    location: "Community Center, Lisbon",
    description: "Interactive workshop exploring African cultural traditions, music, and art. Featuring demonstrations, hands-on activities, and community discussions.",
    category: "Cultural",
    image: "https://i.im.ge/2025/04/22/vO8YPY.WhatsApp-Image-2025-04-13-at-09-48-10.jpeg"
  },
  {
    id: 106,
    title: "Language Learning Social",
    date: new Date(2024, 1, 15, 18, 30),
    location: "Intercâmbio Learning Center",
    description: "Casual evening of language practice and cultural exchange. Practice Portuguese and English while making new friends and connections.",
    category: "Educational",
    image: "https://i.im.ge/2025/04/22/vOgxVT.Brown-And-Beige-Modern-Summer-Movie-Night-Instagram-Post-1.jpeg"
  },
  {
    id: 107,
    title: "African Heritage Celebration",
    date: new Date(2024, 1, 5, 16, 0),
    location: "Cultural Center, Lisbon",
    description: "A celebration of African heritage featuring traditional music, dance performances, food, and community activities.",
    category: "Cultural",
    image: "https://i.im.ge/2025/04/22/vOgWCJ.WhatsApp-Image-2025-03-22-at-21-11-43.jpeg"
  },
  {
    id: 108,
    title: "Community Networking Event",
    date: new Date(2023, 11, 15, 19, 0),
    location: "Business Hub, Lisbon",
    description: "Professional networking event connecting members of the African diaspora community. Share opportunities, build connections, and support professional growth.",
    category: "Networking",
    image: "https://i.im.ge/2025/04/22/vOggex.WhatsApp-Image-2025-03-18-at-16-10-11-1.jpeg"
  },
  {
    id: 109,
    title: "Year-End Community Gathering",
    date: new Date(2023, 11, 8, 17, 0),
    location: "Community Center, Lisbon",
    description: "End-of-year celebration bringing together our community to reflect on achievements, share stories, and look forward to the new year.",
    category: "Community",
    image: "https://i.im.ge/2025/04/22/vOgb0L.IMG-20240706-WA0029-1.jpeg"
  }
];

// Available categories for filtering
const categories = ["All", "Cultural", "Educational", "Networking", "Community"];

const Events = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedEvent, setSelectedEvent] = useState<number | null>(null);
  const [showPastEvents, setShowPastEvents] = useState(false);

  // Filter events based on search term and category
  const filterEvents = (events: typeof upcomingEvents) => {
    return events.filter(event => {
      const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          event.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === "All" || event.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  };

  const filteredUpcomingEvents = filterEvents(upcomingEvents);
  const filteredPastEvents = filterEvents(pastEvents);

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

        {/* Events List */}
        <div className="space-y-8">
          {filteredUpcomingEvents.length === 0 && filteredPastEvents.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium text-gray-600">No events found matching your criteria</h3>
              <p className="mt-2 text-gray-500">Try adjusting your search or filter settings</p>
            </div>
          )}

          {/* Upcoming Events */}
          {filteredUpcomingEvents.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold mb-6">Upcoming Events</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredUpcomingEvents.map(event => (
                  <div key={event.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                    <img src={event.image} alt={event.title} className="w-full h-48 object-cover" />
                    <div className="p-6">
                      <div className="flex items-center text-sm text-blue-600 mb-2">
                        <Calendar className="h-4 w-4 mr-1" />
                        {format(event.date, "MMMM d, yyyy 'at' h:mm a")}
                      </div>
                      <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                      <div className="flex items-center text-sm text-gray-500 mb-2">
                        <MapPin className="h-4 w-4 mr-1" />
                        {event.location}
                      </div>
                      {event.endTime && (
                        <div className="flex items-center text-sm text-gray-500 mb-4">
                          <Clock className="h-4 w-4 mr-1" />
                          Until {event.endTime}
                        </div>
                      )}
                      <p className="text-gray-600 mb-4">{event.description}</p>
                      {event.registrationLink && (
                        <a
                          href={event.registrationLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
                        >
                          Register Now
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Past Events */}
          {filteredPastEvents.length > 0 && (
            <div className="mt-12">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">Past Events</h2>
                <button
                  onClick={() => setShowPastEvents(!showPastEvents)}
                  className="text-blue-600 hover:text-blue-800"
                >
                  {showPastEvents ? 'Show Less' : 'Show All'}
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {(showPastEvents ? filteredPastEvents : filteredPastEvents.slice(0, 3)).map(event => (
                  <div key={event.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                    <img src={event.image} alt={event.title} className="w-full h-48 object-cover" />
                    <div className="p-6">
                      <div className="flex items-center text-sm text-blue-600 mb-2">
                        <Calendar className="h-4 w-4 mr-1" />
                        {format(event.date, "MMMM d, yyyy")}
                      </div>
                      <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                      <div className="flex items-center text-sm text-gray-500 mb-4">
                        <MapPin className="h-4 w-4 mr-1" />
                        {event.location}
                      </div>
                      <p className="text-gray-600">{event.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Events;