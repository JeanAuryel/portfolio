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
  <div class="min-h-screen flex flex-col transition-theme bg-main text-main">
    <!-- Wrapper glassmorphism pour le NavigationMenu -->
    <div class="glassmorphism-wrapper">
      <NavigationMenu 
        :items="navItems" 
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
      <div class="relative flex items-center justify-center w-full h-full">
        <!-- Icône soleil (visible en mode dark pour basculer vers light) -->
        <svg 
          class="w-5 h-5 transition-all duration-300 absolute"
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
        
        <!-- Icône lune (visible en mode light pour basculer vers dark) -->
        <svg 
          class="w-5 h-5 transition-all duration-300 absolute"
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
  
  /* Effet glassmorphism avec les couleurs du thème bois */
  background: rgb(255 255 255 / 0.85);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgb(var(--oak-200) / 0.5);
  box-shadow: 0 8px 32px rgb(var(--ebony-500) / 0.1);
  
  transition: all 0.3s ease;
  animation: glassAppear 0.6s ease-out;
}

.dark .glassmorphism-wrapper {
  background: rgb(var(--dark-surface-500) / 0.85);
  border: 1px solid rgb(var(--dark-surface-600) / 0.5);
  box-shadow: 0 8px 32px rgb(0 0 0 / 0.3);
}

/* Hover effect pour la navigation */
.glassmorphism-wrapper:hover {
  background: rgb(255 255 255 / 0.95);
  box-shadow: 0 12px 40px rgb(var(--ebony-500) / 0.15);
}

.dark .glassmorphism-wrapper:hover {
  background: rgb(var(--dark-surface-500) / 0.95);
  box-shadow: 0 12px 40px rgb(0 0 0 / 0.4);
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
  justify-content: center;
  padding: 10px 20px;
  border-radius: 12px;
  text-decoration: none;
  transition: all 0.3s ease;
  position: relative;
  overflow: visible;
  min-width: 80px;
  height: 64px;
  color: rgb(var(--walnut-500));
}

.dark .glassmorphism-wrapper :deep(.nav-icon-link) {
  color: rgb(var(--dark-accent-500));
}

/* Styles pour les icônes par défaut */
.glassmorphism-wrapper :deep(.nav-icon-link) svg {
  width: 24px;
  height: 24px;
  transition: all 0.3s ease;
  margin-bottom: 4px;
}

/* Texte qui apparaît au hover (rétabli) */
.glassmorphism-wrapper :deep(.nav-icon-link)::after {
  content: attr(data-name);
  position: absolute;
  bottom: 2px;
  left: 50%;
  transform: translateX(-50%);
  opacity: 0;
  font-size: 0.7rem;
  font-weight: 500;
  color: rgb(var(--walnut-500));
  white-space: nowrap;
  transition: all 0.3s ease;
  pointer-events: none;
  text-align: center;
  width: max-content;
  max-width: 100px;
}

.dark .glassmorphism-wrapper :deep(.nav-icon-link)::after {
  color: rgb(var(--dark-accent-400));
}

/* Effet hover - SANS background/barre, juste icône et texte */
.glassmorphism-wrapper :deep(.nav-icon-link:hover) {
  background: none !important;
  transform: none !important;
}

.glassmorphism-wrapper :deep(.nav-icon-link:hover) svg {
  width: 22px;
  height: 22px;
  transform: scale(0.95);
  color: rgb(var(--mahogany-500));
}

.dark .glassmorphism-wrapper :deep(.nav-icon-link:hover) svg {
  color: rgb(var(--dark-accent-400));
}

.glassmorphism-wrapper :deep(.nav-icon-link:hover)::after {
  opacity: 1;
  transform: translateX(-50%) translateY(0px);
}

/* État actif - icône plus grande et accent */
.glassmorphism-wrapper :deep(.nav-icon-link.active) svg {
  color: rgb(var(--mahogany-500));
  width: 28px;
  height: 28px;
  filter: drop-shadow(0 0 8px rgb(var(--mahogany-500) / 0.5));
}

.dark .glassmorphism-wrapper :deep(.nav-icon-link.active) svg {
  color: rgb(var(--dark-accent-400));
  filter: drop-shadow(0 0 8px rgb(var(--dark-accent-400) / 0.5));
}

