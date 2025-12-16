// Shared events data for the entire application
export interface Event {
  id: number;
  title: string;
  date: Date;
  location: string;
  description: string;
  category: string;
  image: string;
  endTime?: string;
  registrationLink?: string;
}

// All upcoming events - sorted by date (most recent first)
export const upcomingEvents: Event[] = [
  {
    id: 1,
    title: "Diáspora Picnic",
    date: new Date(2025, 4, 31, 13, 0), // May 31, 2025, 1:00 PM
    location: "Parque da Bela Vista, Quinta do Pombeiro, Casa Senhorial Norte, Azinhaga do Pombeiro, 1900-793 Lisboa",
    description: "Join us for a community picnic featuring games, fellowship, and cultural exchange. This is a potluck event - bring a dish to share! Connect with fellow Zillennials in Portugal while enjoying an afternoon of fun and community building.",
    category: "Cultural",
    image: "https://i.imgur.com/3KJGfwj.jpg",
    registrationLink: "https://forms.gle/AKjtjV5xmU8cNAXE7",
    endTime: "18:00"
  },
  {
    id: 2,
    title: "Language Exchange Event",
    date: new Date(2025, 5, 28, 18, 0), // June 28, 2025, 6:00 PM
    location: "Associação Caboverdeana, R. Duque de Palmela 2 6° andar, Marquês de Pombal",
    description: "Join us for an enriching experience that promotes language learning, cultural exploration, and meaningful connections among members of the African Diaspora in Lisbon.",
    category: "Educational",
    image: "https://imgur.com/Um1K5jA.jpeg",
    registrationLink: "https://www.facebook.com/events/701026239495168/",
    endTime: "20:00"
  },
  {
    id: 3,
    title: "Professional Networking Mixer",
    date: new Date(2025, 6, 5, 19, 0), // July 5, 2025, 7:00 PM
    location: "Business Hub, Lisbon",
    description: "Connect with professionals from diverse backgrounds and expand your network. Features structured networking activities and professional development discussions.",
    category: "Networking",
    image: "https://i.imgur.com/7mdxG48.jpg",
    endTime: "22:00"
  },
  {
    id: 4,
    title: "Noite de Lua na Praia - Full Moon Beach Night",
    date: new Date(2025, 7, 9, 20, 0), // August 9, 2025, 8:00 PM
    location: "Praia de São Bruno, Caxias",
    description: "Join us for a magical full moon gathering on the beach! We'll amplify this lunar energy with childhood games and a gratitude ritual on the beach. Bring drinks, light food, comfortable clothes and shoes—but also put your feet in the sand to ground yourself and strengthen your body and mind.",
    category: "Cultural",
    image: "https://imgur.com/oOfmX3A.jpg",
    endTime: "00:00"
  },
  {
    id: 5,
    title: "Language Exchange Event",
    date: new Date(2025, 9, 18, 18, 0), // October 18, 2025, 6:00 PM
    location: "Associação Caboverdeana, R. Duque de Palmela 2 6° andar, Marquês de Pombal",
    description: "Join us for an enriching experience that promotes language learning, cultural exploration, and meaningful connections among members of the African Diaspora in Lisbon. Features language immersion, interactive activities, networking opportunities, and cultural exchange.",
    category: "Educational",
    image: "https://imgur.com/FaF8QJn.jpg",
    endTime: "20:00"
  },
  {
    id: 6,
    title: "Intercâmbio com Café - Language Exchange",
    date: new Date(2025, 10, 8, 11, 0), // November 8, 2025, 11:00 AM
    location: "Kulea Café, Rua das Mercês 30, Lisboa (Ajuda)",
    description: "A study session and conversation among people of the African Diaspora. Join us for an intimate coffee meetup focused on language exchange and meaningful conversations in a cozy café setting.",
    category: "Educational",
    image: "https://imgur.com/Gg2oDX9.jpg",
    endTime: "13:00"
  },
  {
    id: 7,
    title: "Cross-Cultural Conversations: Mental Health Best Practices",
    date: new Date(2025, 10, 22, 18, 0), // November 22, 2025, 6:00 PM
    location: "M8TRIARCH Living Gallery, Travessa das Mónicas, 1100-359",
    description: "A Mental Health Best Practices MeetUp focusing on Intentional Healing & Benefits of Therapy Within the Diaspora. This meetup is designed to normalize conversations surrounding mental health challenges within the diaspora, offering a platform to exchange culturally relevant tools and resources.",
    category: "Community",
    image: "https://imgur.com/UKuasmf.jpg",
    registrationLink: "https://reignwel.com",
    endTime: "20:00"
  },
  {
    id: 8,
    title: "Intercâmbio Diáspora Christmas Dinner",
    date: new Date(2025, 11, 19, 19, 0), // December 19, 2025, 7:00 PM
    location: "Asha's Place Lisbon, R. do Diário de Notícias 59, 1200-334 Lisboa",
    description: "Join us for a special Christmas dinner celebration featuring traditional African dishes including Jollof Rice, Matapa, Domoda, Chamussa, Frango à Zambeziana, Doce de Mandioca, and Gulabos. Drinks include Water, Hibiscus, and MIK special cocktail. Price: 20€ per person. RSVP required - limited spaces available!",
    category: "Cultural",
    image: "https://imgur.com/NEMWKcu.jpg",
    registrationLink: "/contact",
    endTime: "22:00"
  }
].sort((a, b) => a.date.getTime() - b.date.getTime()); // Sort by date ascending

