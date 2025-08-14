import React, { useState } from 'react';
import { Search, Calendar, User, Tag, ArrowRight, Link, Check } from 'lucide-react';
import { format } from 'date-fns';
import { useLanguage } from '../contexts/LanguageContext';

// Updated news data with new latest article
const newsData = [
  {
    id: 1,
    title: "Successful Diaspora Picnic Brings Community Together",
    excerpt: "Over 80 community members gathered at Parque da Bela Vista for an unforgettable afternoon of cultural exchange, delicious food, and meaningful connections that strengthened our diaspora bonds.",
    content: "The sun was shining and spirits were high as over 80 members of our diaspora community came together on May 31st for what turned out to be one of our most successful events yet—the Diaspora Picnic at Parque da Bela Vista.\n\n**A True Community Potluck**\nThe heart of the event was the incredible potluck spread that showcased the culinary diversity of our community. Tables overflowed with dishes representing countries across Africa and the diaspora: fragrant jollof rice from West Africa, spicy berbere-seasoned dishes from Ethiopia, Cape Verdean cachupa, Angolan muamba, and so much more. The variety was a beautiful representation of our community's rich cultural tapestry.\n\n**Games and Laughter**\nThe afternoon was filled with activities that brought out everyone's playful side. Children and adults alike participated in traditional games, football matches, and impromptu dance sessions. The sound of laughter and multiple languages filled the park as families and friends both old and new connected over shared experiences.\n\n**Meaningful Connections**\nWhat made this event truly special were the connections formed. We witnessed:\n- Recent immigrants meeting established community members who offered practical advice and friendship\n- Children playing together while parents shared parenting experiences in a new country\n- Professionals networking and discovering collaboration opportunities\n- Elders sharing stories and wisdom with younger generations\n- Cultural exchanges as people learned about different African traditions\n\n**Community Support in Action**\nThe event demonstrated the power of community support. Attendees shared resources, job opportunities, housing tips, and childcare arrangements. Several participants mentioned feeling less isolated and more connected to a broader support network after the picnic.\n\n**Celebrating Our Heritage**\nThroughout the afternoon, we celebrated our diverse African heritage through music, storytelling, and cultural sharing. A spontaneous drum circle formed, traditional songs were sung, and stories were shared about homeland traditions and how they're being preserved and adapted in Portugal.\n\n**Family-Friendly Success**\nThe event was particularly successful in bringing together families. Children played safely while parents relaxed and connected, creating the kind of extended community family that many participants had been missing since moving to Portugal.\n\n**Participant Feedback**\n'This felt like home,' shared one participant. 'Being surrounded by people who understand my journey and share similar experiences was exactly what I needed.'\n\nAnother attendee noted: 'My children got to play with other kids who look like them and hear their parents' languages. That representation is so important for their sense of identity.'\n\n**Environmental Consciousness**\nTrue to our community values, the event was organized with environmental consciousness in mind. Participants brought reusable plates and utensils, and we ensured the park was left cleaner than we found it.\n\n**Building for the Future**\nThe success of this picnic has inspired us to make it a regular occurrence. Based on participant feedback, we're planning:\n- Quarterly community picnics\n- Themed cultural celebration picnics\n- Family-focused outdoor activities\n- Collaboration with other community organizations\n- Expansion to different parks around Lisbon\n\n**Gratitude and Recognition**\nWe extend our heartfelt gratitude to all the volunteers who helped organize and set up the event, the families who contributed delicious dishes, and every single person who attended and made the day special. Events like these remind us why community building is at the heart of everything we do.\n\nThe Diaspora Picnic wasn't just an event—it was a celebration of who we are, where we come from, and the beautiful community we're building together in Portugal. Here's to many more gatherings that strengthen our bonds and celebrate our shared journey.",
    date: new Date(2024, 4, 31), // May 31, 2024
    author: "Intercâmbio Diáspora Team",
    category: "Community",
    image: "https://i.imgur.com/3KJGfwj.jpg"
  },
  {
    id: 2,
    title: "Reflections from Web Summit: Connections, Insights, and Community Building",
    excerpt: "Our experience at Web Summit 2024 highlighted the power of authentic networking, representation in tech, and community-driven innovation within the African diaspora.",
    content: "This year's Web Summit in Lisbon was more than just a tech conference for our community—it was a powerful reminder of the importance of authentic connections and representation in the innovation ecosystem.\n\nKey insights from our participation:\n\n**Authentic Networking Over Transactional Exchanges**\nWhile many attendees focused on quick business card exchanges, we prioritized meaningful conversations that could lead to lasting partnerships. This approach resonated particularly well with other diaspora entrepreneurs and allies who value relationship-building over purely transactional networking.\n\n**Representation Matters in Tech Spaces**\nSeeing diverse faces in leadership positions and innovative startups was inspiring, but it also highlighted how much work remains to be done. Our presence at Web Summit wasn't just about learning—it was about being visible and showing that the African diaspora is actively contributing to Portugal's innovation landscape.\n\n**Community-Driven Innovation**\nMany of the most compelling startups we encountered were solving problems that directly impact communities. This reinforced our belief that innovation is most powerful when it's rooted in real community needs and experiences.\n\n**Building Bridges Between Communities**\nWeb Summit provided unique opportunities to connect with other diaspora communities, Portuguese entrepreneurs, and international visitors. These cross-cultural exchanges are essential for building the inclusive innovation ecosystem we envision for Portugal.\n\n**Looking Forward**\nThe connections made and insights gained at Web Summit will directly benefit our community through new partnerships, mentorship opportunities, and collaborative projects. We're already planning follow-up meetings and exploring ways to bring some of the innovative solutions we discovered to our community members.\n\nEvents like Web Summit remind us that our community's participation in Portugal's tech and innovation scene isn't just beneficial—it's essential for creating a truly inclusive and dynamic ecosystem.",
    date: new Date(2024, 10, 20), // November 20, 2024
    author: "Intercâmbio Diáspora Team",
    category: "Professional Development",
    image: "https://i.imgur.com/7mdxG48.jpg"
  },
  {
    id: 3,
    title: "Celebrating African Restaurants in Lisbon: The Power of Community and Authentic Flavors",
    excerpt: "Exploring how African restaurants in Lisbon serve as more than dining establishments—they're cultural bridges, community spaces, and pillars of economic empowerment.",
    content: "Lisbon's African restaurant scene represents far more than exceptional cuisine—it embodies the resilience, creativity, and community spirit of the African diaspora in Portugal.\n\n**Cultural Bridges in Every Dish**\nEach African restaurant in Lisbon tells a story of heritage preserved and shared. From Cape Verdean cachupa to Angolan muamba, these establishments serve as cultural ambassadors, introducing Portuguese diners to the rich culinary traditions of Africa while providing diaspora communities with tastes of home.\n\n**Community Gathering Spaces**\nBeyond serving food, these restaurants function as informal community centers where:\n- Recent immigrants find familiar faces and advice\n- Families celebrate milestones with traditional foods\n- Cultural events and celebrations take place\n- Business connections and friendships are formed\n- Languages and stories are shared across generations\n\n**Economic Empowerment Through Entrepreneurship**\nAfrican restaurant owners are creating economic opportunities not just for themselves, but for their communities:\n- Employing fellow diaspora members\n- Supporting African food suppliers and importers\n- Contributing to local economies while maintaining cultural authenticity\n- Creating pathways for other aspiring entrepreneurs\n\n**Preserving and Evolving Traditions**\nThese establishments masterfully balance authenticity with adaptation:\n- Maintaining traditional recipes and cooking methods\n- Adapting to local tastes and dietary preferences\n- Training the next generation in culinary traditions\n- Innovating while respecting cultural roots\n\n**Building Cross-Cultural Understanding**\nAfrican restaurants serve as informal cultural education centers, helping Portuguese diners understand and appreciate African cultures through the universal language of food. This cultural exchange builds bridges and breaks down barriers in meaningful ways.\n\n**Supporting Our Community**\nAs Intercâmbio Diáspora, we encourage our community to support these vital establishments. When we dine at African restaurants, we're not just enjoying a meal—we're supporting entrepreneurs, preserving culture, and strengthening our community's economic foundation.\n\nThese restaurants remind us that food is one of our most powerful tools for cultural preservation, community building, and cross-cultural understanding in our adopted home of Portugal.",
    date: new Date(2024, 10, 15), // November 15, 2024
    author: "Intercâmbio Diáspora Team",
    category: "Culture",
    image: "https://i.imgur.com/4Y46Pd9.jpg"
  },
  {
    id: 4,
    title: "Magical Full Moon Beach Gathering Connects Community with Nature",
    excerpt: "Our August 9th 'Noite de Lua na Praia' brought together community members for a unique evening of childhood games, gratitude rituals, and spiritual connection under the full moon.",
    content: "Under the luminous glow of the full moon at Praia de São Bruno in Caxias, our community gathered for a truly magical evening that combined spiritual connection, playful nostalgia, and deep community bonding.\n\n**Amplifying Lunar Energy**\nThe August 9th full moon provided the perfect backdrop for our 'Noite de Lua na Praia' event. As the moon rose over the Atlantic, casting silver reflections on the water, over 40 community members came together to harness this powerful lunar energy for personal and collective renewal.\n\n**Childhood Games Under the Stars**\nThe evening began with a series of childhood games that transported participants back to simpler times. The beach echoed with laughter as adults rediscovered the joy of:\n- Traditional African children's games\n- Beach volleyball and football\n- Storytelling circles\n- Sand castle building competitions\n- Traditional songs and chants\n\nThe games served as more than entertainment—they were a bridge connecting us to our childhood memories and cultural roots while creating new memories in our adopted home.\n\n**Gratitude Ritual and Reflection**\nAs the moon reached its peak, the community gathered in a large circle for a powerful gratitude ritual. Participants shared:\n- Appreciation for their journey to Portugal\n- Gratitude for community connections\n- Hopes and intentions for the future\n- Acknowledgment of challenges overcome\n- Celebration of cultural heritage\n\nThe ritual created a sacred space where vulnerability was welcomed and collective strength was felt by all.\n\n**Grounding and Connection**\nTrue to the event's intention, many participants removed their shoes to feel the sand between their toes, literally grounding themselves while strengthening their connection to both the earth and each other. This simple act became a powerful metaphor for staying rooted while adapting to new environments.\n\n**Community Bonding**\nThe unique setting and activities fostered deep connections:\n- New friendships formed over shared childhood memories\n- Intergenerational bonding as elders shared traditional games with younger participants\n- Cultural exchange as people from different African countries taught each other their traditional games\n- Spiritual connections through shared ritual and intention-setting\n\n**Nourishment for Body and Soul**\nParticipants brought light foods and drinks to share, creating an impromptu beach picnic that nourished both body and community spirit. The sharing of food under the moonlight added another layer of connection and care.\n\n**Participant Reflections**\n'I haven't felt this connected to my inner child in years,' shared one participant. 'Playing these games under the full moon with people who understand my journey was healing in ways I didn't expect.'\n\nAnother attendee reflected: 'The combination of nature, community, and ritual created such a powerful experience. I felt both grounded and uplifted at the same time.'\n\n**Environmental Consciousness**\nThe event emphasized our connection to nature and environmental responsibility. Participants were mindful of leaving no trace on the beach, and many commented on how the natural setting enhanced their sense of connection to both the earth and each other.\n\n**Spiritual and Cultural Significance**\nThe full moon has deep significance in many African cultures, representing renewal, reflection, and community gathering. This event honored those traditions while creating new ones in our Portuguese context.\n\n**Planning Future Moon Gatherings**\nThe overwhelming positive response has inspired us to make moon gatherings a regular offering:\n- Quarterly full moon beach gatherings\n- New moon intention-setting circles\n- Seasonal celebration rituals\n- Collaboration with other spiritual and cultural communities\n- Integration of different African spiritual traditions\n\n**Lasting Impact**\nParticipants left the beach with more than just sand in their shoes—they carried with them renewed energy, deeper community connections, and a sense of spiritual grounding that many had been seeking since moving to Portugal.\n\nThe 'Noite de Lua na Praia' reminded us that community building can take many forms, and sometimes the most powerful connections happen when we step away from traditional indoor spaces and allow nature to be our meeting ground.\n\nEvents like these honor our need for both playfulness and spirituality, creating space for the full spectrum of human experience within our diaspora community.",
    date: new Date(2024, 7, 10), // August 10, 2024 (day after the event)
    author: "Cultural Programs Coordinator",
    category: "Cultural",
    image: "https://imgur.com/oOfmX3A.jpg"
  },
  {
    id: 5,
    title: "Museum Visit Explores History of Resistance and Liberation in Portugal",
    excerpt: "Our April 6th visit to the Museu do Aljube provided powerful insights into Portuguese resistance history while fostering meaningful dialogue about freedom, resistance, and diaspora experiences.",
    content: "On April 6, 2025, over 25 community members joined us for a profound and educational visit to the Museu do Aljube – Resistência e Liberdade, a museum dedicated to the history of resistance against dictatorship in Portugal. This visit provided not only historical education but also created space for meaningful dialogue about resistance, freedom, and our own diaspora experiences.\n\n**Historical Context and Learning**\nThe Museu do Aljube, housed in a former political prison, offered our community a deep dive into Portugal's struggle against the Estado Novo dictatorship (1933-1974). As we walked through the exhibits, participants gained insights into:\n- The mechanisms of political repression and censorship\n- Stories of individual and collective resistance\n- The role of political prisoners and their families\n- The international context of Portugal's liberation struggle\n- The transition to democracy following the Carnation Revolution\n\n**Connecting Past and Present**\nWhat made this visit particularly powerful was how participants connected the historical narratives to contemporary experiences. Many drew parallels between:\n- Historical struggles for freedom and current social justice movements\n- The experience of political exile and modern migration\n- Resistance strategies used in Portugal and those employed in African liberation movements\n- The importance of preserving memory and telling untold stories\n\n**Diaspora Perspectives on Resistance**\nThe museum visit sparked rich discussions about resistance in the African diaspora context. Participants shared:\n- Stories of resistance from their countries of origin\n- Experiences of subtle forms of resistance in daily life as immigrants\n- The role of cultural preservation as a form of resistance\n- How education and community building can be acts of resistance\n- The importance of maintaining identity while integrating into new societies\n\n**Intergenerational Dialogue**\nThe visit brought together community members of different ages, creating opportunities for intergenerational dialogue about:\n- Different experiences of political systems and freedom\n- How historical knowledge informs present-day activism\n- The responsibility of preserving and sharing stories\n- The evolution of resistance movements over time\n\n**Educational Impact**\nParticipants left with a deeper understanding of:\n- Portuguese history and its impact on contemporary society\n- The universal nature of struggles for freedom and dignity\n- The importance of museums and cultural institutions in preserving memory\n- How historical awareness can inform present-day civic engagement\n\n**Community Reflection and Discussion**\nFollowing the museum visit, the group gathered at a nearby café for continued discussion. The conversation covered:\n- Personal reflections on the exhibits and their emotional impact\n- Connections between Portuguese resistance history and African liberation movements\n- The role of storytelling in preserving difficult histories\n- How historical awareness can strengthen community solidarity\n- Plans for future educational and cultural visits\n\n**Participant Feedback**\n'This visit helped me understand Portugal's history in a way that textbooks never could,' shared one participant. 'Seeing the actual spaces where people were imprisoned for their beliefs made the struggle for freedom very real and personal.'\n\nAnother attendee reflected: 'The parallels between the resistance stories we learned about and the struggles in our own countries of origin were striking. It reminded me that the fight for freedom and dignity is universal.'\n\n**Cultural Bridge Building**\nThe visit served as a bridge between Portuguese history and diaspora experiences, helping participants:\n- Better understand the society they now call home\n- Appreciate the freedoms available in contemporary Portugal\n- Connect their own stories to broader narratives of resistance and liberation\n- Develop deeper empathy for all people who have struggled for freedom\n\n**Future Educational Programming**\nThe success of this museum visit has inspired us to develop a regular educational programming series:\n- Monthly visits to museums and cultural sites\n- Historical walking tours of Lisbon\n- Discussions connecting Portuguese and African histories\n- Collaboration with educational institutions and cultural organizations\n- Development of educational resources for community members\n\n**Preserving Our Own Stories**\nThe visit also reinforced the importance of preserving and sharing our own community stories. Just as the museum preserves the memory of Portuguese resistance, we recognized our responsibility to document and share diaspora experiences for future generations.\n\n**Building Historical Consciousness**\nEvents like this museum visit are essential for building historical consciousness within our community. Understanding the history of our adopted home helps us:\n- Navigate contemporary Portuguese society with greater awareness\n- Appreciate the democratic freedoms we now enjoy\n- Connect our experiences to broader historical narratives\n- Develop informed perspectives on current social and political issues\n\nThe visit to the Museu do Aljube was more than an educational outing—it was an opportunity for our community to engage with history, reflect on our own experiences, and strengthen our understanding of the complex relationship between past and present, resistance and freedom, memory and identity.",
    date: new Date(2025, 3, 7), // April 7, 2025 (day after the event)
    author: "Educational Programs Coordinator",
    category: "Education",
    image: "https://i.imgur.com/T15A3ek.jpg"
  },
  {
    id: 6,
    title: "African Lisbon Tour: Discovering Hidden Heritage in the Heart of the City",
    excerpt: "Our guided tour through Lisbon revealed the rich African heritage woven into the city's fabric, connecting past and present through stories, sites, and community.",
    content: "On March 22nd, over 30 community members and allies joined us for an eye-opening journey through Lisbon's African heritage. Led by our knowledgeable community guide Naky, the African Lisbon Tour exceeded all expectations, revealing layers of history and culture that many participants had never encountered before.\n\n**Uncovering Hidden Stories**\nThe tour began in the historic center of Lisbon, where we explored sites that tell the complex story of African presence in Portugal. From colonial-era monuments to contemporary cultural spaces, each stop provided context for understanding how African communities have shaped and been shaped by this city.\n\nParticipants were particularly moved by learning about the contributions of African communities to Lisbon's development, stories that are often overlooked in mainstream historical narratives. The tour highlighted both historical injustices and the resilience and creativity of African communities throughout the centuries.\n\n**Contemporary African Lisbon**\nBeyond historical sites, we visited vibrant neighborhoods where African diaspora communities thrive today. We stopped by African-owned businesses, cultural centers, and community gathering spaces that serve as modern anchors for diaspora life in Lisbon.\n\nThe tour included visits to:\n- Historic sites with African connections\n- Contemporary African cultural spaces\n- Community businesses and gathering places\n- Art installations celebrating African heritage\n- Neighborhoods with significant diaspora populations\n\n**Community Connections**\nWhat made this tour special wasn't just the information shared, but the connections formed. Participants included recent immigrants, long-time residents, Portuguese allies, and international visitors. The diversity of perspectives enriched every discussion and created opportunities for meaningful cultural exchange.\n\nMany participants expressed surprise at how much African heritage exists in Lisbon and how interconnected the stories are with broader Portuguese history. The tour provided a framework for understanding contemporary diaspora experiences within this historical context.\n\n**Looking Forward**\nThe success of this tour has inspired us to make it a regular offering. We're planning monthly African heritage tours, each focusing on different aspects of the community's presence in Lisbon. Future tours will explore themes like music and arts, entrepreneurship, and family stories.\n\nParticipant feedback was overwhelmingly positive, with many requesting more opportunities to explore and celebrate African heritage in Portugal. This tour reminded us of the power of storytelling and community-led education in building understanding and pride.\n\nEvents like these strengthen our community by helping us understand our place in Lisbon's ongoing story while celebrating the contributions we continue to make to this city we call home.",
    date: new Date(2024, 2, 23), // March 23, 2024 (day after the event)
    author: "Intercâmbio Diáspora Team",
    category: "Culture",
    image: "https://i.imgur.com/Vhmiy5j.jpg"
  },
  {
    id: 4,
    title: "Language Exchange Success: Building Bridges Through Conversation",
    excerpt: "Our March 18th Language Exchange & Cultural Meetup brought together Portuguese and English speakers for an evening of learning, laughter, and meaningful connections.",
    content: "The Intercâmbio Learning Center buzzed with energy on March 18th as over 25 participants gathered for our Language Exchange & Cultural Meetup. The evening perfectly embodied our mission of building bridges through authentic cultural and linguistic exchange.\n\n**Breaking Down Language Barriers**\nThe event paired Portuguese native speakers with English speakers in structured conversation groups, creating a supportive environment for language practice. What started as tentative exchanges quickly evolved into animated discussions about everything from daily life in Lisbon to cultural traditions from around the world.\n\nParticipants appreciated the structured approach that included:\n- Guided conversation starters\n- Cultural context explanations\n- Informal practice time\n- Group discussions on shared experiences\n- Resource sharing for continued learning\n\n**Cultural Exchange Beyond Language**\nWhile language practice was the primary focus, the evening naturally evolved into broader cultural exchange. Participants shared stories about their journeys to Portugal, discussed cultural differences and similarities, and found common ground in their experiences as part of diverse communities.\n\nThe African diaspora participants particularly valued the opportunity to practice Portuguese in a culturally sensitive environment where their experiences and perspectives were understood and appreciated. Portuguese participants expressed genuine interest in learning about African cultures and diaspora experiences.\n\n**Building Lasting Connections**\nMany participants exchanged contact information and made plans to continue practicing together outside of our organized events. Several mentioned that the evening helped them feel more confident about using Portuguese in professional and social settings.\n\nOne participant shared: 'This wasn't just about language practice—it was about feeling seen and understood while learning. The cultural context made all the difference in my confidence.'\n\n**Community Impact**\nThe success of this event highlighted the hunger in our community for structured opportunities to improve language skills while maintaining cultural connections. The feedback was overwhelmingly positive, with participants requesting more frequent language exchange opportunities.\n\n**Expanding the Program**\nBased on the enthusiasm and feedback from this event, we're expanding our language exchange program to include:\n- Weekly conversation groups\n- Specialized sessions for different proficiency levels\n- Cultural workshops integrated with language learning\n- Professional Portuguese for career development\n- Family-friendly sessions for parents and children\n\nThe March 18th event reminded us that language learning is most effective when it happens within a supportive community context. By combining linguistic practice with cultural understanding, we're not just helping people communicate better—we're building stronger, more connected communities.\n\nWe're already planning our next language exchange event and looking forward to welcoming both returning participants and new community members to this growing program.",
    date: new Date(2024, 2, 19), // March 19, 2024 (day after the event)
    author: "Language Program Coordinator",
    category: "Education",
    image: "https://i.imgur.com/uL7QWGB.jpg"
  },
  {
    id: 5,
    title: "Community Gathering & Story Circle: Sharing Our Journeys, Strengthening Our Bonds",
    excerpt: "March 10th's Community Gathering created a powerful space for storytelling, connection, and celebration of our diverse diaspora experiences.",
    content: "The Community Center in Lisbon transformed into a warm, welcoming space on March 10th as over 40 community members gathered for our Community Gathering & Story Circle. The evening celebrated the power of storytelling in building connections and preserving our collective experiences as part of the African diaspora in Portugal.\n\n**The Power of Shared Stories**\nThe heart of the evening was our story circle, where community members shared personal experiences about their journeys to Portugal, challenges overcome, and moments of joy and discovery. The stories ranged from humorous cultural misunderstandings to profound reflections on identity and belonging.\n\nEach story was met with understanding nods, supportive comments, and often, shared laughter or tears. The circle created a safe space where vulnerability was welcomed and diverse experiences were celebrated.\n\n**Diverse Voices, Common Themes**\nWhile each story was unique, common themes emerged:\n- The challenge and reward of learning Portuguese\n- Navigating bureaucracy and administrative processes\n- Finding community and building new friendships\n- Maintaining cultural traditions while embracing new ones\n- Professional challenges and successes\n- The importance of family and community support\n\n**Cultural Celebration**\nThe evening wasn't just about sharing challenges—it was also a celebration. We enjoyed:\n- Traditional music from various African countries\n- A potluck dinner featuring dishes from across the diaspora\n- Informal dancing and singing\n- Photo sharing and memory making\n- Resource sharing and mutual support\n\n**Intergenerational Connections**\nOne of the most beautiful aspects of the evening was seeing connections form across generations. Long-time residents shared wisdom and practical advice with recent arrivals, while newer community members brought fresh perspectives and energy.\n\nChildren played together while parents shared experiences, creating the kind of extended community family that many participants had been missing since moving to Portugal.\n\n**Building Support Networks**\nBeyond the formal storytelling, the evening facilitated numerous informal connections. Participants exchanged contact information, offered professional advice, shared housing tips, and made plans for future gatherings.\n\nSeveral participants mentioned that the evening helped them feel less isolated and more connected to a broader community of people who understood their experiences.\n\n**Community Feedback**\n'This is exactly what I needed,' shared one participant. 'Hearing other people's stories made me realize I'm not alone in my experiences, and it gave me hope and practical ideas for my own journey.'\n\nAnother participant noted: 'The combination of storytelling, food, and music created such a warm atmosphere. It felt like being with family.'\n\n**Continuing the Tradition**\nThe success of this gathering has inspired us to make story circles a regular part of our programming. We're planning:\n- Monthly story circles with different themes\n- Intergenerational storytelling events\n- Digital story collection for community archives\n- Storytelling workshops to help people share their experiences\n- Collaboration with local cultural organizations\n\nThe March 10th Community Gathering reminded us that our stories are our strength. By sharing our experiences, we not only support each other but also create a rich tapestry of diaspora life that can inspire and guide future community members.\n\nEvents like these are essential for building the kind of supportive, connected community we all need to thrive in our adopted home of Portugal.",
    date: new Date(2024, 2, 11), // March 11, 2024 (day after the event)
    author: "Community Programs Coordinator",
    category: "Community",
    image: "https://i.imgur.com/eqADTrh.jpg"
  },
  {
    id: 6,
    title: "Intercâmbio Diaspora Meetup: Launching Our Community Vision",
    excerpt: "Our inaugural meetup on March 5th brought together diaspora community members to share our vision and begin building the connections that define our organization.",
    content: "March 5th marked a significant milestone for Intercâmbio Diáspora as we hosted our inaugural community meetup in Lisbon. Over 35 community members gathered to learn about our vision, share their own experiences, and begin building the network of connections that would become the foundation of our organization.\n\n**Introducing Our Mission**\nThe evening began with a presentation of our mission: to create spaces for the African and Afro-descendant diaspora community in Portugal to connect, share experiences, and support each other's growth and integration. We outlined our planned programs and invited feedback from attendees.\n\nThe response was overwhelmingly positive, with many participants expressing relief at finding an organization specifically focused on diaspora experiences and needs.\n\n**Community Needs Assessment**\nA significant portion of the evening was dedicated to listening. We conducted informal focus groups where participants shared:\n- Their biggest challenges living in Portugal\n- Resources and support they wished existed\n- Skills and knowledge they could share with others\n- Ideas for community events and programs\n- Professional and personal goals\n\nThis feedback directly shaped our programming priorities and helped us understand the diverse needs within our community.\n\n**Networking and Connection Building**\nThe meetup included structured networking activities designed to help participants connect based on shared interests, professional backgrounds, and personal experiences. We saw immediate connections forming:\n- Recent arrivals connecting with established residents\n- Professionals in similar fields sharing advice and opportunities\n- Parents discussing schools and family life in Portugal\n- Entrepreneurs exploring collaboration possibilities\n- Students finding study partners and mentors\n\n**Cultural Celebration**\nTrue to our commitment to celebrating African heritage, the evening included:\n- Music from across the African diaspora\n- Light refreshments featuring African-inspired foods\n- Informal conversations in multiple languages\n- Sharing of cultural traditions and practices\n- Discussion of upcoming cultural celebrations\n\n**Volunteer Opportunities**\nMany attendees expressed interest in volunteering and contributing to our organization's growth. We identified potential volunteers for:\n- Event planning and coordination\n- Language exchange facilitation\n- Professional mentorship programs\n- Cultural workshop leadership\n- Social media and communications\n- Community outreach\n\n**Immediate Impact**\nEven before the evening ended, we saw the immediate impact of bringing the community together:\n- WhatsApp groups formed for ongoing communication\n- Professional connections and job referrals were made\n- Housing tips and recommendations were shared\n- Childcare arrangements for future events were discussed\n- Informal mentorship relationships began\n\n**Community Feedback**\n'I've been in Lisbon for two years and this is the first time I've felt truly connected to a community that understands my experience,' shared one participant.\n\nAnother attendee noted: 'This organization is exactly what our community needs. I'm excited to be part of building something meaningful.'\n\n**Setting the Foundation**\nThis inaugural meetup established the foundation for everything that followed. The connections made, feedback received, and enthusiasm generated directly influenced our subsequent programming and events.\n\nThe evening confirmed our belief that there was a real need and desire for an organization focused specifically on African and Afro-descendant diaspora experiences in Portugal.\n\n**Looking Forward**\nThe success of this first meetup gave us the confidence and community support to move forward with our ambitious programming plans. Many of the attendees became regular participants in our subsequent events and several joined our organizing team.\n\nThe March 5th meetup wasn't just the beginning of Intercâmbio Diáspora—it was the beginning of a stronger, more connected diaspora community in Portugal. The relationships formed and vision shared that evening continue to guide our work and inspire our community-building efforts.",
    date: new Date(2024, 2, 6), // March 6, 2024 (day after the event)
    author: "Intercâmbio Diáspora Founding Team",
    category: "Community",
    image: "https://i.imgur.com/U0U8tKF.jpg"
  },
  {
    id: 7,
    title: "Intercâmbio Diáspora Launches New Community Platform",
    excerpt: "We're excited to announce the launch of our new digital platform designed to better connect and serve the African diaspora community in Portugal.",
    content: "Today marks a significant milestone for Intercâmbio Diáspora as we officially launch our comprehensive digital platform designed to strengthen connections within the African and Afro-descendant community in Portugal.\n\nOur new platform features:\n- Enhanced event discovery and registration\n- Community discussion forums\n- Resource sharing and learning hub\n- Professional networking opportunities\n- Cultural celebration calendar\n\nThis platform represents months of development and community feedback, ensuring it truly serves the needs of our diverse community. We've incorporated features that allow members to share their stories, connect with others who share similar experiences, and access resources that support their journey in Portugal.\n\nThe platform also includes multilingual support, making it accessible to community members who are more comfortable in Portuguese, English, or other languages. We believe this inclusivity is essential for building a truly connected diaspora community.\n\nWe invite all community members to explore the platform, create their profiles, and begin connecting with others. Together, we can build stronger networks and support systems that benefit everyone in our community.",
    date: new Date(2024, 11, 15), // December 15, 2024
    author: "Intercâmbio Diáspora Team",
    category: "Community",
    image: "https://i.imgur.com/aFewmTX.jpg"
  },
  {
    id: 4,
    title: "Intercâmbio Diáspora Celebrates African Heritage Day",
    excerpt: "Join us for a day of cultural celebration, storytelling, and community connection at our African Heritage Day event.",
    content: "We're excited to announce our upcoming African Heritage Day celebration! This special event will bring together members of the African and Afro-descendant community in Lisbon for a day of cultural exchange, storytelling, and connection.\n\nThe event will feature:\n- Traditional music and dance performances\n- Storytelling sessions\n- Cultural workshops\n- Community networking\n- African cuisine\n\nThis celebration is part of our ongoing commitment to creating spaces where African and Afro-descendant communities can celebrate their heritage, share their stories, and build meaningful connections.\n\nThe event will take place at our community space in Lisbon, and all are welcome to join. Whether you're part of the African diaspora or interested in learning more about African cultures, this event offers a wonderful opportunity for cultural exchange and community building.",
    date: new Date(2024, 3, 15),
    author: "Intercâmbio Diáspora Team",
    category: "Events",
    image: "https://i.imgur.com/eUtTakc.jpg"
  },
  {
    id: 5,
    title: "Language Exchange Program Launches New Sessions",
    excerpt: "Our popular language exchange program expands with new Portuguese-English conversation groups and cultural learning opportunities.",
    content: "We're thrilled to announce the expansion of our language exchange program! In response to growing community interest, we're launching new Portuguese-English conversation groups that combine language learning with cultural exchange.\n\nOur language exchange sessions provide a supportive environment where participants can:\n- Practice Portuguese and English with native speakers\n- Learn about cultural contexts and expressions\n- Build confidence in communication\n- Make friends from diverse backgrounds\n\nThe program is designed to be accessible to learners at all levels, from beginners to advanced speakers. Each session includes structured conversation practice, cultural discussions, and informal social time.\n\nParticipants have shared how these exchanges have not only improved their language skills but also helped them build meaningful connections within the community.",
    date: new Date(2024, 3, 10),
    author: "Language Program Coordinator",
    category: "Education",
    image: "https://i.imgur.com/cmCCoJI.jpg"
  },
  {
    id: 6,
    title: "Community Tour: Exploring African Heritage in Lisbon",
    excerpt: "Join us for a guided tour exploring the rich African history and cultural heritage sites in Lisbon.",
    content: "Discover the African heritage woven into Lisbon's history with our upcoming community tour! Led by knowledgeable guides from the African diaspora community, this tour offers a unique perspective on the city's historical and contemporary connections to Africa.\n\nThe tour will explore:\n- Historical sites significant to African history in Lisbon\n- Contemporary African cultural spaces\n- Community landmarks\n- Art installations and exhibitions\n\nThis initiative is part of our commitment to highlighting the contributions of African and Afro-descendant communities to Lisbon's cultural landscape. Through these tours, we aim to preserve and share important historical narratives while fostering understanding and appreciation of African heritage.\n\nParticipants will gain insights into both historical and contemporary aspects of African presence in Lisbon, making connections between past and present.",
    date: new Date(2024, 3, 5),
    author: "Cultural Programs Team",
    category: "Culture",
    image: "https://i.imgur.com/fHIxWQt.jpg"
  },
  {
    id: 7,
    title: "Professional Development Workshop Series",
    excerpt: "New workshop series focuses on career development, entrepreneurship, and professional networking for diaspora community members.",
    content: "We're launching a comprehensive professional development workshop series designed specifically for members of the African and Afro-descendant diaspora community. These workshops address the unique challenges and opportunities faced by our community members in the professional sphere.\n\nThe workshop series includes:\n- Resume writing and interview skills\n- Entrepreneurship in Portugal\n- Professional networking strategies\n- Career transition guidance\n- Leadership development\n\nEach workshop combines practical skills development with cultural awareness and community support. Participants will have opportunities to connect with mentors, share experiences, and build professional networks within the community.\n\nThe series is designed to empower community members with the tools and connections needed for professional success while maintaining cultural authenticity.",
    date: new Date(2024, 3, 1),
    author: "Professional Development Coordinator",
    category: "Career",
    image: "https://i.imgur.com/1ntgyJg.jpg"
  },
  {
    id: 8,
    title: "Youth Mentorship Program Launch",
    excerpt: "New initiative connects young people from the diaspora community with mentors for educational and personal development support.",
    content: "We're proud to announce the launch of our Youth Mentorship Program, designed to support young people from African and Afro-descendant backgrounds in their educational and personal development journeys.\n\nThe program matches youth with mentors from similar cultural backgrounds who can provide:\n- Academic guidance\n- Career advice\n- Cultural connection\n- Personal development support\n\nThis initiative responds to community feedback about the importance of role models and guidance for young people navigating education and career paths while maintaining strong connections to their cultural heritage.\n\nMentors are professionals from various fields who understand the unique experiences and challenges faced by youth in the diaspora community.",
    date: new Date(2024, 2, 25),
    author: "Youth Programs Director",
    category: "Education",
    image: "https://i.imgur.com/aLhAefJ.jpg"
  },
  {
    id: 9,
    title: "Cultural Exchange Workshop Series",
    excerpt: "Interactive workshops exploring African cultural traditions, music, and art with hands-on activities and community discussions.",
    content: "Join us for our new Cultural Exchange Workshop Series, designed to celebrate and preserve African cultural traditions through interactive learning experiences. These workshops provide hands-on opportunities to engage with various aspects of African heritage.\n\nWorkshop topics include:\n- Traditional African music and instruments\n- African art and craft techniques\n- Storytelling traditions\n- Culinary heritage\n- Dance and movement\n\nEach workshop is led by community members and cultural practitioners who bring authentic knowledge and passion to their teaching. Participants will not only learn new skills but also connect with others who share an interest in African culture.\n\nThese workshops are open to all community members and allies, creating inclusive spaces for cultural learning and appreciation.",
    date: new Date(2024, 2, 20),
    author: "Cultural Programs Team",
    category: "Culture",
    image: "https://i.imgur.com/4Y46Pd9.jpg"
  },
  {
    id: 10,
    title: "Community Networking Event Success",
    excerpt: "Our recent networking event brought together professionals from diverse backgrounds, creating new opportunities for collaboration and growth.",
    content: "Our recent Community Networking Event was a tremendous success, bringing together over 100 professionals from the African and Afro-descendant diaspora community. The event created valuable opportunities for connection, collaboration, and professional growth.\n\nHighlights from the event:\n- Professional speed networking sessions\n- Industry-specific discussion groups\n- Mentorship matching opportunities\n- Resource sharing workshops\n- Cultural celebration and entertainment\n\nParticipants represented diverse industries including technology, healthcare, education, arts, and entrepreneurship. Many attendees reported making meaningful connections that have already led to new collaborations and opportunities.\n\nThe success of this event demonstrates the strength and potential of our community when we come together to support each other's professional aspirations.",
    date: new Date(2024, 2, 15),
    author: "Professional Development Coordinator",
    category: "Networking",
    image: "https://i.imgur.com/AR9vw6I.jpg"
  },
  {
    id: 11,
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
const categories = ["All", "Community", "Events", "Education", "Culture", "Career", "Networking"];

const News = () => {
  const { t } = useLanguage();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedArticle, setSelectedArticle] = useState<number | null>(null);
  const [copiedArticleId, setCopiedArticleId] = useState<number | null>(null);

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

  // Copy link functionality
  const copyArticleLink = async (articleId: number, articleTitle: string) => {
    try {
      // Create a shareable URL for the article
      const articleUrl = `${window.location.origin}/news#article-${articleId}`;
      
      // Try to use the modern clipboard API
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(articleUrl);
      } else {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = articleUrl;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        textArea.style.top = '-999999px';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand('copy');
        textArea.remove();
      }
      
      // Show success feedback
      setCopiedArticleId(articleId);
      setTimeout(() => setCopiedArticleId(null), 2000);
      
    } catch (err) {
      console.error('Failed to copy link:', err);
      // Fallback: show the URL in an alert
      const articleUrl = `${window.location.origin}/news#article-${articleId}`;
      alert(`Copy this link: ${articleUrl}`);
    }
  };

  // Social sharing functions
  const shareToFacebook = (article: typeof newsData[0]) => {
    const url = `${window.location.origin}/news#article-${article.id}`;
    const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}&quote=${encodeURIComponent(article.title)}`;
    window.open(shareUrl, '_blank', 'width=600,height=400');
  };

  const shareToTwitter = (article: typeof newsData[0]) => {
    const url = `${window.location.origin}/news#article-${article.id}`;
    const text = `${article.title} - ${article.excerpt}`;
    const shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`;
    window.open(shareUrl, '_blank', 'width=600,height=400');
  };

  const shareToLinkedIn = (article: typeof newsData[0]) => {
    const url = `${window.location.origin}/news#article-${article.id}`;
    const shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
    window.open(shareUrl, '_blank', 'width=600,height=400');
  };

  const shareToWhatsApp = (article: typeof newsData[0]) => {
    const url = `${window.location.origin}/news#article-${article.id}`;
    const text = `${article.title}\n\n${article.excerpt}\n\nRead more: ${url}`;
    const shareUrl = `https://wa.me/?text=${encodeURIComponent(text)}`;
    window.open(shareUrl, '_blank');
  };

  const shareViaEmail = (article: typeof newsData[0]) => {
    const url = `${window.location.origin}/news#article-${article.id}`;
    const subject = `Check out this article: ${article.title}`;
    const body = `I thought you might be interested in this article from Intercâmbio Diáspora:\n\n${article.title}\n\n${article.excerpt}\n\nRead the full article here: ${url}`;
    const mailtoUrl = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;
  };

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
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder={t('news.search')}
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
                  {t('news.by')} {newsData[0].author}
                </div>
                <button 
                  className="text-red-700 font-medium flex items-center hover:text-red-800"
                  onClick={() => setSelectedArticle(newsData[0].id)}
                >
                  {t('news.readFullArticle')} <ArrowRight className="ml-2 h-4 w-4" />
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
                      {t('news.by')} {article.author}
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
            <h3 className="text-xl font-medium text-gray-600">{t('news.noArticles')}</h3>
            <p className="mt-2 text-gray-500">{t('news.noArticlesDesc')}</p>
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
                    {t('news.backToNews')}
                  </button>
                  
                  <div className="flex flex-wrap items-center gap-4 mb-4">
                    <div className="flex items-center text-sm text-red-700 font-medium">
                      <Calendar className="h-4 w-4 mr-1" />
                      {format(article.date, "MMMM d, yyyy")}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <User className="h-4 w-4 mr-1" />
                      {t('news.by')} {article.author}
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
                    <h3 className="text-lg font-semibold mb-4">{t('news.shareArticle')}</h3>
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