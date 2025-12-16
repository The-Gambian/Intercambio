import React, { useState } from 'react';
import { Calendar, MapPin, Clock, Filter, Search } from 'lucide-react';
import { format } from 'date-fns';
import { useLanguage } from '../contexts/LanguageContext';
import { upcomingEvents, pastEvents, eventCategories } from '../data/events';

const Events = () => {
  const { t } = useLanguage();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedEvent, setSelectedEvent] = useState<number | null>(null);
  const [showPastEvents, setShowPastEvents] = useState(false);

  // Filter events based on search term and category
  const filterEvents = (events: any[]) => {
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
      <div className="bg-pan-red text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">{t('events.title')}</h1>
          <p className="text-xl max-w-3xl">{t('events.subtitle')}</p>
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
                placeholder={t('events.search')}
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-red-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Filter className="h-5 w-5 text-gray-400" />
              </div>
              <select
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-full md:w-48 focus:outline-none focus:ring-2 focus:ring-red-500 appearance-none"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {eventCategories.map(category => (
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
              <h3 className="text-xl font-medium text-gray-600">{t('events.noEvents')}</h3>
              <p className="mt-2 text-gray-500">{t('events.noEventsDesc')}</p>
            </div>
          )}

          {/* Upcoming Events */}
          {filteredUpcomingEvents.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold mb-6">{t('events.upcoming')}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredUpcomingEvents.map(event => (
                  <div key={event.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                    <img src={event.image} alt={event.title} className="w-full h-48 object-cover" />
                    <div className="p-6">
                      <div className="flex items-center text-sm text-red-600 mb-2">
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
                          {t('events.until')} {event.endTime}
                        </div>
                      )}
                      <p className="text-gray-600 mb-4">{event.description}</p>
                      {event.registrationLink && (
                        <a
                          href={event.registrationLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition"
                        >
                          {t('events.registerNow')}
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
                <h2 className="text-2xl font-bold">{t('events.past')}</h2>
                <button
                  onClick={() => setShowPastEvents(!showPastEvents)}
                  className="text-red-600 hover:text-red-800"
                >
                  {showPastEvents ? t('events.showLess') : t('events.showAll')}
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {(showPastEvents ? filteredPastEvents : filteredPastEvents.slice(0, 3)).map(event => (
                  <div key={event.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                    <img src={event.image} alt={event.title} className="w-full h-48 object-cover" />
                    <div className="p-6">
                      <div className="flex items-center text-sm text-red-600 mb-2">
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