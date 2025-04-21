import React, { useState } from 'react';
import { Search, Calendar, User, ArrowRight } from 'lucide-react';
import { format } from 'date-fns';

// Updated stories data from LinkedIn and Instagram
const storiesData = [
  {
    id: 1,
    title: "Building Bridges Through Language Exchange",
    author: "Maria Silva",
    date: new Date(2024, 3, 10),
    excerpt: "How our language exchange program is creating connections and fostering cultural understanding in the African diaspora community.",
    content: "When I first joined Intercâmbio Diáspora's language exchange program, I was simply looking to improve my Portuguese. What I found was so much more – a community that celebrates diversity, embraces cultural exchange, and creates lasting connections.\n\nOur weekly language exchange sessions have become a vibrant space where people from various African countries and Portugal come together to learn from each other. We practice Portuguese and English, but we also share stories, traditions, and experiences.\n\nOne of the most beautiful aspects of these exchanges is how they break down barriers. Through language learning, we discover our shared experiences as members of the African diaspora, despite coming from different countries and backgrounds. We help each other navigate life in Portugal while maintaining strong connections to our cultural heritage.\n\nThe program has grown beyond language practice to include cultural celebrations, cooking workshops, and community events. These activities help us maintain our cultural identities while building bridges with our new home.\n\nAs a community facilitator, I've witnessed countless moments of connection and understanding. From helping newcomers find their footing in Portugal to celebrating cultural festivals together, our language exchange program has become a cornerstone of community building.\n\nThrough these exchanges, we're not just learning languages – we're creating a support network, preserving our cultural heritage, and building a stronger, more connected diaspora community in Lisbon.",
    image: "https://i.im.ge/2025/04/22/vOgb0L.IMG-20240706-WA0029-1.jpeg",
    category: "Community Impact"
  },
  {
    id: 2,
    title: "Celebrating Our Heritage Through Arts and Culture",
    author: "João Santos",
    date: new Date(2024, 3, 5),
    excerpt: "A journey through our community's artistic expressions and cultural celebrations.",
    content: "Art has always been a powerful medium for preserving and celebrating cultural heritage. At Intercâmbio Diáspora, we've created spaces where African and Afro-descendant artists can share their work, tell their stories, and connect with the community.\n\nOur recent cultural festival brought together musicians, dancers, visual artists, and storytellers from various African countries and the diaspora. The event showcased the richness of African cultural expressions and their influence on contemporary art forms.\n\nThrough workshops and performances, we explored traditional music and dance forms, modern interpretations of African art, and the role of creativity in maintaining cultural connections. Young artists from the community had the opportunity to learn from experienced mentors and showcase their own work.\n\nThe festival also featured discussions about the importance of cultural preservation and the role of arts in building community identity. Participants shared how artistic expression helps them maintain connections to their heritage while creating new cultural narratives in Portugal.\n\nThese cultural celebrations do more than entertain – they educate, inspire, and strengthen our community bonds. They provide platforms for sharing stories, preserving traditions, and creating new cultural expressions that reflect our experiences as members of the African diaspora.",
    image: "https://i.im.ge/2025/04/22/vOggex.WhatsApp-Image-2025-03-18-at-16-10-11-1.jpeg",
    category: "Arts & Culture"
  },
  {
    id: 3,
    title: "Youth Leadership in Action",
    author: "Ana Monteiro",
    date: new Date(2024, 2, 28),
    excerpt: "How young leaders in our community are making a difference through cultural initiatives and mentorship.",
    content: "The future of our community lies in the hands of our youth, and at Intercâmbio Diáspora, we're witnessing incredible leadership from young people who are passionate about preserving their cultural heritage while creating positive change.\n\nOur youth leadership program has empowered young people to develop and lead community initiatives. From organizing cultural workshops to mentoring younger children, these young leaders are taking active roles in strengthening our community.\n\nOne particularly successful initiative has been our youth-led cultural education program, where teenagers teach younger children about African history, traditions, and languages. This peer-to-peer learning approach has been incredibly effective in helping young people maintain strong connections to their cultural heritage.\n\nThe program also focuses on developing professional skills and creating networking opportunities for young people. Through mentorship connections and workshop series, we're helping youth prepare for their future careers while maintaining strong ties to their cultural identity.\n\nSeeing these young leaders grow in confidence and capability while remaining deeply connected to their cultural roots is inspiring. They are proving that success doesn't require abandoning one's cultural identity – instead, they're finding ways to celebrate and share their heritage while pursuing their goals.",
    image: "https://i.im.ge/2025/04/22/vOgWCJ.WhatsApp-Image-2025-03-22-at-21-11-43.jpeg",
    category: "Youth & Education"
  },
  {
    id: 4,
    title: "Community Support During Cultural Transitions",
    author: "Paulo Costa",
    date: new Date(2024, 2, 20),
    excerpt: "Stories of how our community supports members navigating life between cultures.",
    content: "Adapting to life in a new country while maintaining cultural connections can be challenging, but the support of a strong community can make all the difference. At Intercâmbio Diáspora, we've created programs and support systems to help community members navigate these transitions successfully.\n\nOur mentorship program pairs newcomers with established community members who can provide guidance, support, and cultural connection. These relationships help people maintain their cultural identity while adapting to life in Portugal.\n\nThrough regular community gatherings, cultural celebrations, and support groups, we provide spaces where people can share their experiences, challenges, and successes. These gatherings help combat isolation and build strong support networks.\n\nWe also offer practical support through workshops on navigating Portuguese systems and services, language learning resources, and professional development opportunities. These programs are designed to help people succeed while maintaining strong connections to their cultural heritage.\n\nThe strength of our community lies in our ability to support each other while celebrating our diverse cultural backgrounds. Together, we're creating a space where cultural identity is preserved and celebrated as we build new lives in Portugal.",
    image: "https://i.im.ge/2025/04/22/vO8YPY.WhatsApp-Image-2025-04-13-at-09-48-10.jpeg",
    category: "Community Support"
  },
  {
    id: 5,
    title: "Entrepreneurship in the Diaspora Community",
    author: "Sofia Almeida",
    date: new Date(2024, 2, 15),
    excerpt: "How our community is fostering entrepreneurship and economic empowerment.",
    content: "Entrepreneurship has always been a powerful tool for community development and economic empowerment. In our diaspora community, we're seeing a growing number of entrepreneurs who are creating businesses that serve community needs while celebrating cultural heritage.\n\nThrough our entrepreneurship support program, we provide resources, mentorship, and networking opportunities for community members starting or growing their businesses. These initiatives help entrepreneurs navigate the Portuguese business landscape while maintaining authentic connections to their cultural roots.\n\nOne inspiring example is our monthly marketplace event, where community entrepreneurs showcase their products and services. From traditional crafts and clothing to modern businesses with cultural influences, these entrepreneurs are creating economic opportunities while preserving cultural traditions.\n\nOur business development workshops combine practical skills with cultural awareness, helping entrepreneurs find ways to authentically represent their heritage in their business ventures. We also facilitate connections with successful business owners from similar backgrounds who can provide guidance and inspiration.\n\nThese entrepreneurial initiatives are strengthening our community economically while creating spaces for cultural expression and preservation. They demonstrate how business success can go hand in hand with cultural celebration and community support.",
    image: "https://i.im.ge/2025/04/22/vOgxVT.Brown-And-Beige-Modern-Summer-Movie-Night-Instagram-Post-1.png",
    category: "Entrepreneurship"
  }
];

