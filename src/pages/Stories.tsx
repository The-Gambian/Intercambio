import React, { useState } from 'react';
import { Search, Calendar, User, ArrowRight, Heart, Share2, MessageCircle, Filter } from 'lucide-react';
import { format } from 'date-fns';
import { useLanguage } from '../contexts/LanguageContext';

// Featured stories data with real diaspora experiences
const featuredStories = [
 {
  id: 'malik-story',
  title: "From Banjul to Lisbon: A Journey of Community, Culture, and Creation",
  author: "Malik Jallow",
  role: "Co-founder, Intercâmbio Diáspora & Founder, AfrojamLX",
  date: new Date(2025, 2, 1),
  excerpt: "From studying abroad to building platforms for culture and connection, Malik’s journey is a story of resilience, creativity, and the power of the diaspora spirit.",
  content: "My journey began in Banjul, Gambia, where community was always at the center of life. In 2014, I left for Turkey to pursue university studies — my first step into a wider world. Those years shaped me, not only academically, but personally, as I learned how to navigate new languages, cultures, and identities while still holding onto where I came from.\n\nIn 2018, I arrived in Lisbon for an Erasmus exchange. It was supposed to be temporary, but Lisbon had a way of pulling me in. The city’s energy, its mix of cultures, and its deep connections to Africa spoke to something inside me. Later, I returned for a master’s in Big Data and Business Intelligence, which gave me the tools to think critically about systems, innovation, and the future.\n\nBut beyond the studies, what stayed with me was the search for belonging. Like many in the diaspora, I often felt caught between worlds — carrying my Gambian roots while trying to build a new life abroad. In 2023, that search led me to meet Ebony, and together we started Intercâmbio Diáspora. What began as a simple idea — bringing people together through language, culture, and shared experiences — has grown into a community where the African diaspora and allies can connect, learn, and thrive.\n\nAt the same time, my love for music never left me. Music has always been part of my story, and through the AfrojamLX project, I’m working to create spaces where artists can share their voices, build their careers, and connect with audiences. For me, it’s more than music — it’s about building platforms that empower the diaspora to tell our stories on our own terms.\n\nLooking back, I see a thread running through all these experiences: the search for home. From Banjul to Turkey, to Lisbon, what I’ve learned is that home isn’t just a place you return to. It’s something you create — with people, with culture, with vision. And in building community here, I’ve found not just a home for myself, but a way to help others find theirs too.",
  image: "https://imgur.com/16uOwZo.jpg",
  category: "Founder Stories",
  tags: ["Migration", "Community Building", "Cultural Identity", "Music", "Gambia", "Lisbon"],
  readTime: "5 min read"
},
  {
    id: 'ebony-story',
    title: "From Atlanta to Lisbon: Redefining Home in the African Diaspora",
    author: "Ebony Washington",
    role: "Co-founder, Intercâmbio Diáspora",
    date: new Date(2024, 3, 10),
    excerpt: "An African-American co-founder's perspective on finding community and purpose in Portugal while navigating identity, belonging, and the global African diaspora experience.",
    content: "Moving from Atlanta to Lisbon wasn't just a geographical change - it was a journey of rediscovering what it means to be part of the global African diaspora. As an African-American woman, I thought I understood my place in the diaspora narrative. Portugal taught me there was so much more to learn.\n\nIn Atlanta, my Blackness was defined by the American experience - civil rights history, Southern culture, specific struggles and triumphs. In Portugal, I encountered Africans from Cape Verde, Angola, Guinea-Bissau, and beyond. Each carried their own stories of colonialism, independence, migration, and resilience. I realized that while our paths were different, our destination was the same: creating spaces where we could thrive while honoring our heritage.\n\nThe first time I attended a Cape Verdean morna performance in Lisbon, I was moved to tears. The melancholy beauty of the music, the stories of longing for home, the way the community gathered around the artist - it reminded me of gospel music in Atlanta churches, of the way music has always been our way of processing pain and finding hope.\n\nIntercâmbio Diáspora became my way of weaving these diverse threads together. When I see a Cape Verdean grandmother teaching traditional recipes to a young African-American student, or when I watch a Guinean entrepreneur mentor a Portuguese-born Afro-descendant, I see the diaspora in action - not as separate communities, but as one extended family finding each other across oceans and generations.\n\nPortugal has taught me that the African diaspora is not just about where we've been scattered, but about how we choose to reconnect. Every event we organize, every story we share, every connection we facilitate is an act of rebuilding the village that colonialism and slavery tried to destroy.\n\nHome, I've learned, is not just where you're from or where you live - it's the community you build and the bridges you create between all the places that have shaped you.",
    image: "https://imgur.com/T7wkMuI.jpg",
    category: "Founder Stories",
    tags: ["African-American", "Identity", "Community", "USA", "Founders"],
    readTime: "6 min read"
  }
];

