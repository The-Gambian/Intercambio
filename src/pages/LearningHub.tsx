import React, { useState } from 'react';
import { Search, BookOpen, Video, FileText, Download, Users, Clock, ArrowRight } from 'lucide-react';

// Sample learning resources data
const resourcesData = [
  {
    id: 1,
    title: "Language Learning Resources",
    description: "Resources for learning the local language, including courses, practice materials, and conversation groups.",
    resources: [
      {
        id: 101,
        title: "Beginner Language Course",
        type: "course",
        description: "A comprehensive 8-week course covering basic vocabulary, grammar, and conversation skills.",
        level: "Beginner",
        duration: "8 weeks",
        format: "In-person & Online",
        image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2022&q=80"
      },
      {
        id: 102,
        title: "Intermediate Conversation Group",
        type: "group",
        description: "Weekly conversation practice with native speakers and other learners at an intermediate level.",
        level: "Intermediate",
        duration: "Ongoing",
        format: "In-person",
        image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
      },
      {
        id: 103,
        title: "Language Learning App Guide",
        type: "guide",
        description: "A comparison of popular language learning apps with recommendations for different learning styles.",
        level: "All Levels",
        format: "PDF",
        image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
      },
      {
        id: 104,
        title: "Advanced Grammar Workshop",
        type: "workshop",
        description: "A focused workshop on complex grammar structures for advanced language learners.",
        level: "Advanced",
        duration: "4 weeks",
        format: "Online",
        image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
      }
    ]
  },
  {
    id: 2,
    title: "Cultural Adaptation",
    description: "Resources to help navigate cultural differences, understand local customs, and manage culture shock.",
    resources: [
      {
        id: 201,
        title: "Cultural Norms and Practices Guide",
        type: "guide",
        description: "An overview of local cultural norms, social etiquette, and common practices.",
        level: "All Levels",
        format: "PDF",
        image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80"
      },
      {
        id: 202,
        title: "Managing Culture Shock Workshop",
        type: "workshop",
        description: "Strategies for recognizing and coping with the stages of culture shock.",
        duration: "2 weeks",
        format: "In-person",
        image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
      },
      {
        id: 203,
        title: "Cross-Cultural Communication",
        type: "course",
        description: "Learn to navigate communication styles, non-verbal cues, and potential misunderstandings across cultures.",
        duration: "6 weeks",
        format: "Online",
        image: "https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2047&q=80"
      }
    ]
  },
  {
    id: 3,
    title: "Professional Development",
    description: "Resources for career advancement, credential recognition, job searching, and workplace culture.",
    resources: [
      {
        id: 301,
        title: "Resume and Cover Letter Workshop",
        type: "workshop",
        description: "Learn how to create effective resumes and cover letters that highlight your skills and experience for the local job market.",
        duration: "1 day",
        format: "In-person & Online",
        image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
      },
      {
        id: 302,
        title: "Credential Recognition Guide",
        type: "guide",
        description: "Information on how to get foreign credentials recognized, including processes for different professions.",
        level: "All Levels",
        format: "PDF",
        image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
      },
      {
        id: 303,
        title: "Networking for Professional Success",
        type: "course",
        description: "Strategies for building professional networks, including informational interviews, industry events, and online networking.",
        duration: "4 weeks",
        format: "In-person",
        image: "https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
      },
      {
        id: 304,
        title: "Interview Skills Practice Group",
        type: "group",
        description: "Practice interview skills with peers and receive feedback from career counselors.",
        duration: "Ongoing",
        format: "In-person & Online",
        image: "https://images.unsplash.com/photo-1565688534245-05d6b5be184a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
      }
    ]
  },
  {
    id: 4,
    title: "Family Resources",
    description: "Resources for parents, children, and families navigating education, parenting, and family life in a new cultural context.",
    resources: [
      {
        id: 401,
        title: "Navigating the School System",
        type: "workshop",
        description: "Understanding the local education system, including enrollment, parent involvement, and supporting your child's learning.",
        duration: "1 day",
        format: "In-person",
        image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2022&q=80"
      },
      {
        id: 402,
        title: "Bicultural Parenting Support Group",
        type: "group",
        description: "Connect with other parents raising children between cultures to share challenges, strategies, and resources.",
        duration: "Ongoing",
        format: "In-person",
        image: "https://images.unsplash.com/photo-1536640712-4d4c36ff0e4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
      },
      {
        id: 403,
        title: "Heritage Language Resources for Children",
        type: "guide",
        description: "Strategies and resources for helping children maintain their heritage language while learning the local language.",
        level: "All Levels",
        format: "PDF",
        image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2022&q=80"
      }
    ]
  },
  {
    id: 5,
    title: "Legal and Civic Education",
    description: "Resources on legal rights, immigration processes, civic participation, and community engagement.",
    resources: [
      {
        id: 501,
        title: "Know Your Rights Workshop",
        type: "workshop",
        description: "Information on legal rights regardless of immigration status, including employment, housing, and interactions with authorities.",
        duration: "1 day",
        format: "In-person & Online",
        image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
      },
      {
        id: 502,
        title: "Citizenship Preparation Course",
        type: "course",
        description: "Preparation for the citizenship test, including history, government, and interview practice.",
        duration: "10 weeks",
        format: "In-person",
        image: "https://images.unsplash.com/photo-1569025690938-a00729c9e1f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
      },
      {
        id: 503,
        title: "Community Advocacy Training",
        type: "workshop",
        description: "Learn how to advocate for your community's needs through civic engagement and community organizing.",
        duration: "4 weeks",
        format: "In-person",
        image: "https://images.unsplash.com/photo-1464998857633-50e59fbf2fe6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
      }
    ]
  }
];

