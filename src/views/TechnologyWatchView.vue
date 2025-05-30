<script setup lang="ts">
import { ref, onMounted } from 'vue';

interface TechTool {
  id: number;
  name: string;
  type: 'newsletter' | 'extension' | 'site-officiel' | 'ide';
  description: string;
  detailedDescription: string;
  url: string;
  image: string;
  icon: string;
  lastUpdate: string;
  features: string[];
}

// État pour la carte active
const activeCardId = ref<number | null>(null);
const isLoaded = ref(false);

// Données des outils de veille technologique
const techTools = ref<TechTool[]>([
  {
    id: 1,
    name: 'TLDR Newsletter',
    type: 'newsletter',
    description: 'Newsletter quotidienne avec les actualités tech essentielles',
    detailedDescription: 'TLDR Newsletter est ma source principale d\'information technologique. Chaque matin, je reçois par email un condensé des actualités les plus importantes du monde tech, startup et développement. Cette newsletter me permet de rester informé des dernières tendances, lancements de produits, et innovations technologiques sans avoir à parcourir de multiples sources.',
    url: 'https://tldr.tech/',
    image: '/assets/tech-watch/tldr-newsletter.jpg',
    icon: '📧',
    lastUpdate: 'Quotidien',
    features: ['Actualités tech condensées', 'Résumés de startups', 'Innovations récentes', 'Tendances du marché']
  },
  {
    id: 2,
    name: 'daily.dev',
    type: 'extension',
    description: 'Extension navigateur pour découvrir du contenu dev',
    detailedDescription: 'daily.dev transforme mon nouvel onglet en un hub personnalisé de contenu technique. Cette extension me propose quotidiennement des articles techniques, des tutoriels, et des actualités spécialement sélectionnés selon mes intérêts. J\'y découvre régulièrement de nouveaux frameworks, des bonnes pratiques, et des retours d\'expérience de développeurs du monde entier.',
    url: 'https://daily.dev/',
    image: '/assets/tech-watch/daily-dev.jpg',
    icon: '🔧',
    lastUpdate: 'En temps réel',
    features: ['Articles techniques personnalisés', 'Découverte de nouvelles technologies', 'Communauté de développeurs', 'Bookmarks et partage']
  },
  {
    id: 3,
    name: 'Vue.js Official',
    type: 'site-officiel',
    description: 'Documentation et actualités officielles de Vue.js',
    detailedDescription: 'Le site officiel de Vue.js est ma référence principale pour tout ce qui concerne ce framework. Je consulte régulièrement les mises à jour de la documentation, les guides de migration pour les nouvelles versions, et les annonces d\'ecosystem. C\'est essentiellement ici que je découvre les nouvelles fonctionnalités, les changements d\'API, et les bonnes pratiques recommandées par l\'équipe core.',
    url: 'https://vuejs.org/',
    image: '/assets/tech-watch/vuejs-official.jpg',
    icon: '<svg viewBox="0 0 24 24" class="w-6 h-6 text-green-500"><path fill="currentColor" d="M2 3h3l2 3 2-3h3l-5 8.5L2 3zm7 0h3l2 3 2-3h3l-5 8.5L9 3z"/></svg>',
    lastUpdate: 'Hebdomadaire',
    features: ['Documentation officielle', 'Guides de migration', 'Nouveautés API', 'Ecosystem updates']
  },
  {
    id: 4,
    name: 'Tailwind CSS',
    type: 'site-officiel',
    description: 'Documentation et nouvelles fonctionnalités de Tailwind',
    detailedDescription: 'Le site officiel de Tailwind CSS est ma source principale pour suivre l\'évolution de ce framework CSS utility-first. Je consulte régulièrement le blog pour découvrir les nouvelles features, les optimisations de performance, et les outils companion. Les playground interactifs m\'aident également à tester rapidement de nouvelles approches styling.',
    url: 'https://tailwindcss.com/',
    image: '/assets/tech-watch/tailwindcss.jpg',
    icon: '<svg viewBox="0 0 24 24" class="w-6 h-6 text-cyan-500"><path fill="currentColor" d="M12 2L3 6v12l9 4 9-4V6l-9-4zm6.93 6L12 15.5 5.07 8H9l3 1.5L15 8h3.93z"/></svg>',
    lastUpdate: 'Mensuel',
    features: ['Nouvelles utilities', 'Playground interactif', 'Optimisations V4', 'Plugins community']
  },
  {
    id: 5,
    name: 'IntelliJ IDEA',
    type: 'ide',
    description: 'IDE principal et ses mises à jour',
    detailedDescription: 'IntelliJ IDEA est mon environnement de développement principal. Je suis attentivement les mises à jour pour découvrir les nouvelles fonctionnalités, les améliorations de performance, et les nouveaux plugins disponibles. Les releases notes m\'informent des nouvelles intégrations, des améliorations du debugger, et des outils de refactoring qui peuvent considérablement améliorer ma productivité.',
    url: 'https://www.jetbrains.com/idea/',
    image: '/assets/tech-watch/intellij.jpg',
    icon: '<svg viewBox="0 0 24 24" class="w-6 h-6 text-blue-600"><path fill="currentColor" d="M21 12l-7-7v4H3v6h11v4l7-7zM10 9H6v6h4V9z"/></svg>',
    lastUpdate: 'Trimestriel',
    features: ['Nouvelles fonctionnalités IDE', 'Plugins récents', 'Améliorations debugger', 'Intégrations modernes']
  }
]);

