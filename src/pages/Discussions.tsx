import React, { useState } from 'react';
import { Calendar, MessageCircle, Share2, ExternalLink } from 'lucide-react';
import { format } from 'date-fns';
import { useLanguage } from '../contexts/LanguageContext';

// Featured discussion topics that link to external forms/resources
const featuredTopics = [
  {
    id: 1,
    title: "Share Your Story",
    description: "Contribute to our community narrative by sharing your experiences as part of the African diaspora in Portugal.",
    category: "Personal Stories",
    image: "https://imgur.com/a/8XM3ncS.jpeg",
    formLink: "https://5pzn0sic.forms.app/lead-generation-form"
  },
  {
    id: 2,
    title: "Language Exchange",
    description: "Connect with language partners and join our conversation groups for Portuguese and English practice.",
    category: "Language Learning",
    image: "https://imgur.com/Gg2oDX9.jpeg",
    formLink: "https://5pzn0sic.forms.app/lead-generation-form"
  },
  {
    id: 3,
    title: "Cultural Events",
    description: "Suggest cultural activities or collaborate on upcoming community events.",
    category: "Events",
    image: "/africa-day.png",
    formLink: "https://5pzn0sic.forms.app/lead-generation-form"
  }
];

// Community highlights showcasing recent activities
const communityHighlights = [
  {
    id: 1,
    title: "African Heritage Day Celebration",
    description: "Over 200 community members came together to celebrate our diverse cultural heritage through music, dance, and food.",
    date: new Date(2024, 3, 15),
    image: "https://imgur.com/8duHj80.jpeg",
    link: "https://www.instagram.com/intercambios_diaspora/"
  },
  {
    id: 2,
    title: "Language Exchange Meetup",
    description: "Weekly language exchange bringing together Portuguese learners and native speakers for cultural and linguistic exchange.",
    date: new Date(2024, 3, 10),
    image: "/language-exchange.jpeg",
    link: "https://www.instagram.com/intercambios_diaspora/"
  }
];

// Social media integration
const socialChannels = [
  {
    id: 1,
    platform: "Instagram",
    handle: "@intercambios_diaspora",
    link: "https://www.instagram.com/intercambios_diaspora/",
    description: "Follow us for event updates, community stories, and cultural content"
  },
  {
    id: 2,
    platform: "LinkedIn",
    handle: "Intercâmbio Diáspora",
    link: "https://www.linkedin.com/company/intercambio-diaspora/",
    description: "Connect for professional networking and community news"
  },
  {
    id: 3,
    platform: "Facebook",
    handle: "Intercâmbio Diáspora Community",
    link: "https://www.facebook.com/groups/717321330191930/",
    description: "Join our Facebook group for community discussions"
  }
];

const Discussions = () => {
  const { t } = useLanguage();
  const [selectedTopic, setSelectedTopic] = useState<number | null>(null);

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-pan-red text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">{t('discussions.title')}</h1>
          <p className="text-xl max-w-3xl">{t('discussions.subtitle')}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Featured Topics */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">{t('discussions.participate.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredTopics.map(topic => (
              <div key={topic.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img 
                  src={topic.image} 
                  alt={topic.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full mb-2">
                    {topic.category}
                  </span>
                  <h3 className="text-xl font-bold mb-2">{topic.title}</h3>
                  <p className="text-gray-600 mb-4">{topic.description}</p>
                  <a
                    href="/contact"
                    className="inline-flex items-center text-blue-700 hover:text-blue-800"
                  >
                    Get Involved <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Community Highlights */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">{t('discussions.highlights.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {communityHighlights.map(highlight => (
              <div key={highlight.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-2/5">
                    <img 
                      src={highlight.image} 
                      alt={highlight.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 md:w-3/5">
                    <div className="flex items-center text-sm text-blue-700 mb-2">
                      <Calendar className="h-4 w-4 mr-1" />
                      {format(highlight.date, "MMMM d, yyyy")}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{highlight.title}</h3>
                    <p className="text-gray-600 mb-4">{highlight.description}</p>
                    <a
                      href={highlight.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-700 hover:text-blue-800"
                    >
                      {t('discussions.viewOnInstagram')} <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Social Media Integration */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-8">{t('discussions.connect.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {socialChannels.map(channel => (
              <div key={channel.id} className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center mb-4">
                  <Share2 className="h-6 w-6 text-blue-700 mr-2" />
                  <h3 className="text-xl font-bold">{channel.platform}</h3>
                </div>
                <p className="text-blue-700 font-medium mb-2">{channel.handle}</p>
                <p className="text-gray-600 mb-4">{channel.description}</p>
                <a
                  href={channel.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-700 hover:text-blue-800"
                >
                  {t('discussions.followUs')} <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Discussions;