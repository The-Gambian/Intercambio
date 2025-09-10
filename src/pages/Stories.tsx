import React, { useState } from 'react';
import { Search, Calendar, User, ArrowRight, Heart, Share2, MessageCircle } from 'lucide-react';
import { format } from 'date-fns';
import { useLanguage } from '../contexts/LanguageContext';

// Featured story data
const featuredStory = {
  id: 'featured',
  title: "From Gambia to Portugal: Building Bridges Across Cultures",
  author: "Malik Jallow",
  date: new Date(2024, 3, 15),
  excerpt: "A co-founder's journey from Banjul to Lisbon, discovering how cultural exchange can create powerful communities that honor heritage while embracing new possibilities.",
  content: "When I left Gambia for Portugal in 2019, I thought I was simply pursuing better opportunities. What I discovered was something far more profound - the power of diaspora communities to create spaces where we don't have to choose between our heritage and our future.\n\nGrowing up in Banjul, community was everything. Extended families, neighborhood gatherings, shared meals - these weren't just social activities, they were the fabric that held us together. When I arrived in Lisbon, I felt that fabric had been torn. I was successful in my studies and work, but something essential was missing.\n\nThe turning point came during a chance encounter at a Portuguese language class. I met other Africans, Afro-descendants, and allies who shared similar feelings of being caught between worlds. We started meeting informally - sharing meals, practicing Portuguese, talking about our experiences. These gatherings reminded me of the community spirit I grew up with in Gambia, but with a new dimension: we were creating something that honored our diverse backgrounds while building something new together.\n\nThis is how Intercâmbio Diáspora was born. Not from a business plan, but from a genuine need to recreate the sense of belonging that diaspora communities often lose. We realized that our stories - of migration, adaptation, success, and struggle - were not just personal narratives but collective experiences that could inspire and support others.\n\nToday, when I see young Africans at our events finding mentors, or when I watch Portuguese locals learning about African cultures with genuine curiosity and respect, I know we've created something special. We've built a bridge that allows people to cross between cultures without losing themselves.\n\nThe diaspora experience taught me that home isn't just a place you come from - it's also something you can create wherever you are, with whoever shares your vision of community and belonging.",
  image: "https://i.imgur.com/j7O5Vuv.jpg",
  category: "Personal Journey",
  tags: ["Migration", "Community Building", "Cultural Identity", "Gambia", "Founders"]
};