// Resource type icons
const resourceTypeIcons = {
  course: <BookOpen className="h-5 w-5" />,
  workshop: <Users className="h-5 w-5" />,
  guide: <FileText className="h-5 w-5" />,
  video: <Video className="h-5 w-5" />,
  group: <Users className="h-5 w-5" />
};

const LearningHub = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedCategory, setExpandedCategory] = useState<number | null>(null);
  const [selectedResource, setSelectedResource] = useState<{categoryId: number, resourceId: number} | null>(null);

  // Filter resources based on search term
  const filteredCategories = resourcesData.filter(category => {
    // Check if category title or description matches search
    const categoryMatches = category.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            category.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    // Check if any resources in the category match search
    const resourcesMatch = category.resources.some(resource => 
      resource.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
      resource.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
    return categoryMatches || resourcesMatch;
  });

  const toggleCategory = (categoryId: number) => {
    if (expandedCategory === categoryId) {
      setExpandedCategory(null);
    } else {
      setExpandedCategory(categoryId);
    }
  };

  const openResourceDetail = (categoryId: number, resourceId: number) => {
    setSelectedResource({ categoryId, resourceId });
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Learning Hub</h1>
          <p className="text-xl max-w-3xl">Access educational resources, courses, and materials to support your personal and professional development.</p>
        </div>
      </div>

      {/* Search */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search for resources, courses, workshops..."
              className="pl-10 pr-4 py-3 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Resource Categories */}
        {!selectedResource && (
          <div className="space-y-8 mb-12">
            {filteredCategories.map(category => (
              <div key={category.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div 
                  className="p-6 cursor-pointer hover:bg-gray-50 transition"
                  onClick={() => toggleCategory(category.id)}
                >
                  <div className="flex justify-between items-center">
                    <h2 className="text-2xl font-bold">{category.title}</h2>
                    <button className="text-blue-700">
                      {expandedCategory === category.id ? 'Collapse' : 'Expand'}
                    </button>
                  </div>
                  <p className="text-gray-600 mt-2">{category.description}</p>
                </div>
                
                {expandedCategory === category.id && (
                  <div className="border-t border-gray-200 p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {category.resources.map(resource => (
                        <div 
                          key={resource.id} 
                          className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition cursor-pointer"
                          onClick={() => openResourceDetail(category.id, resource.id)}
                        >
                          <img 
                            src={resource.image} 
                            alt={resource.title} 
                            className="w-full h-40 object-cover"
                          />
                          <div className="p-4">
                            <div className="flex items-center text-sm text-blue-700 font-medium mb-2">
                              {resourceTypeIcons[resource.type as keyof typeof resourceTypeIcons]}
                              <span className="ml-1 capitalize">{resource.type}</span>
                            </div>
                            <h3 className="text-lg font-bold mb-2">{resource.title}</h3>
                            <p className="text-gray-600 text-sm mb-3">{resource.description}</p>
                            
                            <div className="flex flex-wrap gap-2 mb-3">
                              {resource.level && (
                                <span className="bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded-full">
                                  {resource.level}
                                </span>
                              )}
                              {resource.format && (
                                <span className="bg-green-50 text-green-700 text-xs px-2 py-1 rounded-full">
                                  {resource.format}
                                </span>
                              )}
                              {resource.duration && (
                                <span className="bg-purple-50 text-purple-700 text-xs px-2 py-1 rounded-full flex items-center">
                                  <Clock className="h-3 w-3 mr-1" />
                                  {resource.duration}
                                </span>
                              )}
                            </div>
                            
                            <button 
                              className="text-blue-700 font-medium flex items-center hover:text-blue-800 text-sm"
                              onClick={() => openResourceDetail(category.id, resource.id)}
                            >
                              View Details <ArrowRight className="ml-1 h-4 w-4" />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}

            {filteredCategories.length === 0 && (
              <div className="text-center py-12">
                <h3 className="text-xl font-medium text-gray-600">No resources found matching your search</h3>
                <p className="mt-2 text-gray-500">Try adjusting your search terms</p>
              </div>
            )}
          </div>
        )}

        {/* Resource Detail View */}
        {selectedResource && (
          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-12">
            {resourcesData
              .filter(category => category.id === selectedResource.categoryId)
              .map(category => (
                category.resources
                  .filter(resource => resource.id === selectedResource.resourceId)
                  .map(resource => (
                    <div key={resource.id}>
                      <img 
                        src={resource.image} 
                        alt={resource.title} 
                        className="w-full h-64 md:h-96 object-cover"
                      />
                      <div className="p-6 md:p-8">
                        <button 
                          className="text-blue-700 font-medium mb-4 flex items-center hover:text-blue-800"
                          onClick={() => setSelectedResource(null)}
                        >
                          &larr; Back to Resources
                        </button>
                        
                        <div className="flex items-center text-sm text-blue-700 font-medium mb-2">
                          {resourceTypeIcons[resource.type as keyof typeof resourceTypeIcons]}
                          <span className="ml-1 capitalize">{resource.type}</span>
                        </div>
                        
                        <h1 className="text-3xl font-bold mb-4">{resource.title}</h1>
                        
                        <div className="flex flex-wrap gap-3 mb-6">
                          {resource.level && (
                            <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full">
                              {resource.level}
                            </span>
                          )}
                          {resource.format && (
                            <span className="bg-green-50 text-green-700 px-3 py-1 rounded-full">
                              {resource.format}
                            </span>
                          )}
                          {resource.duration && (
                            <span className="bg-purple-50 text-purple-700 px-3 py-1 rounded-full flex items-center">
                              <Clock className="h-4 w-4 mr-1" />
                              {resource.duration}
                            </span>
                          )}
                        </div>
                        
                        <div className="prose max-w-none mb-8">
                          <h2 className="text-xl font-semibold mb-3">Description</h2>
                          <p className="text-gray-700">{resource.description}</p>
                          
                          {/* Additional content would be here in a real application */}
                          <div className="mt-6">
                            <h2 className="text-xl font-semibold mb-3">What You'll Learn</h2>
                            <ul className="list-disc pl-5 space-y-2 text-gray-700">
                              <li>Comprehensive understanding of key concepts and principles</li>
                              <li>Practical skills that you can apply immediately</li>
                              <li>Strategies for overcoming common challenges</li>
                              <li>Resources for continued learning and development</li>
                            </ul>
                          </div>
                          
                          {resource.type === 'course' && (
                            <div className="mt-6">
                              <h2 className="text-xl font-semibold mb-3">Course Structure</h2>
                              <p className="text-gray-700">This course is structured to provide both theoretical knowledge and practical application. Sessions include interactive discussions, hands-on activities, and opportunities for reflection and feedback.</p>
                            </div>
                          )}
                          
                          {resource.type === 'workshop' && (
                            <div className="mt-6">
                              <h2 className="text-xl font-semibold mb-3">Workshop Format</h2>
                              <p className="text-gray-700">This interactive workshop combines presentation, group activities, and individual exercises to ensure participants can apply what they learn to their specific situations.</p>
                            </div>
                          )}
                        </div>
                        
                        <div className="flex flex-col sm:flex-row gap-4">
                          {resource.type === 'guide' && (
                            <button className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-md font-medium transition flex items-center justify-center">
                              <Download className="mr-2 h-5 w-5" />
                              Download Guide
                            </button>
                          )}
                          
                          {(resource.type === 'course' || resource.type === 'workshop') && (
                            <button className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-md font-medium transition flex items-center justify-center">
                              Register Now
                            </button>
                          )}
                          
                          {resource.type === 'group' && (
                            <button className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-md font-medium transition flex items-center justify-center">
                              Join Group
                            </button>
                          )}
                          
                          <button className="border border-blue-700 text-blue-700 hover:bg-blue-50 px-6 py-3 rounded-md font-medium transition flex items-center justify-center">
                            Contact for More Information
                          </button>
                        </div>
                      </div>
                    </div>
                  ))
              ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default LearningHub;