// Available categories for filtering
const categories = ["All", "Community Impact", "Arts & Culture", "Youth & Education", "Community Support", "Entrepreneurship"];

const Stories = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedStory, setSelectedStory] = useState<number | null>(null);

  // Filter stories based on search term and category
  const filteredStories = storiesData.filter(story => {
    const matchesSearch = story.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          story.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          story.author.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || story.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Member Stories</h1>
          <p className="text-xl max-w-3xl">Explore personal narratives from our community members, sharing their experiences, challenges, and triumphs.</p>
        </div>
      </div>

      {/* Search and Filter */}
      {!selectedStory && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-grow relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search stories by title, content, or author..."
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="relative">
                <select
                  className="pl-4 pr-4 py-2 border border-gray-300 rounded-md w-full md:w-48 focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none"
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

          {/* Featured Story */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md mb-8">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img 
                  src={storiesData[0].image} 
                  alt={storiesData[0].title} 
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-6 md:p-8">
                <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full mb-2">
                  {storiesData[0].category}
                </span>
                <h2 className="text-2xl font-bold mb-4">{storiesData[0].title}</h2>
                <p className="text-gray-600 mb-6">{storiesData[0].excerpt}</p>
                <div className="flex items-center mb-6">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                      <User className="h-5 w-5 text-blue-700" />
                    </div>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">{storiesData[0].author}</p>
                    <p className="text-sm text-gray-500">{format(storiesData[0].date, "MMMM d, yyyy")}</p>
                  </div>
                </div>
                <button 
                  className="text-blue-700 font-medium flex items-center hover:text-blue-800"
                  onClick={() => setSelectedStory(storiesData[0].id)}
                >
                  Read Full Story <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Stories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {filteredStories.slice(1).map(story => (
              <div 
                key={story.id} 
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition cursor-pointer"
                onClick={() => setSelectedStory(story.id)}
              >
                <img 
                  src={story.image} 
                  alt={story.title} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full mb-2">
                    {story.category}
                  </span>
                  <h3 className="text-xl font-bold mb-2">{story.title}</h3>
                  <p className="text-gray-600 mb-4">{story.excerpt}</p>
                  <div className="flex items-center mb-4">
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                        <User className="h-4 w-4 text-blue-700" />
                      </div>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">{story.author}</p>
                      <p className="text-sm text-gray-500">{format(story.date, "MMMM d, yyyy")}</p>
                    </div>
                  </div>
                  <button 
                    className="text-blue-700 font-medium flex items-center hover:text-blue-800"
                    onClick={() => setSelectedStory(story.id)}
                  >
                    Read Full Story <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filteredStories.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium text-gray-600">No stories found matching your criteria</h3>
              <p className="mt-2 text-gray-500">Try adjusting your search or filter settings</p>
            </div>
          )}
        </div>
      )}

      {/* Story Detail View */}
      {selectedStory && (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-12">
            {storiesData.filter(story => story.id === selectedStory).map(story => (
              <div key={story.id}>
                <img 
                  src={story.image} 
                  alt={story.title} 
                  className="w-full h-64 md:h-96 object-cover"
                />
                <div className="p-6 md:p-8">
                  <button 
                    className="text-blue-700 font-medium mb-4 flex items-center hover:text-blue-800"
                    onClick={() => setSelectedStory(null)}
                  >
                    &larr; Back to Stories
                  </button>
                  
                  <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full mb-2">
                    {story.category}
                  </span>
                  
                  <h1 className="text-3xl font-bold mb-6">{story.title}</h1>
                  
                  <div className="flex items-center mb-8 border-b border-gray-200 pb-6">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                        <User className="h-6 w-6 text-blue-700" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <p className="text-lg font-medium text-gray-900">{story.author}</p>
                      <p className="text-gray-500">{format(story.date, "MMMM d, yyyy")}</p>
                    </div>
                  </div>
                  
                  <div className="prose max-w-none">
                    {story.content.split('\n\n').map((paragraph, index) => (
                      <p key={index} className="mb-4 text-gray-700 leading-relaxed">{paragraph}</p>
                    ))}
                  </div>
                  
                  <div className="mt-8 pt-8 border-t border-gray-200">
                    <h3 className="text-lg font-semibold mb-4">Share this story</h3>
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
        </div>
      )}
    </div>
  );
};

export default Stories;