/**
 * @copyright 2025 jeanauryel.dev
 * @license Apache-2.0
 */

export interface Translations {
  hero: {
    availableForWork: string;
    headline: string;
    downloadCV: string;
    viewPortfolio: string;
  };
  work: {
    title: string;
    detailedTitle: string;
    detailedSubtitle: string;
    projectsCompleted: string;
    yearsExperience: string;
    keyFeatures: string;
    technologyStack: string;
    frontend: string;
    backend: string;
    liveDemo: string;
    viewCode: string;
    github: string;
    developmentProcess: string;
    developmentProcessDesc: string;
    planning: string;
    planningDesc: string;
    design: string;
    designDesc: string;
    development: string;
    developmentDesc: string;
    deploy: string;
    deployDesc: string;
    readyToStart: string;
    readyToStartDesc: string;
    startProject: string;
    learnMoreAboutMe: string;
    projects: {
      musicApp: string;
      stockPhoto: string;
      recipeApp: string;
      realEstate: string;
      eCommerce: string;
      portfolio: string;
    };
    detailedProjects: {
      musify: {
        title: string;
        description: string;
        longDescription: string;
        features: string[];
      };
      pixstock: {
        title: string;
        description: string;
        longDescription: string;
        features: string[];
      };
      recipehub: {
        title: string;
        description: string;
        longDescription: string;
        features: string[];
      };
    };
  };
  about: {
    title: string;
    welcome: string;
    yearsOfExperience: string;
    projectsDone: string;
    journeyTitle: string;
    journeyP1: string;
    journeyP2: string;
    journeyP3: string;
    technicalExpertise: string;
    technicalExpertiseDesc: string;
    frontend: string;
    backend: string;
    tools: string;
    frontendDesc: string;
    backendDesc: string;
    toolsDesc: string;
    philosophyTitle: string;
    philosophyDesc: string;
    userCentered: string;
    userCenteredDesc: string;
    cleanScalable: string;
    cleanScalableDesc: string;
    innovationDriven: string;
    innovationDrivenDesc: string;
    ctaTitle: string;
    ctaDesc: string;
    getInTouch: string;
    viewMyWork: string;
  };
  skills: {
    title: string;
    description: string;
    userInterface: string;
    interaction: string;
    webServer: string;
    nodeFramework: string;
    framework: string;
  };
  contact: {
    title: string;
    subtitle: string;
    availableForProjects: string;
    quickResponse: string;
    sendMessage: string;
    successMessage: string;
    errorMessage: string;
    name: string;
    email: string;
    subject: string;
    message: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    messagePlaceholder: string;
    selectSubject: string;
    projectInquiry: string;
    collaboration: string;
    consultation: string;
    freelance: string;
    other: string;
    sending: string;
    sendMessageBtn: string;
    contactInformation: string;
    emailLabel: string;
    location: string;
    locationValue: string;
    responseTime: string;
    responseTimeValue: string;
    connectWithMe: string;
    availableForNewProjects: string;
    availableDesc: string;
    faqTitle: string;
    faqSubtitle: string;
    faq1Q: string;
    faq1A: string;
    faq2Q: string;
    faq2A: string;
    faq3Q: string;
    faq3A: string;
    faq4Q: string;
    faq4A: string;
  };
  nav: {
    home: string;
    about: string;
    work: string;
    contact: string;
  };
  common: {
    contactMe: string;
  };
}

