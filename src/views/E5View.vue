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
    date: 'Octobre à Novembre 2024'
  },
  {
    id: 2,
    name: 'Deliver\'easy',
    category: 'formation',
    description: 'Application de livraison à domicile',
    detailedDescription: 'Deliver\'easy est une plateforme de livraison qui connecte les restaurants locaux avec les clients. L\'application propose un système de commande intuitive, un suivi en temps réel, et une interface d\'administration complète pour les restaurateurs.',
    technologies: ['Vue.js 3', 'Node.js', 'Express', 'MongoDB', 'Socket.io'],
    image: 'https://picsum.photos/400/300?random=2',
    date: 'Novembre à Décembre 2024'
  },
  {
    id: 3,
    name: 'NurseCare',
    category: 'formation',
    description: 'Application de gestion pour infirmières',
    detailedDescription: 'NurseCare est une solution digitale dédiée aux infirmières libérales pour la gestion de leur patientèle. Elle inclut un planning intelligent, un système de dossier patient sécurisé, et des outils de communication avec les médecins.',
    technologies: ['React', 'TypeScript', 'Express', 'PostgreSQL', 'Docker'],
    image: 'https://picsum.photos/400/300?random=3',
    date: 'Décembre 2024 à Janvier 2025'
  },
  {
    id: 4,
    name: 'CaristSI',
    category: 'formation',
    description: 'Système d\'information web pour caristes',
    detailedDescription: 'CaristSI est un système d\'information complet pour la gestion d\'entrepôts et de stocks. Il permet aux caristes de gérer efficacement les mouvements de marchandises, optimiser les espaces de stockage et générer des rapports détaillés.',
    technologies: ['Laravel', 'Vue.js', 'MySQL', 'Bootstrap', 'Chart.js'],
    image: 'https://picsum.photos/400/300?random=4',
    date: 'Février à Mars 2025'
  },
  {
    id: 5,
    name: 'CaristSI Mobile',
    category: 'formation',
    description: 'Version mobile de CaristSI',
    detailedDescription: 'Application mobile compagnon de CaristSI, permettant aux caristes de scanner les codes-barres, mettre à jour les stocks en temps réel, et recevoir des notifications push pour les nouvelles tâches.',
    technologies: ['React Native', 'Expo', 'Redux', 'Firebase'],
    image: 'https://picsum.photos/400/300?random=5',
    date: 'Mars à Avril 2023'
  },
  {
    id: 6,
    name: 'Arka (Formation)',
    category: 'formation',
    description: 'Plateforme e-learning',
    detailedDescription: 'Arka est une plateforme d\'apprentissage en ligne développée dans le cadre de ma formation. Elle propose des cours interactifs, des quiz, un système de progression et des certificats de completion.',
    technologies: ['Vue.js 3', 'Nuxt.js', 'Supabase', 'Tailwind CSS'],
    image: 'https://picsum.photos/400/300?random=6',
    date: 'Mai 2025'
  },
  {
    id: 7,
    name: 'Arka Mobile (Formation)',
    category: 'formation',
    description: 'Application mobile pour Arka',
    detailedDescription: 'Version mobile d\'Arka permettant l\'apprentissage sur tous supports. Includes mode hors-ligne, synchronisation automatique, et interface adaptative.',
    technologies: ['Flutter', 'Dart', 'SQLite', 'Firebase'],
    image: 'https://picsum.photos/400/300?random=7',
    date: 'Mai à Juin 2025'
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

// Ouvrir le fichier PDF
function openPdfFile() {
  window.open('/src/assets/documents/E4- Tableau de synthèse - Epreuve E5 - BTS SIO 2025.pdf', '_blank');
}

// Télécharger le fichier PDF
function downloadPdfFile() {
  const link = document.createElement('a');
  link.href = '/documents/E4- Tableau de synthèse - Epreuve E5 - BTS SIO 2025.pdf';
  link.download = 'Tableau de synthèse - Epreuve E5.pdf';
  link.click();
}
</script>

<template>
  <main class="flex-grow pt-32 pb-16 relative bg-adaptive-primary">
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
          <h1 class="text-5xl font-bold mb-4 text-adaptive">Mes Réalisations - E5</h1>
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
                <div class="aspect-w-16 aspect-h-9 mb-4 overflow-hidden rounded-lg">
                  <img :src="project.image" :alt="project.name" class="w-full h-48 object-cover">
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
                <div class="aspect-w-16 aspect-h-9 mb-4 overflow-hidden rounded-lg">
                  <img :src="project.image" :alt="project.name" class="w-full h-48 object-cover">
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
                <div class="aspect-w-16 aspect-h-9 mb-4 overflow-hidden rounded-lg">
                  <img :src="project.image" :alt="project.name" class="w-full h-48 object-cover">
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
  height: 400px;
  cursor: pointer;
  perspective: 1000px;
  transition: all 0.3s ease;
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