import React, { useState } from 'react';
import { Search, Calendar, User, Tag, ArrowRight, Link, Check } from 'lucide-react';
import { format } from 'date-fns';
import { useLanguage } from '../contexts/LanguageContext';

// Updated news data with new latest article
const newsData = [
  {
    id: 1,
    title: "Successful Diaspora Picnic Brings Community Together",
    excerpt: "Over 80 community members gathered at Parque da Bela Vista for an afternoon of food, music, and connection that strengthened our bonds.",
    content: "On May 31st, the sun shone over Parque da Bela Vista as more than 80 members of our diaspora family came together for a joyful community picnic.\n\n**A Shared Table**\nThe potluck was the heart of the day, with dishes from across Africa with the diaspora—jollof rice (from Gambia and Nigeria), cachupa, muamba, berbere-seasoned stews, and more. Each dish told a story and reflected our cultural diversity.\n\n**Fun and Connection**\nPeople from diffrent countries played games, share food, and danced together, while conversations in many languages filled the park. New friendships were made, elders shared wisdom, and families found comfort in community support.\n\n**Celebrating Heritage**\nMusic, storytelling, and the continues music circle reminded us of our shared roots and the traditions we continue to carry in Portugal.\n\n**Looking Ahead**\nThe success of this gathering has inspired plans for regular community picnics, themed celebrations, and family activities across Lisbon.\n\nWe thank all the volunteers, families, and participants who made the day unforgettable. The Diaspora Picnic was more than an event—it was a celebration of who we are and the strong community we're building together.",
    date: new Date(2024, 4, 31), // May 31, 2025
    author: "Intercâmbio Diáspora Team",
    category: "Community",
    image: "https://imgur.com/aFewmTX.jpg"
  },
  {
    id: 2,
    title: "Reflections from Web Summit: Connections, Insights, and Community Building",
    excerpt: "Our experience at Web Summit 2024 highlighted the power of authentic networking, representation in tech, and community-driven innovation within the African diaspora.",
    content: "This year's Web Summit in Lisbon was more than just a tech conference for our community—it was a powerful reminder of the importance of authentic connections and representation in the innovation ecosystem.\n\nKey insights from our participation:\n\n**Authentic Networking Over Transactional Exchanges**\nWhile many attendees focused on quick business card exchanges, we prioritized meaningful conversations that could lead to lasting partnerships. This approach resonated particularly well with other diaspora entrepreneurs and allies who value relationship-building over purely transactional networking.\n\n**Representation Matters in Tech Spaces**\nSeeing diverse faces in leadership positions and innovative startups was inspiring, but it also highlighted how much work remains to be done. Our presence at Web Summit wasn't just about learning—it was about being visible and showing that the African diaspora is actively contributing to Portugal's innovation landscape.\n\n**Community-Driven Innovation**\nMany of the most compelling startups we encountered were solving problems that directly impact communities. This reinforced our belief that innovation is most powerful when it's rooted in real community needs and experiences.\n\n**Building Bridges Between Communities**\nWeb Summit provided unique opportunities to connect with other diaspora communities, Portuguese entrepreneurs, and international visitors. These cross-cultural exchanges are essential for building the inclusive innovation ecosystem we envision for Portugal.\n\n**Looking Forward**\nThe connections made and insights gained at Web Summit will directly benefit our community through new partnerships, mentorship opportunities, and collaborative projects. We're already planning follow-up meetings and exploring ways to bring some of the innovative solutions we discovered to our community members.\n\nEvents like Web Summit remind us that our community's participation in Portugal's tech and innovation scene isn't just beneficial—it's essential for creating a truly inclusive and dynamic ecosystem.",
    date: new Date(2024, 10, 20), // November 20, 2024
    author: "Intercâmbio Diáspora Team",
    category: "Professional Development",
    image: "https://imgur.com/A32HAcG.jpg"
  },
  {
    id: 3,
    title: "Cultural Exchange Workshop Celebrates African Heritage and Traditions",
    excerpt: "Community members came together in Lisbon to explore African traditions, music, and art through interactive activities and meaningful discussions.",
    content: "On February 25th, 2024, Intercâmbio Diáspora hosted a vibrant Cultural Exchange Workshop at the Associação Caboverdeana in Lisbon, bringing together more than 60 participants for an afternoon of learning, creativity, and celebration.\n\n**Hands-On Exploration**\nThe workshop featured interactive stations where attendees experienced African heritage firsthand. Language circles filled the room with energy, craft and textile workshops allowed participants to try traditional techniques, and storytelling sessions shared oral traditions and folklore passed down through generations.\n\n**Connection Through Culture**\n“This workshop was about more than just learning – it was about feeling connected to our roots and sharing that connection with others,” said facilitator Dulcinea Sousa. “We saw people of all ages and backgrounds come together to celebrate the richness of African culture.”\n\n**Highlights of the Afternoon**\n- Traditional music led by experienced musicians\n- Textile and craft-making sessions\n- Storytelling rooted in African oral traditions\n- Dance demonstrations and participatory sessions\n- Cultural food tasting with dishes from across Africa\n\nParticipants described the experience as both educational and emotional. “I learned so much about traditions I had only heard about but never experienced,” said an African-American living in Portugal. “The hands-on approach made everything feel real and meaningful.”\n\n**Strengthening Community Bonds**\nThe workshop also created intergenerational connections, with people of diffrent ages living in Portugal sharing their knowledge and younger participants helping with the organisation. “Events like this are essential for preserving our cultural heritage while making it accessible to new generations,” added a Afro-Brazillian dancer. “We’re not just maintaining traditions – we’re helping them evolve and thrive.”\n\n**Looking Ahead**\nInspired by the success of this event, Intercâmbio Diáspora is planning regular cultural education sessions, with the next workshop set to explore the evolution of traditional African music in contemporary contexts.",
    author: "Community Reporter",
    date: new Date(2024, 1, 26), // February 26, 2024
    category: "Culture",
    image: "https://i.imgur.com/4x5JR34.jpg"
  },
  {
    id: 4,
    title: "Year-End Community Gathering Reflects on Achievements and Builds Connections",
    excerpt: "In December, more than 80 community members gathered in Lisbon to celebrate the year’s accomplishments, share stories, and strengthen bonds for the future.",
    content: "On December 8th, 2024, Intercâmbio Diáspora closed the year with a heartwarming gathering at the Community Center in Lisbon. Over 80 community members came together for an evening of reflection, celebration, and connection.\n\n**Celebrating Achievements**\nThe evening honored the year’s milestones and the many personal journeys that defined the community. Attendees shared stories, laughter, and gratitude, creating a strong sense of belonging. “Looking back at this year, I’m amazed by how much our community has grown,” said organizer Ebony Kennedy. “This gathering reminded us that we’re not just individuals living in Portugal – we’re a family.”\n\n**Program Highlights**\n- Presentation of community achievements from the year\n- Open mic for storytelling and reflections\n- Traditional music performances\n- A shared meal with African dishes\n- Discussions on upcoming initiatives for 2025\n- Recognition of volunteers and contributors\n\nOne of the most touching moments came during the story-sharing session, when recent immigrant Carlos shared challenges of finding his place in Portugal. “When I first arrived, I felt lost and disconnected. This community became my anchor, helping me navigate life here while holding onto my cultural identity.”\n\n**Looking Toward 2024**\nThe gathering also laid the foundation for the year ahead. Ideas for expanding language exchanges, cultural workshops, and professional networking were met with enthusiasm. “What struck me most was the diversity of our community – people from different countries, professions, and life stages, all united by our shared experience,” said participant Patricia.\n\n**A Commitment to Growth**\nThe evening ended with a collective commitment to keep building bridges, preserving cultural heritage, and supporting newcomers. With energy and connection renewed, the community stepped into 2025 ready for another year of growth, celebration, and solidarity.",
    author: "Community Reporter",
    date: new Date(2023, 11, 10), // December 10, 2024
    category: "Community",
    image: "https://imgur.com/9AW7riB.jpg"
  },  
  {
    id: 5,
    title: "Celebrating African Restaurants in Lisbon: The Power of Community and Authentic Flavors",
    excerpt: "Exploring how African restaurants in Lisbon serve as more than dining establishments—they're cultural bridges, community spaces, and pillars of economic empowerment.",
    content: "Lisbon's African restaurant scene represents far more than exceptional cuisine—it embodies the resilience, creativity, and community spirit of the African diaspora in Portugal.\n\n**Cultural Bridges in Every Dish**\nEach African restaurant in Lisbon tells a story of heritage preserved and shared. From Cape Verdean cachupa to Angolan muamba, these establishments serve as cultural ambassadors, introducing Portuguese diners to the rich culinary traditions of Africa while providing diaspora communities with tastes of home.\n\n**Community Gathering Spaces**\nBeyond serving food, these restaurants function as informal community centers where:\n- Recent immigrants find familiar faces and advice\n- Families celebrate milestones with traditional foods\n- Cultural events and celebrations take place\n- Business connections and friendships are formed\n- Languages and stories are shared across generations\n\n**Economic Empowerment Through Entrepreneurship**\nAfrican restaurant owners are creating economic opportunities not just for themselves, but for their communities:\n- Employing fellow diaspora members\n- Supporting African food suppliers and importers\n- Contributing to local economies while maintaining cultural authenticity\n- Creating pathways for other aspiring entrepreneurs\n\n**Preserving and Evolving Traditions**\nThese establishments masterfully balance authenticity with adaptation:\n- Maintaining traditional recipes and cooking methods\n- Adapting to local tastes and dietary preferences\n- Training the next generation in culinary traditions\n- Innovating while respecting cultural roots\n\n**Building Cross-Cultural Understanding**\nAfrican restaurants serve as informal cultural education centers, helping Portuguese diners understand and appreciate African cultures through the universal language of food. This cultural exchange builds bridges and breaks down barriers in meaningful ways.\n\n**Supporting Our Community**\nAs Intercâmbio Diáspora, we encourage our community to support these vital establishments. When we dine at African restaurants, we're not just enjoying a meal—we're supporting entrepreneurs, preserving culture, and strengthening our community's economic foundation.\n\nThese restaurants remind us that food is one of our most powerful tools for cultural preservation, community building, and cross-cultural understanding in our adopted home of Portugal.",
    date: new Date(2024, 10, 15), // November 15, 2024
    author: "Intercâmbio Diáspora Team",
    category: "Culture",
    image: "https://imgur.com/q3JhdT8.jpg"
  },
  {
    id: 6,
    title: "Magical Full Moon Beach Gathering Connects Community with Nature",
    excerpt: "Our August 9th 'Noite de Lua na Praia' brought together community members for a unique evening of childhood games, gratitude rituals, and spiritual connection under the full moon.",
    content: "Under the luminous glow of the full moon at Praia de São Bruno in Caxias, our community gathered for a truly magical evening that combined spiritual connection, playful nostalgia, and deep community bonding.\n\n**Amplifying Lunar Energy**\nThe August 9th full moon provided the perfect backdrop for our 'Noite de Lua na Praia' event. As the moon rose over the Atlantic, casting silver reflections on the water, over 40 community members came together to harness this powerful lunar energy for personal and collective renewal.\n\n**Childhood Games Under the Stars**\nThe evening began with a series of childhood games that transported participants back to simpler times. The beach echoed with laughter as adults rediscovered the joy of:\n- Traditional African children's games\n- Beach volleyball and football\n- Storytelling circles\n- Sand castle building competitions\n- Traditional songs and chants\n\nThe games served as more than entertainment—they were a bridge connecting us to our childhood memories and cultural roots while creating new memories in our adopted home.\n\n**Gratitude Ritual and Reflection**\nAs the moon reached its peak, the community gathered in a large circle for a powerful gratitude ritual. Participants shared:\n- Appreciation for their journey to Portugal\n- Gratitude for community connections\n- Hopes and intentions for the future\n- Acknowledgment of challenges overcome\n- Celebration of cultural heritage\n\nThe ritual created a sacred space where vulnerability was welcomed and collective strength was felt by all.\n\n**Grounding and Connection**\nTrue to the event's intention, many participants removed their shoes to feel the sand between their toes, literally grounding themselves while strengthening their connection to both the earth and each other. This simple act became a powerful metaphor for staying rooted while adapting to new environments.\n\n**Community Bonding**\nThe unique setting and activities fostered deep connections:\n- New friendships formed over shared childhood memories\n- Intergenerational bonding as elders shared traditional games with younger participants\n- Cultural exchange as people from different African countries taught each other their traditional games\n- Spiritual connections through shared ritual and intention-setting\n\n**Nourishment for Body and Soul**\nParticipants brought light foods and drinks to share, creating a beach picnic that nourished both body and community spirit. The sharing of food under the moonlight added another layer of connection and care.\n\n**Participant Reflections**\n'I haven't felt this connected to my inner child in years,' shared one participant. 'Playing these games under the full moon with people who understand my journey was healing in ways I didn't expect.'\n\nAnother attendee reflected: 'The combination of nature, community, and ritual created such a powerful experience. I felt both grounded and uplifted at the same time.'\n\n**Environmental Consciousness**\nThe event emphasized our connection to nature and environmental responsibility. Participants were mindful of leaving no trace on the beach, and many commented on how the natural setting enhanced their sense of connection to both the earth and each other.\n\n**Spiritual and Cultural Significance**\nThe full moon has deep significance in many African cultures, representing renewal, reflection, and community gathering. This event honored those traditions while creating new ones in our context of the dispora community in Portugal.\n\n**Planning Future Moon Gatherings**\nThe overwhelming positive response has inspired us to make moon gatherings a regular offering:\n- Quarterly full moon beach gatherings\n- New moon intention-setting circles\n- Seasonal celebration rituals\n- Collaboration with other spiritual and cultural communities\n- Integration of different African spiritual traditions\n\n**Lasting Impact**\nParticipants left the beach with more than just sand in their shoes—they carried with them renewed energy, deeper community connections, and a sense of spiritual grounding that many had been seeking since moving to Portugal.\n\nThe 'Noite de Lua na Praia' reminded us that community building can take many forms, and sometimes the most powerful connections happen when we step away from traditional indoor spaces and allow nature to be our meeting ground.\n\nEvents like these honor our need for both playfulness and spirituality, creating space for the full spectrum of human experience within our diaspora community.",
    date: new Date(2024, 7, 10), // August 10, 2025 (day after the event)
    author: "Cultural Programs Coordinator",
    category: "Cultural",
    image: "https://imgur.com/Y6RlDNo.jpg"
  },
  {
    id: 7,
    title: "Museum Visit Explores History of Resistance and Liberation in Portugal",
    excerpt: "Our April 6th visit to the Museu do Aljube provided powerful insights into Portuguese resistance history while fostering meaningful dialogue about freedom, resistance, and diaspora experiences.",
    content: "On April 6, 2025, over 25 community members joined us for a profound and educational visit to the Museu do Aljube – Resistência e Liberdade, a museum dedicated to the history of resistance against dictatorship in Portugal. This visit provided not only historical education but also created space for meaningful dialogue about resistance, freedom, and our own diaspora experiences.\n\n**Historical Context and Learning**\nThe Museu do Aljube, housed in a former political prison, offered our community a deep dive into Portugal's struggle against the Estado Novo dictatorship (1933-1974). As we walked through the exhibits, participants gained insights into:\n- The mechanisms of political repression and censorship\n- Stories of individual and collective resistance\n- The role of political prisoners and their families\n- The international context of Portugal's liberation struggle\n- The transition to democracy following the Carnation Revolution\n\n**Connecting Past and Present**\nWhat made this visit particularly powerful was how participants connected the historical narratives to contemporary experiences. Many drew parallels between:\n- Historical struggles for freedom and current social justice movements\n- The experience of political exile and modern migration\n- Resistance strategies used in Portugal and those employed in African liberation movements\n- The importance of preserving memory and telling untold stories\n\n**Diaspora Perspectives on Resistance**\nThe museum visit sparked rich discussions about resistance in the African diaspora context. Participants shared:\n- Stories of resistance from their countries of origin\n- Experiences of subtle forms of resistance in daily life as immigrants\n- The role of cultural preservation as a form of resistance\n- How education and community building can be acts of resistance\n- The importance of maintaining identity while integrating into new societies\n\n**Intergenerational Dialogue**\nThe visit brought together community members of different ages, creating opportunities for intergenerational dialogue about:\n- Different experiences of political systems and freedom\n- How historical knowledge informs present-day activism\n- The responsibility of preserving and sharing stories\n- The evolution of resistance movements over time\n\n**Educational Impact**\nParticipants left with a deeper understanding of:\n- Portuguese history and its impact on contemporary society\n- The universal nature of struggles for freedom and dignity\n- The importance of museums and cultural institutions in preserving memory\n- How historical awareness can inform present-day civic engagement\n\n**Community Reflection and Discussion**\nFollowing the museum visit, the group gathered at a nearby café for continued discussion. The conversation covered:\n- Personal reflections on the exhibits and their emotional impact\n- Connections between Portuguese resistance history and African liberation movements\n- The role of storytelling in preserving difficult histories\n- How historical awareness can strengthen community solidarity\n- Plans for future educational and cultural visits\n\n**Participant Feedback**\n'This visit helped me understand Portugal's history in a way that textbooks never could,' shared one participant. 'Seeing the actual spaces where people were imprisoned for their beliefs made the struggle for freedom very real and personal.'\n\nAnother attendee reflected: 'The parallels between the resistance stories we learned about and the struggles in our own countries of origin were striking. It reminded me that the fight for freedom and dignity is universal.'\n\n**Cultural Bridge Building**\nThe visit served as a bridge between Portuguese history and diaspora experiences, helping participants:\n- Better understand the society they now call home\n- Appreciate the freedoms available in contemporary Portugal\n- Connect their own stories to broader narratives of resistance and liberation\n- Develop deeper empathy for all people who have struggled for freedom\n\n**Future Educational Programming**\nThe success of this museum visit has inspired us to develop a regular educational programming series:\n- Monthly visits to museums and cultural sites\n- Historical walking tours of Lisbon\n- Discussions connecting Portuguese and African histories\n- Collaboration with educational institutions and cultural organizations\n- Development of educational resources for community members\n\n**Preserving Our Own Stories**\nThe visit also reinforced the importance of preserving and sharing our own community stories. Just as the museum preserves the memory of Portuguese resistance, we recognized our responsibility to document and share diaspora experiences for future generations.\n\n**Building Historical Consciousness**\nEvents like this museum visit are essential for building historical consciousness within our community. Understanding the history of our adopted home helps us:\n- Navigate contemporary Portuguese society with greater awareness\n- Appreciate the democratic freedoms we now enjoy\n- Connect our experiences to broader historical narratives\n- Develop informed perspectives on current social and political issues\n\nThe visit to the Museu do Aljube was more than an educational outing—it was an opportunity for our community to engage with history, reflect on our own experiences, and strengthen our understanding of the complex relationship between past and present, resistance and freedom, memory and identity.",
    date: new Date(2025, 3, 7), // April 7, 2025 (day after the event)
    author: "Educational Programs Coordinator",
    category: "Education",
    image: "https://www.museudoaljube.pt/wp-content/uploads/2020/04/DSC08769%C2%A9Jos%C3%A9-Frade_20190425_172440-1-1536x1024.jpg"
  },
  {
    id: 8,
    title: "African Lisbon Tour: Discovering Hidden Heritage in the Heart of the City",
    excerpt: "Our guided tour through Lisbon revealed the rich African heritage woven into the city's fabric, connecting past and present through stories, sites, and community.",
    content: "On March 22nd, over 30 community members and allies joined us for an eye-opening journey through Lisbon's African heritage. Led by our knowledgeable community guide Naky, the African Lisbon Tour exceeded all expectations, revealing layers of history and culture that many participants had never encountered before.\n\n**Uncovering Hidden Stories**\nThe tour began in the historic center of Lisbon, where we explored sites that tell the complex story of African presence in Portugal. From colonial-era monuments to contemporary cultural spaces, each stop provided context for understanding how African communities have shaped and been shaped by this city.\n\nParticipants were particularly moved by learning about the contributions of African communities to Lisbon's development, stories that are often overlooked in mainstream historical narratives. The tour highlighted both historical injustices and the resilience and creativity of African communities throughout the centuries.\n\n**Contemporary African Lisbon**\nBeyond historical sites, we visited vibrant neighborhoods where African diaspora communities thrive today. We stopped by African-owned businesses, cultural centers, and community gathering spaces that serve as modern anchors for diaspora life in Lisbon.\n\nThe tour included visits to:\n- Historic sites with African connections\n- Contemporary African cultural spaces\n- Community businesses and gathering places\n- Art installations celebrating African heritage\n- Neighborhoods with significant diaspora populations like Rossio\n\n**Community Connections**\nWhat made this tour special wasn't just the information shared, but the connections formed. Participants included recent immigrants, long-time residents, Portuguese allies, and international visitors. The diversity of perspectives enriched every discussion and created opportunities for meaningful cultural exchange.\n\nMany participants expressed surprise at how much African heritage exists in Lisbon and how interconnected the stories are with broader Portuguese history. The tour provided a framework for understanding contemporary diaspora experiences within this historical context.\n\n**Looking Forward**\nThe success of this tour has inspired us to make it a regular offering. We're planning more African heritage tours, each focusing on different aspects of the community's presence in Lisbon and the sorrounding. Future tours will explore themes like music and arts, entrepreneurship, and family stories.\n\nParticipant feedback was overwhelmingly positive, with many requesting more opportunities to explore and celebrate African heritage in Portugal. This tour reminded us of the power of storytelling and community-led education in building understanding and pride.\n\nEvents like these strengthen our community by helping us understand our place in Lisbon's ongoing story while celebrating the contributions we continue to make to this city.",
    date: new Date(2024, 2, 23), // November 2, 2024 (day after the event)
    author: "Intercâmbio Diáspora Team",
    category: "Culture",
    image: "https://imgur.com/PsIVblJ.jpg"
  },
  {
    id: 9,
    title: "Black Women in Tech Pre-Web Summit Brings Entrepreneurs Together",
    excerpt: "Ahead of the Web Summit, Black women in tech and entrepreneurs gathered in Lisbon to share stories, build networks, and highlight the power of diaspora innovation.",
    content: "In the lead-up to the Web Summit, Lisbon became the stage for a powerful gathering: Black Women in Tech, a pre-summit event that brought together Black entrepreneurs, innovators, and allies for an evening of connection and empowerment.\n\n**A Space for Representation**\nThe event highlighted the importance of visibility and representation in the tech world. Black women founders, developers, and creatives shared their journeys of breaking barriers, building companies, and creating opportunities within the diaspora.\n\n**Inspiring Stories and Shared Wisdom**\nThe conversations went beyond business strategies. Attendees exchanged lessons on resilience, navigating challenges in Europe, and the importance of mentorship. Elders in the community shared insights with younger entrepreneurs, while newcomers gained advice and encouragement from those more established.\n\n**Networking and Collaboration**\nTrue to the spirit of diaspora gatherings, the room was alive with introductions, shared visions, and potential partnerships. Ideas for collaborations emerged—from tech startups to cultural projects—that reflected the creativity and resourcefulness of the community.\n\n**Celebrating Culture and Innovation**\nThe evening was not only about business but also about culture. African and diaspora traditions were woven into the atmosphere through music, food, and storytelling, reminding everyone that innovation is strongest when rooted in identity.\n\n**Looking Ahead**\nThe success of this pre-summit event showed the need for more spaces where Black women in tech and entrepreneurs can thrive together. Plans are already underway to create ongoing meetups, mentorship programs, and collaborations that build on the momentum from this gathering.\n\n**Gratitude and Recognition**\nWe extend our thanks to the organizers, speakers, and every participant who made the event special. This gathering was more than preparation for the Web Summit—it was a statement of presence, resilience, and the future we are building as a diaspora community in tech.",
    date: new Date(2024, 11, 11), // Example: November 10, 2024
    author: "Intercâmbio Diáspora Team",
    category: "Community",
    image: "https://imgur.com/uL7QWGB.jpg"
  },
 {
  id: 10,
  title: "Diaspora Stories: Black History Month – Film & Story Circle",
  excerpt: "On February 8th, our community gathered in Lisbon for a film screening and story circle — honoring Black History Month through reflection, connection, and shared experiences.",
  content: "On February 8th, 2025, the Arts & Nerds Association in Lisbon welcomed the diaspora community for a special Black History Month edition of Diaspora Stories. The evening combined film, dialogue, and storytelling, creating a powerful space to honor our history and strengthen connections.\n\n**Alda e Maria: A Story of New Beginnings**\nThe night began with a screening of the film *Alda e Maria*, a moving story that captures themes of migration, resilience, and sisterhood. Shown in Portuguese with English subtitles, the film resonated deeply with attendees who saw echoes of their own families’ journeys and struggles.\n\n**A Circle of Shared Reflections**\nAfter the film, the community gathered in a story circle to share personal reflections. Participants spoke about migration, the challenges of adaptation, and the importance of remembering where we come from while embracing new beginnings. The conversations revealed both the diversity of diaspora experiences and the common threads of resilience, courage, and hope.\n\n**Honoring Black History Month Together**\nThis gathering was more than a movie night—it was a collective act of remembrance and celebration. By holding space for stories, we honored the legacy of Black History Month while rooting it in the local realities of our community in Portugal.\n\n**Community Connection**\nThe evening also served as a reminder of the importance of community. Over shared food and laughter, new friendships were formed, advice was exchanged, and future collaborations were imagined. Several attendees shared that the event made them feel less alone and more connected to a broader family of support.\n\n**Looking Forward**\nThe success of this Black History Month edition of Diaspora Stories has inspired us to host more cultural film screenings and storytelling circles. Plans are underway for monthly gatherings that highlight African and diaspora filmmakers while continuing to foster dialogue, healing, and connection.\n\nOne participant summed up the spirit of the night: *'Watching our stories on screen, then sharing our own around the circle, made me feel seen. This is what Black History Month should be about—remembering, celebrating, and building together.'*",
  date: new Date(2025, 1, 9), // February 9, 2025 (day after the event)
  author: "Community Programs Coordinator",
  category: "Community",
  image: "https://i.imgur.com/eqADTrh.jpg"
},
  {
    id: 11,
    title: "Intercâmbio Diáspora Celebrates African Heritage Day",
    excerpt: "Join us for a day of cultural celebration, storytelling, and community connection at our African Heritage Day event.",
    content: "We're excited to announce our upcoming African Heritage Day celebration! This special event will bring together members of the African and Afro-descendant community in Lisbon for a day of cultural exchange, storytelling, and connection.\n\nThe event will feature:\n- Traditional music and dance performances\n- Storytelling sessions\n- Cultural workshops\n- Community networking\n- African cuisine\n\nThis celebration is part of our ongoing commitment to creating spaces where African and Afro-descendant communities can celebrate their heritage, share their stories, and build meaningful connections.\n\nThe event will take place at Fabrica Braco de Prata in Lisbon, and all are welcome to join. Whether you're part of the African diaspora or interested in learning more about African cultures, this event offers a wonderful opportunity for cultural exchange and community building.",
    date: new Date(2024, 3, 15),
    author: "Intercâmbio Diáspora Team",
    category: "Events",
    image: "https://imgur.com/j7O5Vuv.jpg"
  },
 {
  id: 15,
  title: "Exploring History & Resistance at Museu do Aljube",
  excerpt: "On April 6th, our community gathered to explore the Museu do Aljube in Lisbon — reflecting on Portugal’s history of resistance and connecting it to our own diaspora journeys.",
  content: "On Sunday, April 6th, 2025, members of the Intercâmbio Diáspora community came together for a meaningful visit to the Museu do Aljube – Resistência e Liberdade. The museum, once a political prison, now stands as a powerful space dedicated to remembering the struggles against dictatorship in Portugal.\n\n**Walking Through History**\nThe group met at Praça do Comércio, just below the Arco da Rua Augusta, before making their way together to the museum. Inside, participants explored exhibits that told stories of resistance, courage, and the fight for freedom. The visit provided a chance not only to learn about Portugal’s history, but also to reflect on shared global struggles for justice and dignity.\n\n**Connecting Past and Present**\nFor many in the group, the experience of walking through spaces once used to silence voices resonated deeply with diaspora stories of resilience. Conversations emerged around the importance of remembering history, drawing parallels between Portugal’s resistance movements and the ongoing fights for equity, liberation, and representation across Africa and the diaspora.\n\n**Community Reflections**\nThe visit became more than a tour—it was a shared act of learning and connection. Participants exchanged reflections about how history shapes identity, and how remembering the past can empower communities to build a more just future. One attendee shared: *'It reminded me that freedom is never given, it’s won — and that our stories of resistance are all connected.'*\n\n**Looking Ahead**\nThis outing was part of our ongoing effort to blend cultural exploration with community building. Based on the positive feedback, we plan to organize more museum visits and historical walks across Lisbon, creating opportunities to learn, reflect, and connect with each other in meaningful ways.\n\nThe day closed with a renewed sense of community, leaving participants inspired to carry forward the lessons of resilience and resistance into our shared future in Portugal.",
  date: new Date(2025, 3, 7), // April 7, 2025 (day after event)
  author: "Community Reporter",
  category: "Cultural",
  image: "https://i.imgur.com/SQElR6a.jpg"
},
  {
    id: 13,
    title: "Professional Development Workshop Series",
    excerpt: "New workshop series focuses on career development, entrepreneurship, and professional networking for diaspora community members.",
    content: "We're launching a comprehensive professional development workshop series designed specifically for members of the African and Afro-descendant diaspora community. These workshops address the unique challenges and opportunities faced by our community members in the professional sphere.\n\nThe workshop series includes:\n- Resume writing and interview skills\n- Entrepreneurship in Portugal\n- Professional networking strategies\n- Career transition guidance\n- Leadership development\n\nEach workshop combines practical skills development with cultural awareness and community support. Participants will have opportunities to connect with mentors, share experiences, and build professional networks within the community.\n\nThe series is designed to empower community members with the tools and connections needed for professional success while maintaining cultural authenticity.",
    date: new Date(2024, 3, 1),
    author: "Professional Development Coordinator",
    category: "Career",
    image: "https://i.imgur.com/1ntgyJg.jpg"
  },
  {
    id: 14,
    title: "Book Signing & Sale with Toneca Tomás",
    excerpt: "Community members gathered at Associação Caboverdeana to celebrate the release of 'Liberation of Black African Consciousness' and honor African unity.",
    content: "On March 6th, Associação Caboverdeana in Lisbon hosted a powerful evening with author Toneca Tomás for the signing and celebration of the book *Liberation of Black African Consciousness*.\n\n**A Gathering of Minds and Spirits**\nThe event brought together Africans from diverse backgrounds to reflect on Black consciousness, liberation, and the power of reclaiming our stories. Attendees shared in the excitement of Toneca Tomás' work, which explores the ongoing journey toward empowerment and freedom.\n\n**Celebrating Black African Consciousness**\nMore than a book signing, the evening became a celebration of identity, unity, and critical thought. Conversations sparked around the importance of literature in preserving history, expanding mindsets, and strengthening collective purpose within the diaspora.\n\n**Strengthening the Community**\nParticipants described the event as both intellectual and emotional, noting how important it is to have spaces in Lisbon that center African voices. The gathering also served as a networking opportunity for professionals, creatives, and community leaders looking to build connections rooted in shared values.\n\n**Looking Forward**\nThe success of this event reaffirms the importance of cultural and literary gatherings within the diaspora. Toneca Tomás' words continue to inspire, encouraging us all to stay grounded in consciousness and unity.\n\nWe thank Toneca Tomás, Associação Caboverdeana, and the community members who came out in support. The book signing was more than an event—it was a moment of reflection, celebration, and collective awakening.",
    date: new Date(2025, 2, 6), // March 6, 2025
    author: "Intercâmbio Diáspora Team",
    category: "Community",
    image: "https://imgur.com/hhAm9aK.jpg"
  },
  {
    id: 15,
  title: "Mental Health is Wealth: Reignwel Hosts First Cross-Cultural Meetup",
  excerpt: "Community members came together in Lisbon for a powerful bilingual conversation on mental health, healing practices, and the launch of the Reignwel App.",
  content: "On January 25th, 2025, the diaspora community gathered in Lisbon for the first-ever Reignwel Meetup: *Saúde mental é riqueza | Mental Health is Wealth*. This special event, organized in partnership with Intercâmbio Cultural and hosted by the founder of the Reignwel app Giel, opened space for honest conversations about mental health within the diaspora.\n\n**A Safe and Inclusive Space**\nConducted in both Portuguese and English, the meetup welcomed therapists, coaches, mentors, spiritual advisors, holistic healers, and community members. The goal was clear: to normalize mental health conversations while offering culturally relevant tools and practices.\n\n**Intentional Healing and Shared Wisdom**\nSpeakers and participants shared insights on therapy, intentional healing, and self-care practices that resonate within diaspora contexts. Stories of resilience were exchanged, and participants found comfort in learning that healing can be collective as much as it is personal.\n\n**The Reignwel platform Launch**\nOne of the highlights of the evening was the launch of the groundbreaking platform using AI to help users personalize their mental health journeys. This new tool represents a forward-looking blend of culture, technology, and wellness.\n\n**Community Impact**\nThe event underscored the importance of prioritizing mental well-being as a form of wealth and empowerment. Participants left not only with practical resources but also with renewed confidence that the diaspora can thrive when mental health is at the center.\n\n**Looking Ahead**\nThis first meetup is only the beginning. Reignwel aims to host more conversations, workshops, and collaborations that place mental health at the heart of community building.\n\nWe extend gratitude to all facilitators, supporters, and attendees who made this gathering a success. Together, we are rewriting the narrative: within the diaspora, mental health truly is wealth.",
  date: new Date(2025, 0, 25), // January 25, 2025
  author: "Intercâmbio Diáspora Team",
  category: "Community",
  image: "https://imgur.com/8duHj80.jpg"
},
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