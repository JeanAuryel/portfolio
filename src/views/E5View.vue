<script setup lang="ts">
import { ref, computed } from 'vue';

interface Project {
  id: number;
  name: string;
  category: 'formation' | 'entreprise' | 'personnel';
  description: string;
  detailedDescription: string;
  technologies: string[];
  image: string;
  date: string;
  documentation?: {
    functional?: string; // Chemin vers la doc fonctionnelle
    technical?: string;  // Chemin vers la doc technique
  };
}

// État pour la carte active
const activeCardId = ref<number | null>(null);

// Données des projets
const projects = ref<Project[]>([
  // Projets réalisés en formation
  {
    id: 1,
    name: 'Organizheur',
    category: 'formation',
    description: 'Application de gestion et d\'organisation personnelle',
    detailedDescription: 'Organizheur est une application web complète permettant aux utilisateurs de gérer leurs tâches, leurs événements et leur planning de manière efficace. L\'application offre une interface intuitive avec un système de notifications, un calendrier intégré et des fonctionnalités de collaboration pour les équipes.',
    technologies: ['Vue.js 3', 'Vite', 'TypeScript', 'TailwindCSS', 'Node.js', 'Express', 'MySQL', 'JWT', 'Pinia', 'Vue Router'],
    image: '/src/assets/img/Organizheur_logo.png',
    date: 'Octobre 2024 - Novembre 2024',
    documentation: {
      functional: '/src/assets/documents/organizheur-doc-fonctionnelle.pdf',
      technical: '/src/assets/documents/organizheur-doc-technique.pdf'
    }
  },
  {
    id: 2,
    name: 'Deliver\'easy',
    category: 'formation',
    description: 'Application de livraison à domicile',
    detailedDescription: 'Deliver\'easy est une plateforme de livraison qui connecte les restaurants locaux avec les clients. L\'application propose un système de commande intuitive, un suivi en temps réel, et une interface d\'administration complète pour les restaurateurs.',
    technologies: ['Vue.js 3', 'Vite', 'TypeScript', 'TailwindCSS', 'Node.js', 'Express.js', 'MySQL', 'JWT', 'Pinia', 'bcrypt', 'cors'],
    image: '/src/assets/img/Delivereasy_logo.png',
    date: 'Novembre 2024 - Décembre 2024',
    documentation: {
      functional: '/src/assets/documents/deliver-easy-doc-fonctionnelle.pdf',
      technical: '/src/assets/documents/deliver-easy-doc-technique.pdf'
    }
  },
  {
    id: 3,
    name: 'NurseCare',
    category: 'formation',
    description: 'Application de gestion pour infirmières',
    detailedDescription: 'NurseCare est une solution digitale dédiée aux infirmières libérales pour la gestion de leur patientèle. Elle inclut un planning intelligent, un système de dossier patient sécurisé, et des outils de communication avec les médecins.',
    technologies: ['Vue.js 3', 'Vite', 'TailwindCSS', 'TypeScript', 'Node.js', 'Express.js', 'MySQL', 'JWT', 'bcrypt', 'Pinia', 'Vue Router'],
    image: '/src/assets/img/NurseCare.png',
    date: 'Décembre 2024 - Janvier 2025',
    documentation: {
      functional: '/src/assets/documents/nursecare-doc-fonctionnelle.pdf',
      technical: '/src/assets/documents/nursecare-doc-technique.pdf'
    }
  },
  {
    id: 4,
    name: 'CaristSI',
    category: 'formation',
    description: 'Système d\'information web pour caristes',
    detailedDescription: 'CaristSI est un système d\'information complet pour la gestion d\'entrepôts et de stocks. Il permet aux caristes de gérer efficacement les mouvements de marchandises, optimiser les espaces de stockage et générer des rapports détaillés.',
    technologies: ['Kotlin', 'Compose for Desktop', 'SQLite', 'MySQL', 'MVVM', 'Room', 'JDBC Driver', 'Kotlin Logging'],
    image: '/src/assets/img/CaristSi.png',
    date: 'Février 2025 - Mars 2025',
    documentation: {
      functional: '/src/assets/documents/caristsi-doc-fonctionnelle.pdf',
      technical: '/src/assets/documents/caristsi-doc-technique.pdf'
    }
  },
  {
    id: 5,
    name: 'CaristSI Mobile',
    category: 'formation',
    description: 'Version mobile de CaristSI',
    detailedDescription: 'Application mobile compagnon de CaristSI, permettant aux caristes de scanner les codes-barres, mettre à jour les stocks en temps réel, et recevoir des notifications push pour les nouvelles tâches.',
    technologies: ['Kotlin', 'Jetpack Compose', 'Room (SQLite)', 'Retrofit', 'Ktor Client', 'MVVM', 'Compose Navigation'],
    image: '/src/assets/img/CaristSi_mobile.png',
    date: 'Mars 2025 - Avril 2025',
    documentation: {
      functional: '/src/assets/documents/caristsi-mobile-doc-fonctionnelle.pdf',
      technical: '/src/assets/documents/caristsi-mobile-doc-technique.pdf'
    }
  },
  {
    id: 6,
    name: 'Arka',
    category: 'formation',
    description: 'Solution de stockage de fichiers centralisée familiale',
    detailedDescription: 'Arka est une solution de stockage de fichiers centralisée conçue pour les familles. Elle propose des espaces personnels et des espaces communs de partage, avec une gestion complète de dossiers et fichiers sous différents formats. L\'application inclut un système avancé de gestion de permissions, des notifications centralisées et une interface intuitive développée avec Compose for Desktop.',
    technologies: ['Kotlin (JVM)', 'Compose for Desktop', 'MySQL', 'Ktorm', 'Ktor', 'Koin', 'Bcrypt', 'mpfilepicker', 'kotlinx-datetime'],
    image: '/src/assets/img/arka_logo.png',
    date: 'Avril 2025',
    documentation: {
      functional: '/src/assets/documents/arka-formation-doc-fonctionnelle.pdf',
      technical: '/src/assets/documents/arka-formation-doc-technique.pdf'
    }
  },
  {
    id: 7,
    name: 'Arka Mobile',
    category: 'formation',
    description: 'Application mobile de scan et gestion de fichiers',
    detailedDescription: 'Arka Mobile est une solution de scan de fichiers et de gestion des espaces personnels et communs. L\'application permet aux utilisateurs de scanner des documents ou de téléverser des fichiers audios, images ou documents déjà numérisés vers leurs espaces de gestion personnels ou communs. Elle offre une interface mobile optimisée pour la capture et l\'organisation de documents.',
    technologies: ['Kotlin', 'Jetpack Compose', 'Compose Navigation', 'Room (SQLite)', 'ML Kit', 'Ktor Client', 'MVVM', 'SharedPreferences'],
    image: '/src/assets/img/Arka_Mobile.png',
    date: 'Avril 2025 - Mai 2025',
    documentation: {
      functional: '/src/assets/documents/arka-mobile-doc-fonctionnelle.pdf',
      technical: '/src/assets/documents/arka-mobile-doc-technique.pdf'
    }
  },
  // Projet réalisé en entreprise
  {
    id: 8,
    name: 'Vigie IT',
    category: 'entreprise',
    description: 'Plateforme de monitoring IT',
    detailedDescription: 'Vigie IT est une solution de monitoring et de supervision d\'infrastructure IT développée durant mon stage. Elle offre une surveillance en temps réel, des alertes personnalisables, et des tableaux de bord d\'analyse de performance.',
    technologies: ['Vue.js 3.5', 'TypeScript', 'Python', 'Django', 'PostgreSQL', 'Docker', 'Redis'],
    image: 'https://picsum.photos/400/300?random=8',
    date: 'Septembre 2024 - Juillet 2025',
    documentation: {
      functional: '/src/assets/documents/vigie-it-doc-fonctionnelle.pdf',
      technical: '/src/assets/documents/vigie-it-doc-technique.pdf'
    }
  },
  // Projets personnels
  {
    id: 9,
    name: 'KerHope',
    category: 'personnel',
    description: 'Application d\'aide humanitaire',
    detailedDescription: 'KerHope est une plateforme solidaire connectant les personnes en difficulté avec des bénévoles locaux. Elle facilite l\'aide alimentaire, l\'accompagnement social, et la mise en réseau communautaire.',
    technologies: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Stripe', 'Google Maps API'],
    image: '/src/assets/img/kerhope.jpeg',
    date: 'Janvier 2025',
    documentation: {
      functional: '/src/assets/documents/kerhope-doc-fonctionnelle.pdf',
      technical: '/src/assets/documents/kerhope-doc-technique.pdf'
    }
  }
]);

