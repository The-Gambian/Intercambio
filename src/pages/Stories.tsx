import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
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
    id: 'mbye-ebrima-story',
    title: "Bridging Worlds Through the Kora: Mbye Ebrima's Musical Journey",
    author: "Mbye Ebrima",
    role: "Kora Player, Composer & Storyteller",
    date: new Date(2024, 2, 15),
    excerpt: "A visionary Gambian kora player who transcends boundaries, blending ancient Mandinka oral traditions with global music genres in Lisbon's vibrant music scene.",
    content: "Mbye Ebrima is a visionary Gambian kora player, composer, and storyteller. Ebrima's music transcends boundaries, blending ancient Mandinka oral traditions with a wide spectrum of global music genres, including jazz, flamenco, fado, and Afrobeat. His ability to fuse traditional African sounds with contemporary styles makes him a unique and compelling artist in the world music scene.\n\nHaving moved to Lisbon nearly a decade ago, Mbye Ebrima has established himself as a prominent figure in the city's music scene, where his performances have captivated audiences and fostered cultural exchange. Through collaborations with local and international artists, he has nurtured a deep connection between African and European musical traditions, offering fresh interpretations of traditional African instruments and rhythms.\n\nEbrima's work is a testament to the power of music as a universal language that bridges cultural gaps, highlighting the richness of African heritage while embracing modernity. His journey from Gambia to Lisbon represents the beautiful fusion of cultures that defines the diaspora experience - maintaining deep roots while growing new branches in foreign soil.\n\nThrough his kora, Ebrima tells stories that span continents and generations, creating a musical bridge between his homeland and his adopted city. His performances are not just concerts; they are cultural exchanges that bring people together through the universal language of music.",
    image: "https://imgur.com/DtpOZ2P.jpg",
    category: "Arts & Culture",
    tags: ["Music", "Kora", "Gambia", "Cultural Bridge", "Traditional Arts", "Lisbon"],
    readTime: "5 min read"
  },
  {
    id: 'demba-jobarteh-story',
    title: "Guardian of Griot Heritage: Demba Jobarteh's Musical Legacy",
    author: "Demba Jobarteh",
    role: "Multi-instrumentalist & Percussionist",
    date: new Date(2024, 1, 20),
    excerpt: "From the village of Tabató in Guinea-Bissau, a master griot preserves ancestral knowledge through the balafon, djembe, and ngoni, bridging ancient rhythms with modern audiences.",
    content: "Demba Djabaté is a multi-instrumentalist and percussionist from the village of Tabató in Guinea-Bissau, a place renowned for its deep griot heritage. Coming from a long lineage of Mandinga griots, Demba is a master of traditional West African instruments such as the balafon, djembe, and ngoni. From a young age, he was immersed in the oral and musical traditions of his ancestors, learning the vital role of the griot as a historian, storyteller, and cultural guardian.\n\nThrough his music, Demba weaves together the collective memory of his people, preserving their stories, values, and identity. His artistry is not just performance—it is a sacred duty to maintain the cultural threads that connect past, present, and future generations.\n\nPerforming both in Guinea-Bissau and internationally, Demba brings an energetic and soulful presence to the stage. His artistry bridges ancient rhythms with modern audiences, blending the vibrant melodies of the balafon with the dynamic pulse of the djembe and the lyrical tones of the ngoni.\n\nMore than a performer, he is a custodian of ancestral knowledge, using music as a living archive of Mandinga history and heritage. With every performance, Demba keeps the griot legacy alive—connecting generations through sound, rhythm, and storytelling. His work represents the essential role of cultural preservation in the diaspora, ensuring that traditional knowledge continues to flow like a river from one generation to the next.",
    image: "https://imgur.com/j1zoGEF.jpg",
    category: "Arts & Culture",
    tags: ["Griot", "Guinea-Bissau", "Traditional Music", "Cultural Heritage", "Balafon", "Djembe"],
    readTime: "6 min read"
  },
  {
    id: 'marinho-pina-story',
    title: "Rhythm and Memory: Marinho Pina's Griot Journey",
    author: "Marinho Pina",
    role: "Musician, Percussionist & Storyteller",
    date: new Date(2023, 11, 5),
    excerpt: "A musician and storyteller from Guinea-Bissau who weaves together music, rhythm, and ancestral wisdom to honor the griot tradition across continents.",
    content: "Marinho Pina is a musician, percussionist, and storyteller from Guinea-Bissau, who weaves together music, rhythm, and ancestral wisdom to honor and continue the griot tradition of West Africa. His art is deeply rooted in the oral heritage of his homeland, where music is not only entertainment, but a vessel for history, identity, and spiritual connection.\n\nDrawing from traditional rhythms and instruments, Marinho creates performances that are both poetic and percussive—bridging the past with the present. Whether through spoken word, drum patterns, or collaborative projects, he embodies the griot's role as a guardian of memory and a voice for the community.\n\nIn the griot tradition, the musician is more than an entertainer—they are the keeper of collective memory, the voice of the ancestors, and the bridge between the spiritual and material worlds. Marinho carries this sacred responsibility with deep reverence and contemporary relevance.\n\nWith performances across Europe and Africa, Marinho is not only a cultural ambassador for Guinea-Bissau but also a builder of artistic bridges between continents, using rhythm and storytelling to inspire dialogue, connection, and celebration.\n\nHis work demonstrates how traditional African arts can thrive in diaspora communities, creating new spaces for cultural expression while maintaining deep connections to ancestral wisdom. Through his performances, Marinho ensures that the griot tradition continues to evolve and inspire new generations, both in Africa and across the diaspora.",
    image: "https://imgur.com/EHmZZDI.jpeg",
    category: "Arts & Culture",
    tags: ["Griot Tradition", "Guinea-Bissau", "Storytelling", "Percussion", "Cultural Ambassador", "Oral Heritage"],
    readTime: "6 min read"
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
  const { storyId } = useParams();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Stories");
  const [showSubmitForm, setShowSubmitForm] = useState(false);

  // Filter stories based on search and category
  const filteredStories = communityStories.filter(story => {
    const matchesSearch = story.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         story.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         story.author.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All Stories" || story.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // If we have a storyId in the URL, show individual story page
  if (storyId) {
    const selectedStory = featuredStories.find(s => s.id === storyId) || communityStories.find(s => s.id === storyId);
    
    if (!selectedStory) {
      return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Story Not Found</h1>
            <p className="text-gray-600 mb-6">The story you're looking for doesn't exist.</p>
            <Link to="/stories" className="bg-pan-red text-white px-6 py-3 rounded-md hover:bg-red-800 transition">
              Back to Stories
            </Link>
          </div>
        </div>
      );
    }

    return (
      <div className="min-h-screen bg-gray-50">
        {/* Story Header */}
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <button
              onClick={() => navigate('/stories')}
              className="flex items-center text-pan-red hover:text-red-800 mb-4 font-medium"
            >
              ← Back to Stories
            </button>
            <div className="flex items-center justify-between mb-4">
              <span className="inline-block bg-pan-red/10 text-pan-red text-sm px-3 py-1 rounded-full font-medium">
                {selectedStory.category}
              </span>
              <span className="text-sm text-gray-500">{selectedStory.readTime}</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-pan-black">{selectedStory.title}</h1>
            <div className="flex items-center">
              <img 
                src={selectedStory.image} 
                alt={selectedStory.author}
                className="w-12 h-12 rounded-full object-cover mr-4"
              />
              <div>
                <p className="font-medium text-lg text-pan-black">{selectedStory.author}</p>
                <p className="text-gray-600">{selectedStory.role}</p>
                <div className="flex items-center text-sm text-gray-500 mt-1">
                  <Calendar className="h-4 w-4 mr-1" />
                  {format(selectedStory.date, "MMMM d, yyyy")}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Story Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img 
              src={selectedStory.image} 
              alt={selectedStory.title}
              className="w-full h-64 md:h-96 object-cover"
            />
            <div className="p-8">
              <div className="prose max-w-none">
                {selectedStory.content.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="mb-6 text-gray-700 leading-relaxed text-lg">
                    {paragraph.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').split('<strong>').map((part, i) => {
                      if (i === 0) return part;
                      const [bold, rest] = part.split('</strong>');
                      return <span key={i}><strong>{bold}</strong>{rest}</span>;
                    })}
                  </p>
                ))}
              </div>
              
              {/* Story Tags */}
              {selectedStory.tags && (
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h3 className="text-sm font-medium text-gray-900 mb-3">Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedStory.tags.map((tag, index) => (
                      <span key={index} className="inline-block bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Social Actions */}
              <div className="flex items-center space-x-6 mt-8 pt-6 border-t border-gray-200">
                <button className="flex items-center text-gray-500 hover:text-pan-red transition">
                  <Heart className="h-5 w-5 mr-2" />
                  <span>Like this story</span>
                </button>
                <button 
                  onClick={() => {
                    navigator.clipboard.writeText(window.location.href);
                    alert('Story link copied to clipboard!');
                  }}
                  className="flex items-center text-gray-500 hover:text-pan-red transition"
                >
                  <Share2 className="h-5 w-5 mr-2" />
                  <span>Share story</span>
                </button>
                <button className="flex items-center text-gray-500 hover:text-pan-red transition">
                  <MessageCircle className="h-5 w-5 mr-2" />
                  <span>Comment</span>
                </button>
              </div>
            </div>
          </div>
          
          {/* Related Stories */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-pan-black mb-6">More Stories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {featuredStories.filter(story => story.id !== selectedStory.id).slice(0, 2).map(story => (
                <Link key={story.id} to={`/stories/${story.id}`} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  <img src={story.image} alt={story.title} className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <span className="inline-block bg-pan-red/10 text-pan-red text-sm px-3 py-1 rounded-full font-medium mb-3">
                      {story.category}
                    </span>
                    <h3 className="text-lg font-bold mb-2 text-pan-black">{story.title}</h3>
                    <p className="text-gray-600 text-sm mb-3">{story.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">{story.author}</span>
                      <span className="text-sm text-gray-500">{story.readTime}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Main stories listing page
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
                    <Link 
                      to={`/stories/${story.id}`}
                      className="text-pan-red hover:text-red-800 font-medium flex items-center"
                    >
                      Read Full Story <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
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
                    <Link 
                      to={`/stories/${story.id}`}
                      className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center"
                    >
                      Read More <ArrowRight className="ml-1 h-3 w-3" />
                    </Link>
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
    </div>
  );
};

export default Stories;