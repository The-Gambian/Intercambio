import React, { useState } from 'react';
import { Search, MessageCircle, User, Calendar, ArrowRight, ThumbsUp, MessageSquare } from 'lucide-react';
import { format } from 'date-fns';

// Sample discussions data
const discussionsData = [
  {
    id: 1,
    title: "Navigating the education system as immigrant parents",
    author: "Elena Rodriguez",
    date: new Date(2025, 5, 2),
    content: "My children started school here last year, and I'm finding it challenging to understand how the education system works. It's very different from what I experienced growing up. How do other immigrant parents navigate parent-teacher conferences, homework help, and school events when there are language and cultural barriers?",
    category: "Education",
    replies: [
      {
        id: 101,
        author: "Ahmed Hassan",
        date: new Date(2025, 5, 2, 14, 30),
        content: "I've been through this with my kids who are now in high school. What helped me was finding a 'buddy parent' - another parent at the school who could explain things to me. Many schools have cultural liaisons or translation services for conferences. Don't be afraid to ask for these resources!"
      },
      {
        id: 102,
        author: "Maria Chen",
        date: new Date(2025, 5, 3, 9, 15),
        content: "Intercambio Diaspora actually has a workshop specifically about this! I attended last month and it was incredibly helpful. They explained the school system, how grading works, what resources are available for ESL students, and how to advocate for your child. The next one is scheduled for July 15."
      },
      {
        id: 103,
        author: "James Okafor",
        date: new Date(2025, 5, 3, 16, 45),
        content: "One thing that helped our family was joining the school's parent association. It was intimidating at first, but it gave me insight into how the school operates and helped me build relationships with other parents and teachers. Many schools value diverse representation in these groups."
      }
    ],
    likes: 24
  },
  {
    id: 2,
    title: "Resources for learning the local language as an adult",
    author: "Mei Lin",
    date: new Date(2025, 5, 10),
    content: "I've been living here for six months and am struggling with language learning. The free classes at the community center have long waiting lists, and private tutoring is expensive. What resources have others found helpful for improving language skills while working full-time?",
    category: "Language",
    replies: [
      {
        id: 201,
        author: "Carlos Mendez",
        date: new Date(2025, 5, 10, 18, 20),
        content: "The language exchange program through Intercambio Diaspora has been fantastic for me. You meet weekly with a native speaker who wants to learn your language, and you help each other. It's free and you can schedule around your work hours."
      },
      {
        id: 202,
        author: "Fatima Noor",
        date: new Date(2025, 5, 11, 8, 10),
        content: "I've had good experiences with the app Duolingo for daily practice, combined with conversation groups at the library on weekends. The library groups are free and they have sessions at different levels."
      },
      {
        id: 203,
        author: "David Kim",
        date: new Date(2025, 5, 11, 12, 35),
        content: "Check if your workplace has any language learning benefits. My company partners with an online platform that offers courses, and they allow us to use it during lunch breaks or after hours."
      }
    ],
    likes: 31
  },
  {
    id: 3,
    title: "Maintaining cultural traditions with second-generation children",
    author: "Priya Sharma",
    date: new Date(2025, 5, 18),
    content: "My children were born here and are now 8 and 10 years old. While they understand our language, they prefer speaking English and sometimes seem embarrassed by our cultural traditions. How do other parents balance respecting their children's identities while passing down important cultural heritage?",
    category: "Family & Culture",
    replies: [
      {
        id: 301,
        author: "Sofia Kim",
        date: new Date(2025, 5, 18, 19, 45),
        content: "This resonates with me so much. What's worked for our family is making our cultural traditions fun and inclusive - we invite their friends to celebrations, make traditional cooking a family activity, and connect traditions to things they already enjoy. The cultural programs for kids at Intercambio Diaspora have also been wonderful because they meet other children navigating similar experiences."
      },
      {
        id: 302,
        author: "Omar Farah",
        date: new Date(2025, 5, 19, 10, 25),
        content: "I've found that storytelling helps - sharing family stories and the meaning behind traditions rather than just enforcing them. Also, as they get older, many children develop more interest in their heritage, especially if they've had positive associations with it throughout childhood."
      },
      {
        id: 303,
        author: "Lucia Gonzalez",
        date: new Date(2025, 5, 20, 14, 15),
        content: "We've created a 'both/and' rather than 'either/or' approach in our home. We celebrate both sets of holidays, cook foods from multiple traditions, and talk openly about navigating multiple cultures as a strength rather than a conflict. The teen identity group at Intercambio has been really helpful for my older children."
      }
    ],
    likes: 42
  },
  {
    id: 4,
    title: "Career transitions and credential recognition",
    author: "Jamal Ahmed",
    date: new Date(2025, 5, 25),
    content: "I was a civil engineer in my home country but my credentials aren't recognized here. I'm currently working in construction while trying to figure out the recertification process, which seems complicated and expensive. Has anyone successfully navigated a similar situation or know of resources that might help?",
    category: "Employment",
    replies: [
      {
        id: 401,
        author: "Maria Gonzalez",
        date: new Date(2025, 5, 25, 20, 10),
        content: "I went through this as a teacher. The professional mentorship program at Intercambio Diaspora connected me with someone in my field who helped me understand the certification requirements and find scholarships for the additional courses I needed. It took time, but I'm now teaching again."
      },
      {
        id: 402,
        author: "Amir Nouri",
        date: new Date(2025, 5, 26, 9, 30),
        content: "The Workforce Development Center downtown offers credential evaluation services and sometimes has grants to cover the costs. They also have advisors who specialize in helping internationally trained professionals navigate recertification."
      },
      {
        id: 403,
        author: "Sophia Chen",
        date: new Date(2025, 5, 27, 15, 45),
        content: "For engineering specifically, check out the International Engineering Pathway program. They offer exam prep courses, professional networking, and sometimes financial assistance for licensing exams. I'm currently in the program and can share more details if you're interested."
      }
    ],
    likes: 19
  },
  {
    id: 5,
    title: "Finding culturally appropriate mental health support",
    author: "Gabriel Okafor",
    date: new Date(2025, 6, 5),
    content: "I've been struggling with anxiety since moving here two years ago, but I'm finding it difficult to connect with therapists who understand the cultural and immigration aspects of my experience. Has anyone found mental health providers who are knowledgeable about working with people from diverse cultural backgrounds?",
    category: "Health & Wellbeing",
    replies: [
      {
        id: 501,
        author: "Amina Osei",
        date: new Date(2025, 6, 5, 17, 20),
        content: "The Multicultural Counseling Center has therapists from diverse backgrounds who specialize in immigration-related stress and cultural adjustment. They offer sliding scale fees and have evening/weekend appointments. Their support group for newcomers was particularly helpful for me."
      },
      {
        id: 502,
        author: "Carlos Mendez",
        date: new Date(2025, 6, 6, 11, 15),
        content: "Intercambio Diaspora has a directory of mental health providers who have training in culturally responsive care. They also offer peer support groups specific to different cultural communities, which can be a good supplement to individual therapy."
      },
      {
        id: 503,
        author: "Mei Lin",
        date: new Date(2025, 6, 7, 9, 30),
        content: "If you're comfortable with telehealth, there are now platforms that specifically match clients with therapists who share their cultural background or have expertise in immigration issues. This opened up many more options for me than were available locally."
      }
    ],
    likes: 28
  },
  {
    id: 6,
    title: "Starting a small business as an immigrant entrepreneur",
    author: "Carlos Mendez",
    date: new Date(2025, 6, 12),
    content: "I'm planning to start a small business based on my culinary skills from my home country. I understand the basics of business planning, but I'm unsure about regulations specific to food businesses and whether there are any special considerations or resources for immigrant entrepreneurs. Any advice or experiences to share?",
    category: "Entrepreneurship",
    replies: [
      {
        id: 601,
        author: "Amir Nouri",
        date: new Date(2025, 6, 12, 19, 45),
        content: "The Immigrant Entrepreneur Program at the Small Business Development Center was invaluable for me. They offer workshops in multiple languages, one-on-one business advising, and help navigating permits and regulations. They also connected me with microloans specifically for immigrant business owners."
      },
      {
        id: 602,
        author: "Sofia Kim",
        date: new Date(2025, 6, 13, 14, 30),
        content: "For food businesses specifically, look into commercial kitchen incubators. These are shared spaces where you can rent kitchen time by the hour, which is much more affordable than setting up your own commercial kitchen. Many offer business support services as well."
      },
      {
        id: 603,
        author: "Elena Rodriguez",
        date: new Date(2025, 6, 14, 10, 15),
        content: "Intercambio Diaspora hosts a monthly networking event for immigrant entrepreneurs where you can connect with others who have gone through the process. I've found the peer mentorship incredibly helpful. They also have a partnership with volunteer business advisors who can review your business plan."
      }
    ],
    likes: 35
  }
];