// Filtrer les projets par catégorie
const projectsByCategory = computed(() => {
  return {
    formation: projects.value.filter(p => p.category === 'formation'),
    entreprise: projects.value.filter(p => p.category === 'entreprise'),
    personnel: projects.value.filter(p => p.category === 'personnel')
  };
});

// Activer/désactiver une carte
function toggleCard(id: number) {
  if (activeCardId.value === id) {
    activeCardId.value = null;
  } else {
    activeCardId.value = id;
  }
}

// Ouvrir le fichier PDF
function openPdfFile() {
  window.open('/portfolio/documents/E4- Tableau de synthèse - Epreuve E5 - BTS SIO 2025.pdf', '_blank');
}

// Télécharger le fichier PDF
function downloadPdfFile() {
  const link = document.createElement('a');
  link.href = '/portfolio/documents/E4- Tableau de synthèse - Epreuve E5 - BTS SIO 2025.pdf';
  link.download = 'Tableau de synthèse - Epreuve E5.pdf';
  link.click();
}

// Ouvrir la documentation d'un projet
async function openDocumentation(docPath: string, docType: 'functional' | 'technical', projectName: string) {
  try {
    // Importer dynamiquement le fichier depuis src/assets
    const module = await import(/* @vite-ignore */ docPath);
    const fileUrl = module.default || docPath;
    window.open(fileUrl, '_blank');
  } catch (error) {
    console.error(`Erreur lors de l'ouverture de la documentation ${docType} pour ${projectName}:`, error);
    
    // Essayer une approche alternative : construire l'URL manuellement
    try {
      const fileName = docPath.split('/').pop();
      const assetUrl = new URL(`../assets/documents/${fileName}`, import.meta.url).href;
      window.open(assetUrl, '_blank');
    } catch (secondError) {
      console.error('Erreur alternative:', secondError);
      alert(`Impossible d'ouvrir la documentation ${docType === 'functional' ? 'fonctionnelle' : 'technique'} pour ${projectName}`);
    }
  }
}

