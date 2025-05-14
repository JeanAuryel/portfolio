<script setup lang="ts">
import NavigationMenu from '@/components/layout/NavigationMenu.vue';
import Footer from '@/components/layout/Footer.vue';
import { useTheme } from '@/composables/useTheme';
import { computed } from 'vue';
import { useRouter } from 'vue-router';

// Utiliser le composable useTheme
const { isDarkMode, toggleTheme, setTheme, themeMode } = useTheme();
const router = useRouter();

// Navigation avec vos icônes originales
const navItems = [
  { name: 'Accueil', path: '/', icon: 'home' },
  { name: 'À propos', path: '/about', icon: 'about' },
  { name: 'Mon épreuve E5', path: '/e5', icon: 'e5' },
  { name: 'Mon épreuve E6', path: '/e6', icon: 'e6' },
  { name: 'Veille Technologique', path: '/tech-watch', icon: 'tech-watch' },
  { name: 'Contact', path: '/contact', icon: 'contact' }
];

// Current route computed
const currentRoute = computed(() => router.currentRoute.value.path);
</script>

<template>
  <div class="min-h-screen flex flex-col transition-colors duration-300 bg-gray-50 dark:bg-primary-800 text-black dark:text-white">
    <!-- Wrapper glassmorphism pour le NavigationMenu -->
    <div class="glassmorphism-wrapper">
      <NavigationMenu 
        :items="navItems" 
        brand-name="Jean-Auryel Akinotcho"
        :fixed="true"
        class="glassmorphism-nav"
      />
    </div>
    
    <!-- Bouton toggle dark mode flottant avec design amélioré -->
    <button 
      @click="toggleTheme"
      class="fixed top-4 right-4 z-50 theme-toggle-btn group"
      :title="isDarkMode ? 'Passer en mode clair' : 'Passer en mode sombre'"
    >
      <div class="relative">
        <!-- Icône soleil -->
        <svg 
          class="w-6 h-6 transition-all duration-300"
          :class="[
            isDarkMode 
              ? 'opacity-100 rotate-0 scale-100' 
              : 'opacity-0 rotate-90 scale-75'
          ]"
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
        
        <!-- Icône lune -->
        <svg 
          class="w-6 h-6 transition-all duration-300 absolute inset-0"
          :class="[
            isDarkMode 
              ? 'opacity-0 rotate-90 scale-75' 
              : 'opacity-100 rotate-0 scale-100'
          ]"
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
      </div>
    </button>
    
    <!-- Contenu principal -->
    <main class="flex-grow">
      <router-view />
    </main>
    
    <!-- Footer -->
    <Footer />
  </div>
</template>

<style scoped>
/* Wrapper glassmorphism pour NavigationMenu */
.glassmorphism-wrapper {
  position: fixed;
  top: 1.5rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 50;
  width: 90vw;
  max-width: 1200px;
  border-radius: 24px;
  overflow: hidden;
  
  /* Effet glassmorphism avec syntaxe OKLCH */
  background: color-mix(in oklch, oklch(var(--color-white)), transparent 85%);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid color-mix(in oklch, oklch(var(--color-white)), transparent 80%);
  box-shadow: 0 8px 32px color-mix(in oklch, oklch(var(--color-black)), transparent 90%);
  
  transition: all 0.3s ease;
  animation: glassAppear 0.6s ease-out;
}

.dark .glassmorphism-wrapper {
  background: color-mix(in oklch, oklch(var(--color-primary-700)), transparent 70%);
  border: 1px solid color-mix(in oklch, oklch(var(--color-primary-500)), transparent 80%);
  box-shadow: 0 8px 32px color-mix(in oklch, oklch(var(--color-black)), transparent 70%);
}

/* Hover effect pour la navigation */
.glassmorphism-wrapper:hover {
  background: color-mix(in oklch, oklch(var(--color-white)), transparent 80%);
  box-shadow: 0 12px 40px color-mix(in oklch, oklch(var(--color-black)), transparent 85%);
}

.dark .glassmorphism-wrapper:hover {
  background: color-mix(in oklch, oklch(var(--color-primary-700)), transparent 60%);
  box-shadow: 0 12px 40px color-mix(in oklch, oklch(var(--color-black)), transparent 60%);
}

/* Rendre le NavigationMenu transparent pour ne conserver que l'effet glassmorphism du wrapper */
.glassmorphism-wrapper :deep(.glassmorphism-nav) {
  background: transparent !important;
  backdrop-filter: none !important;
  -webkit-backdrop-filter: none !important;
  border: none !important;
  box-shadow: none !important;
  position: relative !important;
  top: 0 !important;
  left: 0 !important;
  transform: none !important;
  width: 100% !important;
  max-width: none !important;
}

/* S'assurer que le NavigationMenu s'adapte */
.glassmorphism-wrapper :deep(.glassmorphim-nav nav) {
  background: transparent !important;
}

/* Modifier les liens de navigation pour inclure le texte */
.glassmorphism-wrapper :deep(.nav-icon-link) {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px 12px;
  border-radius: 12px;
  text-decoration: none;
  transition: all 0.3s ease;
  position: relative;
  overflow: visible;
  min-width: 80px;
  height: 60px;
}