const translations: Record<'en' | 'fr', Translations> = {
  en: {
    hero: {
      availableForWork: "Available for work",
      headline: "Building Scalable Modern Websites for the Future",
      downloadCV: "Download CV",
      viewPortfolio: "View Portfolio Resume"
    },
    work: {
      title: "My portfolio highlights",
      detailedTitle: "My Work & Projects",
      detailedSubtitle: "Showcasing real-world applications built with modern technologies",
      projectsCompleted: "15+ Projects Completed",
      yearsExperience: "2.5+ Years Experience",
      keyFeatures: "Key Features",
      technologyStack: "Technology Stack",
      frontend: "Frontend",
      backend: "Backend",
      liveDemo: "Live Demo",
      viewCode: "View Code",
      github: "GitHub",
      developmentProcess: "Development Process",
      developmentProcessDesc: "How I approach every project",
      planning: "Planning",
      planningDesc: "Understanding requirements and creating detailed project roadmaps",
      design: "Design",
      designDesc: "Creating intuitive user interfaces and experiences",
      development: "Development",
      developmentDesc: "Building scalable solutions with modern technologies",
      deploy: "Deploy",
      deployDesc: "Testing, optimizing, and launching to production",
      readyToStart: "Ready to Start Your Project?",
      readyToStartDesc: "Let's discuss how we can bring your ideas to life with custom web solutions.",
      startProject: "Start a Project",
      learnMoreAboutMe: "Learn More About Me",
      projects: {
        musicApp: "Full stack music app",
        stockPhoto: "Free stock photo app",
        recipeApp: "Recipe app",
        realEstate: "Real state website",
        eCommerce: "eCommerce website",
        portfolio: "vCard Personal portfolio"
      },
      detailedProjects: {
        musify: {
          title: "Musify - Full Stack Music Streaming App",
          description: "A comprehensive music streaming platform built with modern web technologies. Features include user authentication, playlist management, real-time music playback, and social sharing capabilities.",
          longDescription: "Musify represents a full-scale music streaming application that combines the power of React frontend with a robust Node.js backend. The application features a sophisticated user interface for browsing music, creating playlists, and social interaction. Built with scalability in mind, it handles thousands of concurrent users while maintaining optimal performance.",
          features: ["Real-time music streaming", "User authentication & profiles", "Playlist creation & management", "Social features & sharing", "Advanced search & filtering", "Responsive design"]
        },
        pixstock: {
          title: "PixStock - Free Stock Photo Platform",
          description: "A modern stock photo platform offering high-quality, free-to-use images for creators. Built as a Single Page Application with advanced search and filtering capabilities.",
          longDescription: "PixStock is a sleek, modern platform designed for content creators seeking high-quality stock photography. The application leverages external APIs to provide millions of free images while offering an intuitive user experience for searching, filtering, and downloading content.",
          features: ["Advanced image search", "Category-based filtering", "High-resolution downloads", "Responsive gallery layout", "Infinite scroll loading", "Image metadata display"]
        },
        recipehub: {
          title: "RecipeHub - Culinary Discovery App",
          description: "A recipe discovery platform that helps users find, save, and share culinary creations. Features include recipe search, meal planning, and nutritional information.",
          longDescription: "RecipeHub transforms the cooking experience by providing a comprehensive platform for recipe discovery and meal planning. Users can search through thousands of recipes, save favorites, plan meals, and even generate shopping lists automatically.",
          features: ["Recipe search & filtering", "Meal planning calendar", "Nutritional information", "Shopping list generator", "Favorite recipes storage", "Progressive Web App"]
        }
      }
    },
    about: {
      title: "About Jean-Auryel",
      welcome: "Welcome! I'm Jean-Auryel, a professional web developer with a knack for crafting visually stunning and highly functional websites. Combining creativity and technical expertise. I transform your vision into a digital masterpiece that excels in both appearance and performance.",
      yearsOfExperience: "Years of experience",
      projectsDone: "Projects done",
      journeyTitle: "My Journey as a Developer",
      journeyP1: "Welcome to my world! I'm Jean-Auryel, a passionate full-stack developer with over 2.5 years of experience crafting digital solutions that make a difference. My journey began with curiosity and has evolved into a deep love for creating innovative web applications.",
      journeyP2: "I specialize in modern web technologies including React, Node.js, and TypeScript. My approach combines clean, maintainable code with user-centered design principles to deliver exceptional digital experiences.",
      journeyP3: "When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community. I believe in continuous learning and staying ahead of industry trends.",
      technicalExpertise: "Technical Expertise",
      technicalExpertiseDesc: "Technologies I work with daily",
      frontend: "Frontend Development",
      backend: "Backend Development",
      tools: "Tools & Workflow",
      frontendDesc: "React, TypeScript, Tailwind CSS, HTML5, CSS3",
      backendDesc: "Node.js, Express.js, MongoDB, RESTful APIs",
      toolsDesc: "Git, VS Code, Figma, Docker, Deployment",
      philosophyTitle: "Development Philosophy",
      philosophyDesc: "Great code is not just about functionality—it's about creating experiences that inspire and solutions that endure. I believe in writing code that tells a story, solves real problems, and stands the test of time.",
      userCentered: "User-Centered",
      userCenteredDesc: "Every line of code serves the end user",
      cleanScalable: "Clean & Scalable",
      cleanScalableDesc: "Maintainable solutions for long-term success",
      innovationDriven: "Innovation-Driven",
      innovationDrivenDesc: "Always exploring new possibilities",
      ctaTitle: "Let's Build Something Amazing",
      ctaDesc: "Ready to turn your ideas into reality? Let's collaborate and create something extraordinary together.",
      getInTouch: "Get In Touch",
      viewMyWork: "View My Work"
    },
    skills: {
      title: "Essential Tools I use",
      description: "Discover the powerful tools and technologies I use to create exceptional, high-performing websites & applications.",
      userInterface: "User Interface",
      interaction: "Interaction",
      webServer: "Web Server",
      nodeFramework: "Node Framework",
      framework: "Framework"
    },
    contact: {
      title: "Let's Work Together",
      subtitle: "Ready to bring your project to life? I'd love to hear from you.",
      availableForProjects: "Available for Projects",
      quickResponse: "Quick Response",
      sendMessage: "Send me a message",
      successMessage: "Thank you! Your message has been sent successfully. I'll get back to you soon.",
      errorMessage: "Sorry, there was an error sending your message. Please try again or contact me directly.",
      name: "Name",
      email: "Email",
      subject: "Subject",
      message: "Message",
      namePlaceholder: "Your full name",
      emailPlaceholder: "your.email@example.com",
      messagePlaceholder: "Tell me about your project, timeline, budget, and any specific requirements...",
      selectSubject: "Select a subject",
      projectInquiry: "New Project Inquiry",
      collaboration: "Collaboration Opportunity",
      consultation: "Technical Consultation",
      freelance: "Freelance Work",
      other: "Other",
      sending: "Sending...",
      sendMessageBtn: "Send Message",
      contactInformation: "Contact Information",
      emailLabel: "Email",
      location: "Location",
      locationValue: "Available for Remote Work",
      responseTime: "Response Time",
      responseTimeValue: "Usually within 24 hours",
      connectWithMe: "Connect with me",
      availableForNewProjects: "Available for new projects",
      availableDesc: "Currently accepting new projects and collaborations. Let's build something amazing together!",
      faqTitle: "Frequently Asked Questions",
      faqSubtitle: "Quick answers to common questions",
      faq1Q: "What's your typical project timeline?",
      faq1A: "Project timelines vary based on complexity, but most websites take 2-6 weeks from start to finish. I'll provide a detailed timeline during our initial consultation.",
      faq2Q: "Do you work with international clients?",
      faq2A: "Absolutely! I work with clients worldwide and am comfortable with different time zones. Most communication happens via email and video calls.",
      faq3Q: "What information should I include in my project inquiry?",
      faq3A: "Please include your project goals, timeline, budget range, and any specific features you need. The more details you provide, the better I can understand your needs.",
      faq4Q: "Do you provide ongoing support after project completion?",
      faq4A: "Yes! I offer various support and maintenance packages to keep your website updated, secure, and performing optimally."
    },
    nav: {
      home: "Home",
      about: "About",
      work: "Work",
      contact: "Contact"
    },
    common: {
      contactMe: "Contact Me"
    }
  },
  fr: {
    hero: {
      availableForWork: "Disponible pour travailler",
      headline: "Créons Des Sites Web Modernes et Évolutifs ",
      downloadCV: "Télécharger CV",
      viewPortfolio: "Voir le Portfolio"
    },
    work: {
      title: "Quelques Projets réalisés",
      detailedTitle: "Mes Projets & Réalisations",
      detailedSubtitle: "Présentation d'applications réelles construites avec des technologies modernes",
      projectsCompleted: "15+ Projets Réalisés",
      yearsExperience: "2,5+ Années d'Expérience",
      keyFeatures: "Fonctionnalités Clés",
      technologyStack: "Stack Technologique",
      frontend: "Frontend",
      backend: "Backend",
      liveDemo: "Démo Live",
      viewCode: "Voir le Code",
      github: "GitHub",
      developmentProcess: "Processus de Développement",
      developmentProcessDesc: "Comment j'aborde chaque projet",
      planning: "Planification",
      planningDesc: "Comprendre les exigences et créer des feuilles de route détaillées",
      design: "Design",
      designDesc: "Créer des interfaces utilisateur intuitives et des expériences",
      development: "Développement",
      developmentDesc: "Construire des solutions évolutives avec des technologies modernes",
      deploy: "Déploiement",
      deployDesc: "Tester, optimiser et lancer en production",
      readyToStart: "Prêt à Commencer Votre Projet ?",
      readyToStartDesc: "Discutons de la façon dont nous pouvons donner vie à vos idées avec des solutions web personnalisées.",
      startProject: "Démarrer un Projet",
      learnMoreAboutMe: "En Savoir Plus Sur Moi",
      projects: {
        musicApp: "Application musicale full stack",
        stockPhoto: "Application de photos libres",
        recipeApp: "Application de recettes",
        realEstate: "Site web immobilier",
        eCommerce: "Site web e-commerce",
        portfolio: "Portfolio personnel vCard"
      },
      detailedProjects: {
        musify: {
          title: "Musify - Application de Streaming Musical Full Stack",
          description: "Une plateforme complète de streaming musical construite avec des technologies web modernes. Comprend l'authentification utilisateur, la gestion de playlists, la lecture musicale en temps réel et les fonctionnalités de partage social.",
          longDescription: "Musify représente une application de streaming musical complète qui combine la puissance d'un frontend React avec un backend Node.js robuste. L'application dispose d'une interface utilisateur sophistiquée pour parcourir la musique, créer des playlists et l'interaction sociale. Conçue avec l'évolutivité à l'esprit, elle gère des milliers d'utilisateurs simultanés tout en maintenant des performances optimales.",
          features: ["Streaming musical en temps réel", "Authentification utilisateur & profils", "Création et gestion de playlists", "Fonctionnalités sociales & partage", "Recherche et filtrage avancés", "Design responsive"]
        },
        pixstock: {
          title: "PixStock - Plateforme de Photos Stock Gratuites",
          description: "Une plateforme moderne de photos stock offrant des images de haute qualité et libres d'utilisation pour les créateurs. Construite comme une Application Page Unique avec des capacités avancées de recherche et filtrage.",
          longDescription: "PixStock est une plateforme moderne et élégante conçue pour les créateurs de contenu à la recherche de photographies stock de haute qualité. L'application exploite des APIs externes pour fournir des millions d'images gratuites tout en offrant une expérience utilisateur intuitive pour la recherche, le filtrage et le téléchargement de contenu.",
          features: ["Recherche d'images avancée", "Filtrage par catégories", "Téléchargements haute résolution", "Mise en page de galerie responsive", "Chargement par défilement infini", "Affichage des métadonnées d'image"]
        },
        recipehub: {
          title: "RecipeHub - Application de Découverte Culinaire",
          description: "Une plateforme de découverte de recettes qui aide les utilisateurs à trouver, sauvegarder et partager des créations culinaires. Comprend la recherche de recettes, la planification de repas et les informations nutritionnelles.",
          longDescription: "RecipeHub transforme l'expérience culinaire en fournissant une plateforme complète pour la découverte de recettes et la planification de repas. Les utilisateurs peuvent rechercher parmi des milliers de recettes, sauvegarder leurs favoris, planifier des repas et même générer des listes de courses automatiquement.",
          features: ["Recherche et filtrage de recettes", "Calendrier de planification de repas", "Informations nutritionnelles", "Générateur de liste de courses", "Stockage de recettes favorites", "Application Web Progressive"]
        }
      }
    },
    about: {
      title: "À Propos de Jean-Auryel",
      welcome: "Bienvenue ! Je suis Jean-Auryel, un développeur web professionnel avec un talent pour créer des sites web visuellement époustouflants et hautement fonctionnels. Alliant créativité et expertise technique, je transforme votre vision en un chef-d'œuvre numérique qui excelle tant en apparence qu'en performance.",
      yearsOfExperience: "Années d'expérience",
      projectsDone: "Projets réalisés",
      journeyTitle: "Mon Parcours de Développeur",
      journeyP1: "Bienvenue dans mon univers ! Je suis Jean-Auryel, un développeur full-stack passionné avec plus de 2,5 années d'expérience dans la création de solutions numériques qui font la différence. Mon parcours a commencé par la curiosité et a évolué vers un amour profond pour la création d'applications web innovantes.",
      journeyP2: "Je me spécialise dans les technologies web modernes incluant React, Node.js et TypeScript. Mon approche combine du code propre et maintenable avec des principes de conception centrés sur l'utilisateur pour offrir des expériences numériques exceptionnelles.",
      journeyP3: "Quand je ne code pas, vous me trouverez en train d'explorer de nouvelles technologies, de contribuer à des projets open-source, ou de partager des connaissances avec la communauté des développeurs. Je crois en l'apprentissage continu et à rester en avance sur les tendances de l'industrie.",
      technicalExpertise: "Mon Expertise Technique",
      technicalExpertiseDesc: "Technologies que j'utilise quotidiennement",
      frontend: "Développement Frontend",
      backend: "Développement Backend",
      tools: "Outils et Workflow",
      frontendDesc: "React, TypeScript, Tailwind CSS, HTML5, CSS3",
      backendDesc: "Node.js, Express.js, MongoDB, APIs RESTful",
      toolsDesc: "Git, VS Code, Figma, Docker, Déploiement",
      philosophyTitle: "Ma Philosophie de Développement",
      philosophyDesc: "Le grand code ne concerne pas seulement la fonctionnalité—il s'agit de créer des expériences qui inspirent et des solutions qui perdurent. Je crois en l'écriture de code qui raconte une histoire, résout de vrais problèmes et résiste à l'épreuve du temps.",
      userCentered: "Centré Utilisateur",
      userCenteredDesc: "Chaque ligne de code sert l'utilisateur final",
      cleanScalable: "Propre et Évolutif",
      cleanScalableDesc: "Solutions maintenables pour un succès à long terme",
      innovationDriven: "Guidé par l'Innovation",
      innovationDrivenDesc: "Toujours à la recherche de nouvelles possibilités",
      ctaTitle: "Créons Quelque Chose d'Incroyable Ensemble !",
      ctaDesc: "Prêt à transformer vos idées en réalité ? Collaborons pour doner vie à quelque chose d'extraordinaire ensemble.",
      getInTouch: "Prendre Contact",
      viewMyWork: "Voir Mon Travail"
    },
    skills: {
      title: "Outils Essentiels que j'utilise",
      description: "Découvrez les outils et technologies puissants que j'utilise pour créer des sites web et applications exceptionnels et performants.",
      userInterface: "Interface Utilisateur",
      interaction: "Interaction",
      webServer: "Serveur Web",
      nodeFramework: "Framework Node",
      framework: "Framework"
    },
    contact: {
      title: "Travaillons Ensemble",
      subtitle: "Prêt à donner vie à votre projet ? J'aimerais avoir de vos nouvelles.",
      availableForProjects: "Disponible pour Projets",
      quickResponse: "Réponse Rapide",
      sendMessage: "Envoyez-moi un message",
      successMessage: "Merci ! Votre message a été envoyé avec succès. Je vous recontacterai bientôt.",
      errorMessage: "Désolé, il y a eu une erreur lors de l'envoi de votre message. Veuillez réessayer ou me contacter directement.",
      name: "Nom",
      email: "Email",
      subject: "Sujet",
      message: "Message",
      namePlaceholder: "Votre nom complet",
      emailPlaceholder: "votre.email@example.com",
      messagePlaceholder: "Parlez-moi de votre projet, délai, budget et exigences spécifiques...",
      selectSubject: "Sélectionner un sujet",
      projectInquiry: "Demande de Nouveau Projet",
      collaboration: "Opportunité de Collaboration",
      consultation: "Consultation Technique",
      freelance: "Travail Freelance",
      other: "Autre",
      sending: "Envoi en cours...",
      sendMessageBtn: "Envoyer le Message",
      contactInformation: "Informations de Contact",
      emailLabel: "Email",
      location: "Localisation",
      locationValue: "Disponible pour Travail à Distance",
      responseTime: "Temps de Réponse",
      responseTimeValue: "Généralement dans les 24 heures",
      connectWithMe: "Connectez-vous avec moi",
      availableForNewProjects: "Disponible pour nouveaux projets",
      availableDesc: "J'accepte actuellement de nouveaux projets et collaborations. Créons quelque chose d'incroyable ensemble !",
      faqTitle: "Questions Fréquemment Posées",
      faqSubtitle: "Réponses rapides aux questions courantes",
      faq1Q: "Quel est votre délai de projet typique ?",
      faq1A: "Les délais de projet varient selon la complexité, mais la plupart des sites web prennent 2 à 6 semaines du début à la fin. Je fournirai un délai détaillé lors de notre consultation initiale.",
      faq2Q: "Travaillez-vous avec des clients internationaux ?",
      faq2A: "Absolument ! Je travaille avec des clients du monde entier et suis à l'aise avec différents fuseaux horaires. La plupart des communications se font par email et appels vidéo.",
      faq3Q: "Quelles informations dois-je inclure dans ma demande de projet ?",
      faq3A: "Veuillez inclure vos objectifs de projet, délai, fourchette de budget et toutes fonctionnalités spécifiques dont vous avez besoin. Plus vous fournissez de détails, mieux je peux comprendre vos besoins.",
      faq4Q: "Fournissez-vous un support continu après la completion du projet ?",
      faq4A: "Oui ! J'offre divers packages de support et maintenance pour garder votre site web à jour, sécurisé et performant de manière optimale."
    },
    nav: {
      home: "Accueil",
      about: "À Propos",
      work: "Projets",
      contact: "Contact"
    },
    common: {
      contactMe: "Me Contacter"
    }
  }
};

export default translations;