// Available categories for filtering
const categories = ["All", "Education", "Language", "Family & Culture", "Employment", "Health & Wellbeing", "Entrepreneurship"];

const Discussions = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedDiscussion, setSelectedDiscussion] = useState<number | null>(null);
  const [newReply, setNewReply] = useState("");

  // Filter discussions based on search term and category
  const filteredDiscussions = discussionsData.filter(discussion => {
    const matchesSearch = discussion.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          discussion.content.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || discussion.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleSubmitReply = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send the reply to a server
    // For this demo, we'll just clear the input
    setNewReply("");
    alert("In a real application, your reply would be posted now.");
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Community Discussions</h1>
          <p className="text-xl max-w-3xl">Connect with other community members, ask questions, share experiences, and offer support.</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search and Filter */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-grow relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search discussions..."
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
            <button className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-2 rounded-md font-medium transition">
              New Discussion
            </button>
          </div>
        </div>

        {/* Discussions List */}
        {!selectedDiscussion && (
          <div className="space-y-6 mb-12">
            {filteredDiscussions.map(discussion => (
              <div 
                key={discussion.id} 
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition cursor-pointer"
                onClick={() => setSelectedDiscussion(discussion.id)}
              >
                <div className="p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full mb-2">
                        {discussion.category}
                      </span>
                      <h3 className="text-xl font-bold mb-2">{discussion.title}</h3>
                    </div>
                    <div className="flex items-center text-gray-500 space-x-4">
                      <div className="flex items-center">
                        <ThumbsUp className="h-4 w-4 mr-1" />
                        <span>{discussion.likes}</span>
                      </div>
                      <div className="flex items-center">
                        <MessageSquare className="h-4 w-4 mr-1" />
                        <span>{discussion.replies.length}</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{discussion.content.length > 200 ? `${discussion.content.substring(0, 200)}...` : discussion.content}</p>
                  
                  <div className="flex justify-between items-center">
                    <div className="flex items-center text-gray-500">
                      <User className="h-4 w-4 mr-1" />
                      <span className="mr-3">{discussion.author}</span>
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{format(discussion.date, "MMMM d, yyyy")}</span>
                    </div>
                    <button 
                      className="text-blue-700 font-medium flex items-center hover:text-blue-800"
                      onClick={() => setSelectedDiscussion(discussion.id)}
                    >
                      View Discussion <ArrowRight className="ml-2 h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}

            {filteredDiscussions.length === 0 && (
              <div className="text-center py-12">
                <h3 className="text-xl font-medium text-gray-600">No discussions found matching your criteria</h3>
                <p className="mt-2 text-gray-500">Try adjusting your search or filter settings</p>
              </div>
            )}
          </div>
        )}

        {/* Discussion Detail View */}
        {selectedDiscussion && (
          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-12">
            {discussionsData.filter(discussion => discussion.id === selectedDiscussion).map(discussion => (
              <div key={discussion.id}>
                <div className="p-6 border-b border-gray-200">
                  <button 
                    className="text-blue-700 font-medium mb-4 flex items-center hover:text-blue-800"
                    onClick={() => setSelectedDiscussion(null)}
                  >
                    &larr; Back to Discussions
                  </button>
                  
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full mb-2">
                        {discussion.category}
                      </span>
                      <h1 className="text-2xl font-bold mb-2">{discussion.title}</h1>
                    </div>
                    <div className="flex items-center text-gray-500">
                      <ThumbsUp className="h-5 w-5 mr-1" />
                      <span>{discussion.likes}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center text-gray-500 mb-4">
                    <User className="h-4 w-4 mr-1" />
                    <span className="mr-3">{discussion.author}</span>
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{format(discussion.date, "MMMM d, yyyy")}</span>
                  </div>
                  
                  <p className="text-gray-700 mb-4">{discussion.content}</p>
                  
                  <div className="flex space-x-4">
                    <button className="flex items-center text-gray-500 hover:text-blue-700">
                      <ThumbsUp className="h-5 w-5 mr-1" />
                      <span>Like</span>
                    </button>
                    <button className="flex items-center text-gray-500 hover:text-blue-700">
                      <MessageCircle className="h-5 w-5 mr-1" />
                      <span>Reply</span>
                    </button>
                  </div>
                </div>
                
                <div className="p-6">
                  <h2 className="text-xl font-semibold mb-4">Replies ({discussion.replies.length})</h2>
                  
                  <div className="space-y-6 mb-8">
                    {discussion.replies.map(reply => (
                      <div key={reply.id} className="border-b border-gray-100 pb-6 last:border-0">
                        <div className="flex items-start">
                          <div className="flex-shrink-0">
                            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                              <User className="h-5 w-5 text-blue-700" />
                            </div>
                          </div>
                          <div className="ml-3 flex-grow">
                            <div className="flex justify-between">
                              <div>
                                <p className="text-sm font-medium text-gray-900">{reply.author}</p>
                                <p className="text-sm text-gray-500">{format(reply.date, "MMMM d, yyyy 'at' h:mm a")}</p>
                              </div>
                            </div>
                            <div className="mt-2 text-gray-700">
                              <p>{reply.content}</p>
                            </div>
                            <div className="mt-2">
                              <button className="text-sm text-gray-500 hover:text-blue-700">Like</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <form onSubmit={handleSubmitReply}>
                    <h3 className="text-lg font-semibold mb-3">Add Your Reply</h3>
                    <textarea
                      className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-3"
                      rows={4}
                      placeholder="Share your thoughts or experiences..."
                      value={newReply}
                      onChange={(e) => setNewReply(e.target.value)}
                    ></textarea>
                    <button 
                      type="submit" 
                      className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-2 rounded-md font-medium transition"
                    >
                      Post Reply
                    </button>
                  </form>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Discussions;