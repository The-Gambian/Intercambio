import React, { useState } from 'react';
import { Search, Calendar, User, ArrowRight } from 'lucide-react';
import { format } from 'date-fns';

// Sample stories data
const storiesData = [
  {
    id: 1,
    title: "Finding Home in a New Land",
    author: "Maria Gonzalez",
    date: new Date(2025, 4, 10),
    excerpt: "After fleeing political unrest in Venezuela, Maria found community and purpose through language exchange programs and cultural events.",
    content: "I still remember the day I arrived here five years ago. I had two suitcases, barely spoke the language, and was terrified about what the future held. Back in Venezuela, I had been a professor of literature at the university, but the political situation had become too dangerous for my family to stay.\n\nThe first year was the hardest. My credentials weren't recognized, so I worked at a local café while taking language classes at night. I felt isolated, caught between two worlds – no longer fully part of the country I'd left behind, but not yet belonging to my new home.\n\nEverything changed when I discovered Intercambio Diaspora. I attended a Spanish-language poetry reading, and for the first time since arriving, I felt a sense of connection. I started volunteering as a Spanish conversation partner in the language exchange program, which helped others while allowing me to share my culture.\n\nGradually, I built a community. Through the professional mentorship program, I connected with a local community college professor who helped me navigate the process of having my credentials recognized. Today, I teach Spanish literature at that same college.\n\nI've learned that home isn't just a place – it's the connections we build and the ways we contribute to our communities. I'm still Venezuelan, and I carry my culture with me, but I've also created a meaningful life here. Through Intercambio Diaspora, I've met people from around the world who understand the experience of creating a new home while honoring where you came from.\n\nTo anyone who has recently arrived in a new country: be patient with yourself. Finding your place takes time, but there are communities waiting to welcome you.",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    category: "Personal Journey"
  },
  {
    id: 2,
    title: "Preserving Cultural Heritage Through Food",
    author: "Ahmed Hassan",
    date: new Date(2025, 4, 22),
    excerpt: "Ahmed shares how cooking traditional Egyptian dishes connects him to his heritage and creates community in his adopted home.",
    content: "My earliest memories are set in my grandmother's kitchen in Cairo. I would sit on a small stool, watching her hands work magic with simple ingredients – turning flour, water, and time into soft, warm bread. The aromas of cumin, coriander, and cardamom filled the air as she taught me recipes passed down through generations.\n\nWhen I moved abroad fifteen years ago to pursue my education, I never expected to stay. But life had other plans – I met my partner, built a career, and gradually put down roots. As the years passed, I found myself increasingly nostalgic for the tastes and smells of home.\n\nCooking became my connection to Egypt. Every weekend, I would recreate my grandmother's recipes – koshari, molokhia, ful medames. At first, it was just for myself, a private ritual to ease homesickness. But soon, I began inviting friends over for Egyptian meals. Their enthusiasm for learning about my culture through food was touching.\n\nThree years ago, I started teaching Egyptian cooking classes through Intercambio Diaspora's cultural exchange program. What began as a monthly workshop has grown into a vibrant community. My students come from diverse backgrounds – some are fellow Egyptians eager to preserve their culinary heritage, others are curious locals wanting to explore new flavors.\n\nFood has become my language for sharing culture. When someone tastes authentic koshari for the first time and their eyes light up with pleasure, I feel a profound sense of pride in my heritage. Through these classes, I've connected with other immigrants who understand the importance of preserving cultural traditions while embracing new experiences.\n\nMy grandmother passed away last year, but her legacy lives on in every dish I prepare and every recipe I share. In her honor, I'm now working on a cookbook that documents our family recipes alongside stories of Egyptian culture and history. Food isn't just sustenance – it's memory, identity, and community. It's how I carry my homeland with me, no matter where I live.",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    category: "Cultural Heritage"
  },
  {
    id: 3,
    title: "Building Bridges Through Music",
    author: "Priya Sharma",
    date: new Date(2025, 5, 5),
    excerpt: "How a fusion music project brought together musicians from different diaspora communities, creating new sounds and lasting friendships.",
    content: "Music has always been my sanctuary. Growing up in a traditional Indian family in Mumbai, I was trained in classical Hindustani vocals from the age of five. My grandfather, a respected tabla player, would tell me that music transcends language – it speaks directly to the soul.\n\nWhen my family immigrated when I was sixteen, music became even more important. In a new country where I struggled with the language and cultural norms, my voice remained unchanged. I joined the school choir, where my classical training was considered exotic and fascinating. For the first time, I felt that my difference was an asset rather than a barrier.\n\nAfter university, I worked in finance but continued performing Indian classical music on weekends. I connected with Intercambio Diaspora after attending one of their cultural showcases and was inspired by their mission of cultural exchange. With their support, I proposed a fusion music project that would bring together musicians from different diaspora communities.\n\nThe Diaspora Harmonies project began with just five musicians – myself, a Chilean guitarist, a Nigerian drummer, a Lebanese oud player, and a Korean gayageum performer. None of us spoke each other's musical languages, but we shared a willingness to listen and learn. Our first rehearsals were chaotic but exhilarating as we discovered unexpected harmonies between our traditions.\n\nOver two years, our ensemble has grown to fifteen musicians representing twelve different cultural traditions. We've performed at festivals, community events, and even recorded an album. But the most meaningful outcome has been the deep friendships formed through our musical collaboration.\n\nLast month, we held a workshop for young people from immigrant backgrounds, teaching them how musical fusion can be a metaphor for cultural integration – not erasing differences, but creating something new and beautiful from them. Seeing these teenagers experiment with combining their heritage music with contemporary styles reminded me of my own journey.\n\nMy grandfather was right – music does speak directly to the soul. It has the power to build bridges between cultures and create understanding where words might fail. Through Diaspora Harmonies, I've found a way to honor my heritage while creating connections in my new home.",
    image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    category: "Arts & Culture"
  },
  {
    id: 4,
    title: "From Refugee to Entrepreneur",
    author: "Amir Nouri",
    date: new Date(2025, 5, 15),
    excerpt: "After fleeing conflict in Syria, Amir built a successful tech company that employs fellow refugees and addresses challenges faced by newcomers.",
    content: "Ten years ago, I arrived in this country with nothing but the clothes on my back and my laptop in a waterproof bag. The civil war in Syria had destroyed my home, separated me from family members, and forced me to leave behind the software company I had spent years building.\n\nThe refugee resettlement process was disorienting. Despite having a computer science degree and years of professional experience, I struggled to find employment. Potential employers were concerned about my language skills or didn't recognize my qualifications. I took odd jobs – delivering food, working night shifts at a warehouse – while improving my language skills and rebuilding my professional network.\n\nThe turning point came when I joined a coding workshop organized by Intercambio Diaspora. There, I met other tech professionals from immigrant backgrounds who faced similar barriers. We began meeting regularly, sharing job leads and helping each other adapt our skills to the local market. With their encouragement, I started freelancing, building websites for small businesses in the diaspora community.\n\nAs my client base grew, I recognized a pattern in the challenges faced by newcomers – difficulty accessing services, navigating bureaucracy, and connecting with established communities. I saw an opportunity to use technology to address these issues. With support from a business incubator program for refugee entrepreneurs, I launched NouriTech, a company developing digital solutions for refugee integration.\n\nOur first product was a multilingual app that helps newcomers navigate housing, healthcare, education, and employment resources. The app has now been adopted by resettlement agencies across the country and translated into twelve languages. As the company grew, I made it a priority to hire fellow refugees, particularly those struggling to break into the tech industry despite having valuable skills.\n\nToday, NouriTech employs twenty-eight people, over half of whom came to this country as refugees or asylum seekers. We've expanded our product line to include language learning software and a platform connecting immigrant professionals with mentors in their fields.\n\nMy journey from refugee to entrepreneur hasn't been easy, but it's taught me the power of resilience and community. I'm proud that my company not only provides me with a livelihood but also creates opportunities for others and develops solutions that ease the transition for newcomers. The skills and perspective I gained through the refugee experience have become my greatest business assets.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1976&q=80",
    category: "Entrepreneurship"
  },
  {
    id: 5,
    title: "Between Two Worlds: Raising Bicultural Children",
    author: "Sofia Kim",
    date: new Date(2025, 5, 28),
    excerpt: "Sofia reflects on the joys and challenges of raising children who embrace both their Korean heritage and their American identity.",
    content: "\"Mommy, am I Korean or American?\" My six-year-old daughter asked me this question as I was braiding her hair for school. It's a question I've asked myself throughout my life, having moved to the United States as a child, and now it was my daughter's turn to navigate the complexity of a bicultural identity.\n\n\"You're both,\" I told her. \"You're Korean American – you carry both cultures in your heart.\" She seemed satisfied with this answer, but her question sparked deeper reflection for me about how my husband and I are raising our children at the intersection of cultures.\n\nI was eight when my family immigrated. Unlike my parents, who maintained strong ties to Korean culture and language, I often felt caught between worlds – too Korean for my American classmates, too Americanized when we visited relatives in Seoul. I alternated between rejecting my heritage in an effort to fit in and later, in college, reconnecting with it as I developed a stronger sense of identity.\n\nWhen my husband (also Korean American) and I had children, we agreed that we wanted them to feel connected to their Korean heritage without the sense of conflict I had experienced. But the practical reality of raising bicultural children has been more complicated than we anticipated.\n\nWe speak Korean at home, celebrate traditional holidays, and cook Korean food. My mother, who lives nearby, shares stories and traditions with her grandchildren. Yet our children are also immersed in American culture through school, friends, and media. Sometimes these worlds complement each other; other times they clash.\n\nIntercambio Diaspora's family programs have been invaluable in our journey. Through their Korean cultural classes, my children learn traditional music, art, and stories alongside other Korean American kids. The parents' discussion group has given me a community of others navigating similar challenges – how to maintain heritage language, address cultural identity questions, and help our children feel proud of their dual heritage.\n\nWhat I've learned is that biculturalism isn't about perfect balance or keeping cultures separate. It's about integration, allowing our children to draw from both traditions to create their own unique identities. When my daughter wears a hanbok to perform in a traditional Korean drum ensemble, then changes into jeans to play soccer with her school friends, she's not switching between identities – she's expressing different facets of who she is.\n\nThere are still challenges. My children sometimes resist speaking Korean or question why our family traditions differ from their friends'. But more often, I see them embracing the richness of their dual heritage – explaining Korean concepts to their American friends, creating fusion art that combines elements from both cultures, moving fluidly between worlds in a way I couldn't at their age.\n\nRaising bicultural children has healed some of my own cultural identity struggles. Through their eyes, I've come to see that being between cultures isn't a disadvantage but a gift – one that offers broader perspective, greater adaptability, and a deeper understanding of how culture shapes our view of the world.",
    image: "https://images.unsplash.com/photo-1536640712-4d4c36ff0e4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    category: "Family & Identity"
  },
  {
    id: 6,
    title: "Healing Through Community",
    author: "Gabriel Okafor",
    date: new Date(2025, 6, 10),
    excerpt: "After experiencing trauma in his home country, Gabriel found healing and purpose through community service and mental health advocacy.",
    content: "There are some experiences so profound that they divide your life into before and after. For me, that dividing line was drawn seven years ago when political violence erupted in my home country of Nigeria. As a journalist who had written critically about government corruption, I became a target. After being detained and tortured for three weeks, I was released through the intervention of international human rights organizations and eventually granted asylum abroad.\n\nPhysically, I was safe, but mentally and emotionally, I remained trapped in trauma. Nightmares, flashbacks, and paralyzing anxiety became my constant companions. I isolated myself, unable to trust others or imagine a future. My training as a journalist had taught me to observe and report on others' suffering, but I had no framework for processing my own.\n\nThe turning point came when a social worker referred me to a support group for survivors of torture and political violence hosted by Intercambio Diaspora. Walking into that first meeting was terrifying – I had spent months avoiding any reminder of my experiences. But seeing others who understood, who carried similar invisible wounds yet were finding ways to move forward, kindled a small hope.\n\nIn that group, I didn't have to explain or justify my reactions. When a loud noise made me duck for cover, no one stared or asked questions. When I couldn't speak about certain experiences, everyone respected my silence. Gradually, I began to share my story, first in fragments, then more fully. Each time I spoke, the memories lost a fraction of their power over me.\n\nAs my healing progressed, I discovered that helping others gave purpose to my pain. I trained as a peer counselor for newly arrived refugees and asylum seekers, offering the understanding that only someone with similar experiences can provide. Later, I helped develop a mental health awareness program specifically addressing the needs and cultural perspectives of African diaspora communities, where mental health is often stigmatized.\n\nThrough this work, I've witnessed remarkable resilience in others and discovered it in myself. I've learned that healing isn't a linear journey with a clear endpoint – it's an ongoing process of integration, of making meaning from suffering. My experiences will always be part of me, but they no longer define me or determine my future.\n\nToday, I work as a mental health advocate, using my journalistic skills to document refugee experiences and advocate for trauma-informed services. I've rebuilt my capacity for joy, connection, and hope – not despite my trauma, but in part because of how it's shaped my understanding of human suffering and resilience.\n\nTo others carrying invisible wounds of war, persecution, or displacement: healing is possible. Not through forgetting or moving on, but through finding communities where your experiences are witnessed and validated. Where your pain matters, but doesn't become your entire identity. Where you can transform what happened to you into a source of connection and, eventually, purpose.",
    image: "https://images.unsplash.com/photo-1531384441138-2736e62e0919?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    category: "Mental Health"
  }
];

