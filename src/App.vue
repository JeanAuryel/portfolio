<script setup lang="ts">
import { ref, onMounted, onUnmounted, provide } from 'vue';
import AppLayout from '@/layouts/AppLayout.vue';

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
    class="fixed inset-0 bg-white dark:bg-gray-900 flex items-center justify-center z-50"
  >
    <div class="text-center">
      <div class="mb-6">
        <div class="relative inline-block">
          <span class="text-5xl font-bold text-blue-600 dark:text-blue-400">JA</span>
          <div class="loading-circle"></div>
        </div>
      </div>
      <p class="text-gray-600 dark:text-gray-300 animate-pulse">Chargement du portfolio...</p>
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
/* Styles globaux pour Tailwind CSS 4.x */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&family=Lobster&display=swap');

/* Import Tailwind CSS 4.x - Nouvelle syntaxe */
@import "tailwindcss";

/* Configuration des couleurs personnalisées */
@layer theme {
  :root {
    --color-primary-50: #eff6ff;
    --color-primary-100: #dbeafe;
    --color-primary-200: #bfdbfe;
    --color-primary-300: #93c5fd;
    --color-primary-400: #60a5fa;
    --color-primary-500: #3b82f6;
    --color-primary-600: #2563eb;
    --color-primary-700: #1d4ed8;
    --color-primary-800: #1e40af;
    --color-primary-900: #1e3a8a;
    --color-primary-950: #172554;
    
    --font-family-sans: "Poppins", sans-serif;
    --font-family-lobster: "Lobster", cursive;
  }
}

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
  border: 4px solid rgba(59, 130, 246, 0.1);
  border-left-color: #3b82f6;
  border-radius: 50%;
  animation: spin 1s linear infinite;
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

/* Styles de base personnalisés */
@layer base {
  html {
    scroll-behavior: smooth;
  }
  
  body {
    @apply font-sans antialiased;
    transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
  }
  
  /* Utiliser les polices définies en CSS */
  .font-lobster {
    font-family: var(--font-family-lobster);
  }
}

/* Styles d'accessibilité */
@layer base {
  :focus {
    @apply outline-none ring-2 ring-blue-500 ring-offset-2;
  }

  ::selection {
    @apply bg-blue-500 text-white;
  }
}

/* Scrollbar personnalisée */
@layer utilities {
  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    @apply bg-gray-100 dark:bg-gray-900;
  }

  ::-webkit-scrollbar-thumb {
    @apply bg-blue-500 rounded-lg;
  }

  ::-webkit-scrollbar-thumb:hover {
    @apply bg-blue-600;
  }
}
</style>