/* Cercle indicateur au-dessus de l'icône active (utilise ::before) */
.glassmorphism-wrapper :deep(.nav-icon-link.active)::before {
  content: '';
  position: absolute;
  top: 8px;
  left: 50%;
  transform: translateX(-50%);
  width: 8px;
  height: 8px;
  background-color: rgb(var(--mahogany-500));
  border-radius: 50%;
  box-shadow: 0 0 12px rgb(var(--mahogany-500) / 0.6);
  animation: activeIndicator 2s ease-in-out infinite;
}

.dark .glassmorphism-wrapper :deep(.nav-icon-link.active)::before {
  background-color: rgb(var(--dark-accent-400));
  box-shadow: 0 0 12px rgb(var(--dark-accent-400) / 0.6);
}

/* Effet de rebond au hover sur l'élément actif */
.glassmorphism-wrapper :deep(.nav-icon-link.active:hover)::before {
  animation: bounceOnce 0.6s ease-out;
}

/* Animation subtile pour l'indicateur */
@keyframes activeIndicator {
  0%, 100% {
    opacity: 1;
    transform: translateX(-50%) scale(1);
  }
  50% {
    opacity: 0.7;
    transform: translateX(-50%) scale(1.1);
  }
}

/* Animation de rebond unique au hover */
@keyframes bounceOnce {
  0% {
    transform: translateX(-50%) translateY(0);
  }
  30% {
    transform: translateX(-50%) translateY(-12px) scale(1.2);
  }
  50% {
    transform: translateX(-50%) translateY(-6px) scale(1.1);
  }
  70% {
    transform: translateX(-50%) translateY(-2px) scale(1.05);
  }
  100% {
    transform: translateX(-50%) translateY(0) scale(1);
  }
}

/* Masquer les tooltips par défaut du NavigationMenu */
.glassmorphism-wrapper :deep(.nav-icon-link) .label-fade-enter-active,
.glassmorphism-wrapper :deep(.nav-icon-link) .label-fade-leave-active {
  display: none !important;
}

/* Bouton toggle theme avec design amélioré */
.theme-toggle-btn {
  background: rgb(255 255 255 / 0.9);
  border: 1px solid rgb(var(--oak-300));
  color: rgb(var(--walnut-500));
  margin-top: 4rem;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 4px -1px rgb(var(--ebony-500) / 0.1), 
              0 1px 2px -1px rgb(var(--ebony-500) / 0.06);
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
}

.dark .theme-toggle-btn {
  background: rgb(var(--dark-surface-500) / 0.9);
  border-color: rgb(var(--dark-surface-600));
  color: rgb(var(--dark-accent-400));
  box-shadow: 0 2px 4px -1px rgb(0 0 0 / 0.25), 
              0 1px 2px -1px rgb(0 0 0 / 0.06);
}

/* Hover states */
.theme-toggle-btn:hover {
  transform: scale(1.05);
  background: rgb(255 255 255);
  box-shadow: 0 4px 8px -2px rgb(var(--ebony-500) / 0.15);
  color: rgb(var(--mahogany-500));
}

.dark .theme-toggle-btn:hover {
  background: rgb(var(--dark-surface-400));
  box-shadow: 0 4px 8px -2px rgb(0 0 0 / 0.3);
  color: rgb(var(--dark-accent-300));
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

/* Définitions de contenu pour le texte au hover */
.glassmorphism-wrapper :deep(.nav-icon-link[href="/"])::after { content: "Accueil"; }
.glassmorphism-wrapper :deep(.nav-icon-link[href="/about"])::after { content: "À propos"; }
.glassmorphism-wrapper :deep(.nav-icon-link[href="/e5"])::after { content: "E5"; }
.glassmorphism-wrapper :deep(.nav-icon-link[href="/e6"])::after { content: "E6"; }
.glassmorphism-wrapper :deep(.nav-icon-link[href="/tech-watch"])::after { content: "Veille"; }
.glassmorphism-wrapper :deep(.nav-icon-link[href="/contact"])::after { content: "Contact"; }
</style>