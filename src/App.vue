<script setup lang="ts">
import NavigationMenu from '@/components/layout/NavigationMenu.vue';
import Footer from '@/components/layout/Footer.vue';
import { useTheme } from '@/composables/useTheme';
import { useScrollDirection } from '@/composables/useScrollDirection';
import { computed } from 'vue';
import { useRouter, useRoute } from 'vue-router';

// Composables
const { isDarkMode, toggleTheme } = useTheme();
const { isVisible: isMenuVisible } = useScrollDirection({
  threshold: 15,
  topZone: 80
});
const router = useRouter();
const route = useRoute();

// Navigation avec labels pour les hover
const navItems = [
  { 
    name: 'Accueil', 
    path: '/', 
    icon: 'home', 
    label: 'Accueil',
    svg: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>`
  },
  { 
    name: 'À propos', 
    path: '/about', 
    icon: 'about', 
    label: 'À propos',
    svg: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>`
  },
  { 
    name: 'Mon épreuve E5', 
    path: '/e5', 
    icon: 'e5', 
    label: 'Mes Réalisations',
    svg: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>`
  },
  { 
    name: 'Mon épreuve E6', 
    path: '/e6', 
    icon: 'e6', 
    label: 'Portfolio',
    svg: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>`
  },
  { 
    name: 'Veille Technologique', 
    path: '/tech-watch', 
    icon: 'tech-watch', 
    label: 'Veille Technologique',
    svg: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>`
  },
  { 
    name: 'Contact', 
    path: '/contact', 
    icon: 'contact', 
    label: 'Contact',
    svg: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>`
  }
];

// Données pour le Footer
const footerData = {
  name: 'Jean-Auryel Akinotcho',
  year: new Date().getFullYear(),
  socialLinks: [
    { name: 'LinkedIn', url: 'https://linkedin.com/in/jean-auryel', icon: 'linkedin' },
    { name: 'GitHub', url: 'https://github.com/jean-auryel', icon: 'github' },
    { name: 'Email', url: 'mailto:jeanauryel.akinotcho@gmail.com', icon: 'email' }
  ],
  links: [
    { name: 'Mentions légales', url: '/legal' },
    { name: 'Politique de confidentialité', url: '/privacy' }
  ],
  showBackToTop: true
};

// Computed pour la route actuelle
const currentRoute = computed(() => route.path);
</script>

<template>
  <div class="min-h-screen flex flex-col transition-colors duration-300 bg-adaptive-primary text-adaptive">
    
    <!-- Navigation moderne avec scroll behavior et couleurs crème -->
    <nav 
      :class="[
        'fixed top-6 left-1/2 transform -translate-x-1/2 z-50',
        'transition-all duration-300 ease-in-out',
        isMenuVisible 
          ? 'translate-y-0 opacity-100' 
          : '-translate-y-full opacity-0'
      ]"
    >
      <!-- Container de navigation crème -->
      <div class="nav-container-cream">
        <!-- Navigation Items SANS le nom - Plus d'espacement -->
        <div class="flex items-center gap-8"> <!-- gap-8 au lieu de gap-3 -->
          <router-link
            v-for="item in navItems"
            :key="item.path"
            :to="item.path"
            class="nav-item-walnut group" 
            :class="{ 
              'nav-item-walnut-active': currentRoute === item.path 
            }"
          >
            <!-- Icône SVG -->
            <svg 
              class="nav-icon-walnut" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
              v-html="item.svg"
            ></svg>
            
            <!-- Label visible au hover -->
            <span class="nav-label-walnut"> <!-- Changé de cream à walnut -->
              {{ item.label }}
            </span>
          </router-link>
        </div>
      </div>
    </nav>
    
    <!-- Bouton toggle dark mode avec style crème/noyer -->
    <button 
      @click="toggleTheme"
      class="theme-toggle-cream"
      :title="isDarkMode ? 'Passer en mode clair' : 'Passer en mode sombre'"
    >
      <div class="relative w-6 h-6">
        <!-- Icône soleil -->
        <svg 
          class="absolute inset-0 transition-all duration-300"
          :class="isDarkMode 
            ? 'opacity-100 rotate-0 scale-100' 
            : 'opacity-0 rotate-90 scale-75'"
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
        
        <!-- Icône lune -->
        <svg 
          class="absolute inset-0 transition-all duration-300"
          :class="isDarkMode 
            ? 'opacity-0 rotate-90 scale-75' 
            : 'opacity-100 rotate-0 scale-100'"
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
      <Transition name="page-transition" mode="out-in">
        <router-view />
      </Transition>
    </main>
    
    <!-- Footer -->
    <Footer 
      :name="footerData.name"
      :year="footerData.year"
      :social-links="footerData.socialLinks"
      :links="footerData.links"
      :show-back-to-top="footerData.showBackToTop"
    />
  </div>
</template>

