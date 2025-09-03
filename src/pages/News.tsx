import React, { useState } from 'react';
import { Search, Calendar, User, ArrowRight, Share2, Copy, Check } from 'lucide-react';
import { format } from 'date-fns';
import { useLanguage } from '../contexts/LanguageContext';

// News data with consistent formatting - all using plain text with \n\n for paragraphs
const newsData = [
  {
    id: 1,
    title: "Successful Diaspora Picnic Brings Community Together",
    excerpt: "Over 150 members of the African diaspora community gathered for a day of cultural exchange, networking, and celebration at Parque da Bela Vista.",
    content: "The Intercâmbio Diáspora community came together for an unforgettable afternoon at Parque da Bela Vista, creating lasting connections and celebrating our shared heritage. The event, which took place on May 31st, 2025, exceeded all expectations with over 150 attendees from diverse African backgrounds.\n\nThe picnic featured a rich tapestry of activities designed to foster community bonds and cultural exchange. Families brought traditional dishes from their home countries, creating an incredible feast that showcased the culinary diversity of the African diaspora. From Senegalese thieboudienne to Nigerian jollof rice, Cape Verdean cachupa to Angolan muamba, the variety of flavors told the story of our community's rich heritage.\n\nOne of the highlights was the impromptu music session where community members shared traditional songs and modern African music. Children played together while adults engaged in meaningful conversations about their experiences living in Portugal, sharing advice on everything from navigating bureaucracy to finding the best African grocery stores in Lisbon.\n\n\"This event reminded me why community is so important,\" shared Maria Santos, a participant from Cape Verde. \"Being able to speak in Crioulo with other families while our children played together felt like home.\"\n\nThe success of this picnic demonstrates the growing strength and unity of our community in Portugal. Plans are already underway for the next gathering, with many attendees volunteering to help organize future events.",
    author: "Community Team",
    date: new Date(2025, 4, 31),
    category: "Community Events",
    image: "https://i.imgur.com/3KJGfwj.jpg",
    featured: true
  },
  {
    id: 2,
    title: "Reflections from Web Summit: Connections, Insights, and Community Building",
    excerpt: "Our experience at Web Summit 2024 highlighted the power of authentic networking, representation in tech, and community-driven innovation within the African diaspora.",
    content: "This year's Web Summit in Lisbon was more than just a tech conference for our community—it was a powerful reminder of the importance of authentic connections and representation in the innovation ecosystem.\n\nKey insights from our participation:\n\n**Authentic Networking Over Transactional Exchanges**\nWhile many attendees focused on quick business card exchanges, our community members prioritized meaningful conversations that led to genuine partnerships and collaborations. These deeper connections have already resulted in several ongoing projects and mentorship relationships.\n\n**Representation Matters in Tech Spaces**\nSeeing African diaspora entrepreneurs, developers, and innovators on stage and in leadership positions was inspiring for many of our younger community members. It reinforced that technology and innovation are not just accessible to us—we are actively shaping these fields.\n\n**Community-Driven Innovation**\nSeveral startups founded by African diaspora entrepreneurs showcased solutions addressing real challenges faced by immigrant communities, from language learning platforms to financial inclusion tools.\n\n**Building Bridges**\nOur community members served as cultural bridges, facilitating connections between African startups and Portuguese investors, creating opportunities for cross-cultural business relationships.\n\nThe experience reinforced our belief that when diaspora communities come together in professional spaces, we create opportunities not just for individual success, but for collective advancement and positive impact on both our adopted and ancestral homes.",
    author: "Editorial Team",
    date: new Date(2024, 10, 15),
    category: "Community Insights",
    image: "https://i.imgur.com/7mdxG48.jpg"
  },
  {
    id: 3,
    title: "Magical Full Moon Beach Gathering Connects Community with Nature",
    excerpt: "The Noite de Lua na Praia event brought together community members for an evening of gratitude, games, and connection under the full moon at Praia de São Bruno.",
    content: "Under the luminous glow of the full moon, members of the Intercâmbio Diáspora community gathered at Praia de São Bruno in Caxias for an enchanting evening that perfectly blended cultural tradition with natural wonder.\n\nThe Noite de Lua na Praia event, held on August 9th, created a sacred space where community members could disconnect from the digital world and reconnect with nature, each other, and their inner selves. The evening began with traditional childhood games that transcended cultural boundaries—from Cape Verdean ring games to Nigerian clapping songs, participants shared the joy of play under the starlit sky.\n\nThe highlight of the evening was the gratitude ritual, where community members formed a circle on the sand and shared reflections on their journeys, challenges overcome, and hopes for the future. The sound of waves provided a natural soundtrack as stories were shared in multiple languages—Portuguese, English, Crioulo, Wolof, and others—creating a beautiful tapestry of diaspora experiences.\n\n\"There's something magical about being barefoot in the sand, feeling grounded while looking up at the same moon our ancestors saw,\" reflected Amina Diallo, a participant from Senegal. \"It reminded me that no matter how far we travel, we're all connected by the same sky.\"\n\nThe event emphasized the importance of grounding practices and community wellness. Participants were encouraged to remove their shoes and feel the sand between their toes, a simple act that many described as deeply therapeutic and connecting.\n\nAs the evening concluded with quiet conversations and the gentle sound of waves, many expressed gratitude for having found a community that honors both cultural heritage and personal growth. The success of this gathering has inspired plans for seasonal moon ceremonies throughout the year.",
    author: "Cultural Events Team",
    date: new Date(2025, 7, 10),
    category: "Cultural Events",
    image: "https://imgur.com/oOfmX3A.jpg"
  },
  {
    id: 4,
    title: "Museum Visit Explores History of Resistance and Liberation in Portugal",
    excerpt: "Community members explored Portuguese history and resistance movements at the Museu do Aljube, connecting past struggles with contemporary diaspora experiences.",
    content: "On April 6th, 2025, members of the Intercâmbio Diáspora community embarked on an educational journey through Portuguese history at the Museu do Aljube – Resistência e Liberdade. This powerful museum visit provided profound insights into Portugal's complex past and its connections to contemporary diaspora experiences.\n\nThe museum, housed in a former political prison, tells the story of resistance against the Estado Novo dictatorship and the fight for freedom and democracy in Portugal. For many community members, walking through these halls sparked important conversations about resistance, liberation, and the ongoing struggle for equality and justice.\n\n\"Learning about the Portuguese resistance movement helped me understand the country's journey toward democracy,\" shared João Mendes, a community member from Angola. \"It also made me reflect on how our own communities have resisted oppression and fought for recognition and rights.\"\n\nThe guided tour highlighted connections between historical resistance movements and contemporary social justice efforts. Community members engaged in thoughtful discussions about how lessons from the past can inform present-day advocacy for immigrant rights, cultural preservation, and social inclusion.\n\nParticularly moving was the section on colonial history and its aftermath, which provided context for understanding the complex relationships between Portugal and African nations. These discussions helped community members process their own family histories and understand the broader historical forces that shaped diaspora experiences.\n\nThe visit concluded with a group reflection session where participants shared how the museum experience connected to their personal stories and community work. Many expressed appreciation for gaining a deeper understanding of Portuguese society and history, knowledge that enhances their ability to navigate and contribute to their adopted home.\n\nThis educational initiative reflects our community's commitment to understanding the full context of our experiences in Portugal, honoring both the struggles and triumphs that have shaped this nation's journey toward inclusivity and democracy.",
    author: "Educational Programs Team",
    date: new Date(2025, 3, 7),
    category: "Educational Events",
    image: "https://i.imgur.com/ppZR0iC.jpg"
  },
  {
    id: 5,
    title: "New Partnership Announcement: Expanding Educational Opportunities",
    excerpt: "Intercâmbio Diáspora announces strategic partnerships with local educational institutions to provide enhanced learning opportunities for community members.",
    content: "We are excited to announce new partnerships with several educational institutions in Lisbon that will significantly expand learning opportunities for our community members. These collaborations represent a major step forward in our mission to support educational advancement and professional development within the African diaspora.\n\nOur new partnerships include collaborations with language schools offering discounted Portuguese classes, universities providing scholarship information sessions, and professional development centers offering career advancement workshops specifically designed for immigrant communities.\n\nThese partnerships will enable us to offer:\n\n**Enhanced Language Learning Programs**\nStructured Portuguese language courses at multiple levels, from beginner to advanced, with special focus on professional and academic Portuguese.\n\n**Professional Development Workshops**\nCareer advancement sessions covering resume writing, interview skills, networking strategies, and understanding Portuguese workplace culture.\n\n**Educational Pathway Guidance**\nInformation sessions about higher education opportunities, credential recognition processes, and scholarship applications.\n\n**Cultural Integration Support**\nWorkshops that help community members navigate Portuguese social and professional environments while maintaining their cultural identity.\n\nThese initiatives reflect our commitment to empowering community members with the tools and knowledge needed to thrive in Portugal while celebrating and preserving their cultural heritage.",
    author: "Partnership Team",
    date: new Date(2025, 2, 20),
    category: "Partnerships",
    image: "https://i.imgur.com/ppZR0iC.jpg"
  },
  {
    id: 6,
    title: "Community Spotlight: Local Business Success Stories",
    excerpt: "Celebrating the entrepreneurial spirit within our community as local businesses founded by diaspora members continue to thrive and contribute to Portugal's economy.",
    content: "The entrepreneurial spirit within the Intercâmbio Diáspora community continues to flourish, with numerous businesses founded by community members making significant contributions to Portugal's economy and cultural landscape.\n\nFrom restaurants serving authentic African cuisine to tech startups solving global challenges, our community members are creating businesses that bridge cultures and create opportunities for both diaspora and local communities.\n\n**Featured Success Stories:**\n\n**Mama Africa Restaurant** - Founded by Fatima Kone from Mali, this restaurant in Príncipe Real has become a cultural hub, serving traditional West African dishes while hosting cultural events and live music.\n\n**TechBridge Solutions** - A software development company founded by Samuel Okafor from Nigeria, specializing in fintech solutions for African markets while maintaining operations in Lisbon.\n\n**Afro Hair Studio** - Established by Mariana Silva from Brazil, this salon has become the go-to destination for natural hair care, while also offering workshops on hair care and cultural identity.\n\nThese businesses represent more than economic success—they are cultural bridges that introduce Portuguese society to African traditions, foods, and innovations while providing essential services to diaspora communities.\n\nThe success of these ventures demonstrates the valuable contributions that diaspora entrepreneurs make to Portugal's economy and cultural diversity. Their stories inspire other community members to pursue their entrepreneurial dreams while maintaining strong connections to their cultural roots.",
    author: "Business Development Team",
    date: new Date(2025, 2, 10),
    category: "Business & Economy",
    image: "https://i.imgur.com/7mdxG48.jpg"
  },
  {
    id: 7,
    title: "Language Exchange Program Celebrates Six Months of Success",
    excerpt: "Our weekly language exchange program has facilitated over 200 meaningful connections between Portuguese learners and native speakers, creating lasting friendships and cultural understanding.",
    content: "Six months ago, we launched our weekly language exchange program with the simple goal of helping community members improve their Portuguese while sharing their own languages and cultures. Today, we celebrate a program that has exceeded all expectations, creating not just language learning opportunities but lasting friendships and deep cultural connections.\n\nThe numbers tell an impressive story: over 200 participants have joined our sessions, representing more than 15 different countries and languages. Each week, an average of 25-30 people gather to practice Portuguese, English, and various African languages in a supportive, friendly environment.\n\n**Program Highlights:**\n\n**Structured Learning Sessions**\nEach meeting includes guided conversation practice, vocabulary building exercises, and cultural sharing activities that make learning engaging and effective.\n\n**Cultural Exchange Component**\nParticipants don't just learn languages—they share stories, traditions, and perspectives that enrich everyone's understanding of different cultures.\n\n**Lasting Friendships**\nMany participants have formed friendships that extend beyond the weekly sessions, with language partners meeting for coffee, attending cultural events together, and supporting each other's integration journey.\n\n**Professional Networking**\nThe program has also become an informal networking space where participants share job opportunities, business connections, and professional advice.\n\n\"I came to improve my Portuguese, but I gained so much more,\" says Ana Rodrigues, a participant from Cape Verde. \"I've made friends from all over Africa and Portugal, and my confidence in speaking Portuguese has grown tremendously.\"\n\nThe success of this program demonstrates the power of peer-to-peer learning and cultural exchange. We're now planning to expand with specialized sessions for different proficiency levels and professional Portuguese workshops.",
    author: "Education Team",
    date: new Date(2025, 1, 28),
    category: "Educational Programs",
    image: "https://imgur.com/Um1K5jA.jpeg"
  },
  {
    id: 8,
    title: "Cultural Heritage Month: Celebrating African Traditions in Portugal",
    excerpt: "February's cultural heritage celebration showcased the rich diversity of African traditions through music, dance, storytelling, and culinary experiences.",
    content: "February 2025 marked our inaugural Cultural Heritage Month, a celebration that brought together the diverse traditions, stories, and artistic expressions of the African diaspora community in Portugal. Throughout the month, various events highlighted the rich cultural tapestry that our community brings to Portuguese society.\n\nThe month-long celebration featured weekly themed events, each focusing on different aspects of African heritage:\n\n**Week 1: Music and Rhythm**\nTraditional drumming workshops and contemporary African music showcases brought together musicians and music lovers. Participants learned traditional rhythms from various African cultures while contemporary artists performed fusion pieces that blend African and Portuguese influences.\n\n**Week 2: Storytelling and Oral Traditions**\nElders from the community shared traditional stories, proverbs, and historical accounts, while younger members presented contemporary narratives about diaspora experiences. These sessions created powerful intergenerational connections and preserved important cultural knowledge.\n\n**Week 3: Dance and Movement**\nDance workshops featuring traditional and contemporary African dance styles attracted participants of all ages. Professional dancers led sessions in everything from West African traditional dances to modern Afrobeat choreography.\n\n**Week 4: Culinary Heritage**\nCooking workshops and food festivals celebrated the incredible diversity of African cuisines. Community members shared family recipes, cooking techniques, and the cultural significance of traditional dishes.\n\nThe month concluded with a grand celebration that brought together all elements—music, dance, storytelling, and food—in a festival that attracted not only community members but also Portuguese friends and neighbors interested in learning about African cultures.\n\n\"Seeing my children learn traditional dances and hear stories in our native language while living in Portugal fills my heart with joy,\" shared Aminata Diallo, a community member from Guinea-Bissau. \"It's important that they know where they come from while building their future here.\"\n\nThe success of Cultural Heritage Month has established it as an annual tradition, with plans already underway for an even larger celebration next year.",
    author: "Cultural Programs Team",
    date: new Date(2025, 1, 15),
    category: "Cultural Events",
    image: "https://i.imgur.com/vchikwW.jpg"
  },
  {
    id: 9,
    title: "Professional Development Workshop Series Launches",
    excerpt: "New monthly workshop series focuses on career advancement, entrepreneurship, and professional networking for African diaspora professionals in Portugal.",
    content: "Recognizing the unique challenges and opportunities faced by African diaspora professionals in Portugal, we have launched a comprehensive Professional Development Workshop Series designed to support career advancement and entrepreneurial success.\n\nThe monthly workshop series addresses key areas identified through community surveys and feedback sessions:\n\n**Career Advancement Strategies**\nWorkshops covering resume optimization for the Portuguese job market, interview techniques, and understanding workplace culture and expectations in Portugal.\n\n**Entrepreneurship and Business Development**\nSessions on starting a business in Portugal, understanding legal requirements, accessing funding opportunities, and building networks with local business communities.\n\n**Professional Networking**\nStructured networking events that connect diaspora professionals with established business leaders, mentors, and potential collaborators in various industries.\n\n**Skills Development**\nTechnical and soft skills workshops tailored to current market demands, including digital literacy, project management, and leadership development.\n\nThe inaugural workshop, \"Navigating the Portuguese Job Market,\" attracted over 40 participants and featured presentations from successful diaspora professionals who shared their career journeys and practical advice.\n\n\"Understanding the unwritten rules of Portuguese professional culture was a game-changer for my career,\" shared Carlos Mendes, a software engineer from Angola who participated in the first workshop. \"These sessions provide insights you can't find in any guidebook.\"\n\nGuest speakers have included successful entrepreneurs, HR professionals, and career coaches who provide both practical advice and inspiration. The workshops also feature peer-to-peer learning opportunities where participants share their own experiences and challenges.\n\nUpcoming workshops will focus on digital marketing for small businesses, financial planning for entrepreneurs, and building professional brands in multicultural environments. Registration for all workshops is free for community members, reflecting our commitment to accessible professional development.",
    author: "Professional Development Team",
    date: new Date(2025, 1, 5),
    category: "Professional Development",
    image: "https://i.imgur.com/7mdxG48.jpg"
  },
  {
    id: 10,
    title: "Youth Leadership Program Empowers Next Generation",
    excerpt: "New initiative focuses on developing leadership skills among young people in the African diaspora community, preparing them to become future community leaders and advocates.",
    content: "The launch of our Youth Leadership Program marks an important milestone in our commitment to empowering the next generation of African diaspora leaders in Portugal. This comprehensive program is designed to develop leadership skills, cultural awareness, and civic engagement among young people aged 16-25.\n\nThe program combines mentorship, skill-building workshops, and real-world leadership opportunities:\n\n**Mentorship Component**\nEach participant is paired with an established community leader or professional who provides guidance, support, and career advice throughout the program.\n\n**Leadership Skills Development**\nMonthly workshops cover essential leadership topics including public speaking, project management, conflict resolution, and team building.\n\n**Cultural Identity and Pride**\nSessions focused on understanding and celebrating African heritage while navigating multicultural identities in Portuguese society.\n\n**Civic Engagement**\nOpportunities to participate in community organizing, advocacy efforts, and social justice initiatives that impact diaspora communities.\n\n**Real-World Projects**\nParticipants work on actual community projects, from organizing events to developing social media campaigns, gaining practical experience while contributing to community goals.\n\nThe program's first cohort includes 20 young people from diverse African backgrounds, each bringing unique perspectives and talents to the group. Early activities have included organizing a youth-led cultural showcase and developing a social media strategy to engage young diaspora members.\n\n\"This program is giving me the tools and confidence to make a real difference in my community,\" says Khadija Hassan, a 19-year-old participant from Somalia. \"I'm learning that leadership isn't just about being in charge—it's about serving others and creating positive change.\"\n\nThe Youth Leadership Program represents our investment in the future of the African diaspora community in Portugal. By developing young leaders today, we're ensuring that our community will continue to thrive and advocate for positive change for generations to come.",
    author: "Youth Programs Team",
    date: new Date(2024, 11, 20),
    category: "Youth Programs",
    image: "https://i.imgur.com/4x5JR34.jpg"
  },
  {
    id: 11,
    title: "Cultural Exchange Workshop Celebrates African Heritage and Traditions",
    excerpt: "Interactive workshop brought together community members to explore African cultural traditions through hands-on activities, music, and storytelling.",
    content: "The Cultural Exchange Workshop held on February 25th, 2024, at the Community Center in Lisbon was a vibrant celebration of African heritage that brought together over 80 community members for an afternoon of cultural exploration and connection.\n\nThe workshop featured multiple interactive stations where participants could engage with different aspects of African culture:\n\n**Traditional Music and Drumming Circle**\nCommunity members learned traditional rhythms from various African cultures, with experienced drummers teaching techniques and sharing the cultural significance of different beats. The drumming circle became a powerful moment of unity as participants from different countries found common ground in rhythm and music.\n\n**Textile and Craft Workshops**\nArtisans demonstrated traditional textile techniques including kente weaving patterns, batik dyeing, and beadwork. Participants created their own small crafts to take home, learning about the cultural meanings behind different patterns and colors.\n\n**Storytelling Sessions**\nElders from the community shared traditional folktales, proverbs, and historical stories that have been passed down through generations. These sessions were conducted in multiple languages, with translations provided to ensure everyone could participate and learn.\n\n**Dance Demonstrations and Lessons**\nProfessional dancers taught traditional dances from West Africa, East Africa, and Southern Africa, explaining the cultural contexts and occasions for each dance style. The energy was infectious as participants of all ages joined in the movements.\n\n**Cultural Food Tasting**\nA collaborative cooking demonstration featured traditional dishes from different African regions, with community members sharing recipes and cooking techniques while explaining the cultural significance of various ingredients and preparation methods.\n\n\"This workshop reminded me of the richness of our heritage and how important it is to share these traditions with our children and the broader community,\" reflected Mama Diarra, a participant from Mali. \"Seeing young people so engaged with learning about their roots was beautiful.\"\n\nThe workshop also featured an intergenerational component where older community members shared knowledge with younger participants, creating valuable connections and ensuring cultural knowledge continues to be passed down.\n\nThe success of this workshop has led to plans for quarterly cultural exchange events, each focusing on different themes and traditions. The next workshop will explore the intersection of traditional and contemporary African art forms.",
    author: "Cultural Programs Team",
    date: new Date(2024, 1, 26),
    category: "Cultural Events",
    image: "https://i.imgur.com/4x5JR34.jpg"
  },
  {
    id: 12,
    title: "Year-End Community Gathering Reflects on Achievements and Builds Connections",
    excerpt: "The annual year-end gathering brought together community members to celebrate accomplishments, share stories, and plan for the future.",
    content: "The Year-End Community Gathering on December 8th, 2023, marked a significant milestone for the Intercâmbio Diáspora community as we came together to reflect on a year of growth, connection, and meaningful impact. Held at the Community Center in Lisbon, the event attracted over 120 community members for an evening of celebration and forward-looking planning.\n\nThe gathering began with a presentation highlighting the year's major achievements:\n\n**Community Growth**\nOur community expanded from 50 active members to over 300, representing countries across Africa and the diaspora. This growth reflects the increasing need for and value of our community connections.\n\n**Successful Events**\nThroughout 2023, we organized 24 events including cultural celebrations, educational workshops, professional networking sessions, and social gatherings, each contributing to stronger community bonds.\n\n**Educational Impact**\nOur language exchange program helped over 150 people improve their Portuguese skills while sharing their own languages and cultures with others.\n\n**Professional Connections**\nNetworking events facilitated numerous job opportunities, business partnerships, and mentorship relationships within the community.\n\nThe evening's highlight was an open mic session where community members shared personal stories of growth, challenges overcome, and goals achieved during the year. These testimonials created powerful moments of connection as people recognized shared experiences and celebrated individual triumphs.\n\n\"Hearing everyone's stories reminded me that we're not just individuals trying to make it in a new country—we're a community supporting each other's dreams,\" shared Patricia Nunes, a community member from Cape Verde.\n\nTraditional music performances throughout the evening featured artists from different African countries, creating a soundtrack that celebrated our diverse heritage. The shared meal included dishes from across Africa, prepared by community members who took pride in sharing their culinary traditions.\n\nThe gathering concluded with collaborative planning sessions where community members contributed ideas for 2024 initiatives. Suggestions included expanded educational programs, cultural festivals, youth mentorship initiatives, and partnerships with local Portuguese organizations.\n\nVolunteers and key contributors were recognized for their dedication to building and sustaining our community. Their efforts throughout the year made possible the events, programs, and connections that define our community experience.\n\nAs we looked toward 2024, the energy and enthusiasm in the room made it clear that our community is not just surviving but thriving, ready to continue building bridges between cultures and supporting each member's journey in Portugal.",
    author: "Community Leadership Team",
    date: new Date(2023, 11, 9),
    category: "Community Events",
    image: "https://i.imgur.com/j7O5Vuv.jpg"
  }
];

