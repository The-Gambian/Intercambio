import React, { useState } from 'react';
import { Search, BookOpen, Video, FileText, Users, ArrowRight, ExternalLink } from 'lucide-react';

// Sample learning resources data
const resourcesData = [
  {
    id: 1,
    title: "Getting Started in Portugal",
    description: "Essential resources for newcomers to Portugal",
    resources: [
      {
        id: 101,
        type: "guide",
        title: "Immigration & Documentation Guide",
        description: "Step-by-step guidance on visas, residence permits (D7, D2, etc.), and citizenship processes in Portugal",
        image: "https://i.im.ge/2025/04/22/vOgYlc.IMG-20231125-WA0027.jpeg"
      },
      {
        id: 102,
        type: "workshop",
        title: "Portuguese Bureaucracy Navigation",
        description: "Understanding SEF, Finanças, Social Security, and other essential government services",
        image: "https://i.im.ge/2025/04/22/vOgb0L.IMG-20240706-WA0029-1.jpeg"
      },
      {
        id: 103,
        type: "guide",
        title: "Housing in Portugal",
        description: "Guide to finding accommodation, rental processes, and understanding tenant rights",
        image: "https://i.im.ge/2025/04/22/vOggex.WhatsApp-Image-2025-03-18-at-16-10-11-1.jpeg"
      }
    ]
  },
  {
    id: 2,
    title: "Language Learning Resources",
    description: "Tools and resources for learning Portuguese",
    resources: [
      {
        id: 201,
        type: "guide",
        title: "Find a Portuguese Teacher",
        description: "Directory of qualified Portuguese language teachers offering private and group lessons",
        image: "https://i.im.ge/2025/04/22/vOgWCJ.WhatsApp-Image-2025-03-22-at-21-11-43.jpeg"
      },
      {
        id: 202,
        type: "guide",
        title: "Language Learning Apps",
        description: "Recommended apps and online platforms for Portuguese language learning (Duolingo, Babbel, Memrise, etc.)",
        image: "https://i.im.ge/2025/04/22/vO8YPY.WhatsApp-Image-2025-04-13-at-09-48-10.jpeg"
      },
      {
        id: 203,
        type: "course",
        title: "Portuguese Language Exchange",
        description: "Weekly conversation practice with native speakers and fellow learners",
        image: "https://i.im.ge/2025/04/22/vOgxVT.Brown-And-Beige-Modern-Summer-Movie-Night-Instagram-Post-1.png"
      },
      {
        id: 204,
        type: "guide",
        title: "Study Resources",
        description: "Books, podcasts, YouTube channels, and other materials for Portuguese learning",
        image: "https://i.im.ge/2025/04/22/vOgYlc.IMG-20231125-WA0027.jpeg"
      }
    ]
  },
  {
    id: 3,
    title: "Cultural Integration",
    description: "Resources for understanding and celebrating cultural heritage",
    resources: [
      {
        id: 301,
        type: "workshop",
        title: "African Heritage Celebrations",
        description: "Calendar of cultural events, festivals, and celebrations in the African diaspora community",
        image: "https://i.im.ge/2025/04/22/vOgb0L.IMG-20240706-WA0029-1.jpeg"
      },
      {
        id: 302,
        type: "guide",
        title: "Music & Arts Scene",
        description: "Guide to African and Afro-Portuguese music events, concerts, and artistic expressions",
        image: "https://i.im.ge/2025/04/22/vOggex.WhatsApp-Image-2025-03-18-at-16-10-11-1.jpeg"
      },
      {
        id: 303,
        type: "workshop",
        title: "Cultural Workshops",
        description: "Traditional dance, music, cooking, and craft workshops celebrating African heritage",
        image: "https://i.im.ge/2025/04/22/vOgWCJ.WhatsApp-Image-2025-03-22-at-21-11-43.jpeg"
      },
      {
        id: 304,
        type: "guide",
        title: "Community Spaces",
        description: "Directory of cultural centers, museums, and venues celebrating African diaspora culture",
        image: "https://i.im.ge/2025/04/22/vO8YPY.WhatsApp-Image-2025-04-13-at-09-48-10.jpeg"
      }
    ]
  },
  {
    id: 4,
    title: "Professional Development",
    description: "Career advancement and business resources",
    resources: [
      {
        id: 401,
        type: "workshop",
        title: "Professional Networking",
        description: "Building professional connections in Portugal's job market",
        image: "https://i.im.ge/2025/04/22/vOgYlc.IMG-20231125-WA0027.jpeg"
      },
      {
        id: 402,
        type: "guide",
        title: "Entrepreneurship in Portugal",
        description: "Guide to starting and running a business, including legal requirements and funding opportunities",
        image: "https://i.im.ge/2025/04/22/vOgb0L.IMG-20240706-WA0029-1.jpeg"
      },
      {
        id: 403,
        type: "workshop",
        title: "Qualification Recognition",
        description: "Process for recognizing foreign qualifications and professional certifications",
        image: "https://i.im.ge/2025/04/22/vOggex.WhatsApp-Image-2025-03-18-at-16-10-11-1.jpeg"
      }
    ]
  },
  {
    id: 5,
    title: "Family & Education",
    description: "Resources for families and educational support",
    resources: [
      {
        id: 501,
        type: "guide",
        title: "Portuguese Education System",
        description: "Understanding schools, enrollment, and educational support for children",
        image: "https://i.im.ge/2025/04/22/vOgWCJ.WhatsApp-Image-2025-03-22-at-21-11-43.jpeg"
      },
      {
        id: 502,
        type: "workshop",
        title: "Parenting in Portugal",
        description: "Support group for African and Afro-descendant parents navigating cultural differences",
        image: "https://i.im.ge/2025/04/22/vO8YPY.WhatsApp-Image-2025-04-13-at-09-48-10.jpeg"
      },
      {
        id: 503,
        type: "guide",
        title: "Healthcare Navigation",
        description: "Accessing healthcare services, insurance, and medical care for families",
        image: "https://i.im.ge/2025/04/22/vOgxVT.Brown-And-Beige-Modern-Summer-Movie-Night-Instagram-Post-1.png"
      }
    ]
  }
];

