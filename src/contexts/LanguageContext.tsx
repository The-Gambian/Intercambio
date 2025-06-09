import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'pt';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translation dictionary
const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.events': 'Events',
    'nav.news': 'News',
    'nav.stories': 'Stories',
    'nav.discussions': 'Discussions',
    'nav.learningHub': 'Learning Hub',
    'nav.contact': 'Contact',
    'nav.search': 'Search...',
    'nav.menu': 'MENU',
    'nav.followUs': 'Follow Us',
    
    // Home page
    'home.hero.title': 'Connecting Diaspora Communities Worldwide',
    'home.hero.subtitle': 'Join our vibrant community of language cultural exchange, support, and growth for diaspora communities in Portugal.',
    'home.hero.learnMore': 'Learn More',
    'home.hero.upcomingEvents': 'Upcoming Events',
    
    'home.news.title': 'Latest News',
    'home.news.subtitle': 'Stay updated with our community highlights',
    'home.news.featured.title': 'Successful Diaspora Picnic Brings Community Together',
    'home.news.featured.content': 'Our recent Diaspora Picnic was a wonderful celebration of community and cultural exchange. Members from various African and Afro-descendant communities came together, sharing traditional dishes, stories, and creating new connections. The event featured games, music, and meaningful conversations that strengthened our community bonds.',
    'home.news.readMore': 'Read More',
    
    'home.features.title': 'What We Offer',
    'home.features.subtitle': 'Explore our community resources and activities',
    'home.features.events.title': 'Community Events',
    'home.features.events.description': 'Join cultural celebrations, workshops, and networking opportunities.',
    'home.features.events.link': 'View Events',
    'home.features.news.title': 'Local News',
    'home.features.news.description': 'Stay updated with news relevant to diaspora communities.',
    'home.features.news.link': 'Read News',
    'home.features.stories.title': 'Member Stories',
    'home.features.stories.description': 'Read inspiring stories from our community members.',
    'home.features.stories.link': 'Explore Stories',
    'home.features.discussions.title': 'Discussions',
    'home.features.discussions.description': 'Engage in meaningful conversations with community members.',
    'home.features.discussions.link': 'Join Discussions',
    'home.features.learning.title': 'Learning Hub',
    'home.features.learning.description': 'Access educational resources, language courses, and more.',
    'home.features.learning.link': 'Start Learning',
    'home.features.network.title': 'Global Network',
    'home.features.network.description': 'Connect with diaspora communities from around the world.',
    'home.features.network.link': 'Learn More',
    
    'home.upcomingEvents.title': 'Upcoming Events',
    'home.upcomingEvents.viewAll': 'View All',
    'home.upcomingEvents.diasporaPicnic.title': 'Diáspora Picnic',
    'home.upcomingEvents.diasporaPicnic.description': 'Join us for a community picnic featuring games, fellowship, and cultural exchange.',
    'home.upcomingEvents.diasporaPicnic.register': 'Register Now',
    'home.upcomingEvents.africaDay.title': 'Africa Day Celebration',
    'home.upcomingEvents.africaDay.description': 'Celebrate African cultures with concerts, traditional food, DJ sets, dance, and projections.',
    'home.upcomingEvents.languageExchange.title': 'Language Exchange Event',
    'home.upcomingEvents.languageExchange.description': 'Practice language skills and connect with native speakers in a friendly environment.',
    'home.upcomingEvents.learnMore': 'Learn More',
    
    'home.testimonials.title': 'What Our Community Says',
    'home.testimonials.subtitle': 'Hear from members who have found connection and growth through our community',
    'home.testimonials.telma': '"As a writer exploring African identity in Portugal, Intercâmbio Diáspora provided the authentic voices and stories that enriched my work. This community became both my research foundation and my creative inspiration, helping me tell our stories with truth and dignity."',
    'home.testimonials.naky': '"Through Intercâmbio Diáspora, I discovered the hidden African heritage of Lisbon and turned that passion into African Lisbon Tour. This community connected me with historians, storytellers, and cultural guardians who helped me create meaningful experiences that celebrate our presence in this city."',
    'home.testimonials.boni': '"Organizing cultural events became more impactful through Intercâmbio Diáspora\'s network. I found collaborators, venues, and most importantly, an audience that truly appreciates authentic African culture. Together, we create events that educate, celebrate, and unite our diverse diaspora community."',
    
    'home.newsletter.title': 'Stay Connected',
    'home.newsletter.subtitle': 'Join our newsletter to receive updates about events, stories, and community initiatives',
    'home.newsletter.name': 'Name',
    'home.newsletter.namePlaceholder': 'Your name',
    'home.newsletter.email': 'Email',
    'home.newsletter.emailPlaceholder': 'Your email address',
    'home.newsletter.subscribe': 'Subscribe',
    
    'home.contribute.title': 'Support Our Community',
    'home.contribute.subtitle': 'Help us create more opportunities for connection and cultural exchange',
    'home.contribute.shareStory.title': 'Share Your Story',
    'home.contribute.shareStory.description': 'Contribute to our community narrative by sharing your experiences and journey',
    'home.contribute.shareStory.button': 'Share Now',
    'home.contribute.volunteer.title': 'Volunteer',
    'home.contribute.volunteer.description': 'Join our team of volunteers and help organize community events and programs',
    'home.contribute.volunteer.button': 'Get Involved',
    'home.contribute.partner.title': 'Partner With Us',
    'home.contribute.partner.description': 'Collaborate with us to create meaningful impact in our community',
    'home.contribute.partner.button': 'Learn More',
    
    'home.social.title': 'Connect With Us',
    'home.social.instagram': 'Follow us on Instagram',
    
    // Footer
    'footer.description': 'Connecting diaspora communities through cultural exchange, education, and support.',
    'footer.quickLinks': 'Quick Links',
    'footer.resources': 'Resources',
    'footer.contact': 'Contact Us',
    'footer.copyright': 'All rights reserved.',
    'footer.cookies.text': 'This website uses cookies to enhance the user experience. By continuing to browse the site, you agree to our use of cookies.',
    'footer.cookies.learnMore': 'Learn more',
    'footer.cookies.accept': 'Accept',
    'footer.cookies.decline': 'Decline',
  },
  pt: {
    // Navigation
    'nav.home': 'Início',
    'nav.about': 'Sobre',
    'nav.events': 'Eventos',
    'nav.news': 'Notícias',
    'nav.stories': 'Histórias',
    'nav.discussions': 'Discussões',
    'nav.learningHub': 'Centro de Aprendizagem',
    'nav.contact': 'Contacto',
    'nav.search': 'Pesquisar...',
    'nav.menu': 'MENU',
    'nav.followUs': 'Siga-nos',
    
    // Home page
    'home.hero.title': 'Conectando Comunidades da Diáspora Mundial',
    'home.hero.subtitle': 'Junte-se à nossa vibrante comunidade de intercâmbio cultural linguístico, apoio e crescimento para comunidades da diáspora em Portugal.',
    'home.hero.learnMore': 'Saber Mais',
    'home.hero.upcomingEvents': 'Próximos Eventos',
    
    'home.news.title': 'Últimas Notícias',
    'home.news.subtitle': 'Mantenha-se atualizado com os destaques da nossa comunidade',
    'home.news.featured.title': 'Piquenique da Diáspora Bem-Sucedido Une a Comunidade',
    'home.news.featured.content': 'O nosso recente Piquenique da Diáspora foi uma maravilhosa celebração de comunidade e intercâmbio cultural. Membros de várias comunidades africanas e afrodescendentes reuniram-se, partilhando pratos tradicionais, histórias e criando novas conexões. O evento incluiu jogos, música e conversas significativas que fortaleceram os laços comunitários.',
    'home.news.readMore': 'Ler Mais',
    
    'home.features.title': 'O Que Oferecemos',
    'home.features.subtitle': 'Explore os nossos recursos e atividades comunitárias',
    'home.features.events.title': 'Eventos Comunitários',
    'home.features.events.description': 'Participe em celebrações culturais, workshops e oportunidades de networking.',
    'home.features.events.link': 'Ver Eventos',
    'home.features.news.title': 'Notícias Locais',
    'home.features.news.description': 'Mantenha-se atualizado com notícias relevantes para as comunidades da diáspora.',
    'home.features.news.link': 'Ler Notícias',
    'home.features.stories.title': 'Histórias dos Membros',
    'home.features.stories.description': 'Leia histórias inspiradoras dos nossos membros da comunidade.',
    'home.features.stories.link': 'Explorar Histórias',
    'home.features.discussions.title': 'Discussões',
    'home.features.discussions.description': 'Participe em conversas significativas com membros da comunidade.',
    'home.features.discussions.link': 'Juntar-se às Discussões',
    'home.features.learning.title': 'Centro de Aprendizagem',
    'home.features.learning.description': 'Aceda a recursos educacionais, cursos de idiomas e muito mais.',
    'home.features.learning.link': 'Começar a Aprender',
    'home.features.network.title': 'Rede Global',
    'home.features.network.description': 'Conecte-se com comunidades da diáspora de todo o mundo.',
    'home.features.network.link': 'Saber Mais',
    
    'home.upcomingEvents.title': 'Próximos Eventos',
    'home.upcomingEvents.viewAll': 'Ver Todos',
    'home.upcomingEvents.diasporaPicnic.title': 'Piquenique da Diáspora',
    'home.upcomingEvents.diasporaPicnic.description': 'Junte-se a nós para um piquenique comunitário com jogos, convívio e intercâmbio cultural.',
    'home.upcomingEvents.diasporaPicnic.register': 'Inscrever-se Agora',
    'home.upcomingEvents.africaDay.title': 'Celebração do Dia de África',
    'home.upcomingEvents.africaDay.description': 'Celebre as culturas africanas com concertos, comida tradicional, DJ sets, dança e projeções.',
    'home.upcomingEvents.languageExchange.title': 'Evento de Intercâmbio de Idiomas',
    'home.upcomingEvents.languageExchange.description': 'Pratique competências linguísticas e conecte-se com falantes nativos num ambiente amigável.',
    'home.upcomingEvents.learnMore': 'Saber Mais',
    
    'home.testimonials.title': 'O Que a Nossa Comunidade Diz',
    'home.testimonials.subtitle': 'Ouça membros que encontraram conexão e crescimento através da nossa comunidade',
    'home.testimonials.telma': '"Como escritora explorando a identidade africana em Portugal, o Intercâmbio Diáspora forneceu as vozes autênticas e histórias que enriqueceram o meu trabalho. Esta comunidade tornou-se tanto a minha base de pesquisa quanto a minha inspiração criativa, ajudando-me a contar as nossas histórias com verdade e dignidade."',
    'home.testimonials.naky': '"Através do Intercâmbio Diáspora, descobri o património africano oculto de Lisboa e transformei essa paixão no African Lisbon Tour. Esta comunidade conectou-me com historiadores, contadores de histórias e guardiões culturais que me ajudaram a criar experiências significativas que celebram a nossa presença nesta cidade."',
    'home.testimonials.boni': '"Organizar eventos culturais tornou-se mais impactante através da rede do Intercâmbio Diáspora. Encontrei colaboradores, locais e, mais importante, um público que verdadeiramente aprecia a cultura africana autêntica. Juntos, criamos eventos que educam, celebram e unem a nossa diversa comunidade da diáspora."',
    
    'home.newsletter.title': 'Mantenha-se Conectado',
    'home.newsletter.subtitle': 'Junte-se à nossa newsletter para receber atualizações sobre eventos, histórias e iniciativas comunitárias',
    'home.newsletter.name': 'Nome',
    'home.newsletter.namePlaceholder': 'O seu nome',
    'home.newsletter.email': 'Email',
    'home.newsletter.emailPlaceholder': 'O seu endereço de email',
    'home.newsletter.subscribe': 'Subscrever',
    
    'home.contribute.title': 'Apoie a Nossa Comunidade',
    'home.contribute.subtitle': 'Ajude-nos a criar mais oportunidades de conexão e intercâmbio cultural',
    'home.contribute.shareStory.title': 'Partilhe a Sua História',
    'home.contribute.shareStory.description': 'Contribua para a narrativa da nossa comunidade partilhando as suas experiências e jornada',
    'home.contribute.shareStory.button': 'Partilhar Agora',
    'home.contribute.volunteer.title': 'Voluntário',
    'home.contribute.volunteer.description': 'Junte-se à nossa equipa de voluntários e ajude a organizar eventos e programas comunitários',
    'home.contribute.volunteer.button': 'Envolver-se',
    'home.contribute.partner.title': 'Seja Nosso Parceiro',
    'home.contribute.partner.description': 'Colabore connosco para criar um impacto significativo na nossa comunidade',
    'home.contribute.partner.button': 'Saber Mais',
    
    'home.social.title': 'Conecte-se Connosco',
    'home.social.instagram': 'Siga-nos no Instagram',
    
    // Footer
    'footer.description': 'Conectando comunidades da diáspora através de intercâmbio cultural, educação e apoio.',
    'footer.quickLinks': 'Links Rápidos',
    'footer.resources': 'Recursos',
    'footer.contact': 'Contacte-nos',
    'footer.copyright': 'Todos os direitos reservados.',
    'footer.cookies.text': 'Este website utiliza cookies para melhorar a experiência do utilizador. Ao continuar a navegar no site, concorda com o uso de cookies.',
    'footer.cookies.learnMore': 'Saber mais',
    'footer.cookies.accept': 'Aceitar',
    'footer.cookies.decline': 'Recusar',
  }
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};