const categories = ["All", "Community Events", "Cultural Events", "Educational Programs", "Professional Development", "Youth Programs", "Partnerships", "Business & Economy", "Community Insights", "Educational Events", "Networking"];

const News = () => {
  const { t } = useLanguage();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedArticle, setSelectedArticle] = useState<number | null>(null);
  const [copiedArticleId, setCopiedArticleId] = useState<number | null>(null);

  // Filter articles based on search term and category
  const filteredArticles = newsData.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const copyArticleLink = (articleId: number) => {
    const url = `${window.location.origin}/news#article-${articleId}`;
    navigator.clipboard.writeText(url).then(() => {
      setCopiedArticleId(articleId);
      setTimeout(() => setCopiedArticleId(null), 2000);
    });
  };

  // Function to render content with proper paragraph formatting
  const renderContent = (content: string) => {
    return content.split('\n\n').map((paragraph, index) => {
      // Handle bold text formatting
      const formattedParagraph = paragraph.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
      
      return (
        <p 
          key={index} 
          className="mb-4 text-gray-700 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: formattedParagraph }}
        />
      );
    });
  };

  if (selectedArticle) {
    const article = newsData.find(a => a.id === selectedArticle);
    if (!article) return null;

    return (
      <div className="bg-gray-50 min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <button
            onClick={() => setSelectedArticle(null)}
            className="mb-6 text-red-600 hover:text-red-800 flex items-center"
          >
            ← {t('news.backToNews')}
          </button>
          
          <article className="bg-white rounded-lg shadow-md overflow-hidden">
            <img 
              src={article.image} 
              alt={article.title}
              className="w-full h-96 object-cover"
            />
            <div className="p-8">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center text-sm text-red-600">
                  <Calendar className="h-4 w-4 mr-2" />
                  {format(article.date, "MMMM d, yyyy")}
                </div>
                <button
                  onClick={() => copyArticleLink(article.id)}
                  className="flex items-center text-gray-500 hover:text-red-600"
                >
                  {copiedArticleId === article.id ? (
                    <>
                      <Check className="h-4 w-4 mr-1" />
                      {t('news.copied')}
                    </>
                  ) : (
                    <>
                      <Share2 className="h-4 w-4 mr-1" />
                      {t('news.share')}
                    </>
                  )}
                </button>
              </div>
              
              <h1 className="text-3xl font-bold mb-4">{article.title}</h1>
              
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                  <User className="h-6 w-6 text-red-600" />
                </div>
                <div className="ml-3">
                  <p className="font-medium">{article.author}</p>
                  <p className="text-sm text-gray-500">{article.category}</p>
                </div>
              </div>
              
              <div className="prose prose-lg max-w-none">
                {renderContent(article.content)}
              </div>
            </div>
          </article>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-pan-red text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">{t('news.title')}</h1>
          <p className="text-xl max-w-3xl">{t('news.subtitle')}</p>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-grow relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder={t('news.search')}
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
        </div>

        {/* Featured Article */}
        {filteredArticles.length > 0 && filteredArticles[0].featured && (
          <div className="bg-white rounded-lg shadow-xl overflow-hidden mb-12">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img 
                  src={filteredArticles[0].image} 
                  alt={filteredArticles[0].title}
                  className="w-full h-96 object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8">
                <div className="flex items-center text-sm text-red-600 mb-4">
                  <Calendar className="h-4 w-4 mr-2" />
                  {format(filteredArticles[0].date, "MMMM d, yyyy")}
                </div>
                <h2 className="text-3xl font-bold mb-4">{filteredArticles[0].title}</h2>
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                    <User className="h-6 w-6 text-red-600" />
                  </div>
                  <div className="ml-3">
                    <p className="font-medium">{filteredArticles[0].author}</p>
                    <p className="text-sm text-gray-500">{filteredArticles[0].category}</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-6">{filteredArticles[0].excerpt}</p>
                <button
                  onClick={() => setSelectedArticle(filteredArticles[0].id)}
                  className="text-red-600 font-medium flex items-center hover:text-red-800"
                >
                  {t('news.readMore')} <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.slice(filteredArticles[0]?.featured ? 1 : 0).map(article => (
            <div key={article.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src={article.image} 
                alt={article.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center text-sm text-red-600 mb-2">
                  <Calendar className="h-4 w-4 mr-2" />
                  {format(article.date, "MMMM d, yyyy")}
                </div>
                <h3 className="text-xl font-bold mb-2">{article.title}</h3>
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                    <User className="h-5 w-5 text-red-600" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium">{article.author}</p>
                    <p className="text-xs text-gray-500">{article.category}</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4 line-clamp-3">{article.excerpt}</p>
                <div className="flex items-center justify-between">
                  <button
                    onClick={() => setSelectedArticle(article.id)}
                    className="text-red-600 hover:text-red-800 font-medium flex items-center"
                  >
                    {t('news.readMore')} <ArrowRight className="ml-1 h-4 w-4" />
                  </button>
                  <button
                    onClick={() => copyArticleLink(article.id)}
                    className="text-gray-500 hover:text-red-600"
                  >
                    {copiedArticleId === article.id ? (
                      <Check className="h-4 w-4" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredArticles.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-xl font-medium text-gray-600">{t('news.noArticles')}</h3>
            <p className="mt-2 text-gray-500">{t('news.noArticlesDesc')}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default News;