// Télécharger la documentation d'un projet
async function downloadDocumentation(docPath: string, docType: 'functional' | 'technical', projectName: string) {
  try {
    // Importer dynamiquement le fichier depuis src/assets
    const module = await import(/* @vite-ignore */ docPath);
    const fileUrl = module.default || docPath;
    
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = `${projectName}-doc-${docType === 'functional' ? 'fonctionnelle' : 'technique'}.pdf`;
    link.click();
  } catch (error) {
    console.error(`Erreur lors du téléchargement de la documentation ${docType} pour ${projectName}:`, error);
    
    // Essayer une approche alternative
    try {
      const fileName = docPath.split('/').pop();
      const assetUrl = new URL(`../assets/documents/${fileName}`, import.meta.url).href;
      
      const link = document.createElement('a');
      link.href = assetUrl;
      link.download = `${projectName}-doc-${docType === 'functional' ? 'fonctionnelle' : 'technique'}.pdf`;
      link.click();
    } catch (secondError) {
      console.error('Erreur alternative:', secondError);
      alert(`Impossible de télécharger la documentation ${docType === 'functional' ? 'fonctionnelle' : 'technique'} pour ${projectName}`);
    }
  }
}
</script>

<template>
  <main class="flex-grow pt-36 pb-16 relative bg-adaptive-primary">
    <!-- Background blur overlay when a card is active -->
    <div 
      v-if="activeCardId !== null"
      class="fixed inset-0 bg-black/20 backdrop-blur-md z-30"
      @click="activeCardId = null"
    ></div>
    
    <div class="container mx-auto px-4">
      <!-- Header avec bouton PDF -->
      <div class="flex justify-between items-center mb-12">
        <div>
          <h1 class="text-5xl font-bold mb-4 text-adaptive">
            <span class="bg-gradient-to-r from-gold-600 to-gold-400 dark:from-amber-400 dark:to-amber-600 bg-clip-text text-transparent">
            Mes Réalisations - E5
            </span>
          </h1>
          <p class="text-xl text-adaptive-secondary">
            Découvrez les projets que j'ai réalisés en formation, en entreprise et personnellement
          </p>
        </div>
        
        <!-- Bouton PDF -->
        <div class="flex flex-col sm:flex-row gap-3">
          <button 
            @click="openPdfFile"
            class="flex items-center px-4 py-2 bg-skill-burgundy text-skill-burgundy-light rounded-lg hover:bg-skill-burgundy-dark hover:text-skill-burgundy-light transition-colors shadow-lg"
          >
            <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm0 2h12v8H4V6zm2 2v4h2V8H6zm4 0v1h2V8h-2zm0 2v2h2v-2h-2z"/>
            </svg>
            Ouvrir PDF
          </button>
          <button 
            @click="downloadPdfFile"
            class="btn-walnut"
          >
            <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18v2h20v-2H0z"/>
            </svg>
            Télécharger PDF
          </button>
        </div>
      </div>
      
      <!-- Projets en formation -->
      <section class="mb-16">
        <h2 class="text-3xl font-bold mb-8 text-skill-terra">
          🎓 Projets réalisés en formation
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <div 
            v-for="project in projectsByCategory.formation" 
            :key="project.id"
            @click="toggleCard(project.id)"
            class="project-card"
            :class="{ 
              'active': activeCardId === project.id,
              'flip': activeCardId === project.id 
            }"
          >
            <div class="project-card-inner">
              <!-- Face avant -->
              <div class="project-card-front">
                <div class="w-full h-40 mb-4 overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-700">
                  <img :src="project.image" :alt="project.name" class="w-full h-full object-cover object-center">
                </div>
                <h3 class="text-xl font-bold mb-2 text-adaptive">{{ project.name }}</h3>
                <p class="text-adaptive-secondary text-sm">{{ project.description }}</p>
                <div class="mt-4 text-xs text-adaptive-secondary opacity-75">{{ project.date }}</div>
              </div>
              
              <!-- Face arrière -->
              <div class="project-card-back">
                <div class="flex h-full">
                  <div class="flex-1 pr-4">
                    <h3 class="text-xl font-bold mb-4 text-adaptive">{{ project.name }}</h3>
                    <p class="text-adaptive-secondary text-sm mb-4">{{ project.detailedDescription }}</p>
                    
                    <!-- Documentation -->
                    <div v-if="project.documentation" class="mb-4">
                      <h4 class="font-semibold mb-2 text-sm text-adaptive">📄 Documentation</h4>
                      <div class="flex flex-wrap gap-2">
                        <button
                          v-if="project.documentation.functional"
                          @click.stop="openDocumentation(project.documentation.functional, 'functional', project.name)"
                          class="text-xs bg-skill-terra-light text-skill-terra-dark px-3 py-1 rounded-full hover:bg-skill-terra hover:text-skill-terra-light transition-colors cursor-pointer"
                        >
                          📋 Fonctionnelle
                        </button>
                        <button
                          v-if="project.documentation.technical"
                          @click.stop="openDocumentation(project.documentation.technical, 'technical', project.name)"
                          class="text-xs bg-skill-terra text-skill-terra-light px-3 py-1 rounded-full hover:bg-skill-terra-dark hover:text-skill-terra-light transition-colors cursor-pointer"
                        >
                          ⚙️ Technique
                        </button>
                      </div>
                    </div>
                    
                    <div class="text-xs text-adaptive-secondary opacity-75 mt-auto">{{ project.date }}</div>
                  </div>
                  
                  <!-- Technologies -->
                  <div class="w-32 border-l border-adaptive pl-4">
                    <h4 class="font-semibold mb-3 text-sm text-adaptive">Technologies</h4>
                    <div class="space-y-2">
                      <div 
                        v-for="tech in project.technologies" 
                        :key="tech"
                        class="text-xs bg-skill-terra-light text-skill-terra-dark px-2 py-1 rounded-full"
                      >
                        {{ tech }}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <!-- Projets en entreprise -->
      <section class="mb-16">
        <h2 class="text-3xl font-bold mb-8 text-skill-olive">
          🏢 Projets réalisés en entreprise
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <div 
            v-for="project in projectsByCategory.entreprise" 
            :key="project.id"
            @click="toggleCard(project.id)"
            class="project-card"
            :class="{ 
              'active': activeCardId === project.id,
              'flip': activeCardId === project.id 
            }"
          >
            <div class="project-card-inner">
              <!-- Face avant -->
              <div class="project-card-front">
                <div class="w-full h-40 mb-4 overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-700">
                  <img :src="project.image" :alt="project.name" class="w-full h-full object-cover object-center">
                </div>
                <h3 class="text-xl font-bold mb-2 text-adaptive">{{ project.name }}</h3>
                <p class="text-adaptive-secondary text-sm">{{ project.description }}</p>
                <div class="mt-4 text-xs text-adaptive-secondary opacity-75">{{ project.date }}</div>
              </div>
              
              <!-- Face arrière -->
              <div class="project-card-back">
                <div class="flex h-full">
                  <div class="flex-1 pr-4">
                    <h3 class="text-xl font-bold mb-4 text-adaptive">{{ project.name }}</h3>
                    <p class="text-adaptive-secondary text-sm mb-4">{{ project.detailedDescription }}</p>
                    
                    <!-- Documentation -->
                    <div v-if="project.documentation" class="mb-4">
                      <h4 class="font-semibold mb-2 text-sm text-adaptive">📄 Documentation</h4>
                      <div class="flex flex-wrap gap-2">
                        <button
                          v-if="project.documentation.functional"
                          @click.stop="openDocumentation(project.documentation.functional, 'functional', project.name)"
                          class="text-xs bg-skill-olive-light text-skill-olive-dark px-3 py-1 rounded-full hover:bg-skill-olive hover:text-skill-olive-light transition-colors cursor-pointer"
                        >
                          📋 Fonctionnelle
                        </button>
                        <button
                          v-if="project.documentation.technical"
                          @click.stop="openDocumentation(project.documentation.technical, 'technical', project.name)"
                          class="text-xs bg-skill-olive text-skill-olive-light px-3 py-1 rounded-full hover:bg-skill-olive-dark hover:text-skill-olive-light transition-colors cursor-pointer"
                        >
                          ⚙️ Technique
                        </button>
                      </div>
                    </div>
                    
                    <div class="text-xs text-adaptive-secondary opacity-75 mt-auto">{{ project.date }}</div>
                  </div>
                  
                  <!-- Technologies -->
                  <div class="w-32 border-l border-adaptive pl-4">
                    <h4 class="font-semibold mb-3 text-sm text-adaptive">Technologies</h4>
                    <div class="space-y-2">
                      <div 
                        v-for="tech in project.technologies" 
                        :key="tech"
                        class="text-xs bg-skill-olive-light text-skill-olive-dark px-2 py-1 rounded-full"
                      >
                        {{ tech }}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <!-- Projets personnels -->
      <section class="mb-16">
        <h2 class="text-3xl font-bold mb-8 text-skill-burgundy">
          🚀 Projets personnels
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <div 
            v-for="project in projectsByCategory.personnel" 
            :key="project.id"
            @click="toggleCard(project.id)"
            class="project-card"
            :class="{ 
              'active': activeCardId === project.id,
              'flip': activeCardId === project.id 
            }"
          >
            <div class="project-card-inner">
              <!-- Face avant -->
              <div class="project-card-front">
                <div class="w-full h-40 mb-4 overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-700">
                  <img :src="project.image" :alt="project.name" class="w-full h-full object-cover object-center">
                </div>
                <h3 class="text-xl font-bold mb-2 text-adaptive">{{ project.name }}</h3>
                <p class="text-adaptive-secondary text-sm">{{ project.description }}</p>
                <div class="mt-4 text-xs text-adaptive-secondary opacity-75">{{ project.date }}</div>
              </div>
              
              <!-- Face arrière -->
              <div class="project-card-back">
                <div class="flex h-full">
                  <div class="flex-1 pr-4">
                    <h3 class="text-xl font-bold mb-4 text-adaptive">{{ project.name }}</h3>
                    <p class="text-adaptive-secondary text-sm mb-4">{{ project.detailedDescription }}</p>
                    
                    <!-- Documentation -->
                    <div v-if="project.documentation" class="mb-4">
                      <h4 class="font-semibold mb-2 text-sm text-adaptive">📄 Documentation</h4>
                      <div class="flex flex-wrap gap-2">
                        <button
                          v-if="project.documentation.functional"
                          @click.stop="openDocumentation(project.documentation.functional, 'functional', project.name)"
                          class="text-xs bg-skill-burgundy-light text-skill-burgundy-dark px-3 py-1 rounded-full hover:bg-skill-burgundy hover:text-skill-burgundy-light transition-colors cursor-pointer"
                        >
                          📋 Fonctionnelle
                        </button>
                        <button
                          v-if="project.documentation.technical"
                          @click.stop="openDocumentation(project.documentation.technical, 'technical', project.name)"
                          class="text-xs bg-skill-burgundy text-skill-burgundy-light px-3 py-1 rounded-full hover:bg-skill-burgundy-dark hover:text-skill-burgundy-light transition-colors cursor-pointer"
                        >
                          ⚙️ Technique
                        </button>
                      </div>
                    </div>
                    
                    <div class="text-xs text-adaptive-secondary opacity-75 mt-auto">{{ project.date }}</div>
                  </div>
                  
                  <!-- Technologies -->
                  <div class="w-32 border-l border-adaptive pl-4">
                    <h4 class="font-semibold mb-3 text-sm text-adaptive">Technologies</h4>
                    <div class="space-y-2">
                      <div 
                        v-for="tech in project.technologies" 
                        :key="tech"
                        class="text-xs bg-skill-burgundy-light text-skill-burgundy-dark px-2 py-1 rounded-full"
                      >
                        {{ tech }}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </main>
