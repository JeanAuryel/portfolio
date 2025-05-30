<script setup lang="ts">
import { ref, onMounted } from 'vue';

interface ProjectImage {
  src: string;
  alt: string;
  title?: string;
}

interface E6Project {
  id: number;
  name: string;
  description: string;
  detailedDescription: string;
  technologies: string[];
  images: ProjectImage[];
  technicalDocUrl: string;
  functionalDocUrl: string;
  icon: string;
  mainColor: string;
}

// État pour la image active dans le carrousel
const activeImageIndex = ref<{ [key: number]: number }>({
  1: 0, // Organizheur
  2: 0  // Arka
});

// État pour la carte active (si on veut expand/collapse)
const activeCardId = ref<number | null>(null);

// Animation de chargement
const isLoaded = ref(false);

// Données des projets E6
const projects = ref<E6Project[]>([
  {
    id: 1,
    name: 'Organizheur',
    description: 'Application de gestion et d\'organisation personnelle',
    detailedDescription: 'Organizheur est une application web complète permettant aux utilisateurs de gérer leurs tâches, leurs événements et leur planning de manière efficace. L\'application offre une interface intuitive avec un système de notifications, un calendrier intégré et des fonctionnalités de collaboration pour les équipes. Ce projet a été développé dans le cadre de ma formation et représente un exemple concret de développement full-stack avec une attention particulière portée à l\'UX/UI et à l\'architecture logicielle.',
    technologies: ['Vue.js 3.5', 'TypeScript', 'Tailwind CSS v4', 'MySQL'],
    images: [
      { src: '/images/organizheur/dashboard.png', alt: 'Dashboard principal', title: 'Tableau de bord principal avec vue d\'ensemble des tâches' },
      { src: '/images/organizheur/calendar.png', alt: 'Calendrier', title: 'Calendrier intégré avec gestion des événements' },
      { src: '/images/organizheur/tasks.png', alt: 'Gestion des tâches', title: 'Interface de gestion des tâches avec filtres avancés' },
      { src: '/images/organizheur/notifications.png', alt: 'Notifications', title: 'Système de notifications en temps réel' },
      { src: '/images/organizheur/settings.png', alt: 'Paramètres', title: 'Configuration utilisateur et préférences' }
    ],
    technicalDocUrl: '/documents/Organizheur_Documentation_Technique.pdf',
    functionalDocUrl: '/documents/Organizheur_Documentation_Fonctionnelle.pdf',
    icon: '📋',
    mainColor: 'blue'
  },
  {
    id: 2,
    name: 'Arka Desktop',
    description: 'Plateforme e-learning complète',
    detailedDescription: 'Arka Desktop est une plateforme d\'apprentissage en ligne développée avec une architecture moderne et scalable. Elle propose des cours interactifs, un système de progression personnalisé, des forums de discussion, et un tableau de bord analytics pour les formateurs. L\'application intègre des fonctionnalités avancées comme la vidéoconférence intégrée, un système de certification automatique, et un moteur de recommandation de contenu basé sur l\'IA.',
    technologies: ['kotlin', 'ktorm', 'MySQL'],
    images: [
      { src: '/images/arka/home.png', alt: 'Page d\'accueil', title: 'Page d\'accueil avec recommandations personnalisées' },
      { src: '/images/arka/courses.png', alt: 'Catalogue de cours', title: 'Interface de navigation dans le catalogue de cours' },
      { src: '/images/arka/learning.png', alt: 'Interface d\'apprentissage', title: 'Lecteur vidéo intégré avec prise de notes' },
      { src: '/images/arka/progress.png', alt: 'Suivi des progrès', title: 'Tableaux de bord de progression détaillés' },
      { src: '/images/arka/forum.png', alt: 'Forum communautaire', title: 'Espace d\'échange entre apprenants et formateurs' },
      { src: '/images/arka/analytics.png', alt: 'Analytics', title: 'Tableaux de bord analytics pour les formateurs' }
    ],
    technicalDocUrl: '/documents/Arka_Documentation_Technique.pdf',
    functionalDocUrl: '/documents/Arka_Documentation_Fonctionnelle.pdf',
    icon: '🎓',
    mainColor: 'purple'
  }
]);

// Fonction pour changer d'image dans le carrousel
function changeImage(projectId: number, direction: 'next' | 'prev') {
  const project = projects.value.find(p => p.id === projectId);
  if (!project) return;
  
  const currentIndex = activeImageIndex.value[projectId];
  const maxIndex = project.images.length - 1;
  
  if (direction === 'next') {
    activeImageIndex.value[projectId] = currentIndex >= maxIndex ? 0 : currentIndex + 1;
  } else {
    activeImageIndex.value[projectId] = currentIndex <= 0 ? maxIndex : currentIndex - 1;
  }
}

// Fonction pour aller à une image spécifique
function goToImage(projectId: number, index: number) {
  activeImageIndex.value[projectId] = index;
}

// Ouvrir la documentation
function openDocumentation(url: string) {
  window.open(url, '_blank');
}

// Animation de chargement
onMounted(() => {
  setTimeout(() => {
    isLoaded.value = true;
  }, 100);
});
</script>

