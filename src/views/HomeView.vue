<script setup lang="ts">
import { ref, onMounted } from 'vue';
import PageSectionLayout from '@/components/layout/PageSectionLayout.vue';

// Import simplifié de l'image
import profilePicture from '@/assets/img/Profile-picture.png';

// Animation pour l'apparition progressive des éléments
const isVisible = ref(false);

onMounted(() => {
  // Déclencher l'animation après le chargement
  setTimeout(() => {
    isVisible.value = true;
  }, 100);
});

// Données des compétences avec nouvelles couleurs naturelles
const skills = [
  {
    title: 'Développement Frontend',
    description: 'Vue.js, TypeScript, Tailwind CSS, HTML5, CSS3, JavaScript',
    icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
    color: 'terra',
    badges: ['Vue.js', 'TypeScript', 'Tailwind CSS']
  },
  {
    title: 'Développement Backend', 
    description: 'Node.js, Express, API REST, Bases de données SQL et NoSQL',
    icon: 'M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01',
    color: 'olive',
    badges: ['Node.js', 'Express', 'MongoDB']
  },
  {
    title: 'Applications Métier',
    description: 'Solutions logicielles et applications métiers (SLAM)',
    icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
    color: 'burgundy',
    badges: ['Solutions', 'Métier', 'SLAM']
  }
];
</script>

