import React, { useState } from 'react';
import { Search, Calendar, User, Tag, ArrowRight } from 'lucide-react';
import { format } from 'date-fns';

// Updated news data with new Imgur images
const newsData = [
  {
    id: 1,
    title: "Intercâmbio Diáspora Celebrates African Heritage Day",
    excerpt: "Join us for a day of cultural celebration, storytelling, and community connection at our African Heritage Day event.",
    content: "We're excited to announce our upcoming African Heritage Day celebration! This special event will bring together members of the African and Afro-descendant community in Lisbon for a day of cultural exchange, storytelling, and connection.\n\nThe event will feature:\n- Traditional music and dance performances\n- Storytelling sessions\n- Cultural workshops\n- Community networking\n- African cuisine\n\nThis celebration is part of our ongoing commitment to creating spaces where African and Afro-descendant communities can celebrate their heritage, share their stories, and build meaningful connections.\n\nThe event will take place at our community space in Lisbon, and all are welcome to join. Whether you're part of the African diaspora or interested in learning more about African cultures, this event offers a wonderful opportunity for cultural exchange and community building.",
    date: new Date(2024, 3, 15),
    author: "Intercâmbio Diáspora Team",
    category: "Events",
    image: "https://i.imgur.com/eUtTakc.jpg"
  },
  {
    id: 2,
    title: "Language Exchange Program Launches New Sessions",
    excerpt: "Our popular language exchange program expands with new Portuguese-English conversation groups and cultural learning opportunities.",
    content: "We're thrilled to announce the expansion of our language exchange program! In response to growing community interest, we're launching new Portuguese-English conversation groups that combine language learning with cultural exchange.\n\nOur language exchange sessions provide a supportive environment where participants can:\n- Practice Portuguese and English with native speakers\n- Learn about cultural contexts and expressions\n- Build confidence in communication\n- Make friends from diverse backgrounds\n\nThe program is designed to be accessible to learners at all levels, from beginners to advanced speakers. Each session includes structured conversation practice, cultural discussions, and informal social time.\n\nParticipants have shared how these exchanges have not only improved their language skills but also helped them build meaningful connections within the community.",
    date: new Date(2024, 3, 10),
    author: "Language Program Coordinator",
    category: "Education",
    image: "https://i.imgur.com/cmCCoJI.jpg"
  },
  {
    id: 3,
    title: "Community Tour: Exploring African Heritage in Lisbon",
    excerpt: "Join us for a guided tour exploring the rich African history and cultural heritage sites in Lisbon.",
    content: "Discover the African heritage woven into Lisbon's history with our upcoming community tour! Led by knowledgeable guides from the African diaspora community, this tour offers a unique perspective on the city's historical and contemporary connections to Africa.\n\nThe tour will explore:\n- Historical sites significant to African history in Lisbon\n- Contemporary African cultural spaces\n- Community landmarks\n- Art installations and exhibitions\n\nThis initiative is part of our commitment to highlighting the contributions of African and Afro-descendant communities to Lisbon's cultural landscape. Through these tours, we aim to preserve and share important historical narratives while fostering understanding and appreciation of African heritage.\n\nParticipants will gain insights into both historical and contemporary aspects of African presence in Lisbon, making connections between past and present.",
    date: new Date(2024, 3, 5),
    author: "Cultural Programs Team",
    category: "Culture",
    image: "https://i.imgur.com/fHIxWQt.jpg"
  },
  {
    id: 4,
    title: "Professional Development Workshop Series",
    excerpt: "New workshop series focuses on career development, entrepreneurship, and professional networking for diaspora community members.",
    content: "We're launching a comprehensive professional development workshop series designed specifically for members of the African and Afro-descendant diaspora community. These workshops address the unique challenges and opportunities faced by our community members in the professional sphere.\n\nThe workshop series includes:\n- Resume writing and interview skills\n- Entrepreneurship in Portugal\n- Professional networking strategies\n- Career transition guidance\n- Leadership development\n\nEach workshop combines practical skills development with cultural awareness and community support. Participants will have opportunities to connect with mentors, share experiences, and build professional networks within the community.\n\nThe series is designed to empower community members with the tools and connections needed for professional success while maintaining cultural authenticity.",
    date: new Date(2024, 3, 1),
    author: "Professional Development Coordinator",
    category: "Career",
    image: "https://i.imgur.com/1ntgyJg.jpg"
  },
  {
    id: 5,
    title: "Youth Mentorship Program Launch",
    excerpt: "New initiative connects young people from the diaspora community with mentors for educational and personal development support.",
    content: "We're proud to announce the launch of our Youth Mentorship Program, designed to support young people from African and Afro-descendant backgrounds in their educational and personal development journeys.\n\nThe program matches youth with mentors from similar cultural backgrounds who can provide:\n- Academic guidance\n- Career advice\n- Cultural connection\n- Personal development support\n\nThis initiative responds to community feedback about the importance of role models and guidance for young people navigating education and career paths while maintaining strong connections to their cultural heritage.\n\nMentors are professionals from various fields who understand the unique experiences and challenges faced by youth in the diaspora community.",
    date: new Date(2024, 2, 25),
    author: "Youth Programs Director",
    category: "Education",
    image: "https://i.imgur.com/aLhAefJ.jpg"
  },
  {
    id: 6,
    title: "Cultural Exchange Workshop Series",
    excerpt: "Interactive workshops exploring African cultural traditions, music, and art with hands-on activities and community discussions.",
    content: "Join us for our new Cultural Exchange Workshop Series, designed to celebrate and preserve African cultural traditions through interactive learning experiences. These workshops provide hands-on opportunities to engage with various aspects of African heritage.\n\nWorkshop topics include:\n- Traditional African music and instruments\n- African art and craft techniques\n- Storytelling traditions\n- Culinary heritage\n- Dance and movement\n\nEach workshop is led by community members and cultural practitioners who bring authentic knowledge and passion to their teaching. Participants will not only learn new skills but also connect with others who share an interest in African culture.\n\nThese workshops are open to all community members and allies, creating inclusive spaces for cultural learning and appreciation.",
    date: new Date(2024, 2, 20),
    author: "Cultural Programs Team",
    category: "Culture",
    image: "https://i.imgur.com/4Y46Pd9.jpg"
  },
  {
    id: 7,
    title: "Community Networking Event Success",
    excerpt: "Our recent networking event brought together professionals from diverse backgrounds, creating new opportunities for collaboration and growth.",
    content: "Our recent Community Networking Event was a tremendous success, bringing together over 100 professionals from the African and Afro-descendant diaspora community. The event created valuable opportunities for connection, collaboration, and professional growth.\n\nHighlights from the event:\n- Professional speed networking sessions\n- Industry-specific discussion groups\n- Mentorship matching opportunities\n- Resource sharing workshops\n- Cultural celebration and entertainment\n\nParticipants represented diverse industries including technology, healthcare, education, arts, and entrepreneurship. Many attendees reported making meaningful connections that have already led to new collaborations and opportunities.\n\nThe success of this event demonstrates the strength and potential of our community when we come together to support each other's professional aspirations.",
    date: new Date(2024, 2, 15),
    author: "Professional Development Coordinator",
    category: "Networking",
    image: "https://i.imgur.com/AR9vw6I.jpg"
  },
  {
    id: 8,
    title: "Educational Support Program Expansion",
    excerpt: "Our educational support initiatives expand to include new resources for students and families navigating the Portuguese education system.",
    content: "We're excited to announce the expansion of our Educational Support Program, which now includes comprehensive resources for students and families from the African diaspora community navigating the Portuguese education system.\n\nNew program features:\n- Academic tutoring and support\n- University application guidance\n- Scholarship information and assistance\n- Parent engagement workshops\n- Cultural identity support in educational settings\n\nThe program addresses the unique challenges faced by diaspora students and families, providing culturally sensitive support that honors their heritage while helping them succeed in Portuguese educational institutions.\n\nOur team of educators and volunteers work closely with participants to ensure they have the tools and confidence needed for academic success.",
    date: new Date(2024, 2, 10),
    author: "Education Program Director",
    category: "Education",
    image: "https://i.imgur.com/T15A3ek.jpg"
  }
];