<style scoped>
/* Container de navigation avec couleurs noyer foncé */
.nav-container-cream {
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, 
    oklch(var(--color-walnut-medium)), 
    oklch(var(--color-walnut-dark)));
  border: 2px solid oklch(var(--color-walnut-darker));
  border-radius: 20px;
  padding: 12px 32px; /* Plus de padding pour l'espacement */
  box-shadow: 
    0 6px 20px color-mix(in oklch, oklch(var(--color-walnut-darkest)), transparent 70%),
    0 2px 8px color-mix(in oklch, oklch(var(--color-walnut-darker)), transparent 80%),
    inset 0 1px 2px color-mix(in oklch, oklch(var(--color-walnut-light)), transparent 85%);
  max-width: 95vw;
  width: max-content;
  min-width: 500px; /* Plus large pour espacer les icônes */
}

.dark .nav-container-cream {
  background: linear-gradient(135deg, 
    oklch(var(--color-gray-800)), 
    oklch(var(--color-gray-700)));
  border: 2px solid oklch(var(--color-gray-600));
  box-shadow: 
    0 6px 20px color-mix(in oklch, oklch(var(--color-black)), transparent 70%),
    0 2px 8px color-mix(in oklch, oklch(var(--color-black)), transparent 80%);
}

/* Items de navigation avec couleurs noyer foncé */
.nav-item-walnut {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 16px 20px; /* Plus de padding */
  border-radius: 14px;
  text-decoration: none;
  color: oklch(var(--color-walnut-text-light));
  transition: all 0.25s ease;
  min-width: 75px; /* Plus large */
  height: 65px; /* Plus haut */
  overflow: visible;
}

.dark .nav-item-walnut {
  color: oklch(var(--color-gray-300));
}

/* Icônes plus grandes */
.nav-icon-walnut {
  width: 26px; /* Plus grande */
  height: 26px;
  transition: all 0.25s ease;
  margin-bottom: 2px;
}

/* Labels (titres au hover) */
.nav-label-walnut {
  position: absolute;
  bottom: 2px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 0.7rem; /* Légèrement plus grand */
  font-weight: 500;
  color: inherit;
  white-space: nowrap;
  opacity: 0;
  transition: all 0.25s ease;
  pointer-events: none;
}

/* États hover avec couleurs noyer foncé */
.nav-item-walnut:hover {
  background: color-mix(in oklch, oklch(var(--color-walnut-light)), transparent 30%);
  color: oklch(var(--color-walnut-text-light));
  transform: translateY(-2px);
  box-shadow: 
    0 4px 8px color-mix(in oklch, oklch(var(--color-walnut-darkest)), transparent 70%),
    inset 0 1px 2px color-mix(in oklch, oklch(var(--color-walnut-light)), transparent 80%);
}

.dark .nav-item-walnut:hover {
  background: color-mix(in oklch, oklch(var(--color-gray-700)), transparent 30%);
  color: oklch(var(--color-gray-100));
}

/* Effet de zoom inverse sur l'icône + affichage du label */
.nav-item-walnut:hover .nav-icon-walnut {
  transform: scale(0.85);
}

.nav-item-walnut:hover .nav-label-walnut {
  opacity: 1;
  transform: translateX(-50%) translateY(-1px);
}

/* État actif avec accent cuivré */
.nav-item-walnut-active {
  background: color-mix(in oklch, oklch(var(--color-walnut-gold)), transparent 20%) !important;
  color: oklch(var(--color-walnut-text-light)) !important;
  box-shadow: 
    0 0 12px color-mix(in oklch, oklch(var(--color-walnut-gold)), transparent 60%),
    inset 0 1px 3px color-mix(in oklch, oklch(var(--color-walnut-gold-light)), transparent 70%);
}

.dark .nav-item-walnut-active {
  background: color-mix(in oklch, oklch(var(--color-gold-900)), transparent 50%) !important;
  color: oklch(var(--color-gold-400)) !important;
}

.nav-item-walnut-active .nav-icon-walnut {
  transform: scale(1.1); /* Plus grand pour l'état actif */
  filter: drop-shadow(0 0 8px color-mix(in oklch, oklch(var(--color-walnut-gold)), transparent 50%));
}

/* Point indicateur cuivré pour la page active */
.nav-item-walnut-active::before {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 50%;
  transform: translateX(-50%);
  width: 6px;
  height: 6px;
  background-color: oklch(var(--color-walnut-gold));
  border-radius: 50%;
  box-shadow: 0 0 8px color-mix(in oklch, oklch(var(--color-walnut-gold)), transparent 60%);
}

.dark .nav-item-walnut-active::before {
  background-color: oklch(var(--color-gold-400));
  box-shadow: 0 0 8px color-mix(in oklch, oklch(var(--color-gold-400)), transparent 60%);
}

/* Bouton toggle theme avec couleurs noyer foncé */
.theme-toggle-cream {
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 50;
  background: linear-gradient(135deg, 
    oklch(var(--color-walnut-light)), 
    oklch(var(--color-walnut-medium)));
  border: 2px solid oklch(var(--color-walnut-darker));
  color: oklch(var(--color-walnut-text-light));
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 
    0 4px 12px color-mix(in oklch, oklch(var(--color-walnut-darkest)), transparent 75%),
    0 2px 6px color-mix(in oklch, oklch(var(--color-walnut-darker)), transparent 80%),
    inset 0 1px 2px color-mix(in oklch, oklch(var(--color-walnut-light)), transparent 85%);
  transition: all 0.25s ease;
}

