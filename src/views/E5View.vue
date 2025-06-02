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
    description: 'Application de gestion et de planification de tâches',
    detailedDescription: 'Application de gestion et de planification de tâches, permettant d\'organiser ses activités, de suivre l\'avancement des missions et de faciliter le travail collaboratif. Développée avec une architecture frontend/backend complète.',
    technologies: ['Vue.js 3', 'Vite', 'TypeScript', 'TailwindCSS', 'Node.js', 'Express', 'MySQL', 'JWT'],
    image: 'https://picsum.photos/400/300?random=1',
    date: 'Octobre - Novembre 2024'
  },
  {
    id: 2,
    name: 'Deliver\'easy',
    category: 'formation',
    description: 'Système de suivi et de gestion des livraisons',
    detailedDescription: 'Système de suivi et de gestion des livraisons, offrant un suivi en temps réel des commandes, un historique des livraisons et une interface pour optimiser la logistique.',
    technologies: ['Vue.js 3', 'Vite', 'TypeScript', 'TailwindCSS', 'Node.js', 'Express.js', 'MySQL', 'JWT', 'bcrypt'],
    image: 'https://picsum.photos/400/300?random=2',
    date: 'Novembre - Décembre 2024'
  },
  {
    id: 3,
    name: 'NurseCare',
    category: 'formation',
    description: 'Solution destinée au secteur de la santé',
    detailedDescription: 'Solution destinée au secteur de la santé, permettant de gérer la prise en charge des patients, de faciliter l\'accès aux informations médicales et de coordonner les soins au quotidien.',
    technologies: ['Vue.js 3', 'Vite', 'TypeScript', 'TailwindCSS', 'Node.js', 'Express.js', 'MySQL', 'JWT'],
    image: 'https://picsum.photos/400/300?random=3',
    date: 'Décembre 2024 - Janvier 2025'
  },
  {
    id: 4,
    name: 'CaristSI Desktop',
    category: 'formation',
    description: 'Application de bureau pour caristes managers',
    detailedDescription: 'Application de bureau conçue pour les caristes managers afin de visualiser la gestion de colis au sein d\'un entrepôt via la gestion des emplacements, rangées, colonnes et du volume de l\'entrepôt.',
    technologies: ['Kotlin', 'JetBrains Compose', 'SQLite', 'MySQL', 'MVVM', 'IntelliJ IDEA'],
    image: 'https://picsum.photos/400/300?random=4',
    date: 'Février - Mars 2025'
  },
  {
    id: 5,
    name: 'CaristSI Mobile',
    category: 'formation',
    description: 'Application mobile pour caristes terrain',
    detailedDescription: 'Application mobile conçue pour simplifier la gestion des emplacements des colis d\'entrepôts via scan des codes des colis afin de rendre le travail sur le terrain plus efficace pour les caristes.',
    technologies: ['Kotlin', 'Jetpack Compose', 'Room SQLite', 'Retrofit', 'MVVM'],
    image: 'https://picsum.photos/400/300?random=5',
    date: 'Mars - Avril 2025'
  },
  {
    id: 6,
    name: 'Arka Desktop',
    category: 'formation',
    description: 'Application de gestion de fichiers familiaux',
    detailedDescription: 'Application de bureau conçue dans le but de centraliser et de permettre la gestion des fichiers inhérents à une famille (identité, scolarité, santé, etc).',
    technologies: ['Kotlin JVM', 'JetBrains Compose', 'MySQL', 'Ktorm', 'Ktor', 'Koin'],
    image: 'https://picsum.photos/400/300?random=6',
    date: 'Avril 2025'
  },
  {
    id: 7,
    name: 'Arka Mobile',
    category: 'formation',
    description: 'Application mobile de gestion familiale',
    detailedDescription: 'Application mobile de gestion des fichiers de famille disposant d\'une fonctionnalité de scan afin de pouvoir numériser les documents et de les placer dans l\'espace de gestion d\'un membre de famille.',
    technologies: ['Kotlin', 'Jetpack Compose', 'Room SQLite', 'ML Kit', 'Ktor Client', 'MVVM'],
    image: 'https://picsum.photos/400/300?random=7',
    date: 'Avril - Mai 2025'
  },
  // Projets réalisés en entreprise (2ème année)
  {
    id: 8,
    name: 'Vigie IT EVT',
    category: 'entreprise',
    description: 'Solution de surveillance infrastructure IT',
    detailedDescription: 'Solution de surveillance et de gestion des infrastructures informatiques, Vigie IT EVT permet de centraliser le suivi des événements, d\'anticiper les problèmes et de diagnostiquer rapidement les incidents. Cette plateforme offre une vue globale des performances et des alertes.',
    technologies: ['Monitoring', 'Infrastructure IT', 'Alertes', 'Diagnostic', 'Performance'],
    image: 'https://picsum.photos/400/300?random=12',
    date: 'Septembre 2024 - Juillet 2025'
  },
  // Projets personnels
  {
    id: 9,
    name: 'KerHope',
    category: 'personnel',
    description: 'Plateforme de solidarité et d\'entraide',
    detailedDescription: 'Projet orienté vers la solidarité et l\'entraide, KERHOPE vise à mettre en relation des personnes au sein d\'une communauté afin de partager des ressources, des services ou de l\'aide de manière organisée et sécurisée.',
    technologies: ['Vue.js 3', 'TypeScript', 'Node.js', 'MySQL', 'API REST'],
    image: 'https://picsum.photos/400/300?random=13',
    date: 'Janvier 2025'
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

// Ouvrir le fichier Excel
function openExcelFile() {
  window.open('/documents/Tableau_E5_Projets.xlsx', '_blank');
}

// Télécharger le fichier Excel
function downloadExcelFile() {
  const link = document.createElement('a');
  link.href = '/documents/Tableau_E5_Projets.xlsx';
  link.download = 'Tableau_E5_Projets.xlsx';
  link.click();
}
</script>

<template>
  <main class="flex-grow pt-32 pb-16 relative bg-main">
    <!-- Background blur overlay when a card is active -->
    <div 
      v-if="activeCardId !== null"
      class="fixed inset-0 bg-black/20 backdrop-blur-md z-30"
      @click="activeCardId = null"
    ></div>
    
    <div class="container-main">
      <!-- Header avec bouton Excel -->
      <div class="flex justify-between items-center mb-12">
        <div>
          <h1 class="text-5xl font-bold mb-4 text-main">Mes Réalisations - E5</h1>
          <p class="text-xl text-secondary">
            Découvrez une liste non exhaustive des projets que j'ai réalisés en formation, en entreprise et personnellement.
          </p>
        </div>
        
        <!-- Bouton Excel -->
        <div class="flex flex-col sm:flex-row gap-3">
          <button 
            @click="openExcelFile"
            class="flex items-center px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors shadow-cream dark:shadow-dark"
          >
            <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 2V5h-4v10h4V5zM4 5h4v10H4V5z"/>
            </svg>
            Ouvrir Excel
          </button>
          <button 
            @click="downloadExcelFile"
            class="btn-primary"
          >
            <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18v2h20v-2H0z"/>
            </svg>
            Télécharger
          </button>
        </div>
      </div>
      
      <!-- Projets en formation -->
      <section class="mb-16">
        <h2 class="text-3xl font-bold mb-8 text-accent">
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
                <div class="aspect-w-16 aspect-h-9 mb-4 overflow-hidden rounded-lg">
                  <img :src="project.image" :alt="project.name" class="w-full h-48 object-cover">
                </div>
                <h3 class="text-xl font-bold mb-2 text-main">{{ project.name }}</h3>
                <p class="text-secondary text-sm">{{ project.description }}</p>
                <div class="mt-4 text-xs text-secondary">{{ project.date }}</div>
              </div>
              
              <!-- Face arrière -->
              <div class="project-card-back">
                <div class="flex h-full">
                  <div class="flex-1 pr-4">
                    <h3 class="text-xl font-bold mb-4 text-main">{{ project.name }}</h3>
                    <p class="text-secondary text-sm mb-4">{{ project.detailedDescription }}</p>
                    <div class="text-xs text-secondary mt-auto">{{ project.date }}</div>
                  </div>
                  
                  <!-- Technologies -->
                  <div class="w-32 border-l border-main pl-4">
                    <h4 class="font-semibold mb-3 text-sm text-main">Technologies</h4>
                    <div class="space-y-2">
                      <div 
                        v-for="tech in project.technologies" 
                        :key="tech"
                        class="badge text-xs"
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
        <h2 class="text-3xl font-bold mb-8 text-green-600 dark:text-green-400">
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
                <div class="aspect-w-16 aspect-h-9 mb-4 overflow-hidden rounded-lg">
                  <img :src="project.image" :alt="project.name" class="w-full h-48 object-cover">
                </div>
                <h3 class="text-xl font-bold mb-2 text-main">{{ project.name }}</h3>
                <p class="text-secondary text-sm">{{ project.description }}</p>
                <div class="mt-4 text-xs text-secondary">{{ project.date }}</div>
              </div>
              
              <!-- Face arrière -->
              <div class="project-card-back">
                <div class="flex h-full">
                  <div class="flex-1 pr-4">
                    <h3 class="text-xl font-bold mb-4 text-main">{{ project.name }}</h3>
                    <p class="text-secondary text-sm mb-4">{{ project.detailedDescription }}</p>
                    <div class="text-xs text-secondary mt-auto">{{ project.date }}</div>
                  </div>
                  
                  <!-- Technologies -->
                  <div class="w-32 border-l border-main pl-4">
                    <h4 class="font-semibold mb-3 text-sm text-main">Technologies</h4>
                    <div class="space-y-2">
                      <div 
                        v-for="tech in project.technologies" 
                        :key="tech"
                        class="text-xs bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 px-2 py-1 rounded-full"
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
        <h2 class="text-3xl font-bold mb-8 text-purple-600 dark:text-purple-400">
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
                <div class="aspect-w-16 aspect-h-9 mb-4 overflow-hidden rounded-lg">
                  <img :src="project.image" :alt="project.name" class="w-full h-48 object-cover">
                </div>
                <h3 class="text-xl font-bold mb-2 text-main">{{ project.name }}</h3>
                <p class="text-secondary text-sm">{{ project.description }}</p>
                <div class="mt-4 text-xs text-secondary">{{ project.date }}</div>
              </div>
              
              <!-- Face arrière -->
              <div class="project-card-back">
                <div class="flex h-full">
                  <div class="flex-1 pr-4">
                    <h3 class="text-xl font-bold mb-4 text-main">{{ project.name }}</h3>
                    <p class="text-secondary text-sm mb-4">{{ project.detailedDescription }}</p>
                    <div class="text-xs text-secondary mt-auto">{{ project.date }}</div>
                  </div>
                  
                  <!-- Technologies -->
                  <div class="w-32 border-l border-main pl-4">
                    <h4 class="font-semibold mb-3 text-sm text-main">Technologies</h4>
                    <div class="space-y-2">
                      <div 
                        v-for="tech in project.technologies" 
                        :key="tech"
                        class="text-xs bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-200 px-2 py-1 rounded-full"
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
/* Cartes de projet */
.project-card {
  height: 400px;
  cursor: pointer;
  perspective: 1000px;
  transition: all 0.3s ease;
}

.project-card:hover {
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
  padding: 24px;
  border-radius: 12px;
  background-color: rgb(255 255 255);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  border: 1px solid rgb(var(--oak-200));
}

:root.dark .project-card-front,
:root.dark .project-card-back {
  background-color: rgb(var(--dark-surface-500));
  border-color: rgb(var(--dark-surface-600));
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.25), 0 4px 6px -2px rgba(0, 0, 0, 0.1);
}

.project-card-back {
  transform: rotateY(180deg);
  display: flex;
  flex-direction: column;
}

.project-card.active .project-card-front,
.project-card.active .project-card-back {
  padding: 32px;
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
    border-top: 1px solid rgb(var(--oak-300));
  }
  
  :root.dark .project-card.active .project-card-back .w-32 {
    border-top-color: rgb(var(--dark-surface-600));
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

/* Smooth scrolling */
html {
  scroll-behavior: smooth;
}
</style>