// Types de badges colorés selon la catégorie
const getTypeColor = (type: string) => {
  const colors = {
    'newsletter': 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
    'extension': 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
    'site-officiel': 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
    'ide': 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200'
  };
  return colors[type as keyof typeof colors] || 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
};

// Activer/désactiver une carte
function toggleCard(id: number) {
  if (activeCardId.value === id) {
    activeCardId.value = null;
  } else {
    activeCardId.value = id;
  }
}

// Ouvrir l'outil dans une nouvelle fenêtre
function openTool(url: string) {
  window.open(url, '_blank');
}

// Animation au chargement
onMounted(() => {
  setTimeout(() => {
    isLoaded.value = true;
  }, 100);
});
</script>

<template>
  <main class="flex-grow pt-36 pb-16 relative">
    <!-- Background blur overlay when a card is active -->
    <div 
      v-if="activeCardId !== null"
      class="fixed inset-0 bg-black/20 backdrop-blur-md z-30"
      @click="activeCardId = null"
    ></div>
    
    <div class="container mx-auto px-4">
      <!-- Header -->
      <div 
        class="text-center mb-12 transition-opacity duration-700"
        :class="{ 'opacity-100': isLoaded, 'opacity-0': !isLoaded }"
      >
        <h1 class="text-5xl font-bold mb-6 text-gray-900 dark:text-black">Ma Veille Technologique</h1>
        <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Découvrez les outils et ressources que j'utilise quotidiennement pour rester à la pointe 
          des dernières tendances technologiques et des innovations dans le développement web.
        </p>
      </div>
      
      <!-- Méthodologie de veille -->
      <div 
        class="mb-16 transition-opacity duration-700 delay-200"
        :class="{ 'opacity-100': isLoaded, 'opacity-0': !isLoaded }"
      >
        <div class="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg p-8">
          <h2 class="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Ma méthode de veille</h2>
          <p class="text-gray-700 dark:text-gray-300 mb-4">
            Ma veille technologique s'articule autour de plusieurs axes complémentaires :
          </p>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="flex items-start">
              <span class="text-2xl mr-3">📧</span>
              <div class="text-gray-700 dark:text-gray-300">
                <strong>Actualités générales :</strong> Newsletter quotidienne pour les tendances du marché en veille push
              </div>
            </div>
            <div class="flex items-start">
              <span class="text-2xl mr-3">🔧</span>
              <div class="text-gray-700 dark:text-gray-300">
                <strong>Contenu technique :</strong> Articles et tutoriels de la communauté dev en veille pull
              </div>
            </div>
            <div class="flex items-start">
              <span class="text-2xl mr-3">📚</span>
              <div class="text-gray-700 dark:text-gray-300">
                <strong>Documentation officielle :</strong> Suivi des évolutions de mes outils favoris en veille pull
              </div>
            </div>
            <div class="flex items-start">
              <span class="text-2xl mr-3">⚡</span>
              <div class="text-gray-700 dark:text-gray-300">
                <strong>Outils quotidiens :</strong> Intégration dans mon workflow de développement en veille pull
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Grille des outils -->
      <div 
        class="space-y-8"
        :class="{ 'opacity-100': isLoaded, 'opacity-0': !isLoaded }"
        style="transition: opacity 0.7s ease-in-out 0.4s;"
      >
        <div 
          v-for="tool in techTools" 
          :key="tool.id"
          @click="toggleCard(tool.id)"
          class="tech-tool-card"
          :class="{ 'active': activeCardId === tool.id }"
        >
          <div class="tech-tool-content">
            <!-- Partie gauche - Description -->
            <div class="description-section">
              <div class="flex items-center mb-4">
                <span class="text-3xl mr-3" v-html="tool.icon"></span>
                <div>
                  <h3 class="text-2xl font-bold text-gray-900 dark:text-white">{{ tool.name }}</h3>
                  <span 
                    class="inline-block px-3 py-1 rounded-full text-sm font-medium"
                    :class="getTypeColor(tool.type)"
                  >
                    {{ tool.type.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase()) }}
                  </span>
                </div>
              </div>
              
              <!-- Description complète affichée uniquement si la carte est active -->
              <p 
                v-if="activeCardId === tool.id" 
                class="text-gray-700 dark:text-gray-300 leading-relaxed mb-6"
              >
                {{ tool.detailedDescription }}
              </p>
              <p 
                v-else 
                class="text-gray-600 dark:text-gray-400 leading-relaxed mb-6"
              >
                {{ tool.description }}
              </p>
              
              <!-- Fonctionnalités -->
              <div v-if="activeCardId === tool.id">
                <h4 class="font-semibold mb-3 text-gray-900 dark:text-white">Fonctionnalités clés :</h4>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <div 
                    v-for="feature in tool.features" 
                    :key="feature"
                    class="flex items-center text-sm text-gray-700 dark:text-gray-300"
                  >
                    <span class="text-green-500 mr-2">✓</span>
                    {{ feature }}
                  </div>
                </div>
              </div>
              
              <!-- Fréquence de consultation -->
              <div class="mt-4 text-sm text-gray-500 dark:text-gray-400">
                <span class="font-medium">Fréquence :</span> {{ tool.lastUpdate }}
              </div>
            </div>
            
            <!-- Partie droite - Image et lien -->
            <div class="image-section">
              <div class="image-container">
                <img 
                  :src="tool.image" 
                  :alt="tool.name" 
                  class="w-full h-full object-cover rounded-lg"
                />
                <div class="image-overlay">
                  <button 
                    @click.stop="openTool(tool.url)"
                    class="visit-button"
                  >
                    <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                    </svg>
                    Visiter
                  </button>
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
/* Configuration du mode sombre pour Tailwind CSS 4 */
@media (prefers-color-scheme: dark) {
  :root {
    color-scheme: dark;
  }
}

