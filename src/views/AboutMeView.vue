<script setup lang="ts">
import { ref, onMounted } from 'vue';
import PageSectionLayout from '@/components/layout/PageSectionLayout.vue';

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
  <!-- Titre avec effet de gradient adaptatif -->
  <PageSectionLayout 
    background="cream" 
    spacing="xl" 
    centered
  >
    <div 
      class="transition-all duration-700 transform"
      :class="{ 'opacity-100 translate-y-0': isVisible.title, 'opacity-0 translate-y-4': !isVisible.title }"
    >
      <h1 class="text-5xl font-bold mb-4">
        <span class="bg-gradient-to-r from-walnut-gold-dark to-walnut-gold bg-clip-text text-transparent">
          À Propos de Moi
        </span>
      </h1>
      <div class="w-20 h-1 bg-walnut-gold mx-auto rounded-full"></div>
    </div>
  </PageSectionLayout>
  
  <!-- Première section avec icône décorative -->
  <PageSectionLayout 
    background="cream" 
    spacing="lg"
  >
    <div 
      class="transition-all duration-700 transform"
      :class="{ 'opacity-100': isVisible.section1, 'opacity-0': !isVisible.section1 }"
    >
      <div class="card-walnut p-8 relative overflow-hidden">
        <!-- Décoration géométrique -->
        <div class="absolute top-0 right-0 w-32 h-32 transform rotate-45 translate-x-16 -translate-y-16">
          <div class="w-full h-full bg-walnut-lighter/20 rounded-lg"></div>
        </div>
        
        <div class="flex items-start">
          <div class="w-16 h-16 bg-walnut-gold rounded-xl flex items-center justify-center text-walnut-text-dark text-2xl mr-6 shadow-lg">
            👋
          </div>
          <div class="flex-1">
            <h2 class="text-2xl font-bold mb-4 text-walnut-text-dark">Bonjour !</h2>
            <p class="text-lg text-walnut-text-dark/80 leading-relaxed">
              Je suis <span class="font-semibold text-walnut-gold-dark">Jean-Auryel Akinotcho</span>, 
              alias <span class="font-semibold text-walnut-gold-dark">JA</span>. 
              Développeur web passionné, je crée des expériences numériques modernes et performantes pour vous accompagner dans votre transformation digitale.
            </p>
          </div>
        </div>
      </div>
    </div>
  </PageSectionLayout>
  
  <!-- Deuxième section avec timeline -->
  <PageSectionLayout 
    background="walnut" 
    spacing="lg"
  >
    <div 
      class="transition-all duration-700 transform"
      :class="{ 'opacity-100': isVisible.section2, 'opacity-0': !isVisible.section2 }"
    >
      <div class="bg-walnut-dark rounded-2xl shadow-lg p-8 text-walnut-text-light relative overflow-hidden">
        <!-- Timeline verticale -->
        <div class="absolute left-0 top-0 w-1 h-full bg-walnut-gold ml-8"></div>
        
        <div class="flex items-start">
          <div class="w-16 h-16 bg-walnut-gold rounded-xl flex items-center justify-center text-walnut-text-dark text-2xl mr-6 shadow-lg relative z-10">
            🔄
          </div>
          <div class="flex-1">
            <h2 class="text-2xl font-bold mb-4 text-walnut-text-light">Mon Parcours de Reconversion</h2>
            <p class="text-lg leading-relaxed text-walnut-text-light/90">
              Diplômé en industrie agroalimentaire, j'ai travaillé pendant <span class="font-semibold text-walnut-gold-dark">7 ans</span> 
              dans ce secteur. N'ayant pas trouvé ma voie dans cette branche, j'ai pris une décision qui a changé ma vie : 
              me reconvertir dans <span class="font-semibold text-walnut-gold-dark">l'informatique</span>, 
              un secteur qui me passionne énormément.
            </p>
            <div class="flex flex-wrap gap-2 mt-4">
              <span class="badge-walnut">
                Industrie Agroalimentaire
              </span>
              <span class="badge-walnut">
                7 ans d'expérience
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </PageSectionLayout>
  
  <!-- Troisième section avec citation -->
  <PageSectionLayout 
    background="cream" 
    spacing="lg"
  >
    <div 
      class="transition-all duration-700 transform"
      :class="{ 'opacity-100': isVisible.section3, 'opacity-0': !isVisible.section3 }"
    >
      <div class="card-walnut p-8 relative overflow-hidden">
        <!-- Quote décorative -->
        <div class="absolute top-4 left-4 text-6xl text-walnut-lighter/30 opacity-50">"</div>
        
        <div class="flex items-start">
          <div class="w-16 h-16 bg-walnut-gold rounded-xl flex items-center justify-center text-walnut-text-dark text-2xl mr-6 shadow-lg">
            🎯
          </div>
          <div class="flex-1">
            <h2 class="text-2xl font-bold mb-4 text-walnut-text-dark">Ma Formation à l'ESICAD</h2>
            <p class="text-lg text-walnut-text-dark/80 leading-relaxed mb-4">
              C'est au sein de l'ESICAD de Toulouse que j'ai pu entamer ce nouveau départ. 
              Au cours de ma formation, j'ai acquis de nombreuses compétences qui m'ont permis de m'orienter 
              vers l'option <span class="font-semibold text-walnut-gold-dark">SLAM</span> 
              (Solutions Logicielles et Applications Métiers) qui me passionne profondément.
            </p>
            <blockquote class="border-l-4 border-walnut-gold pl-4 italic text-walnut-text-dark/80">
              "L'informatique, c'est une branche où on ne cesse d'apprendre, et c'est exactement ce qui me passionne !"
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  </PageSectionLayout>
  
  <!-- Vision d'avenir -->
  <PageSectionLayout 
    background="gradient-walnut" 
    spacing="lg"
  >
    <div 
      class="transition-all duration-700 transform"
      :class="{ 'opacity-100': isVisible.section3, 'opacity-0': !isVisible.section3 }"
    >
      <div class="bg-walnut-dark rounded-2xl shadow-lg p-8 text-walnut-text-light relative overflow-hidden">
        <!-- Décoration abstraite -->
        <div class="absolute top-0 right-0 w-64 h-64 opacity-10">
          <svg viewBox="0 0 200 200" class="w-full h-full">
            <path d="M 100 0 L 200 100 L 100 200 L 0 100 Z" fill="currentColor" />
          </svg>
        </div>
        
        <div class="flex items-start relative z-10">
          <div class="w-16 h-16 bg-walnut-gold/20 rounded-xl flex items-center justify-center text-walnut-gold text-2xl mr-6 shadow-lg">
            🚀
          </div>
          <div class="flex-1">
            <h2 class="text-2xl font-bold mb-4 text-walnut-text-light">Vision d'Avenir</h2>
            <p class="text-lg leading-relaxed text-walnut-text-light/90">
              Je souhaite évoluer dans cette branche et à terme, j'aimerais créer ma propre entreprise 
              qui fournirait des solutions logicielles modernes et innovantes. Mon objectif est de rester 
              à la pointe de la technologie tout en gardant une approche humaine et créative.
            </p>
          </div>
        </div>
      </div>
    </div>
  </PageSectionLayout>
  
  <!-- Statistiques animées -->
  <PageSectionLayout 
    background="ivory" 
    spacing="lg"
  >
    <div 
      class="transition-all duration-700 transform"
      :class="{ 'opacity-100': isVisible.stats, 'opacity-0': !isVisible.stats }"
    >
      <h2 class="text-3xl font-bold text-center mb-12 text-adaptive">En Quelques Chiffres</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div 
          v-for="(stat, index) in stats" 
          :key="index"
          class="card-walnut p-6 text-center hover:transform hover:scale-105 transition-all duration-300"
        >
          <div class="text-4xl mb-3">{{ stat.icon }}</div>
          <div class="text-3xl font-bold text-walnut-gold-dark mb-2">{{ stat.value }}</div>
          <div class="text-walnut-text-dark/80">{{ stat.label }}</div>
        </div>
      </div>
    </div>
  </PageSectionLayout>
  
  <!-- Compétences techniques avec niveaux -->
  <PageSectionLayout 
    background="cream" 
    spacing="lg"
  >
    <div 
      class="transition-all duration-700 transform"
      :class="{ 'opacity-100': isVisible.skills, 'opacity-0': !isVisible.skills }"
    >
      <h2 class="text-3xl font-bold text-center mb-12 text-adaptive">Compétences Techniques</h2>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <!-- Front-end -->
        <div class="card-walnut p-6 hover:shadow-walnut-lg transition-shadow duration-300">
          <div class="flex items-center mb-4">
            <div class="w-12 h-12 bg-walnut-gold rounded-lg flex items-center justify-center text-walnut-text-dark text-xl mr-3">
              🎨
            </div>
            <h3 class="text-xl font-bold text-walnut-text-dark">Front-end</h3>
          </div>
          <div class="space-y-3">
            <div class="skill-item">
              <span class="text-sm text-walnut-text-dark/80">HTML5 / CSS3</span>
              <div class="w-full bg-walnut-lighter rounded-full h-2 mt-1">
                <div class="bg-walnut-gold h-2 rounded-full" style="width: 90%"></div>
              </div>
            </div>
            <div class="skill-item">
              <span class="text-sm text-walnut-text-dark/80">JavaScript / TypeScript</span>
              <div class="w-full bg-walnut-lighter rounded-full h-2 mt-1">
                <div class="bg-walnut-gold h-2 rounded-full" style="width: 85%"></div>
              </div>
            </div>
            <div class="skill-item">
              <span class="text-sm text-walnut-text-dark/80">Vue.js / React</span>
              <div class="w-full bg-walnut-lighter rounded-full h-2 mt-1">
                <div class="bg-walnut-gold h-2 rounded-full" style="width: 80%"></div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Back-end -->
        <div class="card-walnut p-6 hover:shadow-walnut-lg transition-shadow duration-300">
          <div class="flex items-center mb-4">
            <div class="w-12 h-12 bg-walnut-gold rounded-lg flex items-center justify-center text-walnut-text-dark text-xl mr-3">
              ⚙️
            </div>
            <h3 class="text-xl font-bold text-walnut-text-dark">Back-end</h3>
          </div>
          <div class="space-y-3">
            <div class="skill-item">
              <span class="text-sm text-walnut-text-dark/80">PHP</span>
              <div class="w-full bg-walnut-lighter rounded-full h-2 mt-1">
                <div class="bg-walnut-gold h-2 rounded-full" style="width: 75%"></div>
              </div>
            </div>
            <div class="skill-item">
              <span class="text-sm text-walnut-text-dark/80">Node.js / Express</span>
              <div class="w-full bg-walnut-lighter rounded-full h-2 mt-1">
                <div class="bg-walnut-gold h-2 rounded-full" style="width: 70%"></div>
              </div>
            </div>
            <div class="skill-item">
              <span class="text-sm text-walnut-text-dark/80">API REST</span>
              <div class="w-full bg-walnut-lighter rounded-full h-2 mt-1">
                <div class="bg-walnut-gold h-2 rounded-full" style="width: 85%"></div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Outils -->
        <div class="card-walnut p-6 hover:shadow-walnut-lg transition-shadow duration-300">
          <div class="flex items-center mb-4">
            <div class="w-12 h-12 bg-walnut-gold rounded-lg flex items-center justify-center text-walnut-text-dark text-xl mr-3">
              🛠️
            </div>
            <h3 class="text-xl font-bold text-walnut-text-dark">Outils</h3>
          </div>
          <div class="space-y-3">
            <div class="skill-item">
              <span class="text-sm text-walnut-text-dark/80">Git / GitHub</span>
              <div class="w-full bg-walnut-lighter rounded-full h-2 mt-1">
                <div class="bg-walnut-gold h-2 rounded-full" style="width: 90%"></div>
              </div>
            </div>
            <div class="skill-item">
              <span class="text-sm text-walnut-text-dark/80">IntelliJ IDEA</span>
              <div class="w-full bg-walnut-lighter rounded-full h-2 mt-1">
                <div class="bg-walnut-gold h-2 rounded-full" style="width: 80%"></div>
              </div>
            </div>
            <div class="skill-item">
              <span class="text-sm text-walnut-text-dark/80">VS Code</span>
              <div class="w-full bg-walnut-lighter rounded-full h-2 mt-1">
                <div class="bg-walnut-gold h-2 rounded-full" style="width: 95%"></div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Méthodologies -->
        <div class="card-walnut p-6 hover:shadow-walnut-lg transition-shadow duration-300">
          <div class="flex items-center mb-4">
            <div class="w-12 h-12 bg-walnut-gold rounded-lg flex items-center justify-center text-walnut-text-dark text-xl mr-3">
              📋
            </div>
            <h3 class="text-xl font-bold text-walnut-text-dark">Méthodologies</h3>
          </div>
          <div class="space-y-3">
            <div class="skill-item">
              <span class="text-sm text-walnut-text-dark/80">Agile / Scrum</span>
              <div class="w-full bg-walnut-lighter rounded-full h-2 mt-1">
                <div class="bg-walnut-gold h-2 rounded-full" style="width: 85%"></div>
              </div>
            </div>
            <div class="skill-item">
              <span class="text-sm text-walnut-text-dark/80">Merise</span>
              <div class="w-full bg-walnut-lighter rounded-full h-2 mt-1">
                <div class="bg-walnut-gold h-2 rounded-full" style="width: 80%"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </PageSectionLayout>
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