// Past events for the Events page
// Past events for the Events page
export const pastEvents: Event[] = [
  {
    id: 101,
    title: "African Lisbon Tour",
    date: new Date(2024, 2, 22, 15, 0), // March 22, 2024
    location: "Lisbon City Center",
    description: "Join us for a unique walking tour exploring Lisbon's African heritage and contemporary African presence. Learn about historical connections, visit significant sites, and discover the vibrant African influence in modern Lisbon.",
    category: "Cultural",
    image: "https://i.imgur.com/Vhmiy5j.jpg"
  },
  {
    id: 102,
    title: "Language Exchange & Cultural Meetup",
    date: new Date(2024, 2, 18, 18, 30), // March 18, 2024
    location: "Intercâmbio Learning Center",
    description: "An evening of language practice and cultural exchange, featuring Portuguese-English conversation groups and discussions about African diaspora experiences.",
    category: "Educational",
    image: "https://i.imgur.com/uL7QWGB.jpg"
  },
  {
    id: 103,
    title: "Community Gathering & Story Circle",
    date: new Date(2024, 2, 10, 16, 0), // March 10, 2024
    location: "Community Center, Lisbon",
    description: "A special gathering for sharing stories, experiences, and building connections within our diaspora community. Featured traditional music, food, and storytelling.",
    category: "Community",
    image: "https://i.imgur.com/eqADTrh.jpg"
  },
  {
    id: 104,
    title: "Intercâmbio Diaspora Meetup",
    date: new Date(2024, 2, 5, 18, 0),
    location: "Lisbon, Portugal",
    description: "A vibrant community gathering featuring language exchange, cultural sharing, and networking opportunities. Join us for an evening of connection and learning.",
    category: "Community",
    image: "https://i.imgur.com/U0U8tKF.jpg"
  },
  {
    id: 105,
    title: "Cultural Exchange Workshop",
    date: new Date(2024, 1, 25, 14, 0),
    location: "Community Center, Lisbon",
    description: "Interactive workshop exploring African cultural traditions, music, and art. Featuring demonstrations, hands-on activities, and community discussions.",
    category: "Cultural",
    image: "https://i.imgur.com/4x5JR34.jpg"
  },
  {
    id: 106,
    title: "Language Learning Social",
    date: new Date(2024, 1, 15, 18, 30),
    location: "Intercâmbio Learning Center",
    description: "Casual evening of language practice and cultural exchange. Practice Portuguese and English while making new friends and connections.",
    category: "Educational",
    image: "https://i.imgur.com/YSkHnzk.jpg"
  },
  {
    id: 107,
    title: "African Heritage Celebration",
    date: new Date(2024, 1, 5, 16, 0),
    location: "Cultural Center, Lisbon",
    description: "A celebration of African heritage featuring traditional music, dance performances, food, and community activities.",
    category: "Cultural",
    image: "https://i.imgur.com/q3JhdT8.jpg"
  },
  {
    id: 108,
    title: "Community Networking Event",
    date: new Date(2023, 11, 15, 19, 0),
    location: "Business Hub, Lisbon",
    description: "Professional networking event connecting members of the African diaspora community. Share opportunities, build connections, and support professional growth.",
    category: "Networking",
    image: "https://i.imgur.com/aFewmTX.jpg"
  },
  {
    id: 109,
    title: "Year-End Community Gathering",
    date: new Date(2023, 11, 8, 17, 0),
    location: "Community Center, Lisbon",
    description: "End-of-year celebration bringing together our community to reflect on achievements, share stories, and look forward to the new year.",
    category: "Community",
    image: "https://i.imgur.com/j7O5Vuv.jpg"
  }
];

// Available categories for filtering
export const eventCategories = ["All", "Cultural", "Educational", "Networking", "Community"];

// Helper function to get the most recent upcoming events
export const getRecentUpcomingEvents = (count: number = 6): Event[] => {
  return upcomingEvents
    .slice(0, count);
};

// Helper function to get all events (upcoming + past) sorted by date
export const getAllEvents = (): Event[] => {
  return [...upcomingEvents, ...pastEvents].sort((a, b) => b.date.getTime() - a.date.getTime());
};