<template>
  <main class="flex-grow pt-36 pb-16 relative">
    <div class="container mx-auto px-4">
      <!-- Header -->
      <div 
        class="text-center mb-12 transition-opacity duration-700"
        :class="{ 'opacity-100': isLoaded, 'opacity-0': !isLoaded }"
      >
        <h1 class="text-5xl font-bold mb-6 text-gray-900 dark:text-black">
          Mes Réalisations - E6
        </h1>
        <p class="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
          Détails complets des projets Organizheur et Arka Desktop avec captures d'écran, 
          fonctionnalités détaillées et documentations techniques.
        </p>
      </div>
      
      <!-- Projets -->
      <div class="space-y-16">
        <div 
          v-for="project in projects" 
          :key="project.id"
          class="project-section"
          :class="{ 'opacity-100': isLoaded, 'opacity-0': !isLoaded }"
          :style="{ transitionDelay: `${project.id * 0.2}s` }"
        >
          <!-- Header du projet -->
          <div class="flex items-center justify-between mb-8">
            <div class="flex items-center">
              <span class="text-4xl mr-4">{{ project.icon }}</span>
              <div>
                <h2 class="text-3xl font-bold text-gray-900 dark:text-white">
                  {{ project.name }}
                </h2>
                <p class="text-lg text-gray-600 dark:text-gray-300 mt-1">
                  {{ project.description }}
                </p>
              </div>
            </div>
            
            <!-- Boutons de documentation -->
            <div class="flex flex-col sm:flex-row gap-3">
              <button 
                @click="openDocumentation(project.technicalDocUrl)"
                :class="`flex items-center px-4 py-2 bg-${project.mainColor}-500 text-white rounded-lg hover:bg-${project.mainColor}-600 transition-colors shadow-lg`"
              >
                <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/>
                  <path fill-rule="evenodd" d="M4 5a2 2 0 012-2h1a1 1 0 000 2H6v6a2 2 0 01-2 2H4a1 1 0 00-1 1v3a1 1 0 102 0v-2h12v2a1 1 0 102 0v-3a1 1 0 00-1-1h-.01A2 2 0 0016 11V5h-1a1 1 0 000-2h1a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V5z" clip-rule="evenodd"/>
                </svg>
                Doc. Technique
              </button>
              <button 
                @click="openDocumentation(project.functionalDocUrl)"
                :class="`flex items-center px-4 py-2 bg-${project.mainColor}-500 text-white rounded-lg hover:bg-${project.mainColor}-600 transition-colors shadow-lg`"
              >
                <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 0v12h8V4H6z" clip-rule="evenodd"/>
                </svg>
                Doc. Fonctionnelle
              </button>
            </div>
          </div>
          
          <!-- Contenu du projet -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <!-- Galerie d'images -->
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
              <div class="relative aspect-video">
                <!-- Image principale -->
                <img 
                  :src="project.images[activeImageIndex[project.id]].src" 
                  :alt="project.images[activeImageIndex[project.id]].alt"
                  class="w-full h-full object-cover"
                />
                
                <!-- Titre de l'image -->
                <div v-if="project.images[activeImageIndex[project.id]].title" 
                     class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <p class="text-white text-sm font-medium">
                    {{ project.images[activeImageIndex[project.id]].title }}
                  </p>
                </div>
                
                <!-- Boutons de navigation -->
                <button 
                  @click="changeImage(project.id, 'prev')"
                  class="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                >
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
                  </svg>
                </button>
                <button 
                  @click="changeImage(project.id, 'next')"
                  class="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                >
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                  </svg>
                </button>
                
                <!-- Compteur -->
                <div class="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                  {{ activeImageIndex[project.id] + 1 }} / {{ project.images.length }}
                </div>
              </div>
              
              <!-- Miniatures -->
              <div class="p-4 bg-gray-50 dark:bg-gray-700">
                <div class="flex gap-2 overflow-x-auto">
                  <button
                    v-for="(image, index) in project.images"
                    :key="index"
                    @click="goToImage(project.id, index)"
                    :class="`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-colors ${
                      activeImageIndex[project.id] === index 
                        ? `border-${project.mainColor}-500` 
                        : 'border-gray-200 dark:border-gray-600'
                    }`"
                  >
                    <img :src="image.src" :alt="image.alt" class="w-full h-full object-cover" />
                  </button>
                </div>
              </div>
            </div>
            
            <!-- Description et technologies -->
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
              <h3 class="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                Description détaillée
              </h3>
              <p class="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                {{ project.detailedDescription }}
              </p>
              
              <!-- Technologies utilisées -->
              <div>
                <h4 class="text-lg font-semibold mb-3 text-gray-900 dark:text-white">
                  Technologies utilisées
                </h4>
                <div class="flex flex-wrap gap-2">
                  <span
                    v-for="tech in project.technologies"
                    :key="tech"
                    :class="`inline-block px-3 py-1 rounded-full text-sm font-medium bg-${project.mainColor}-100 dark:bg-${project.mainColor}-900 text-${project.mainColor}-800 dark:text-${project.mainColor}-200`"
                  >
                    {{ tech }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
/* Transitions et animations */
.project-section {
  transition: opacity 0.7s ease-in-out;
}

/* Carrousel personnalisé */
.aspect-video {
  aspect-ratio: 16 / 9;
}

/* Responsive adjustments */
@media (max-width: 1024px) {
  .grid {
    grid-template-columns: 1fr;
  }
}

/* Animation pour les éléments qui apparaissent */
.project-section {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.7s ease-in-out, transform 0.7s ease-in-out;
}

.project-section.opacity-100 {
  opacity: 1;
  transform: translateY(0);
}

/* Smooth scrolling */
html {
  scroll-behavior: smooth;
}
</style>