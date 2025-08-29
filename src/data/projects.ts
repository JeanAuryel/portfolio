/**
 * @copyright 2025 jeanauryel.dev
 * @license Apache-2.0
 */

export interface TechStack {
    frontend?: string[];
    backend?: string[];
    database?: string[];
    tools?: string[];
}

export interface Project {
    id: string;
    name: string;
    description: string;
    longDescription: string;
    techStack: TechStack;
    type: 'web' | 'desktop' | 'mobile' | 'frontend';
    category: 'fullstack' | 'desktop' | 'mobile' | 'frontend';
    imgSrc?: string;
    demoLink?: string;
    githubLink?: string;
    features: string[];
    status: 'completed' | 'in_progress' | 'planned';
    featureImages?: string[];
}

export const projectsData: Project[] = [
    // Fullstack Web Applications
    {
        id: 'organizheur-web',
        name: "Organiz'heur Web",
        description: "Application de gestion d'événements et de planification",
        longDescription: "Application web complète permettant la gestion d'événements, la planification de tâches et la collaboration d'équipe avec interface utilisateur moderne en Vue.js",
        techStack: {
            frontend: ['Vue.js', 'TypeScript', 'Tailwind CSS'],
            backend: ['Node.js', 'Express.js', 'TypeScript'],
            database: ['MySQL'],
            tools: ['Docker', 'Git', 'Postman']
        },
        type: 'web',
        category: 'fullstack',
        imgSrc: '/images/organizheur-web.jpg',
        demoLink: 'https://organizheur-web.demo.com',
        githubLink: 'https://github.com/jeanauryel/organizheur-web',
        features: ['Gestion d\'événements', 'Planification de tâches', 'Collaboration équipe', 'Interface responsive'],
        status: 'completed'
    },
    {
        id: 'nurse-care',
        name: 'NurseCare',
        description: "Système de gestion pour professionnels de santé",
        longDescription: "Application web dédiée aux professionnels de santé pour la gestion des patients, rendez-vous et dossiers médicaux avec interface intuitive",
        techStack: {
            frontend: ['Vue.js', 'TypeScript', 'Element Plus'],
            backend: ['Node.js', 'Express.js', 'TypeScript'],
            database: ['MySQL'],
            tools: ['Docker', 'Git', 'JWT Authentication']
        },
        type: 'web',
        category: 'fullstack',
        imgSrc: '/images/nurse-care.jpg',
        demoLink: 'https://nurse-care.demo.com',
        githubLink: 'https://github.com/jeanauryel/nurse-care',
        features: ['Gestion patients', 'Planification RDV', 'Dossiers médicaux', 'Sécurité renforcée'],
        status: 'completed'
    },
    {
        id: 'deliver-easy',
        name: "Deliver'Easy",
        description: "Plateforme de livraison et gestion logistique",
        longDescription: "Application de gestion de livraisons avec suivi en temps réel, optimisation des trajets et interface administrateur complète développée en React",
        techStack: {
            frontend: ['React', 'TypeScript', 'Material-UI'],
            backend: ['Node.js', 'Express.js', 'TypeScript'],
            database: ['MySQL'],
            tools: ['Docker', 'Git', 'Maps API']
        },
        type: 'web',
        category: 'fullstack',
        imgSrc: '/images/deliver-easy.jpg',
        demoLink: 'https://deliver-easy.demo.com',
        githubLink: 'https://github.com/jeanauryel/deliver-easy',
        features: ['Suivi temps réel', 'Optimisation trajets', 'Interface admin', 'API Maps'],
        status: 'completed'
    },
    {
        id: 'vigie-it',
        name: 'Vigie IT (Projet Pro)',
        description: "Solution de monitoring et supervision IT",
        longDescription: "Application web professionnelle de monitoring système développée en Angular avec backend PHP Symfony pour la supervision d'infrastructure IT",
        techStack: {
            frontend: ['Angular', 'TypeScript', 'Angular Material'],
            backend: ['PHP', 'Symfony'],
            database: ['MariaDB'],
            tools: ['Docker', 'Git', 'Monitoring APIs']
        },
        type: 'web',
        category: 'fullstack',
        imgSrc: '/images/vigie-it.jpg',
        githubLink: 'https://github.com/jeanauryel/vigie-it',
        features: ['Monitoring temps réel', 'Alertes système', 'Dashboard admin', 'Rapports détaillés'],
        status: 'completed'
    },

    // Desktop Applications
    {
        id: 'organizheur-desktop',
        name: "Organiz'heur Desktop",
        description: "Version desktop de l'application de gestion d'événements",
        longDescription: "Application desktop cross-platform développée avec Electron et Vue.js offrant toutes les fonctionnalités web avec performance native",
        techStack: {
            frontend: ['Vue.js', 'TypeScript', 'Electron'],
            backend: ['Node.js', 'TypeScript'],
            tools: ['Electron Builder', 'Git']
        },
        type: 'desktop',
        category: 'desktop',
        imgSrc: '/images/organizheur-desktop.jpg',
        githubLink: 'https://github.com/jeanauryel/organizheur-desktop',
        features: ['Interface native', 'Synchronisation cloud', 'Mode hors ligne', 'Notifications système'],
        status: 'completed',
        featureImages: [
            '/images/organizheur-desktop-dashboard.jpg',
            '/images/organizheur-desktop-events.jpg',
            '/images/organizheur-desktop-sync.jpg'
        ]
    },
    {
        id: 'arka-desktop',
        name: 'Arka Desktop',
        description: "Application de gestion documentaire desktop",
        longDescription: "Solution desktop robuste développée en Kotlin avec Ktor pour la gestion de documents et archives avec interface moderne",
        techStack: {
            backend: ['Kotlin', 'Ktor'],
            tools: ['Gradle', 'Git', 'SQLite']
        },
        type: 'desktop',
        category: 'desktop',
        imgSrc: '/images/arka-desktop.jpg',
        githubLink: 'https://github.com/jeanauryel/arka-desktop',
        features: ['Gestion documents', 'Système d\'archives', 'Recherche avancée', 'Interface moderne'],
        status: 'completed',
        featureImages: [
            '/images/arka-desktop-documents.jpg',
            '/images/arka-desktop-search.jpg',
            '/images/arka-desktop-archive.jpg'
        ]
    },
    {
        id: 'carist-si-desktop',
        name: 'CaristSI Desktop',
        description: "Système d'information pour gestion de parc automobile",
        longDescription: "Application desktop spécialisée dans la gestion de flottes automobiles développée en Kotlin avec architecture robuste",
        techStack: {
            backend: ['Kotlin', 'Ktor'],
            tools: ['Gradle', 'Git', 'H2 Database']
        },
        type: 'desktop',
        category: 'desktop',
        imgSrc: '/images/carist-si-desktop.jpg',
        githubLink: 'https://github.com/jeanauryel/carist-si-desktop',
        features: ['Gestion flotte auto', 'Suivi maintenance', 'Rapports détaillés', 'Planning véhicules'],
        status: 'completed',
        featureImages: [
            '/images/carist-si-desktop-fleet.jpg',
            '/images/carist-si-desktop-maintenance.jpg',
            '/images/carist-si-desktop-reports.jpg'
        ]
    },

    // Mobile Applications
    {
        id: 'arka-mobile',
        name: 'Arka Mobile',
        description: "Version mobile de l'application de gestion documentaire",
        longDescription: "Application mobile connectée au serveur Arka Desktop permettant l'accès aux documents en mobilité avec synchronisation complète",
        techStack: {
            frontend: ['React Native', 'TypeScript'],
            backend: ['Connexion serveur Arka Desktop'],
            tools: ['Metro', 'Git', 'API REST']
        },
        type: 'mobile',
        category: 'mobile',
        imgSrc: '/images/arka-mobile.jpg',
        githubLink: 'https://github.com/jeanauryel/arka-mobile',
        features: ['Accès documents mobile', 'Synchronisation serveur', 'Mode hors ligne', 'Interface tactile'],
        status: 'completed',
        featureImages: [
            '/images/arka-mobile-documents.jpg',
            '/images/arka-mobile-sync.jpg',
            '/images/arka-mobile-offline.jpg'
        ]
    },
    {
        id: 'carist-si-mobile',
        name: 'CaristSI Mobile',
        description: "Application mobile pour gestion de flotte automobile",
        longDescription: "Compagnon mobile de CaristSI Desktop offrant un accès rapide aux informations véhicules et fonctions de terrain",
        techStack: {
            frontend: ['React Native', 'TypeScript'],
            backend: ['Connexion serveur CaristSI Desktop'],
            tools: ['Metro', 'Git', 'GPS', 'Camera API']
        },
        type: 'mobile',
        category: 'mobile',
        imgSrc: '/images/carist-si-mobile.jpg',
        githubLink: 'https://github.com/jeanauryel/carist-si-mobile',
        features: ['Info véhicules temps réel', 'Géolocalisation', 'Photos maintenance', 'Rapports terrain'],
        status: 'completed',
        featureImages: [
            '/images/carist-si-mobile-vehicles.jpg',
            '/images/carist-si-mobile-gps.jpg',
            '/images/carist-si-mobile-camera.jpg'
        ]
    },

    // Frontend Applications
    {
        id: 'kerhope',
        name: 'Kerhope',
        description: "Site vitrine pour association d'entraide bénévole",
        longDescription: "Site vitrine moderne pour l'association Kerhope à Nantes, facilitant la mise en relation entre bénévoles et personnes dans le besoin",
        techStack: {
            frontend: ['React', 'TypeScript', 'Tailwind CSS'],
            tools: ['Vite', 'Git', 'Netlify']
        },
        type: 'frontend',
        category: 'frontend',
        imgSrc: '/images/kerhope.jpg',
        demoLink: 'https://kerhope.org',
        githubLink: 'https://github.com/jeanauryel/kerhope',
        features: ['Design accessible', 'Formulaire contact', 'Présentation services', 'SEO optimisé'],
        status: 'completed'
    },
    {
        id: 'jordanes-agency',
        name: "Jordane's Agency",
        description: "Portfolio pour community manager spécialisé réseaux sociaux",
        longDescription: "Site portfolio professionnel pour Jordane, community manager spécialisé en gestion de réseaux sociaux avec galerie projets interactive",
        techStack: {
            frontend: ['React', 'TypeScript', 'Tailwind CSS'],
            tools: ['Vite', 'Git', 'Vercel']
        },
        type: 'frontend',
        category: 'frontend',
        imgSrc: '/images/jordanes-agency.jpg',
        demoLink: 'https://jordanes-agency.vercel.app',
        githubLink: 'https://github.com/jeanauryel/jordanes-agency',
        features: ['Galerie interactive', 'Témoignages clients', 'Blog intégré', 'Contact direct'],
        status: 'completed'
    }
];

export const getProjectsByCategory = (category: string) => {
    return projectsData.filter(project => project.category === category);
};

export const getProjectById = (id: string) => {
    return projectsData.find(project => project.id === id);
};