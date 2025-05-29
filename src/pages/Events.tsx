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
    description: "Join us for a community picnic featuring games, fellowship, and cultural exchanges. This is a potluck event - bring a dish to share! Connect with fellow Zillennials in Portugal while enjoying an afternoon of fun and community building.",
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

        {/* Featured Article */}
        {!selectedEvent && (
          <div className="bg-white rounded-lg overflow-hidden shadow-md mb-8">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img 
                  src={newsData[0].image} 
                  alt={newsData[0].title} 
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-6 md:p-8">
                <div className="flex items-center text-sm text-blue-700 font-medium mb-2">
                  
                  <Calendar className="h-4 w-4 mr-1" />
                  {format(newsData[0].date, "MMMM d, yyyy")}
                </div>
                <h2 className="text-2xl font-bold mb-4">{newsData[0].title}</h2>
                <p className="text-gray-600 mb-6">{newsData[0].excerpt}</p>
                <div className="flex items-center text-gray-500 mb-6">
                  <User className="h-4 w-4 mr-1" />
                  By {newsData[0].author}
                </div>
                <button 
                  className="text-blue-700 font-medium flex items-center hover:text-blue-800"
                  onClick={() => setSelectedEvent(newsData[0].id)}
                >
                  Read Full Article <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* News Grid */}
        {!selectedEvent && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {filteredNews.slice(1).map(article => (
              <div 
                key={article.id} 
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition cursor-pointer"
                onClick={() => setSelectedEvent(article.id)}
              >
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center text-sm text-blue-700 font-medium mb-2">
                    <Calendar className="h-4 w-4 mr-1" />
                    {format(article.date, "MMMM d, yyyy")}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{article.title}</h3>
                  <p className="text-gray-600 mb-4">{article.excerpt}</p>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center text-gray-500">
                      <User className="h-4 w-4 mr-1" />
                      By {article.author}
                    </div>
                    <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                      {article.category}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {filteredNews.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-xl font-medium text-gray-600">No articles found matching your criteria</h3>
            <p className="mt-2 text-gray-500">Try adjusting your search or filter settings</p>
          </div>
        )}

        {/* Article Detail View */}
        {selectedEvent && (
          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-12">
            {newsData.filter(article => article.id === selectedEvent).map(article => (
              <div key={article.id}>
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-64 md:h-96 object-cover"
                />
                <div className="p-6 md:p-8">
                  <button 
                    className="text-blue-700 font-medium mb-4 flex items-center hover:text-blue-800"
                    onClick={() => setSelectedEvent(null)}
                  >
                    &larr; Back to News
                  </button>
                  
                  <div className="flex flex-wrap items-center gap-4 mb-4">
                    <div className="flex items-center text-sm text-blue-700 font-medium">
                      <Calendar className="h-4 w-4 mr-1" />
                      {format(article.date, "MMMM d, yyyy")}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <User className="h-4 w-4 mr-1" />
                      By {article.author}
                    </div>
                    <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                      {article.category}
                    </span>
                  </div>
                  
                  <h1 className="text-3xl font-bold mb-6">{article.title}</h1>
                  
                  <div className="prose max-w-none">
                    {article.content.split('\n\n').map((paragraph, index) => (
                      <p key={index} className="mb-4 text-gray-700">{paragraph}</p>
                    ))}
                  </div>
                  
                  <div className="mt-8 pt-8 border-t border-gray-200">
                    <h3 className="text-lg font-semibold mb-4">Share this article</h3>
                    <div className="flex space-x-4">
                      <button className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path>
                        </svg>
                      </button>
                      <button className="bg-blue-400 text-white p-2 rounded-full hover:bg-blue-500">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                        </svg>
                      </button>
                      <button className="bg-green-600 text-white p-2 rounded-full hover:bg-green-700">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd"></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Events;