</template>

<style scoped>
/* Cartes de projet - Version corrigée */
.project-card {
  height: 380px; /* Réduit légèrement pour mieux s'adapter */
  cursor: pointer;
  perspective: 1000px;
  transition: all 0.3s ease;
}

/* Optimisation des images dans les cartes */
.project-card img {
  transition: transform 0.3s ease;
  max-width: 100%;
  height: 100%;
}

.project-card:hover:not(.active) img {
  transform: scale(1.05);
}

.project-card:hover:not(.active) {
  transform: translateY(-5px);
}

.project-card.active {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(1.2);
  z-index: 40;
  height: 500px;
  width: 600px;
  max-width: 90vw;
  max-height: 90vh;
}

.project-card-inner {
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.8s ease;
  will-change: transform;
}

.project-card.flip .project-card-inner {
  transform: rotateY(180deg);
}

.project-card-front,
.project-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  padding: 24px;
  border-radius: 12px;
  background-color: oklch(var(--color-cream-50));
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  
  /* Masquer complètement la face non visible */
  opacity: 1;
  visibility: visible;
  transition: opacity 0.3s ease, visibility 0.3s ease;
}

.dark .project-card-front,
.dark .project-card-back {
  background-color: oklch(var(--color-gray-800));
}

.project-card-back {
  transform: rotateY(180deg);
  display: flex;
  flex-direction: column;
}