<template>
  <!-- Section Hero avec gradient noyer -->
  <PageSectionLayout 
    background="gradient-walnut" 
    spacing="xl" 
    centered
    :show-grain="true"
  >
    <div 
      class="transition-all duration-1000 transform"
      :class="[isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8']"
    >
      <h1 class="text-5xl font-bold mb-6 text-center">
        <span class="bg-gradient-to-r from-walnut-gold-dark to-walnut-gold bg-clip-text text-transparent">
          Bienvenue
        </span> 
        <span class="text-walnut-text-dark">sur mon Portfolio</span>
      </h1>
      
      <!-- Avatar et nom avec image optimisée -->
      <div class="flex flex-col md:flex-row items-center justify-center mb-10">
        <div class="w-48 h-48 rounded-full overflow-hidden mb-6 md:mb-0 md:mr-8 border-4 border-walnut-gold shadow-walnut-lg hover:shadow-walnut-glow transition-all duration-300">
          <img 
            :src="profilePicture" 
            alt="Photo de profil de Jean-Auryel Akinotcho"
            class="w-full h-50 object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div class="text-center md:text-left">
          <h2 class="text-3xl font-bold mb-2 text-walnut-text-dark">Jean-Auryel Akinotcho</h2>
          <p class="text-xl italic mb-4 text-walnut-text-dark opacity-80">Développeur Web Full-Stack</p>
        </div>
      </div>
    </div>
  </PageSectionLayout>

  <!-- Section de présentation avec fond crème -->
  <PageSectionLayout 
    background="cream" 
    spacing="lg"
    centered
  >
    <div 
      class="transition-all duration-1000 delay-300 transform"
      :class="[isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8']"
    >
      <div class="card-walnut p-8 mb-10">
        <div class="text-lg leading-relaxed space-y-4">
          <p>
            Je suis <span class="font-semibold text-walnut-gold-dark">Jean-Auryel Akinotcho</span>, mais vous pouvez aussi m'appeler <span class="font-semibold text-walnut-gold-dark">JA</span>.
          </p>
          <p>
            Passionné par le développement web, j'aime créer des expériences interactives et performantes.
          </p>
          <p>
            Ce portfolio est une vitrine de mes compétences, de mes projets réalisés et de mon parcours.
          </p>
          <p class="font-medium text-walnut-gold-dark">
            Découvrez mes réalisations et n'hésitez pas à me contacter pour en savoir plus !
          </p>
        </div>
      </div>
    </div>
  </PageSectionLayout>

  <!-- Section des compétences avec fond ivoire -->
  <PageSectionLayout
    title="Mes compétences clés"
    background="ivory"
    spacing="lg"
    centered
  >
    <div
      class="transition-all duration-1000 delay-600 transform"
      :class="[isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8']"
    >
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div
          v-for="(skill, index) in skills"
          :key="index"
          class="card-walnut p-6 hover:transform hover:scale-105 transition-all duration-300 group"
        >
          <div class="text-center mb-4">
            <span
              class="inline-block p-3 rounded-full transition-all duration-300"
              :class="[
                skill.color === 'terra' ? 'skill-icon-terra' : '',
                skill.color === 'olive' ? 'skill-icon-olive' : '',
                skill.color === 'burgundy' ? 'skill-icon-burgundy' : ''
              ]"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                class="h-8 w-8 group-hover:scale-110 transition-transform duration-300" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  stroke-linecap="round" 
                  stroke-linejoin="round" 
                  stroke-width="2" 
                  :d="skill.icon" 
                />
              </svg>
            </span>
          </div>
          
          <h4 class="text-xl font-semibold mb-2 text-center group-hover:text-walnut-gold-dark transition-colors duration-300">
            {{ skill.title }}
          </h4>
          
          <p class="text-center mb-4">{{ skill.description }}</p>
          
          <!-- Badges avec nouvelles classes -->
          <div class="flex flex-wrap gap-2 justify-center">
            <span
              v-for="badge in skill.badges"
              :key="badge"
              class="badge-walnut"
            >
              {{ badge }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </PageSectionLayout>

  <!-- Section CTA avec gradient -->
  <PageSectionLayout 
    background="gradient-cream" 
    spacing="xl" 
    centered
  >
    <div 
      class="transition-all duration-1000 delay-900 transform"
      :class="[isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8']"
    >
      <div class="max-w-2xl mx-auto">
        <h3 class="text-3xl font-bold mb-6 text-adaptive">
          <span class="bg-gradient-to-r from-walnut-gold to-walnut-gold-light bg-clip-text text-transparent">
            Prêt à collaborer ?
          </span>
        </h3>
        
        <p class="text-xl text-adaptive-secondary mb-8">
          Transformons ensemble vos idées en solutions digitales innovantes
        </p>
        
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <router-link 
            to="/contact" 
            class="btn-walnut text-lg px-8 py-4 text-center animate-walnut-shimmer"
          >
            Me contacter
          </router-link>
          
          <router-link 
            to="/e5"
            class="px-8 py-4 border-2 border-walnut-gold text-walnut-gold hover:bg-walnut-gold hover:text-walnut-text-dark rounded-lg font-semibold transition-all duration-300 text-center"
          >
            Voir mes projets
          </router-link>
        </div>
      </div>
    </div>
  </PageSectionLayout>
</template>

<style scoped>
/* Améliorations pour les cartes de compétences */
.group:hover .card-walnut {
  transform: translateY(-4px);
}

/* Animation au hover pour les icônes */
.group:hover svg {
  transform: scale(1.1);
  transition: transform 0.3s ease;
}

/* Effet de bordure dorée au hover sur l'avatar */
.border-walnut-gold:hover {
  box-shadow: 0 0 20px color-mix(in oklch, oklch(var(--color-walnut-gold)), transparent 60%);
  transition: all 0.3s ease;
}

/* Animation pour le titre principal */
h1 span {
  background: linear-gradient(135deg, 
    oklch(var(--color-walnut-gold)), 
    oklch(var(--color-walnut-gold-dark)));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.dark h1 span {
  background: linear-gradient(135deg, 
    oklch(var(--color-gold-500)), 
    oklch(var(--color-gold-400)));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Effet de lueur sur les éléments au focus */
.btn-walnut:focus,
.card-walnut:focus {
  animation: walnutFocus 1.5s ease-in-out infinite;
}

@keyframes walnutFocus {
  0%, 100% {
    box-shadow: 0 0 0 3px color-mix(in oklch, oklch(var(--color-walnut-gold)) 30%, transparent 70%);
  }
  50% {
    box-shadow: 0 0 0 3px color-mix(in oklch, oklch(var(--color-walnut-gold)) 60%, transparent 40%);
  }
}

/* Accessibility - Réduction du mouvement si demandé */
@media (prefers-reduced-motion: reduce) {
  .animate-walnut-shimmer,
  .transition-all,
  .transition-transform {
    animation: none;
    transition: none;
  }
}
</style>