// Available categories for filtering
const categories = ["All", "Events", "Education", "Culture", "Career", "Networking"];

const News = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedArticle, setSelectedArticle] = useState<number | null>(null);

  // Filter news based on search term and category
  const filterNews = (events: typeof newsData) => {
    return events.filter(article => {
      const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === "All" || article.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  };

  const filteredNews = filterNews(newsData);

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-pan-red text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Latest News</h1>
          <p className="text-xl max-w-3xl">Stay updated with the latest news and events from Intercâmbio Diáspora.</p>
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
                placeholder="Search news..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-red-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Tag className="h-5 w-5 text-gray-400" />
              </div>
              <select
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-full md:w-48 focus:outline-none focus:ring-2 focus:ring-red-500 appearance-none"
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
        {!selectedArticle && (
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
                <div className="flex items-center text-sm text-red-700 font-medium mb-2">
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
                  className="text-red-700 font-medium flex items-center hover:text-red-800"
                  onClick={() => setSelectedArticle(newsData[0].id)}
                >
                  Read Full Article <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* News Grid */}
        {!selectedArticle && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {filteredNews.slice(1).map(article => (
              <div 
                key={article.id} 
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition cursor-pointer"
                onClick={() => setSelectedArticle(article.id)}
              >
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center text-sm text-red-700 font-medium mb-2">
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
                    <span className="inline-block bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full">
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
        {selectedArticle && (
          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-12">
            {newsData.filter(article => article.id === selectedArticle).map(article => (
              <div key={article.id}>
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-64 md:h-96 object-cover"
                />
                <div className="p-6 md:p-8">
                  <button 
                    className="text-red-700 font-medium mb-4 flex items-center hover:text-red-800"
                    onClick={() => setSelectedArticle(null)}
                  >
                    &larr; Back to News
                  </button>
                  
                  <div className="flex flex-wrap items-center gap-4 mb-4">
                    <div className="flex items-center text-sm text-red-700 font-medium">
                      <Calendar className="h-4 w-4 mr-1" />
                      {format(article.date, "MMMM d, yyyy")}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <User className="h-4 w-4 mr-1" />
                      By {article.author}
                    </div>
                    <span className="inline-block bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full">
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
                      <button className="bg-red-600 text-white p-2 rounded-full hover:bg-red-700">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path>
                        </svg>
                      </button>
                      <button className="bg-red-400 text-white p-2 rounded-full hover:bg-red-500">
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

export default News;