/* Quand la carte n'est pas flippée, cacher la face arrière */
.project-card:not(.flip) .project-card-back {
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
}

/* Quand la carte est flippée, cacher la face avant */
.project-card.flip .project-card-front {
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
}

/* S'assurer que seule la face visible est interactive */
.project-card.flip .project-card-back {
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
}

.project-card:not(.flip) .project-card-front {
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
}

.project-card.active .project-card-front,
.project-card.active .project-card-back {
  padding: 32px;
}

/* Améliorer la transition pour éviter les artefacts visuels */
.project-card-inner::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: inherit;
  border-radius: inherit;
  z-index: -1;
}

/* Améliorer la gestion du z-index */
.project-card:not(.active) {
  z-index: 1;
}

.project-card.active {
  z-index: 40;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .project-card.active {
    width: 95vw;
    height: 80vh;
    transform: translate(-50%, -50%) scale(1);
  }
  
  .project-card.active .project-card-back .flex {
    flex-direction: column;
  }
  
  .project-card.active .project-card-back .w-32 {
    width: 100%;
    margin-top: 16px;
    padding-left: 0;
    padding-top: 16px;
    border-left: none;
    border-top: 1px solid oklch(var(--color-cream-300));
  }
  
  .dark .project-card.active .project-card-back .w-32 {
    border-top-color: oklch(var(--color-gray-600));
  }
  
  .project-card.active .project-card-back .w-32 .space-y-2 {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }
}

/* Animation pour les technologies */
.project-card-back .space-y-2 > div {
  animation: fadeInUp 0.5s ease forwards;
  animation-delay: calc(var(--index) * 0.1s);
}

/* Animation fadeInUp */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Smooth scrolling */
html {
  scroll-behavior: smooth;
}
</style>