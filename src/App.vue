<script setup lang="ts">
import { ref, onMounted, onUnmounted, provide } from 'vue';
import AppLayout from '@/layouts/AppLayout.vue';
// Suppression de l'import CSS ici car il est déjà dans main.ts

// État pour le chargement initial
const isLoading = ref(true);

// Fournir les données partagées
provide('userData', {
  name: 'Jean-Auryel Akinotcho',
  shortName: 'JA',
  email: 'jeanauryel.akinotcho@gmail.com',
  phone: '+33 7 84 76 08 80',
  location: 'Toulouse, France'
});

// Gestion du chargement initial
onMounted(() => {
  // Simuler un temps de chargement pour l'animation
  setTimeout(() => {
    isLoading.value = false;
  }, 1500);
  
  // Ajouter la classe pour les animations après le chargement complet
  window.addEventListener('load', handlePageLoaded);
});

onUnmounted(() => {
  window.removeEventListener('load', handlePageLoaded);
});

// Marquer la page comme chargée pour les animations
function handlePageLoaded() {
  document.documentElement.classList.add('page-loaded');
}
</script>

<template>
  <!-- Écran de chargement -->
  <div 
    v-if="isLoading" 
    class="fixed inset-0 bg-main flex items-center justify-center z-50"
  >
    <div class="text-center">
      <div class="mb-6">
        <div class="relative inline-block">
          <span class="text-5xl font-bold text-accent">JA</span>
          <div class="loading-circle"></div>
        </div>
      </div>
      <p class="text-secondary animate-pulse">Chargement du portfolio...</p>
    </div>
  </div>
  
  <!-- Contenu principal après le chargement -->
  <Transition name="fade">
    <div v-if="!isLoading">
      <AppLayout />
    </div>
  </Transition>
</template>

<style>
/* Animations de transition entre les pages */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Animation de l'écran de chargement */
.loading-circle {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 60px;
  height: 60px;
  border: 4px solid oklch(var(--color-oak) / 0.2);
  border-left-color: oklch(var(--color-mahogany));
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

.dark .loading-circle {
  border-color: oklch(var(--color-dark-wood) / 0.2);
  border-left-color: oklch(var(--color-dark-accent));
}

@keyframes spin {
  0% {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  100% {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}

/* Désactiver les animations pendant le chargement initial */
html:not(.page-loaded) * {
  animation-play-state: paused !important;
  transition: none !important;
}

/* Scrollbar personnalisée */
::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background-color: oklch(var(--color-oak));
}

.dark ::-webkit-scrollbar-track {
  background-color: oklch(var(--color-dark-warm));
}

::-webkit-scrollbar-thumb {
  background-color: oklch(var(--color-walnut));
  border-radius: 6px;
}

.dark ::-webkit-scrollbar-thumb {
  background-color: oklch(var(--color-dark-accent));
}

::-webkit-scrollbar-thumb:hover {
  background-color: oklch(var(--color-mahogany));
}

.dark ::-webkit-scrollbar-thumb:hover {
  background-color: oklch(var(--color-dark-wood));
}
</style>