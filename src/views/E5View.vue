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
    description: 'Application de gestion et d\'organisation personnelle',
    detailedDescription: 'Organizheur est une application web complète permettant aux utilisateurs de gérer leurs tâches, leurs événements et leur planning de manière efficace. L\'application offre une interface intuitive avec un système de notifications, un calendrier intégré et des fonctionnalités de collaboration pour les équipes.',
    technologies: ['Vue.js 3.5', 'TypeScript', 'Tailwind CSS', 'PHP', 'MySQL'],
    image: 'https://picsum.photos/400/300?random=1',
    date: 'Janvier 2024'
  },
  {
    id: 2,
    name: 'Deliver\'easy',
    category: 'formation',
    description: 'Application de livraison à domicile',
    detailedDescription: 'Deliver\'easy est une plateforme de livraison qui connecte les restaurants locaux avec les clients. L\'application propose un système de commande intuitive, un suivi en temps réel, et une interface d\'administration complète pour les restaurateurs.',
    technologies: ['Vue.js 3', 'Node.js', 'Express', 'MongoDB', 'Socket.io'],
    image: 'https://picsum.photos/400/300?random=2',
    date: 'Mars 2024'
  },
  {
    id: 3,
    name: 'NurseCare',
    category: 'formation',
    description: 'Application de gestion pour infirmières',
    detailedDescription: 'NurseCare est une solution digitale dédiée aux infirmières libérales pour la gestion de leur patientèle. Elle inclut un planning intelligent, un système de dossier patient sécurisé, et des outils de communication avec les médecins.',
    technologies: ['React', 'TypeScript', 'Express', 'PostgreSQL', 'Docker'],
    image: 'https://picsum.photos/400/300?random=3',
    date: 'Mai 2024'
  },
  {
    id: 4,
    name: 'CaristSI',
    category: 'formation',
    description: 'Système d\'information web pour caristes',
    detailedDescription: 'CaristSI est un système d\'information complet pour la gestion d\'entrepôts et de stocks. Il permet aux caristes de gérer efficacement les mouvements de marchandises, optimiser les espaces de stockage et générer des rapports détaillés.',
    technologies: ['Laravel', 'Vue.js', 'MySQL', 'Bootstrap', 'Chart.js'],
    image: 'https://picsum.photos/400/300?random=4',
    date: 'Septembre 2023'
  },
  {
    id: 5,
    name: 'CaristSI Mobile',
    category: 'formation',
    description: 'Version mobile de CaristSI',
    detailedDescription: 'Application mobile compagnon de CaristSI, permettant aux caristes de scanner les codes-barres, mettre à jour les stocks en temps réel, et recevoir des notifications push pour les nouvelles tâches.',
    technologies: ['React Native', 'Expo', 'Redux', 'Firebase'],
    image: 'https://picsum.photos/400/300?random=5',
    date: 'Octobre 2023'
  },
  {
    id: 6,
    name: 'Arka (Formation)',
    category: 'formation',
    description: 'Plateforme e-learning',
    detailedDescription: 'Arka est une plateforme d\'apprentissage en ligne développée dans le cadre de ma formation. Elle propose des cours interactifs, des quiz, un système de progression et des certificats de completion.',
    technologies: ['Vue.js 3', 'Nuxt.js', 'Supabase', 'Tailwind CSS'],
    image: 'https://picsum.photos/400/300?random=6',
    date: 'Décembre 2023'
  },
  {
    id: 7,
    name: 'Arka Mobile (Formation)',
    category: 'formation',
    description: 'Application mobile pour Arka',
    detailedDescription: 'Version mobile d\'Arka permettant l\'apprentissage sur tous supports. Includes mode hors-ligne, synchronisation automatique, et interface adaptative.',
    technologies: ['Flutter', 'Dart', 'SQLite', 'Firebase'],
    image: 'https://picsum.photos/400/300?random=7',
    date: 'Janvier 2024'
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
    date: 'Février 2024 - Mai 2024'
  },
  // Projets personnels
  {
    id: 9,
    name: 'Arka (Personnel)',
    category: 'personnel',
    description: 'Plateforme e-learning personnelle',
    detailedDescription: 'Version personnelle et améliorée d\'Arka, avec des fonctionnalités avancées comme l\'intelligence artificielle pour la recommandation de contenu, un système de mentoring, et une marketplace de cours.',
    technologies: ['Vue.js 3.5', 'Tailwind CSS 4', 'Supabase', 'OpenAI API'],
    image: 'https://picsum.photos/400/300?random=9',
    date: 'Mars 2024 - En cours'
  },
  {
    id: 10,
    name: 'Arka Mobile (Personnel)',
    category: 'personnel',
    description: 'App mobile Arka améliorée',
    detailedDescription: 'Version mobile avancée d\'Arka avec réalité augmentée pour l\'apprentissage immersif, reconnaissance vocale pour les commandes, et synchronisation multi-appareils.',
    technologies: ['Flutter', 'Dart', 'ARCore', 'Speech Recognition', 'Firebase'],
    image: 'https://picsum.photos/400/300?random=10',
    date: 'Avril 2024 - En cours'
  },
  {
    id: 11,
    name: 'KerHope',
    category: 'personnel',
    description: 'Application d\'aide humanitaire',
    detailedDescription: 'KerHope est une plateforme solidaire connectant les personnes en difficulté avec des bénévoles locaux. Elle facilite l\'aide alimentaire, l\'accompagnement social, et la mise en réseau communautaire.',
    technologies: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Stripe', 'Google Maps API'],
    image: 'https://picsum.photos/400/300?random=11',
    date: 'Juin 2024 - En cours'
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
  <main class="flex-grow pt-20 pb-16 relative">
    <!-- Background blur overlay when a card is active -->
    <div 
      v-if="activeCardId !== null"
      class="fixed inset-0 bg-black/20 backdrop-blur-md z-30"
      @click="activeCardId = null"
    ></div>
    
    <div class="container mx-auto px-4">
      <!-- Header avec bouton Excel -->
      <div class="flex justify-between items-center mb-12">
        <div>
          <h1 class="text-5xl font-bold mb-4">Mes Réalisations - E5</h1>
          <p class="text-xl text-gray-600 dark:text-gray-300">
            Découvrez les projets que j'ai réalisés en formation, en entreprise et personnellement
          </p>
        </div>
        
        <!-- Bouton Excel -->
        <div class="flex flex-col sm:flex-row gap-3">
          <button 
            @click="openExcelFile"
            class="flex items-center px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors shadow-lg"
          >
            <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 2V5h-4v10h4V5zM4 5h4v10H4V5z"/>
            </svg>
            Ouvrir Excel
          </button>
          <button 
            @click="downloadExcelFile"
            class="flex items-center px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors shadow-lg"
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
        <h2 class="text-3xl font-bold mb-8 text-primary-600 dark:text-primary-400">
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
                <h3 class="text-xl font-bold mb-2">{{ project.name }}</h3>
                <p class="text-gray-600 dark:text-gray-300 text-sm">{{ project.description }}</p>
                <div class="mt-4 text-xs text-gray-500 dark:text-gray-400">{{ project.date }}</div>
              </div>
              
              <!-- Face arrière -->
              <div class="project-card-back">
                <div class="flex h-full">
                  <div class="flex-1 pr-4">
                    <h3 class="text-xl font-bold mb-4">{{ project.name }}</h3>
                    <p class="text-gray-600 dark:text-gray-300 text-sm mb-4">{{ project.detailedDescription }}</p>
                    <div class="text-xs text-gray-500 dark:text-gray-400 mt-auto">{{ project.date }}</div>
                  </div>
                  
                  <!-- Technologies -->
                  <div class="w-32 border-l border-gray-200 dark:border-gray-700 pl-4">
                    <h4 class="font-semibold mb-3 text-sm">Technologies</h4>
                    <div class="space-y-2">
                      <div 
                        v-for="tech in project.technologies" 
                        :key="tech"
                        class="text-xs bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 px-2 py-1 rounded-full"
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
                <h3 class="text-xl font-bold mb-2">{{ project.name }}</h3>
                <p class="text-gray-600 dark:text-gray-300 text-sm">{{ project.description }}</p>
                <div class="mt-4 text-xs text-gray-500 dark:text-gray-400">{{ project.date }}</div>
              </div>
              
              <!-- Face arrière -->
              <div class="project-card-back">
                <div class="flex h-full">
                  <div class="flex-1 pr-4">
                    <h3 class="text-xl font-bold mb-4">{{ project.name }}</h3>
                    <p class="text-gray-600 dark:text-gray-300 text-sm mb-4">{{ project.detailedDescription }}</p>
                    <div class="text-xs text-gray-500 dark:text-gray-400 mt-auto">{{ project.date }}</div>
                  </div>
                  
                  <!-- Technologies -->
                  <div class="w-32 border-l border-gray-200 dark:border-gray-700 pl-4">
                    <h4 class="font-semibold mb-3 text-sm">Technologies</h4>
                    <div class="space-y-2">
                      <div 
                        v-for="tech in project.technologies" 
                        :key="tech"
                        class="text-xs bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded-full"
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
                <h3 class="text-xl font-bold mb-2">{{ project.name }}</h3>
                <p class="text-gray-600 dark:text-gray-300 text-sm">{{ project.description }}</p>
                <div class="mt-4 text-xs text-gray-500 dark:text-gray-400">{{ project.date }}</div>
              </div>
              
              <!-- Face arrière -->
              <div class="project-card-back">
                <div class="flex h-full">
                  <div class="flex-1 pr-4">
                    <h3 class="text-xl font-bold mb-4">{{ project.name }}</h3>
                    <p class="text-gray-600 dark:text-gray-300 text-sm mb-4">{{ project.detailedDescription }}</p>
                    <div class="text-xs text-gray-500 dark:text-gray-400 mt-auto">{{ project.date }}</div>
                  </div>
                  
                  <!-- Technologies -->
                  <div class="w-32 border-l border-gray-200 dark:border-gray-700 pl-4">
                    <h4 class="font-semibold mb-3 text-sm">Technologies</h4>
                    <div class="space-y-2">
                      <div 
                        v-for="tech in project.technologies" 
                        :key="tech"
                        class="text-xs bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-2 py-1 rounded-full"
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
  background-color: oklch(var(--color-white));
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

:root.dark .project-card-front,
:root.dark .project-card-back {
  background-color: oklch(var(--color-gray-800));
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
    border-top: 1px solid oklch(var(--color-gray-200));
  }
  
  :root.dark .project-card.active .project-card-back .w-32 {
    border-top-color: oklch(var(--color-gray-700));
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