const LearningHub: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleResourceClick = () => {
    window.open('https://5pzn0sic.forms.app/lead-generation-form', '_blank');
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Learning Hub</h1>
          <p className="text-xl max-w-3xl">Access resources, guides, and support for your journey in Portugal.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search bar */}
        <div className="relative mb-8">
          <input
            type="text"
            placeholder="Search resources..."
            className="w-full p-4 pl-12 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>

        {/* Resource categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resourcesData.map((category) => (
            <div key={category.id} className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold mb-4">{category.title}</h2>
              <p className="text-gray-600 mb-6">{category.description}</p>
              
              {/* Resources list */}
              <div className="space-y-4">
                {category.resources.map((resource) => (
                  <div key={resource.id} className="flex items-start space-x-4">
                    {/* Resource type icon */}
                    <div className="p-2 bg-blue-100 rounded-lg">
                      {resource.type === 'guide' && <BookOpen className="text-blue-600" />}
                      {resource.type === 'workshop' && <Users className="text-blue-600" />}
                      {resource.type === 'course' && <Video className="text-blue-600" />}
                      {resource.type === 'group' && <Users className="text-blue-600" />}
                    </div>
                    
                    {/* Resource content */}
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg">{resource.title}</h3>
                      <p className="text-gray-600 text-sm">{resource.description}</p>
                      <button 
                        onClick={handleResourceClick}
                        className="mt-2 text-blue-600 flex items-center text-sm hover:text-blue-800"
                      >
                        Contact for more information <ExternalLink className="ml-1 w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LearningHub;