.dark .theme-toggle-cream {
  background: linear-gradient(135deg, 
    oklch(var(--color-gray-800)), 
    oklch(var(--color-gray-700)));
  border: 2px solid oklch(var(--color-gray-600));
  color: oklch(var(--color-gold-400));
  box-shadow: 
    0 4px 12px color-mix(in oklch, oklch(var(--color-black)), transparent 70%),
    0 2px 6px color-mix(in oklch, oklch(var(--color-black)), transparent 80%);
}

.theme-toggle-cream:hover {
  transform: scale(1.05);
  background: linear-gradient(135deg, 
    oklch(var(--color-walnut-gold-light)), 
    oklch(var(--color-walnut-gold)));
  color: oklch(var(--color-walnut-text-dark));
  border-color: oklch(var(--color-walnut-gold-dark));
  box-shadow: 
    0 6px 16px color-mix(in oklch, oklch(var(--color-walnut-gold)), transparent 70%),
    0 4px 8px color-mix(in oklch, oklch(var(--color-walnut-gold-dark)), transparent 80%);
}

.dark .theme-toggle-cream:hover {
  background: color-mix(in oklch, oklch(var(--color-gray-700)), transparent 10%);
  color: oklch(var(--color-gold-300));
  border-color: color-mix(in oklch, oklch(var(--color-gold-500)), transparent 30%);
  box-shadow: 
    0 6px 16px color-mix(in oklch, oklch(var(--color-gold-500)), transparent 60%),
    0 4px 8px color-mix(in oklch, oklch(var(--color-gold-400)), transparent 70%);
}

/* Transitions entre pages */
.page-transition-enter-active,
.page-transition-leave-active {
  transition: all 0.4s ease;
}

.page-transition-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.page-transition-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

/* Responsive - Adaptation pour plus d'espacement */
@media (max-width: 1023px) {
  .nav-container-cream {
    min-width: 420px; /* Plus large */
    padding: 10px 24px; /* Plus de padding */
    border-radius: 18px;
  }
  
  .nav-item-walnut {
    min-width: 65px; /* Plus large */
    height: 60px;
    padding: 14px 18px;
    border-radius: 12px;
  }
  
  .nav-icon-walnut {
    width: 24px;
    height: 24px;
  }
  
  .theme-toggle-cream {
    width: 44px;
    height: 44px;
  }
}

@media (min-width: 1024px) {
  .nav-container-cream {
    padding: 14px 36px; /* Encore plus de padding */
    min-width: 600px; /* Plus large pour mieux espacer */
    border-radius: 22px;
  }
  
  .nav-item-walnut {
    min-width: 85px; /* Plus large */
    height: 70px; /* Plus haut */
    padding: 18px 24px; /* Plus de padding */
    border-radius: 16px;
  }
  
  .nav-icon-walnut {
    width: 28px; /* Plus grande */
    height: 28px;
  }
  
  .nav-label-walnut {
    font-size: 0.75rem; /* Légèrement plus grand */
  }
  
  .theme-toggle-cream {
    width: 52px;
    height: 52px;
  }
}

/* Animation d'apparition améliorée */
.nav-container-cream {
  animation: creamSlideDown 0.8s ease-out;
}

@keyframes creamSlideDown {
  0% {
    transform: translateY(-30px);
    opacity: 0;
    background: oklch(var(--color-cream-50));
  }
  50% {
    transform: translateY(-5px);
    opacity: 0.7;
    background: linear-gradient(135deg, 
      oklch(var(--color-cream-50)), 
      oklch(var(--color-cream-100)));
  }
  100% {
    transform: translateY(0);
    opacity: 1;
    background: linear-gradient(135deg, 
      oklch(var(--color-cream-100)), 
      oklch(var(--color-cream-200)));
  }
}

/* Animation d'apparition du bouton toggle */
.theme-toggle-cream {
  animation: creamFadeIn 1s ease-out 0.3s both;
}

@keyframes creamFadeIn {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

/* Effet de lueur douce sur les éléments actifs */
.nav-item-cream-active {
  animation: walnutGlow 2s ease-in-out infinite;
}

@keyframes walnutGlow {
  0%, 100% {
    box-shadow: 0 0 5px color-mix(in oklch, oklch(var(--color-walnut-gold)), transparent 70%);
  }
  50% {
    box-shadow: 0 0 15px color-mix(in oklch, oklch(var(--color-walnut-gold)), transparent 50%);
  }
}

/* Amélioration de l'accessibilité */
.nav-item-cream:focus {
  outline: 2px solid oklch(var(--color-walnut-gold));
  outline-offset: 2px;
}

.theme-toggle-cream:focus {
  outline: 2px solid oklch(var(--color-walnut-gold));
  outline-offset: 2px;
}
</style>