// Story data for the grid
const storiesData = [
  {
    id: '1',
    title: "From Atlanta to Lisbon: Redefining Home in the African Diaspora",
    author: "Ebony Washington",
    date: new Date(2024, 3, 10),
    excerpt: "An African-American co-founder's perspective on finding community and purpose in Portugal while navigating identity, belonging, and the global African diaspora experience.",
    image: "https://i.imgur.com/eqADTrh.jpg",
    category: "Diaspora Identity",
    tags: ["African-American", "Identity", "Community", "USA", "Founders"]
  },
  {
    id: '2',
    title: "The Language of Belonging: Learning Portuguese as Cultural Bridge",
    author: "Amara Diallo",
    date: new Date(2024, 3, 8),
    excerpt: "How mastering Portuguese became more than language learning - it became a pathway to deeper cultural understanding and community connection in the diaspora.",
    image: "https://imgur.com/Um1K5jA.jpeg",
    category: "Language & Integration",
    tags: ["Language Learning", "Integration", "Cultural Exchange"]
  },
  {
    id: '3',
    title: "Raising Third Culture Kids: Preserving Heritage in Portugal",
    author: "Fatima Santos",
    date: new Date(2024, 3, 5),
    excerpt: "A mother's journey of raising children who are proud of their African heritage while fully integrated into Portuguese society - navigating identity, education, and belonging.",
    image: "https://i.imgur.com/vchikwW.jpg",
    category: "Family & Heritage",
    tags: ["Parenting", "Third Culture Kids", "Heritage", "Education"]
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
  const { t } = useLanguage();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Stories");
  const [selectedThemes, setSelectedThemes] = useState<string[]>([]);
  const [showSubmitForm, setShowSubmitForm] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-pan-red text-white py-16">
        <div className="absolute inset-0 bg-gradient-to-r from-red-900 to-red-700 opacity-90"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">{t('stories.title')}</h1>
          <p className="text-lg max-w-3xl mb-6">
            {t('stories.subtitle')}
          </p>
          <button 
            onClick={() => setShowSubmitForm(true)}
            className="bg-white text-red-900 px-8 py-3 rounded-md font-medium hover:bg-red-50 transition"
          >
            {t('stories.shareStory')}
          </button>
        </div>
      </div>

      {/* Featured Story */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12">
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
              <div className="flex items-center text-sm text-red-600 mb-4">
                <Calendar className="h-4 w-4 mr-2" />
                {format(featuredStory.date, "MMMM d, yyyy")}
              </div>
              <h2 className="text-3xl font-bold mb-4">{featuredStory.title}</h2>
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                  <User className="h-6 w-6 text-red-600" />
                </div>
                <div className="ml-3">
                  <p className="font-medium">{featuredStory.author}</p>
                  <p className="text-sm text-gray-500">{featuredStory.category}</p>
                </div>
              </div>
              <p className="text-gray-600 mb-6">{featuredStory.excerpt}</p>
              <div className="flex items-center space-x-4">
                <button className="flex items-center text-gray-500 hover:text-red-600">
                  <Heart className="h-5 w-5 mr-1" />
                  <span>123</span>
                </button>
                <button className="flex items-center text-gray-500 hover:text-red-600">
                  <MessageCircle className="h-5 w-5 mr-1" />
                  <span>45</span>
                </button>
                <button className="flex items-center text-gray-500 hover:text-red-600">
                  <Share2 className="h-5 w-5 mr-1" />
                  <span>{t('common.share')}</span>
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
                placeholder={t('stories.search')}
                className="pl-10 w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-red-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <select
              className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-red-500"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>
          <div className="mt-4">
            <p className="text-sm font-medium text-gray-700 mb-2">{t('stories.popularThemes')}</p>
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
                      ? 'bg-red-600 text-white'
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
            <h2 className="text-2xl font-bold mb-6">{t('stories.form.title')}</h2>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {t('stories.form.name')}
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {t('stories.form.storyTitle')}
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {t('stories.form.story')}
                </label>
                <textarea
                  rows={6}
                  className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder={t('stories.form.storyPlaceholder')}
                ></textarea>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {t('stories.form.images')}
                </label>
                <input
                  type="file"
                  accept="image/*"
                  className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={() => setShowSubmitForm(false)}
                  className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                >
                  {t('stories.form.cancel')}
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
                >
                  {t('stories.form.submit')}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Story Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        {/* Expanded Story Content for Featured Stories */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-pan-black mb-8 text-center">Featured Diaspora Stories</h2>
          
          {/* Ebony's Story - Expanded */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
            <div className="md:flex">
              <div className="md:w-1/3">
                <img 
                  src="https://i.imgur.com/eqADTrh.jpg" 
                  alt="Ebony Washington"
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>
              <div className="md:w-2/3 p-8">
                <div className="flex items-center text-sm text-red-600 mb-2">
                  <Calendar className="h-4 w-4 mr-2" />
                  March 10, 2024
                </div>
                <h3 className="text-2xl font-bold mb-4">From Atlanta to Lisbon: Redefining Home in the African Diaspora</h3>
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                    <User className="h-6 w-6 text-red-600" />
                  </div>
                  <div className="ml-3">
                    <p className="font-medium">Ebony Washington</p>
                    <p className="text-sm text-gray-500">Co-founder, Intercâmbio Diáspora</p>
                  </div>
                </div>
                <div className="text-gray-700 space-y-4">
                  <p>
                    "Moving from Atlanta to Lisbon wasn't just a geographical change - it was a journey of rediscovering what it means to be part of the global African diaspora. As an African-American woman, I thought I understood my place in the diaspora narrative. Portugal taught me there was so much more to learn."
                  </p>
                  <p>
                    "In Atlanta, my Blackness was defined by the American experience - civil rights history, Southern culture, specific struggles and triumphs. In Portugal, I encountered Africans from Cape Verde, Angola, Guinea-Bissau, and beyond. Each carried their own stories of colonialism, independence, migration, and resilience. I realized that while our paths were different, our destination was the same: creating spaces where we could thrive while honoring our heritage."
                  </p>
                  <p>
                    "Intercâmbio Diáspora became my way of weaving these diverse threads together. When I see a Cape Verdean grandmother teaching traditional recipes to a young African-American student, or when I watch a Guinean entrepreneur mentor a Portuguese-born Afro-descendant, I see the diaspora in action - not as separate communities, but as one extended family finding each other across oceans and generations."
                  </p>
                </div>
                <div className="flex items-center space-x-4 mt-6">
                  <button className="flex items-center text-gray-500 hover:text-red-600">
                    <Heart className="h-5 w-5 mr-1" />
                    <span>89</span>
                  </button>
                  <button className="flex items-center text-gray-500 hover:text-red-600">
                    <MessageCircle className="h-5 w-5 mr-1" />
                    <span>23</span>
                  </button>
                  <button className="flex items-center text-gray-500 hover:text-red-600">
                    <Share2 className="h-5 w-5 mr-1" />
                    <span>{t('common.share')}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {storiesData.map(story => (
            <div key={story.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src={story.image} 
                alt={story.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center text-sm text-red-600 mb-2">
                  <Calendar className="h-4 w-4 mr-2" />
                  {format(story.date, "MMMM d, yyyy")}
                </div>
                <h3 className="text-xl font-bold mb-2">{story.title}</h3>
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                    <User className="h-5 w-5 text-red-600" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium">{story.author}</p>
                    <p className="text-xs text-gray-500">{story.category}</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4 line-clamp-3">{story.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex space-x-3">
                    <button className="text-gray-500 hover:text-red-600">
                      <Heart className="h-5 w-5" />
                    </button>
                    <button className="text-gray-500 hover:text-red-600">
                      <MessageCircle className="h-5 w-5" />
                    </button>
                    <button className="text-gray-500 hover:text-red-600">
                      <Share2 className="h-5 w-5" />
                    </button>
                  </div>
                  <button className="text-red-600 hover:text-red-800 font-medium flex items-center">
                    {t('stories.readMore')} <ArrowRight className="ml-1 h-4 w-4" />
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