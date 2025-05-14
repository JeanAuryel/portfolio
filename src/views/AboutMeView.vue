<script setup lang="ts">
import { ref, onMounted } from 'vue';

// Animation pour l'apparition progressive des sections
const isVisible = ref({
  title: false,
  section1: false,
  section2: false,
  section3: false,
  stats: false,
  skills: false
});

const stats = ref([
  { label: 'Années d\'expérience', value: '2+', icon: '⏱️' },
  { label: 'Projets réalisés', value: '9+', icon: '🚀' },
  { label: 'Technologies maîtrisées', value: '10+', icon: '💻' },
  { label: 'Formation en BTS SIO SLAM', value: 'ESICAD', icon: '🎓' }
]);

onMounted(() => {
  // Animation séquentielle des sections
  const delays = [100, 300, 500, 700, 900, 1100];
  const sections = ['title', 'section1', 'section2', 'section3', 'stats', 'skills'];
  
  sections.forEach((section, index) => {
    setTimeout(() => {
      isVisible.value[section] = true;
    }, delays[index]);
  });
});
</script>

<template>
  <main class="flex-grow pt-20 pb-12 bg-white dark:bg-gray-900">
    <!-- Titre avec effet de gradient adaptatif -->
    <div 
      class="container mx-auto text-center mb-16 transition-all duration-700 transform"
      :class="{ 'opacity-100 translate-y-0': isVisible.title, 'opacity-0 translate-y-4': !isVisible.title }"
    >
      <h1 class="text-5xl font-bold mb-4">
        <span class="text-gray-900 dark:text-white">
          À Propos de Moi
        </span>
      </h1>
      <div class="w-20 h-1 bg-gray-900 dark:bg-primary-500 mx-auto rounded-full"></div>
    </div>
    
    <!-- Première section avec icône décorative -->
    <div 
      class="container mx-auto mb-16 px-4"
      :class="{ 'opacity-100': isVisible.section1, 'opacity-0': !isVisible.section1 }"
      style="transition: opacity 0.7s ease-in-out"
    >
      <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 relative overflow-hidden border border-gray-100 dark:border-gray-700">
        <!-- Décoration géométrique -->
        <div class="absolute top-0 right-0 w-32 h-32 transform rotate-45 translate-x-16 -translate-y-16">
          <div class="w-full h-full bg-gray-100 dark:bg-primary-500/10 rounded-lg"></div>
        </div>
        
        <div class="flex items-start">
          <div class="w-16 h-16 bg-gray-900 dark:bg-primary-500 rounded-xl flex items-center justify-center text-white text-2xl mr-6 shadow-lg">
            👋
          </div>
          <div class="flex-1">
            <h2 class="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Bonjour !</h2>
            <p class="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Je suis <span class="font-semibold text-gray-900 dark:text-primary-400">Jean-Auryel Akinotcho</span>, 
              alias <span class="font-semibold text-gray-900 dark:text-primary-400">JA</span>. 
              Développeur web passionné, je crée des expériences numériques modernes et performances pour vous accompagner dans votre transformation digitale.
            </p>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Deuxième section avec timeline -->
    <div 
      class="container mx-auto mb-16 px-4"
      :class="{ 'opacity-100': isVisible.section2, 'opacity-0': !isVisible.section2 }"
      style="transition: opacity 0.7s ease-in-out"
    >
      <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 relative border border-gray-100 dark:border-gray-700">
        <!-- Timeline verticale -->
        <div class="absolute left-0 top-0 w-1 h-full bg-gray-900 dark:bg-primary-500 ml-8"></div>
        
        <div class="flex items-start">
          <div class="w-16 h-16 bg-gray-900 dark:bg-primary-500 rounded-xl flex items-center justify-center text-white text-2xl mr-6 shadow-lg relative z-10">
            🔄
          </div>
          <div class="flex-1">
            <h2 class="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Mon Parcours de Reconversion</h2>
            <p class="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
              Diplômé en industrie agroalimentaire, j'ai travaillé pendant <span class="font-semibold text-gray-900 dark:text-primary-400">7 ans</span> 
              dans ce secteur. N'ayant pas trouvé ma voie dans cette branche, j'ai pris une décision qui a changé ma vie : 
              me reconvertir dans <span class="font-semibold text-gray-900 dark:text-primary-400">l'informatique</span>, 
              un secteur qui me passionne énormément.
            </p>
            <div class="flex flex-wrap gap-2 mt-4">
              <span class="px-3 py-1 bg-gray-100 dark:bg-green-900/20 text-gray-700 dark:text-green-300 rounded-full text-sm border border-gray-200 dark:border-green-800">
                Industrie Agroalimentaire
              </span>
              <span class="px-3 py-1 bg-gray-100 dark:bg-primary-900/20 text-gray-700 dark:text-primary-300 rounded-full text-sm border border-gray-200 dark:border-primary-800">
                7 ans d'expérience
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Troisième section avec citation -->
    <div 
      class="container mx-auto mb-16 px-4"
      :class="{ 'opacity-100': isVisible.section3, 'opacity-0': !isVisible.section3 }"
      style="transition: opacity 0.7s ease-in-out"
    >
      <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 relative overflow-hidden border border-gray-100 dark:border-gray-700">
        <!-- Quote décorative -->
        <div class="absolute top-4 left-4 text-6xl text-gray-200 dark:text-gray-700 opacity-50">"</div>
        
        <div class="flex items-start">
          <div class="w-16 h-16 bg-gray-900 dark:bg-primary-500 rounded-xl flex items-center justify-center text-white text-2xl mr-6 shadow-lg">
            🎯
          </div>
          <div class="flex-1">
            <h2 class="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Ma Formation à l'ESICAD</h2>
            <p class="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
              C'est au sein de l'ESICAD de Toulouse que j'ai pu entamer ce nouveau départ. 
              Au cours de ma formation, j'ai acquis de nombreuses compétences qui m'ont permis de m'orienter 
              vers l'option <span class="font-semibold text-gray-900 dark:text-primary-400">SLAM</span> 
              (Solutions Logicielles et Applications Métiers) qui me passionne profondément.
            </p>
            <blockquote class="border-l-4 border-gray-900 dark:border-primary-500 pl-4 italic text-gray-700 dark:text-gray-300">
              "L'informatique, c'est une branche où on ne cesse d'apprendre, et c'est exactement ce qui me passionne !"
            </blockquote>

          </div>
        </div>
      </div>
    </div>
    
    <!-- Vision d'avenir -->
    <div 
      class="container mx-auto mb-16 px-4"
      :class="{ 'opacity-100': isVisible.section3, 'opacity-0': !isVisible.section3 }"
      style="transition: opacity 0.7s ease-in-out"
    >
      <div class="bg-gray-900 dark:bg-gradient-to-r dark:from-primary-600 dark:to-primary-700 rounded-2xl shadow-lg p-8 text-white relative overflow-hidden">
        <!-- Décoration abstraite -->
        <div class="absolute top-0 right-0 w-64 h-64 opacity-10">
          <svg viewBox="0 0 200 200" class="w-full h-full">
            <path d="M 100 0 L 200 100 L 100 200 L 0 100 Z" fill="white" />
          </svg>
        </div>
        
        <div class="flex items-start relative z-10">
          <div class="w-16 h-16 bg-white bg-opacity-20 rounded-xl flex items-center justify-center text-white text-2xl mr-6 shadow-lg">
            🚀
          </div>
          <div class="flex-1">
            <h2 class="text-2xl font-bold mb-4">Vision d'Avenir</h2>
            <p class="text-lg leading-relaxed">
              Je souhaite évoluer dans cette branche et à terme, j'aimerais créer ma propre entreprise 
              qui fournirait des solutions logicielles modernes et innovantes. Mon objectif est de rester 
              à la pointe de la technologie tout en gardant une approche humaine et créative.
            </p>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Statistiques animées -->
    <div 
      class="container mx-auto mb-16 px-4"
      :class="{ 'opacity-100': isVisible.stats, 'opacity-0': !isVisible.stats }"
      style="transition: opacity 0.7s ease-in-out"
    >
      <h2 class="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">En Quelques Chiffres</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div 
          v-for="(stat, index) in stats" 
          :key="index"
          class="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 text-center hover:transform hover:scale-105 transition-all duration-300 border border-gray-100 dark:border-gray-700"
        >
          <div class="text-4xl mb-3">{{ stat.icon }}</div>
          <div class="text-3xl font-bold text-gray-900 dark:text-primary-400 mb-2">{{ stat.value }}</div>
          <div class="text-gray-600 dark:text-gray-400">{{ stat.label }}</div>
        </div>
      </div>
    </div>
    
    <!-- Compétences techniques avec niveaux -->
    <div 
      class="container mx-auto px-4"
      :class="{ 'opacity-100': isVisible.skills, 'opacity-0': !isVisible.skills }"
      style="transition: opacity 0.7s ease-in-out"
    >
      <h2 class="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Compétences Techniques</h2>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <!-- Front-end -->
        <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border border-gray-100 dark:border-gray-700">
          <div class="flex items-center mb-4">
            <div class="w-12 h-12 bg-gray-900 dark:bg-orange-500 rounded-lg flex items-center justify-center text-white text-xl mr-3">
              🎨
            </div>
            <h3 class="text-xl font-bold text-gray-900 dark:text-white">Front-end</h3>
          </div>
          <div class="space-y-3">
            <div class="skill-item">
              <div class="flex justify-between items-center mb-1">
                <span class="text-sm text-gray-600 dark:text-gray-400">HTML5 / CSS3</span>
              </div>
              <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              </div>
            </div>
            <div class="skill-item">
              <div class="flex justify-between items-center mb-1">
                <span class="text-sm text-gray-600 dark:text-gray-400">JavaScript / TypeScript</span>
              </div>
              <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              </div>
            </div>
            <div class="skill-item">
              <div class="flex justify-between items-center mb-1">
                <span class="text-sm text-gray-600 dark:text-gray-400">Vue.js / React</span>
              </div>
              <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              </div>
            </div>
          </div>
        </div>
        
        <!-- Back-end -->
        <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border border-gray-100 dark:border-gray-700">
          <div class="flex items-center mb-4">
            <div class="w-12 h-12 bg-gray-900 dark:bg-green-500 rounded-lg flex items-center justify-center text-white text-xl mr-3">
              ⚙️
            </div>
            <h3 class="text-xl font-bold text-gray-900 dark:text-white">Back-end</h3>
          </div>
          <div class="space-y-3">
            <div class="skill-item">
              <div class="flex justify-between items-center mb-1">
                <span class="text-sm text-gray-600 dark:text-gray-400">PHP</span>
              </div>
              <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              </div>
            </div>
            <div class="skill-item">
              <div class="flex justify-between items-center mb-1">
                <span class="text-sm text-gray-600 dark:text-gray-400">Node.js / Express</span>
              </div>
              <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              </div>
            </div>
            <div class="skill-item">
              <div class="flex justify-between items-center mb-1">
                <span class="text-sm text-gray-600 dark:text-gray-400">API REST</span>
              </div>
              <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              </div>
            </div>
          </div>
        </div>
        
        <!-- Outils -->
        <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border border-gray-100 dark:border-gray-700">
          <div class="flex items-center mb-4">
            <div class="w-12 h-12 bg-gray-900 dark:bg-blue-500 rounded-lg flex items-center justify-center text-white text-xl mr-3">
              🛠️
            </div>
            <h3 class="text-xl font-bold text-gray-900 dark:text-white">Outils</h3>
          </div>
          <div class="space-y-3">
            <div class="skill-item">
              <div class="flex justify-between items-center mb-1">
                <span class="text-sm text-gray-600 dark:text-gray-400">Git / GitHub</span>
              </div>
              <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              </div>
            </div>
            <div class="skill-item">
              <div class="flex justify-between items-center mb-1">
                <span class="text-sm text-gray-600 dark:text-gray-400">IntelliJ IDEA</span>
              </div>
              <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              </div>
            </div>
            <div class="skill-item">
              <div class="flex justify-between items-center mb-1">
                <span class="text-sm text-gray-600 dark:text-gray-400">VS Code</span>
              </div>
              <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              </div>
            </div>
          </div>
        </div>
        
        <!-- Méthodologies -->
        <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border border-gray-100 dark:border-gray-700">
          <div class="flex items-center mb-4">
            <div class="w-12 h-12 bg-gray-900 dark:bg-purple-500 rounded-lg flex items-center justify-center text-white text-xl mr-3">
              📋
            </div>
            <h3 class="text-xl font-bold text-gray-900 dark:text-white">Méthodologies</h3>
          </div>
          <div class="space-y-3">
            <div class="skill-item">
              <div class="flex justify-between items-center mb-1">
                <span class="text-sm text-gray-600 dark:text-gray-400">Agile / Scrum</span>
              </div>
              <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              </div>
            </div>
            <div class="skill-item">
              <div class="flex justify-between items-center mb-1">
                <span class="text-sm text-gray-600 dark:text-gray-400">Merise</span>
              </div>
              <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
/* Animations personnalisées */
@keyframes fadeIn {
  from { 
    opacity: 0; 
    transform: translateY(20px); 
  }
  to { 
    opacity: 1; 
    transform: translateY(0); 
  }
}

.animate-fade-in {
  animation: fadeIn 0.5s ease-out forwards;
}

/* Hover effects */
.skill-item:hover {
  transform: translateX(5px);
  transition: transform 0.2s ease;
}

/* Barres de progression adaptatives */
.skill-item .h-2 {
  background: linear-gradient(to right, 
    oklch(var(--color-gray-900)) 0%, 
    oklch(var(--color-gray-700)) 100%
  );
}

:root.dark .skill-item .h-2 {
  background: linear-gradient(to right, 
    oklch(var(--color-primary-500)) 0%, 
    oklch(var(--color-primary-400)) 100%
  );
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .text-5xl {
    font-size: 2.5rem;
  }
}
</style>