/* Cartes des outils de veille */
.tech-tool-card {
  background-color: oklch(var(--color-white));
  border-radius: 16px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s ease;
  transform-origin: center;
}

:root.dark .tech-tool-card {
  background-color: oklch(var(--color-gray-800));
}

.tech-tool-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px -3px rgba(0, 0, 0, 0.15);
}

.tech-tool-card.active {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(1.05);
  z-index: 40;
  width: 90vw;
  max-width: 900px;
  height: auto;
  max-height: 85vh;
  overflow-y: auto;
}

.tech-tool-content {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 2rem;
}

@media (min-width: 1024px) {
  .tech-tool-content {
    flex-direction: row;
  }
}

.tech-tool-card.active .tech-tool-content {
  padding: 2.5rem;
}

.description-section {
  flex: 1;
  margin-bottom: 1.5rem;
}

@media (min-width: 1024px) {
  .description-section {
    padding-right: 2rem;
    margin-bottom: 0;
  }
}

.image-section {
  flex: 0 0 400px;
  width: 100%;
}

@media (min-width: 1024px) {
  .image-section {
    width: 20rem;
  }
}

.image-container {
  position: relative;
  height: 250px;
  border-radius: 12px;
  overflow: hidden;
  group: true;
}

@media (min-width: 1024px) {
  .image-container {
    height: 20rem;
  }
}

.image-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, transparent 60%);
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding: 1.5rem;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.image-container:hover .image-overlay {
  opacity: 1;
}

.visit-button {
  display: flex;
  align-items: center;
  background: oklch(var(--color-white));
  color: oklch(var(--color-gray-800));
  padding: 0.75rem 1.5rem;
  border-radius: 12px;
  font-weight: 600;
  transition: all 0.2s ease;
  transform: translateY(20px);
}

.image-container:hover .visit-button {
  transform: translateY(0);
}

.visit-button:hover {
  transform: translateY(0) scale(1.05);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

/* Responsive design */
@media (max-width: 1024px) {
  .tech-tool-content {
    flex-direction: column;
  }
  
  .description-section {
    padding-right: 0;
    margin-bottom: 1.5rem;
  }
  
  .image-section {
    flex: none;
    width: 100%;
  }
  
  .tech-tool-card.active {
    width: 95vw;
    transform: translate(-50%, -50%) scale(1);
  }
}

/* Animation pour l'apparition des fonctionnalités */
.tech-tool-card.active .description-section > div {
  animation: fadeInUp 0.5s ease forwards;
}

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
</style>