/* Styles pour les icônes par défaut */
.glassmorphism-wrapper :deep(.nav-icon-link) svg {
  width: 24px;
  height: 24px;
  transition: all 0.3s ease;
  margin-bottom: 4px;
}

/* Masquer le texte par défaut */
.glassmorphism-wrapper :deep(.nav-icon-link)::after {
  content: attr(data-name);
  position: absolute;
  bottom: 4px;
  left: 50%;
  transform: translateX(-50%);
  opacity: 0;
  font-size: 0.75rem;
  font-weight: 500;
  color: oklch(var(--color-gray-600));
  white-space: nowrap;
  transition: all 0.3s ease;
  pointer-events: none;
}

.dark .glassmorphism-wrapper :deep(.nav-icon-link)::after {
  color: oklch(var(--color-gray-400));
}

/* Effet hover - icônes plus petites et texte visible */
.glassmorphism-wrapper :deep(.nav-icon-link:hover) svg {
  width: 18px;
  height: 18px;
  transform: scale(0.9);
}

.glassmorphism-wrapper :deep(.nav-icon-link:hover)::after {
  opacity: 1;
  transform: translateX(-50%) translateY(-2px);
}

/* État actif - icône plus grande et bleue */
.glassmorphism-wrapper :deep(.nav-icon-link.active) svg {
  color: oklch(var(--color-blue-600));
  width: 28px;
  height: 28px;
  filter: drop-shadow(0 0 8px color-mix(in oklch, oklch(var(--color-blue-600)), transparent 70%));
}

.dark .glassmorphism-wrapper :deep(.nav-icon-link.active) svg {
  color: oklch(var(--color-primary-400));
  filter: drop-shadow(0 0 8px color-mix(in oklch, oklch(var(--color-primary-400)), transparent 60%));
}

/* Point indicateur pour la page active */
.glassmorphism-wrapper :deep(.nav-icon-link.active)::before {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 50%;
  transform: translateX(-50%);
  width: 6px;
  height: 6px;
  background-color: oklch(var(--color-blue-600));
  border-radius: 50%;
}

.dark .glassmorphism-wrapper :deep(.nav-icon-link.active)::before {
  background-color: oklch(var(--color-primary-400));
}

/* Masquer les tooltips par défaut du NavigationMenu */
.glassmorphism-wrapper :deep(.nav-icon-link) .label-fade-enter-active,
.glassmorphism-wrapper :deep(.nav-icon-link) .label-fade-leave-active {
  display: none !important;
}

/* Bouton toggle theme avec design amélioré */
.theme-toggle-btn {
  background: color-mix(in oklch, oklch(var(--color-white)), transparent 15%);
  border: 1px solid color-mix(in oklch, oklch(var(--color-gray-200)), transparent 0%);
  color: oklch(var(--color-gray-700));
  margin-top: 4rem;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 4px -1px color-mix(in oklch, oklch(var(--color-black)), transparent 90%), 
              0 1px 2px -1px color-mix(in oklch, oklch(var(--color-black)), transparent 94%);
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
}

.dark .theme-toggle-btn {
  background: color-mix(in oklch, oklch(var(--color-primary-700)), transparent 20%);
  border-color: color-mix(in oklch, oklch(var(--color-primary-600)), transparent 0%);
  color: oklch(var(--color-gray-300));
  box-shadow: 0 2px 4px -1px color-mix(in oklch, oklch(var(--color-black)), transparent 70%), 
              0 1px 2px -1px color-mix(in oklch, oklch(var(--color-black)), transparent 80%);
}

/* Hover states */
.theme-toggle-btn:hover {
  transform: scale(1.05);
  background: color-mix(in oklch, oklch(var(--color-white)), transparent 0%);
  box-shadow: 0 4px 8px -2px color-mix(in oklch, oklch(var(--color-black)), transparent 85%);
}

.dark .theme-toggle-btn:hover {
  background: color-mix(in oklch, oklch(var(--color-primary-600)), transparent 0%);
  box-shadow: 0 4px 8px -2px color-mix(in oklch, oklch(var(--color-black)), transparent 60%);
}

/* Animation pour les icônes */
.theme-toggle-btn svg {
  position: absolute;
}

.theme-toggle-btn:hover svg {
  animation: pulse 0.3s ease-in-out;
}

@keyframes pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
}

/* Animation pour l'apparition du menu */
@keyframes glassAppear {
  from {
    opacity: 0;
    transform: translate(-50%, -20px);
  }
  to {
    opacity: 1;
    transform: translate(-50%, 0);
  }
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .glassmorphism-wrapper {
    width: 95vw;
    border-radius: 20px;
  }
}

/* JavaScript pour ajouter les data-name aux liens */
.glassmorphism-wrapper :deep(.nav-icon-link[href="/"])::after { content: "Accueil"; }
.glassmorphism-wrapper :deep(.nav-icon-link[href="/about"])::after { content: "À propos"; }
.glassmorphism-wrapper :deep(.nav-icon-link[href="/e5"])::after { content: "Mes Réalisations"; }
.glassmorphism-wrapper :deep(.nav-icon-link[href="/e6"])::after { content: "Portfolio"; }
.glassmorphism-wrapper :deep(.nav-icon-link[href="/tech-watch"])::after { content: "Veille Technologique"; }
.glassmorphism-wrapper :deep(.nav-icon-link[href="/contact"])::after { content: "Contact"; }
</style>