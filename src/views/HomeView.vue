<script setup lang="ts">
import { ref, onMounted } from 'vue';

// Animation pour l'apparition progressive des éléments
const isVisible = ref(false);

onMounted(() => {
  // Déclencher l'animation après le chargement
  setTimeout(() => {
    isVisible.value = true;
  }, 100);
});
</script>

<template>
  <main class="flex flex-col min-h-screen pt-20">
    <div class="container mx-auto px-4 flex-grow">
      <!-- Section d'en-tête avec animation -->
      <div 
        class="transition-all duration-1000 transform"
        :class="[isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8']"
      >
        <h1 class="text-5xl font-bold mb-6 text-center">
          <span class="text-primary-600 dark:text-primary-400">Bienvenue</span> sur mon Portfolio
        </h1>
        
        <!-- Avatar et nom -->
        <div class="flex flex-col md:flex-row items-center justify-center mb-10">
          <div class="w-48 h-48 rounded-full overflow-hidden mb-6 md:mb-0 md:mr-8 border-4 border-primary-600 dark:border-primary-400 shadow-lg">
            <img src="https://picsum.photos/400/300?random=1" alt="Jean-Auryel Akinotcho" />
          </div>
          <div class="text-center md:text-left">
            <h2 class="text-3xl font-bold mb-2">Jean-Auryel Akinotcho</h2>
            <p class="text-xl italic mb-4">Développeur Web Full-Stack</p>
          </div>
        </div>
      </div>
      
      <!-- Section de présentation avec animation -->
      <div 
        class="transition-all duration-1000 delay-300 transform"
        :class="[isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8']"
      >
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-10">
          <div class="text-lg leading-relaxed space-y-4">
            <p>
              Je suis <span class="font-semibold">Jean-Auryel Akinotcho</span>, mais vous pouvez aussi m'appeler <span class="font-semibold">JA</span>.
            </p>
            <p>
              Passionné par le développement web, j'aime créer des expériences interactives et performantes.
            </p>
            <p>
              Ce portfolio est une vitrine de mes compétences, de mes projets réalisés et de mon parcours.
            </p>
            <p class="font-medium">
              Découvrez mes réalisations et n'hésitez pas à me contacter pour en savoir plus !
            </p>
          </div>
        </div>
      </div>
      
      <!-- Section des compétences principales avec animation -->
      <div 
        class="transition-all duration-1000 delay-600 transform"
        :class="[isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8']"
      >
        <h3 class="text-2xl font-bold mb-6 text-center">Mes compétences clés</h3>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div class="text-center mb-4">
              <span class="inline-block p-3 rounded-full bg-blue-100 text-blue-500">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </span>
            </div>
            <h4 class="text-xl font-semibold mb-2 text-center">Développement Front-end</h4>
            <p class="text-center">Vue.js, TypeScript, Tailwind CSS, HTML5, CSS3, JavaScript</p>
          </div>
          
          <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div class="text-center mb-4">
              <span class="inline-block p-3 rounded-full bg-green-100 text-green-500">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                </svg>
              </span>
            </div>
            <h4 class="text-xl font-semibold mb-2 text-center">Développement Back-end</h4>
            <p class="text-center">Node.js, Express, API REST, Bases de données SQL et NoSQL</p>
          </div>
          
          <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div class="text-center mb-4">
              <span class="inline-block p-3 rounded-full bg-purple-100 text-purple-500">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </span>
            </div>
            <h4 class="text-xl font-semibold mb-2 text-center">Applications Métier</h4>
            <p class="text-center">Solutions logicielles et applications métiers (SLAM)</p>
          </div>
        </div>
      </div>
      
      <!-- Appel à l'action -->
      <div 
        class="text-center mt-16 mb-8 transition-all duration-1000 delay-900 transform"
        :class="[isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8']"
      >
        <router-link 
          to="/contact" 
          class="inline-block bg-primary-600 hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
        >
          Me contacter
        </router-link>
      </div>
    </div>
  </main>
</template>