import React, { useState } from 'react';
import { Search, Calendar, User, ArrowRight, Heart, Share2, MessageCircle } from 'lucide-react';
import { format } from 'date-fns';

// Featured story data
const featuredStory = {
  id: 'featured',
  title: "Finding Home in the Diaspora",
  author: "Maria Silva",
  date: new Date(2024, 3, 15),
  excerpt: "A journey of cultural identity, community building, and creating connections in Portugal.",
  content: "When I first arrived in Portugal, I carried with me not just my belongings, but the weight of my cultural identity and the uncertainty of finding my place in a new land...",
  image: "https://i.im.ge/2025/04/22/vOgb0L.IMG-20240706-WA0029-1.jpeg",
  category: "Personal Journey",
  tags: ["Identity", "Community", "Culture"]
};

// Story data for the grid
const storiesData = [
  {
    id: '1',
    title: "Building Bridges Through Language",
    author: "João Santos",
    date: new Date(2024, 3, 10),
    excerpt: "How learning Portuguese became more than just mastering a language - it became a gateway to understanding my heritage.",
    image: "https://images.pexels.com/photos/256417/pexels-photo-256417.jpeg",
    category: "Language & Identity",
    tags: ["Language", "Heritage", "Education"]
  },
  {
    id: '2',
    title: "From Brazil to Portugal: A Professional Journey",
    author: "Ana Costa",
    date: new Date(2024, 3, 8),
    excerpt: "Navigating career transitions and professional growth in a new country while maintaining cultural connections.",
    image: "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg",
    category: "Professional Growth",
    tags: ["Career", "Migration", "Professional Life"]
  },
  {
    id: '3',
    title: "Preserving Traditions Across Borders",
    author: "Miguel Oliveira",
    date: new Date(2024, 3, 5),
    excerpt: "How our community keeps cultural traditions alive while embracing new experiences in Portugal.",
    image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg",
    category: "Cultural Heritage",
    tags: ["Traditions", "Community", "Culture"]
  }
];

// Story categories for filtering
const categories = [
  "All Stories",
  "Personal Journeys",
  "Cultural Heritage",
  "Language & Identity",
  "Community Impact",
  "Professional Growth"
];

// Story themes/tags
const storyThemes = [
  "Identity",
  "Migration",
  "Culture",
  "Language",
  "Community",
  "Education",
  "Professional Life",
  "Traditions",
  "Integration",
  "Heritage"
];

const Stories = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Stories");
  const [selectedThemes, setSelectedThemes] = useState<string[]>([]);
  const [showSubmitForm, setShowSubmitForm] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-blue-900 text-white py-24">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-700 opacity-90"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-6">Diaspora Stories: Our Voices, Our Journeys</h1>
          <p className="text-xl max-w-3xl mb-8">
            Every story in our diaspora community weaves a unique thread into the fabric of our shared experience. 
            Through these narratives, we celebrate our diversity, honor our heritage, and build bridges of understanding.
          </p>
          <button 
            onClick={() => setShowSubmitForm(true)}
            className="bg-white text-blue-900 px-8 py-3 rounded-md font-medium hover:bg-blue-50 transition"
          >
            Share Your Story
          </button>
        </div>
      </div>

      {/* Featured Story */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16">
        <div className="bg-white rounded-lg shadow-xl overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2">
              <img 
                src={featuredStory.image} 
                alt={featuredStory.title}
                className="w-full h-96 object-cover"
              />
            </div>
            <div className="md:w-1/2 p-8 md:p-12">
              <div className="flex items-center text-sm text-blue-600 mb-4">
                <Calendar className="h-4 w-4 mr-2" />
                {format(featuredStory.date, "MMMM d, yyyy")}
              </div>
              <h2 className="text-3xl font-bold mb-4">{featuredStory.title}</h2>
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <User className="h-6 w-6 text-blue-600" />
                </div>
                <div className="ml-3">
                  <p className="font-medium">{featuredStory.author}</p>
                  <p className="text-sm text-gray-500">{featuredStory.category}</p>
                </div>
              </div>
              <p className="text-gray-600 mb-6">{featuredStory.excerpt}</p>
              <div className="flex items-center space-x-4">
                <button className="flex items-center text-gray-500 hover:text-blue-600">
                  <Heart className="h-5 w-5 mr-1" />
                  <span>123</span>
                </button>
                <button className="flex items-center text-gray-500 hover:text-blue-600">
                  <MessageCircle className="h-5 w-5 mr-1" />
                  <span>45</span>
                </button>
                <button className="flex items-center text-gray-500 hover:text-blue-600">
                  <Share2 className="h-5 w-5 mr-1" />
                  <span>Share</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-grow relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search stories..."
                className="pl-10 w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <select
              className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>
          <div className="mt-4">
            <p className="text-sm font-medium text-gray-700 mb-2">Popular Themes:</p>
            <div className="flex flex-wrap gap-2">
              {storyThemes.map(theme => (
                <button
                  key={theme}
                  onClick={() => {
                    setSelectedThemes(prev => 
                      prev.includes(theme) 
                        ? prev.filter(t => t !== theme)
                        : [...prev, theme]
                    )
                  }}
                  className={`px-3 py-1 rounded-full text-sm ${
                    selectedThemes.includes(theme)
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {theme}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Story Submission Form */}
      {showSubmitForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-2xl w-full p-8">
            <h2 className="text-2xl font-bold mb-6">Share Your Story</h2>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Story Title
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Your Story
                </label>
                <textarea
                  rows={6}
                  className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Share your journey, experiences, and reflections..."
                ></textarea>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Upload Images (optional)
                </label>
                <input
                  type="file"
                  accept="image/*"
                  className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={() => setShowSubmitForm(false)}
                  className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                  Submit Story
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Story Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {storiesData.map(story => (
            <div key={story.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src={story.image} 
                alt={story.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center text-sm text-blue-600 mb-2">
                  <Calendar className="h-4 w-4 mr-2" />
                  {format(story.date, "MMMM d, yyyy")}
                </div>
                <h3 className="text-xl font-bold mb-2">{story.title}</h3>
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <User className="h-5 w-5 text-blue-600" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium">{story.author}</p>
                    <p className="text-xs text-gray-500">{story.category}</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4 line-clamp-3">{story.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex space-x-3">
                    <button className="text-gray-500 hover:text-blue-600">
                      <Heart className="h-5 w-5" />
                    </button>
                    <button className="text-gray-500 hover:text-blue-600">
                      <MessageCircle className="h-5 w-5" />
                    </button>
                    <button className="text-gray-500 hover:text-blue-600">
                      <Share2 className="h-5 w-5" />
                    </button>
                  </div>
                  <button className="text-blue-600 hover:text-blue-800 font-medium flex items-center">
                    Read More <ArrowRight className="ml-1 h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stories;