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
  <main class="flex-grow pt-32 pb-12 bg-main">
    <!-- Titre avec effet de gradient adaptatif -->
    <div 
      class="container-main text-center mb-16 transition-all duration-700 transform"
      :class="{ 'opacity-100 translate-y-0': isVisible.title, 'opacity-0 translate-y-4': !isVisible.title }"
    >
      <h1 class="text-5xl font-bold mb-4">
        <span class="text-main">
          À Propos de Moi
        </span>
      </h1>
      <div class="w-20 h-1 bg-accent mx-auto rounded-full"></div>
    </div>
    
    <!-- Première section avec icône décorative -->
    <div 
      class="container-main mb-16"
      :class="{ 'opacity-100': isVisible.section1, 'opacity-0': !isVisible.section1 }"
      style="transition: opacity 0.7s ease-in-out"
    >
      <div class="card-main relative overflow-hidden">
        <!-- Décoration géométrique -->
        <div class="absolute top-0 right-0 w-32 h-32 transform rotate-45 translate-x-16 -translate-y-16">
          <div class="w-full h-full bg-surface-alt rounded-lg"></div>
        </div>
        
        <div class="flex items-start">
          <div class="skill-icon skill-icon-primary text-2xl mr-6">
            👋
          </div>
          <div class="flex-1">
            <h2 class="text-2xl font-bold mb-4 text-main">Bonjour !</h2>
            <p class="text-lg text-secondary leading-relaxed">
              Je suis <span class="font-semibold text-accent">Jean-Auryel Akinotcho</span>, 
              alias <span class="font-semibold text-accent">JA</span>. 
              Développeur web passionné, je crée des expériences numériques modernes et performances pour vous accompagner dans votre transformation digitale.
            </p>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Deuxième section avec timeline -->
    <div 
      class="container-main mb-16"
      :class="{ 'opacity-100': isVisible.section2, 'opacity-0': !isVisible.section2 }"
      style="transition: opacity 0.7s ease-in-out"
    >
      <div class="card-main relative">
        <!-- Timeline verticale -->
        <div class="absolute left-0 top-0 w-1 h-full bg-accent ml-8"></div>
        
        <div class="flex items-start">
          <div class="skill-icon skill-icon-primary text-2xl mr-6 relative z-10">
            🔄
          </div>
          <div class="flex-1">
            <h2 class="text-2xl font-bold mb-4 text-main">Mon Parcours de Reconversion</h2>
            <p class="text-lg text-secondary leading-relaxed mb-4">
              Diplômé en industrie agroalimentaire, j'ai travaillé pendant <span class="font-semibold text-accent">7 ans</span> 
              dans ce secteur. N'ayant pas trouvé ma voie dans cette branche, j'ai pris une décision qui a changé ma vie : 
              me reconvertir dans <span class="font-semibold text-accent">l'informatique</span>, 
              un secteur qui me passionne énormément.
            </p>
            <div class="flex flex-wrap gap-2 mt-4">
              <span class="badge">
                Industrie Agroalimentaire
              </span>
              <span class="badge">
                7 ans d'expérience
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Troisième section avec citation -->
    <div 
      class="container-main mb-16"
      :class="{ 'opacity-100': isVisible.section3, 'opacity-0': !isVisible.section3 }"
      style="transition: opacity 0.7s ease-in-out"
    >
      <div class="card-main relative overflow-hidden">
        <!-- Quote décorative -->
        <div class="absolute top-4 left-4 text-6xl text-secondary opacity-50">"</div>
        
        <div class="flex items-start">
          <div class="skill-icon skill-icon-primary text-2xl mr-6">
            🎯
          </div>
          <div class="flex-1">
            <h2 class="text-2xl font-bold mb-4 text-main">Ma Formation à l'ESICAD</h2>
            <p class="text-lg text-secondary leading-relaxed mb-4">
              C'est au sein de l'ESICAD de Toulouse que j'ai pu entamer ce nouveau départ. 
              Au cours de ma formation, j'ai acquis de nombreuses compétences qui m'ont permis de m'orienter 
              vers l'option <span class="font-semibold text-accent">SLAM</span> 
              (Solutions Logicielles et Applications Métiers) qui me passionne profondément.
            </p>
            <blockquote class="border-l-4 border-accent pl-4 italic text-secondary">
              "L'informatique, c'est une branche où on ne cesse d'apprendre, et c'est exactement ce qui me passionne !"
            </blockquote>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Vision d'avenir -->
    <div 
      class="container-main mb-16"
      :class="{ 'opacity-100': isVisible.section3, 'opacity-0': !isVisible.section3 }"
      style="transition: opacity 0.7s ease-in-out"
    >
      <div class="menu-container relative overflow-hidden">
        <!-- Décoration abstraite -->
        <div class="absolute top-0 right-0 w-64 h-64 opacity-10">
          <svg viewBox="0 0 200 200" class="w-full h-full">
            <path d="M 100 0 L 200 100 L 100 200 L 0 100 Z" fill="currentColor" />
          </svg>
        </div>
        
        <div class="flex items-start relative z-10">
          <div class="w-16 h-16 bg-surface rounded-xl flex items-center justify-center text-main text-2xl mr-6 shadow-cream dark:shadow-dark">
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
      class="container-main mb-16"
      :class="{ 'opacity-100': isVisible.stats, 'opacity-0': !isVisible.stats }"
      style="transition: opacity 0.7s ease-in-out"
    >
      <h2 class="text-3xl font-bold text-center mb-12 text-main">En Quelques Chiffres</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div 
          v-for="(stat, index) in stats" 
          :key="index"
          class="card-main text-center hover:transform hover:scale-105 transition-all duration-300"
        >
          <div class="text-4xl mb-3">{{ stat.icon }}</div>
          <div class="text-3xl font-bold text-accent mb-2">{{ stat.value }}</div>
          <div class="text-secondary">{{ stat.label }}</div>
        </div>
      </div>
    </div>
    
    <!-- Compétences techniques avec niveaux -->
    <div 
      class="container-main"
      :class="{ 'opacity-100': isVisible.skills, 'opacity-0': !isVisible.skills }"
      style="transition: opacity 0.7s ease-in-out"
    >
      <h2 class="text-3xl font-bold text-center mb-12 text-main">Compétences Techniques</h2>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <!-- Front-end -->
        <div class="card-main hover:shadow-glow-cream dark:hover:shadow-glow-dark transition-shadow duration-300">
          <div class="flex items-center mb-4">
            <div class="skill-icon skill-icon-primary mr-3">
              🎨
            </div>
            <h3 class="text-xl font-bold text-main">Front-end</h3>
          </div>
          <div class="space-y-3">
            <div class="skill-item">
              <div class="flex justify-between items-center mb-1">
                <span class="text-sm text-secondary">HTML5 / CSS3</span>
              </div>
              <div class="w-full bg-surface-alt rounded-full h-2">
                <div class="bg-accent h-2 rounded-full w-5/6"></div>
              </div>
            </div>
            <div class="skill-item">
              <div class="flex justify-between items-center mb-1">
                <span class="text-sm text-secondary">JavaScript / TypeScript</span>
              </div>
              <div class="w-full bg-surface-alt rounded-full h-2">
                <div class="bg-accent h-2 rounded-full w-4/5"></div>
              </div>
            </div>
            <div class="skill-item">
              <div class="flex justify-between items-center mb-1">
                <span class="text-sm text-secondary">Vue.js / React</span>
              </div>
              <div class="w-full bg-surface-alt rounded-full h-2">
                <div class="bg-accent h-2 rounded-full w-4/5"></div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Back-end -->
        <div class="card-main hover:shadow-glow-cream dark:hover:shadow-glow-dark transition-shadow duration-300">
          <div class="flex items-center mb-4">
            <div class="skill-icon skill-icon-secondary mr-3">
              ⚙️
            </div>
            <h3 class="text-xl font-bold text-main">Back-end</h3>
          </div>
          <div class="space-y-3">
            <div class="skill-item">
              <div class="flex justify-between items-center mb-1">
                <span class="text-sm text-secondary">PHP</span>
              </div>
              <div class="w-full bg-surface-alt rounded-full h-2">
                <div class="bg-accent h-2 rounded-full w-3/4"></div>
              </div>
            </div>
            <div class="skill-item">
              <div class="flex justify-between items-center mb-1">
                <span class="text-sm text-secondary">Node.js / Express</span>
              </div>
              <div class="w-full bg-surface-alt rounded-full h-2">
                <div class="bg-accent h-2 rounded-full w-2/3"></div>
              </div>
            </div>
            <div class="skill-item">
              <div class="flex justify-between items-center mb-1">
                <span class="text-sm text-secondary">API REST</span>
              </div>
              <div class="w-full bg-surface-alt rounded-full h-2">
                <div class="bg-accent h-2 rounded-full w-3/4"></div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Outils -->
        <div class="card-main hover:shadow-glow-cream dark:hover:shadow-glow-dark transition-shadow duration-300">
          <div class="flex items-center mb-4">
            <div class="skill-icon skill-icon-tertiary mr-3">
              🛠️
            </div>
            <h3 class="text-xl font-bold text-main">Outils</h3>
          </div>
          <div class="space-y-3">
            <div class="skill-item">
              <div class="flex justify-between items-center mb-1">
                <span class="text-sm text-secondary">Git / GitHub</span>
              </div>
              <div class="w-full bg-surface-alt rounded-full h-2">
                <div class="bg-accent h-2 rounded-full w-5/6"></div>
              </div>
            </div>
            <div class="skill-item">
              <div class="flex justify-between items-center mb-1">
                <span class="text-sm text-secondary">IntelliJ IDEA</span>
              </div>
              <div class="w-full bg-surface-alt rounded-full h-2">
                <div class="bg-accent h-2 rounded-full w-4/5"></div>
              </div>
            </div>
            <div class="skill-item">
              <div class="flex justify-between items-center mb-1">
                <span class="text-sm text-secondary">VS Code</span>
              </div>
              <div class="w-full bg-surface-alt rounded-full h-2">
                <div class="bg-accent h-2 rounded-full w-4/5"></div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Méthodologies -->
        <div class="card-main hover:shadow-glow-cream dark:hover:shadow-glow-dark transition-shadow duration-300">
          <div class="flex items-center mb-4">
            <div class="skill-icon skill-icon-primary mr-3">
              📋
            </div>
            <h3 class="text-xl font-bold text-main">Méthodologies</h3>
          </div>
          <div class="space-y-3">
            <div class="skill-item">
              <div class="flex justify-between items-center mb-1">
                <span class="text-sm text-secondary">Agile / Scrum</span>
              </div>
              <div class="w-full bg-surface-alt rounded-full h-2">
                <div class="bg-accent h-2 rounded-full w-2/3"></div>
              </div>
            </div>
            <div class="skill-item">
              <div class="flex justify-between items-center mb-1">
                <span class="text-sm text-secondary">Merise</span>
              </div>
              <div class="w-full bg-surface-alt rounded-full h-2">
                <div class="bg-accent h-2 rounded-full w-3/4"></div>
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

/* Responsive adjustments */
@media (max-width: 768px) {
  .text-5xl {
    font-size: 2.5rem;
  }
}
</style>