// Community stories data
const communityStories = [
  {
    id: '1',
    title: "The Language of Belonging: Learning Portuguese as Cultural Bridge",
    author: "Amara Diallo",
    role: "Language Exchange Coordinator",
    date: new Date(2024, 3, 8),
    excerpt: "How mastering Portuguese became more than language learning - it became a pathway to deeper cultural understanding and community connection.",
    image: "https://imgur.com/Um1K5jA.jpeg",
    category: "Language & Integration",
    tags: ["Language Learning", "Integration", "Cultural Exchange"],
    readTime: "4 min read"
  },
  {
    id: '2',
    title: "Raising Third Culture Kids: Preserving Heritage in Portugal",
    author: "Fatima Santos",
    role: "Community Member",
    date: new Date(2024, 3, 5),
    excerpt: "A mother's journey of raising children who are proud of their African heritage while fully integrated into Portuguese society.",
    image: "https://i.imgur.com/vchikwW.jpg",
    category: "Family & Heritage",
    tags: ["Parenting", "Third Culture Kids", "Heritage", "Education"],
    readTime: "5 min read"
  },
  {
    id: '3',
    title: "From Student to Entrepreneur: Building Dreams in Lisbon",
    author: "Carlos Mendes",
    role: "Tech Entrepreneur",
    date: new Date(2024, 2, 28),
    excerpt: "How the diaspora community supported my journey from international student to successful tech entrepreneur in Portugal.",
    image: "https://i.imgur.com/7mdxG48.jpg",
    category: "Professional Growth",
    tags: ["Entrepreneurship", "Technology", "Student Life", "Success"],
    readTime: "4 min read"
  },
  {
    id: '4',
    title: "Music as Medicine: Healing Through Cultural Expression",
    author: "Asha Kone",
    role: "Musician & Cultural Artist",
    date: new Date(2024, 2, 20),
    excerpt: "Discovering how traditional African music became a source of healing and connection for our diaspora community in Portugal.",
    image: "https://i.imgur.com/4x5JR34.jpg",
    category: "Arts & Culture",
    tags: ["Music", "Healing", "Traditional Arts", "Community"],
    readTime: "3 min read"
  }
];

// Story categories for filtering
const categories = [
  "All Stories",
  "Founder Stories",
  "Language & Integration", 
  "Family & Heritage",
  "Professional Growth",
  "Arts & Culture",
  "Community Impact"
];

