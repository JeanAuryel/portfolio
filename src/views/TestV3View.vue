<template>
  <div class="min-h-screen bg-main text-main transition-theme">
    <div class="container-main py-16">
      <div class="text-center mb-12">
        <h1 class="text-4xl font-bold mb-4">🎨 Test Tailwind v3.4.17</h1>
        <p class="text-secondary text-lg">Système de couleurs crème + bois</p>
      </div>
      
      <!-- Test de toggle -->
      <div class="flex justify-center mb-12">
        <button 
          @click="toggleDark"
          class="btn-primary"
        >
          {{ isDark ? '☀️ Mode Clair' : '🌙 Mode Sombre' }}
        </button>
      </div>
      
      <!-- Test des couleurs -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        <!-- Carte principale -->
        <div class="card-main">
          <h3 class="text-xl font-bold mb-4 text-accent">Carte Principale</h3>
          <p class="text-secondary mb-4">
            Cette carte utilise les couleurs personnalisées et devrait changer d'apparence.
          </p>
          <div class="badge">Badge de test</div>
        </div>
        
        <!-- Zone alternative -->
        <div class="bg-surface-alt p-6 rounded-lg border-main border-2">
          <h3 class="text-xl font-bold mb-4">Zone Alternative</h3>
          <p class="text-main mb-4">Surface alternative avec bordure principale.</p>
          <button class="btn-secondary">Bouton Secondaire</button>
        </div>
        
        <!-- Conteneur menu -->
        <div class="menu-container">
          <h3 class="text-xl font-bold mb-4">Menu Container</h3>
          <p class="mb-4">Container avec couleurs contrastées.</p>
          <div class="skill-icon skill-icon-primary mr-2 inline-flex">🔧</div>
          <div class="skill-icon skill-icon-secondary mr-2 inline-flex">🎨</div>
          <div class="skill-icon skill-icon-tertiary inline-flex">⚡</div>
        </div>
      </div>
      
      <!-- Test des couleurs directes -->
      <div class="bg-surface p-8 rounded-lg border-main border">
        <h2 class="text-2xl font-bold mb-6 text-accent">Palette de Couleurs</h2>
        
        <!-- Mode clair -->
        <div class="mb-8">
          <h3 class="text-lg font-semibold mb-4">Mode Clair</h3>
          <div class="grid grid-cols-2 md:grid-cols-5 gap-4">
            <div class="bg-cream-200 text-ebony-500 p-4 rounded text-center">
              <div class="font-bold">Cream</div>
              <div class="text-sm">Base</div>
            </div>
            <div class="bg-oak-300 text-ebony-500 p-4 rounded text-center">
              <div class="font-bold">Oak</div>
              <div class="text-sm">Secondaire</div>
            </div>
            <div class="bg-walnut-500 text-white p-4 rounded text-center">
              <div class="font-bold">Walnut</div>
              <div class="text-sm">Primaire</div>
            </div>
            <div class="bg-mahogany-500 text-white p-4 rounded text-center">
              <div class="font-bold">Mahogany</div>
              <div class="text-sm">Accent</div>
            </div>
            <div class="bg-ebony-500 text-white p-4 rounded text-center">
              <div class="font-bold">Ebony</div>
              <div class="text-sm">Texte</div>
            </div>
          </div>
        </div>
        
        <!-- Mode sombre -->
        <div>
          <h3 class="text-lg font-semibold mb-4">Mode Sombre</h3>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div class="bg-dark-base-500 text-dark-text-300 p-4 rounded text-center">
              <div class="font-bold">Dark Base</div>
              <div class="text-sm">Fond</div>
            </div>
            <div class="bg-dark-surface-500 text-dark-text-300 p-4 rounded text-center">
              <div class="font-bold">Dark Surface</div>
              <div class="text-sm">Surface</div>
            </div>
            <div class="bg-dark-accent-500 text-dark-base-500 p-4 rounded text-center">
              <div class="font-bold">Dark Accent</div>
              <div class="text-sm">Accent</div>
            </div>
            <div class="bg-dark-muted-500 text-dark-text-300 p-4 rounded text-center">
              <div class="font-bold">Dark Muted</div>
              <div class="text-sm">Secondaire</div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- État actuel -->
      <div class="mt-12 text-center">
        <div class="inline-block bg-surface-alt px-6 py-4 rounded-lg border-main border">
          <p class="text-lg">
            <strong>Mode actuel :</strong> 
            <span class="text-accent">{{ isDark ? 'Sombre' : 'Clair' }}</span>
          </p>
          <p class="text-secondary text-sm mt-2">
            Classes HTML : <code>{{ htmlClasses }}</code>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const isDark = ref(false);
const htmlClasses = ref('');

const updateClasses = () => {
  htmlClasses.value = document.documentElement.className || '(aucune)';
  isDark.value = document.documentElement.classList.contains('dark');
};

const toggleDark = () => {
  const html = document.documentElement;
  
  if (html.classList.contains('dark')) {
    html.classList.remove('dark');
  } else {
    html.classList.add('dark');
  }
  
  updateClasses();
};

onMounted(() => {
  updateClasses();
});
</script>

<style scoped>
code {
  @apply bg-cream-300 dark:bg-dark-surface-600 px-2 py-1 rounded text-xs font-mono;
}
</style>