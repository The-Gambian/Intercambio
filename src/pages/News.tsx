import React, { useState } from 'react';
import { Calendar, User, Search, Tag, ArrowRight } from 'lucide-react';
import { format } from 'date-fns';

// Sample news data
const newsData = [
  {
    id: 1,
    title: "New Community Center Opening Next Month",
    excerpt: "The long-awaited diaspora community center will open its doors on July 15, offering a space for cultural events, language classes, and community gatherings.",
    content: "The long-awaited diaspora community center will open its doors on July 15, offering a space for cultural events, language classes, and community gatherings. The center, funded by a combination of community donations and local government grants, will serve as a hub for diaspora communities from various backgrounds.\n\nThe 10,000 square foot facility includes a multipurpose hall, classrooms, a kitchen for culinary workshops, and office spaces for community organizations. The center will host regular events, including language exchange programs, cultural celebrations, and professional development workshops.\n\n\"This center represents years of hard work and collaboration within our community,\" said Maria Gonzalez, chairperson of the Intercambio Diaspora Community Center Committee. \"We're excited to finally have a dedicated space where people can connect, learn, and celebrate their heritage while building new connections.\"\n\nThe grand opening celebration will feature performances, food, and activities representing the diverse cultures of the local diaspora communities. All community members are invited to attend.",
    date: new Date(2025, 5, 5),
    author: "Elena Kim",
    category: "Community",
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
  },
  {
    id: 2,
    title: "Local Diaspora Businesses Receive Grant Funding",
    excerpt: "Ten diaspora-owned small businesses have been selected to receive grants as part of the Economic Empowerment Initiative, supporting entrepreneurship within immigrant communities.",
    content: "Ten diaspora-owned small businesses have been selected to receive grants as part of the Economic Empowerment Initiative, supporting entrepreneurship within immigrant communities. The grants, ranging from $5,000 to $15,000, will help these businesses expand operations, hire new employees, and invest in equipment and marketing.\n\nThe Economic Empowerment Initiative, a partnership between Intercambio Diaspora and the Regional Business Development Council, aims to address the unique challenges faced by immigrant entrepreneurs, including limited access to capital and business networks.\n\n\"Immigrant entrepreneurs bring valuable skills, perspectives, and services to our community,\" said David Chen, director of the initiative. \"These grants will help level the playing field and allow these businesses to thrive and contribute to our local economy.\"\n\nThe selected businesses represent a diverse range of industries, including food service, retail, professional services, and technology. All recipients will also receive business mentorship and participate in a six-month business development program.\n\nApplications for the next round of funding will open in September.",
    date: new Date(2025, 5, 12),
    author: "Marcus Johnson",
    category: "Business",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  },
  {
    id: 3,
    title: "Language Access Program Expands to Include Five New Languages",
    excerpt: "The city's Language Access Program has added Amharic, Nepali, Tagalog, Somali, and Hmong to its services, ensuring more community members can access essential information and resources.",
    content: "The city's Language Access Program has added Amharic, Nepali, Tagalog, Somali, and Hmong to its services, ensuring more community members can access essential information and resources. This expansion comes in response to demographic changes and advocacy from community organizations representing these language groups.\n\nThe program provides interpretation services for public meetings, translates essential documents, and ensures that city departments can effectively communicate with all residents, regardless of their English proficiency.\n\n\"Language should never be a barrier to accessing public services or participating in civic life,\" said Mayor Sophia Williams at the announcement event. \"This expansion reflects our commitment to being an inclusive city that values all of our residents.\"\n\nIntercambio Diaspora has been instrumental in advocating for this expansion and will partner with the city to recruit and train qualified interpreters and translators from these language communities.\n\n\"This is a significant step forward for our communities,\" said Abdi Hassan, language access coordinator at Intercambio Diaspora. \"Many people who speak these languages have valuable contributions to make to our city but have been limited by language barriers. This program will help them fully participate and access the resources they need.\"",
    date: new Date(2025, 5, 18),
    author: "Priya Sharma",
    category: "Policy",
    image: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
  },
  {
    id: 4,
    title: "Cultural Heritage Festival Draws Record Attendance",
    excerpt: "Last weekend's annual Cultural Heritage Festival attracted over 5,000 attendees, making it the most successful event in its 10-year history.",
    content: "Last weekend's annual Cultural Heritage Festival attracted over 5,000 attendees, making it the most successful event in its 10-year history. The festival, organized by Intercambio Diaspora, featured performances, food, art, and activities representing over 25 different cultural traditions.\n\nAttendees enjoyed dance performances ranging from traditional Mexican folkloric dance to Bollywood fusion, Ethiopian coffee ceremonies, hands-on craft workshops, and cuisine from around the world. The festival also included a marketplace where artisans sold handcrafted items, many using traditional techniques from their countries of origin.\n\n\"The festival has grown so much over the years,\" said Festival Director Luisa Morales. \"What started as a small gathering in a community center has become a major celebration that brings together people from all backgrounds to learn about and appreciate different cultures.\"\n\nMany attendees expressed appreciation for the opportunity to connect with their heritage and share it with others. \"I brought my children so they could experience the traditions I grew up with,\" said festival-goer James Nguyen. \"It's wonderful to see them engaging with their cultural heritage in such a joyful way.\"\n\nPlanning for next year's festival is already underway, with organizers considering expanding to a two-day event to accommodate growing interest.",
    date: new Date(2025, 5, 25),
    author: "Omar Farah",
    category: "Culture",
    image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  },
  {
    id: 5,
    title: "New Study Highlights Economic Contributions of Immigrant Communities",
    excerpt: "A comprehensive research study released today documents the significant economic impact of immigrant and diaspora communities in the region.",
    content: "A comprehensive research study released today documents the significant economic impact of immigrant and diaspora communities in the region. The study, conducted by the Urban Economic Institute in partnership with Intercambio Diaspora, found that immigrant-owned businesses generate over $1.2 billion in annual revenue and employ more than 8,500 people in the metropolitan area.\n\nThe research also highlighted that immigrants in the region have a higher rate of entrepreneurship than the general population, with 18% of immigrants owning their own businesses compared to 11% of the overall population.\n\n\"This study confirms what many of us have observed anecdotally: immigrant communities are a powerful economic force in our region,\" said Dr. Amina Osei, lead researcher on the project. \"From small family restaurants to tech startups, immigrant entrepreneurs are creating jobs, revitalizing neighborhoods, and contributing to innovation.\"\n\nThe study also examined the economic challenges faced by immigrant communities, including limited access to capital, language barriers, and unfamiliarity with local business regulations. It recommends several policy changes to address these barriers, including expanded microloan programs, streamlined business licensing processes, and increased language access services.\n\n\"We hope this research will inform policy decisions and help create a more supportive environment for immigrant entrepreneurs,\" said Carlos Mendez, economic development director at Intercambio Diaspora. \"When immigrant businesses thrive, the entire community benefits.\"",
    date: new Date(2025, 6, 2),
    author: "Sophia Chen",
    category: "Research",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80"
  },
  {
    id: 6,
    title: "Youth Leadership Program Launches with Focus on Cultural Identity",
    excerpt: "A new initiative aims to develop leadership skills in young people from diaspora communities while helping them explore and affirm their cultural identities.",
    content: "A new initiative aims to develop leadership skills in young people from diaspora communities while helping them explore and affirm their cultural identities. The Diaspora Youth Leadership Program, launched by Intercambio Diaspora in partnership with the Youth Empowerment Network, will work with 50 high school students over the course of a year.\n\nParticipants will engage in leadership training, community service projects, cultural exploration activities, and mentorship with successful professionals from similar cultural backgrounds. The program will culminate in community impact projects designed and implemented by the youth participants.\n\n\"Young people from immigrant families often navigate complex identities, balancing their heritage cultures with their experiences growing up here,\" said Program Director Fatima Noor. \"This program creates a space where they can explore these identities as strengths rather than conflicts, while developing the skills to become leaders in their communities.\"\n\nThe program received over 200 applications for its inaugural cohort, demonstrating high interest among youth and their families. Participants represent diverse cultural backgrounds, including Latin American, East African, South Asian, and East Asian communities.\n\n\"I'm excited to connect with other young people who understand what it's like to live between cultures,\" said Miguel Sanchez, a program participant. \"I want to learn how to be a leader who can make a difference in my community while staying true to my cultural roots.\"",
    date: new Date(2025, 6, 10),
    author: "Jamal Williams",
    category: "Youth",
    image: "https://images.unsplash.com/photo-1529390079861-591de354faf5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  }
];

// Available categories for filtering
const categories = ["All", "Community", "Business", "Policy", "Culture", "Research", "Youth"];

const News = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedArticle, setSelectedArticle] = useState<number | null>(null);

  // Filter news based on search term and category
  const filteredNews = newsData.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Local News</h1>
          <p className="text-xl max-w-3xl">Stay informed about news and developments relevant to diaspora communities in our region.</p>
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
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Tag className="h-5 w-5 text-gray-400" />
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
                    className="text-blue-700 font-medium mb-4 flex items-center hover:text-blue-800"
                    onClick={() => setSelectedArticle(null)}
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

export default News;