const Stories = () => {
  const { t } = useLanguage();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Stories");
  const [showSubmitForm, setShowSubmitForm] = useState(false);
  const [selectedStory, setSelectedStory] = useState<string | null>(null);

  // Filter stories based on search and category
  const filteredStories = communityStories.filter(story => {
    const matchesSearch = story.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         story.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         story.author.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All Stories" || story.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Compact Hero Section */}
      <div className="relative bg-pan-red text-white py-12">
        <div className="absolute inset-0 bg-gradient-to-r from-red-900 to-red-700 opacity-90"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Diaspora Stories: Our Voices, Our Journeys</h1>
          <p className="text-lg max-w-3xl mx-auto mb-6">
            Every story in our diaspora community weaves a unique thread into the fabric of our shared experience. Through these narratives, we celebrate our diversity, honor our heritage, and build bridges of understanding.
          </p>
          <button 
            onClick={() => setShowSubmitForm(true)}
            className="bg-white text-red-900 px-6 py-2 rounded-md font-medium hover:bg-red-50 transition"
          >
            Share Your Story
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Featured Stories Section */}
        <section className="py-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-pan-black mb-4">Featured Stories</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Hear directly from our founders about their journeys and the vision behind Intercâmbio Diáspora.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {featuredStories.map(story => (
              <div key={story.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img 
                  src={story.image} 
                  alt={story.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-block bg-pan-red/10 text-pan-red text-sm px-3 py-1 rounded-full font-medium">
                      {story.category}
                    </span>
                    <span className="text-sm text-gray-500">{story.readTime}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 text-pan-black">{story.title}</h3>
                  
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-pan-red/10 rounded-full flex items-center justify-center">
                      <User className="h-6 w-6 text-pan-red" />
                    </div>
                    <div className="ml-3">
                      <p className="font-medium text-pan-black">{story.author}</p>
                      <p className="text-sm text-gray-500">{story.role}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">{story.excerpt}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="h-4 w-4 mr-1" />
                      {format(story.date, "MMM d, yyyy")}
                    </div>
                    <button 
                      onClick={() => setSelectedStory(story.id)}
                      className="text-pan-red hover:text-red-800 font-medium flex items-center"
                    >
                      Read Full Story <ArrowRight className="ml-1 h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-8 border-t border-gray-200">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold mb-4 text-pan-black">Explore Community Stories</h3>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-grow relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search stories, authors, or topics..."
                  className="pl-10 w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-pan-red"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="relative">
                <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <select
                  className="pl-10 pr-4 border border-gray-300 rounded-md py-2 focus:outline-none focus:ring-2 focus:ring-pan-red appearance-none bg-white"
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
        </section>

        {/* Community Stories Grid */}
        <section className="py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredStories.map(story => (
              <div key={story.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <img 
                  src={story.image} 
                  alt={story.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-5">
                  <div className="flex items-center justify-between mb-3">
                    <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full font-medium">
                      {story.category}
                    </span>
                    <span className="text-xs text-gray-500">{story.readTime}</span>
                  </div>
                  
                  <h4 className="text-lg font-bold mb-2 text-pan-black line-clamp-2">{story.title}</h4>
                  
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <User className="h-4 w-4 text-blue-600" />
                    </div>
                    <div className="ml-2">
                      <p className="text-sm font-medium text-pan-black">{story.author}</p>
                      <p className="text-xs text-gray-500">{story.role}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{story.excerpt}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-xs text-gray-500">
                      <Calendar className="h-3 w-3 mr-1" />
                      {format(story.date, "MMM d")}
                    </div>
                    <button className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center">
                      Read More <ArrowRight className="ml-1 h-3 w-3" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredStories.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium text-gray-600 mb-2">No stories found</h3>
              <p className="text-gray-500">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </section>

        {/* Call to Action Section */}
        <section className="py-12 bg-gradient-to-r from-pan-green/10 to-pan-gold/10 rounded-lg my-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-pan-black mb-4">Share Your Story</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Your journey matters. Whether it's about migration, cultural identity, professional growth, or community building - we want to hear from you.
            </p>
            <button 
              onClick={() => setShowSubmitForm(true)}
              className="bg-pan-red text-white px-8 py-3 rounded-md font-medium hover:bg-red-800 transition"
            >
              Submit Your Story
            </button>
          </div>
        </section>
      </div>

      {/* Story Submission Form Modal */}
      {showSubmitForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-2xl w-full p-8 max-h-[90vh] overflow-y-auto">
            <h2 className="text-2xl font-bold mb-6 text-pan-black">Share Your Story</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    First Name *
                  </label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-pan-red"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-pan-red"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email *
                </label>
                <input
                  type="email"
                  className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-pan-red"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Story Title *
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-pan-red"
                  placeholder="Give your story a compelling title"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Story Category
                </label>
                <select className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-pan-red">
                  <option value="">Select a category</option>
                  <option value="migration">Migration Journey</option>
                  <option value="identity">Cultural Identity</option>
                  <option value="professional">Professional Growth</option>
                  <option value="family">Family & Heritage</option>
                  <option value="community">Community Impact</option>
                  <option value="arts">Arts & Culture</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Your Story *
                </label>
                <textarea
                  rows={8}
                  className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-pan-red"
                  placeholder="Tell us your story... What brought you to Portugal? What challenges did you face? What successes have you achieved? How has the diaspora community impacted your journey?"
                  required
                ></textarea>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Photo (optional)
                </label>
                <input
                  type="file"
                  accept="image/*"
                  className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-pan-red"
                />
                <p className="text-xs text-gray-500 mt-1">Upload a photo that represents your story</p>
              </div>
              
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={() => setShowSubmitForm(false)}
                  className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 bg-pan-red text-white rounded-md hover:bg-red-800 transition"
                >
                  Submit Story
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Full Story Modal */}
      {selectedStory && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            {(() => {
              const story = featuredStories.find(s => s.id === selectedStory);
              if (!story) return null;
              
              return (
                <div>
                  <img 
                    src={story.image} 
                    alt={story.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <span className="inline-block bg-pan-red/10 text-pan-red text-sm px-3 py-1 rounded-full font-medium">
                        {story.category}
                      </span>
                      <button
                        onClick={() => setSelectedStory(null)}
                        className="text-gray-500 hover:text-gray-700 text-2xl"
                      >
                        ×
                      </button>
                    </div>
                    
                    <h1 className="text-3xl font-bold mb-4 text-pan-black">{story.title}</h1>
                    
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-pan-red/10 rounded-full flex items-center justify-center">
                        <User className="h-8 w-8 text-pan-red" />
                      </div>
                      <div className="ml-4">
                        <p className="font-medium text-lg text-pan-black">{story.author}</p>
                        <p className="text-gray-600">{story.role}</p>
                        <div className="flex items-center text-sm text-gray-500 mt-1">
                          <Calendar className="h-4 w-4 mr-1" />
                          {format(story.date, "MMMM d, yyyy")} • {story.readTime}
                        </div>
                      </div>
                    </div>
                    
                    <div className="prose max-w-none">
                      {story.content.split('\n\n').map((paragraph, index) => (
                        <p key={index} className="mb-4 text-gray-700 leading-relaxed">
                          {paragraph.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').split('<strong>').map((part, i) => {
                            if (i === 0) return part;
                            const [bold, rest] = part.split('</strong>');
                            return <span key={i}><strong>{bold}</strong>{rest}</span>;
                          })}
                        </p>
                      ))}
                    </div>
                    
                    <div className="flex items-center space-x-4 mt-8 pt-6 border-t border-gray-200">
                      <button className="flex items-center text-gray-500 hover:text-pan-red transition">
                        <Heart className="h-5 w-5 mr-1" />
                        <span>Like</span>
                      </button>
                      <button className="flex items-center text-gray-500 hover:text-pan-red transition">
                        <Share2 className="h-5 w-5 mr-1" />
                        <span>Share</span>
                      </button>
                      <button className="flex items-center text-gray-500 hover:text-pan-red transition">
                        <MessageCircle className="h-5 w-5 mr-1" />
                        <span>Comment</span>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })()}
          </div>
        </div>
      )}
    </div>
  );
};

export default Stories;