// Available categories for filtering
const categories = ["All", "Personal Journey", "Cultural Heritage", "Arts & Culture", "Entrepreneurship", "Family & Identity", "Mental Health"];

const Stories = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedStory, setSelectedStory] = useState<number | null>(null);

  // Filter stories based on search term and category
  const filteredStories = storiesData.filter(story => {
    const matchesSearch = story.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          story.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          story.author.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || story.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Member Stories</h1>
          <p className="text-xl max-w-3xl">Explore personal narratives from our community members, sharing their experiences, challenges, and triumphs.</p>
        </div>
      </div>

      {/* Search and Filter */}
      {!selectedStory && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-grow relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search stories by title, content, or author..."
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
            </div>
          </div>

          {/* Featured Story */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md mb-8">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img 
                  src={storiesData[0].image} 
                  alt={storiesData[0].title} 
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-6 md:p-8">
                <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full mb-2">
                  {storiesData[0].category}
                </span>
                <h2 className="text-2xl font-bold mb-4">{storiesData[0].title}</h2>
                <p className="text-gray-600 mb-6">{storiesData[0].excerpt}</p>
                <div className="flex items-center mb-6">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                      <User className="h-5 w-5 text-blue-700" />
                    </div>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">{storiesData[0].author}</p>
                    <p className="text-sm text-gray-500">{format(storiesData[0].date, "MMMM d, yyyy")}</p>
                  </div>
                </div>
                <button 
                  className="text-blue-700 font-medium flex items-center hover:text-blue-800"
                  onClick={() => setSelectedStory(storiesData[0].id)}
                >
                  Read Full Story <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Stories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {filteredStories.slice(1).map(story => (
              <div 
                key={story.id} 
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition cursor-pointer"
                onClick={() => setSelectedStory(story.id)}
              >
                <img 
                  src={story.image} 
                  alt={story.title} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full mb-2">
                    {story.category}
                  </span>
                  <h3 className="text-xl font-bold mb-2">{story.title}</h3>
                  <p className="text-gray-600 mb-4">{story.excerpt}</p>
                  <div className="flex items-center mb-4">
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                        <User className="h-4 w-4 text-blue-700" />
                      </div>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">{story.author}</p>
                      <p className="text-sm text-gray-500">{format(story.date, "MMMM d, yyyy")}</p>
                    </div>
                  </div>
                  <button 
                    className="text-blue-700 font-medium flex items-center hover:text-blue-800"
                    onClick={() => setSelectedStory(story.id)}
                  >
                    Read Full Story <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filteredStories.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium text-gray-600">No stories found matching your criteria</h3>
              <p className="mt-2 text-gray-500">Try adjusting your search or filter settings</p>
            </div>
          )}
        </div>
      )}

      {/* Story Detail View */}
      {selectedStory && (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-12">
            {storiesData.filter(story => story.id === selectedStory).map(story => (
              <div key={story.id}>
                <img 
                  src={story.image} 
                  alt={story.title} 
                  className="w-full h-64 md:h-96 object-cover"
                />
                <div className="p-6 md:p-8">
                  <button 
                    className="text-blue-700 font-medium mb-4 flex items-center hover:text-blue-800"
                    onClick={() => setSelectedStory(null)}
                  >
                    &larr; Back to Stories
                  </button>
                  
                  <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full mb-2">
                    {story.category}
                  </span>
                  
                  <h1 className="text-3xl font-bold mb-6">{story.title}</h1>
                  
                  <div className="flex items-center mb-8 border-b border-gray-200 pb-6">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                        <User className="h-6 w-6 text-blue-700" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <p className="text-lg font-medium text-gray-900">{story.author}</p>
                      <p className="text-gray-500">{format(story.date, "MMMM d, yyyy")}</p>
                    </div>
                  </div>
                  
                  <div className="prose max-w-none">
                    {story.content.split('\n\n').map((paragraph, index) => (
                      <p key={index} className="mb-4 text-gray-700 leading-relaxed">{paragraph}</p>
                    ))}
                  </div>
                  
                  <div className="mt-8 pt-8 border-t border-gray-200">
                    <h3 className="text-lg font-semibold mb-4">Share this story</h3>
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
        </div>
      )}
    </div>
  );
};

export default Stories;