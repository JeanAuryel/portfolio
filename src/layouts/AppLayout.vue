<script setup lang="ts">
import Footer from '@/components/layout/Footer.vue';
import LoadingScreen from '@/components/ui/LoadingScreen.vue';
import { useTheme } from '@/composables/useTheme';
import { useScrollDirection } from '@/composables/useScrollDirection';
import { computed, ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';

// Composables
const { isDarkMode, toggleTheme } = useTheme();
const { isVisible: isMenuVisible } = useScrollDirection({
  threshold: 15,
  topZone: 80
});
const router = useRouter();
const route = useRoute();

// État de chargement pour les transitions entre pages
const isPageLoading = ref(false);

// Navigation avec labels pour les hover et SVG intégrés
const navItems = [
  { 
    name: 'Accueil', 
    path: '/', 
    icon: 'home', 
    label: 'Accueil',
    svg: 'm2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25'
  },
  { 
    name: 'À propos', 
    path: '/about', 
    icon: 'about', 
    label: 'À propos',
    svg: 'M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z'
  },
  { 
    name: 'Mon épreuve E5', 
    path: '/e5', 
    icon: 'e5', 
    label: 'Mes Réalisations',
    svg: 'M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 0 0-1.883 2.542l.857 6a2.25 2.25 0 0 0 2.227 1.932H19.05a2.25 2.25 0 0 0 2.227-1.932l.857-6a2.25 2.25 0 0 0-1.883-2.542m-16.5 0V6A2.25 2.25 0 0 1 6 3.75h3.879a1.5 1.5 0 0 1 1.06.44l2.122 2.12a1.5 1.5 0 0 0 1.06.44H18A2.25 2.25 0 0 1 20.25 9v.776'
  },
  { 
    name: 'Mon épreuve E6', 
    path: '/e6', 
    icon: 'e6', 
    label: 'Portfolio',
    svg: 'M3 8.25V18a2.25 2.25 0 0 0 2.25 2.25h13.5A2.25 2.25 0 0 0 21 18V8.25m-18 0V6a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 6v2.25m-18 0h18M5.25 6h.008v.008H5.25V6ZM7.5 6h.008v.008H7.5V6Zm2.25 0h.008v.008H9.75V6Z'
  },
  { 
    name: 'Veille Technologique', 
    path: '/tech-watch', 
    icon: 'tech-watch', 
    label: 'Veille Tech',
    svg: 'M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672Zm-7.518-.267A8.25 8.25 0 1 1 20.25 10.5M8.288 14.212A5.25 5.25 0 1 1 17.25 10.5'
  },
  { 
    name: 'Contact', 
    path: '/contact', 
    icon: 'contact', 
    label: 'Contact',
    svg: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
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
  showBackToTop: true
};

// Computed pour la route actuelle
const currentRoute = computed(() => route.path);

// Gestion du chargement des pages
const handlePageLoadingStart = () => {
  isPageLoading.value = true;
};

const handlePageLoadingFinished = () => {
  isPageLoading.value = false;
};

// Écouter les changements de route pour le loading
router.beforeEach((to, from, next) => {
  if (from.name !== undefined && to.name !== from.name) {
    const heavyPages = ['/e5', '/e6', '/tech-watch'];
    if (heavyPages.includes(to.path)) {
      handlePageLoadingStart();
    }
  }
  next();
});

router.afterEach(() => {
  setTimeout(() => {
    handlePageLoadingFinished();
  }, 800);
});
</script>

<template>
  <div class="min-h-screen flex flex-col transition-colors duration-300 bg-adaptive-primary text-adaptive">
    
    <!-- Loading Screen avec thème noyer -->
    <LoadingScreen 
      v-if="isPageLoading"
      :loading-text="'Chargement de la page...'"
      :theme="'walnut'"
      :min-loading-time="500"
      :max-loading-time="1200"
      :logo-text="'JA'"
      @loading-finished="handlePageLoadingFinished"
    />

    <!-- Layout principal -->
    <template v-else>
      <!-- Navigation flottante avec système noyer -->
      <nav 
        :class="[
          'fixed top-6 left-1/2 transform -translate-x-1/2 z-50',
          'transition-all duration-300 ease-in-out',
          isMenuVisible 
            ? 'translate-y-0 opacity-100' 
            : '-translate-y-full opacity-0'
        ]"
      >
        <div class="nav-container-walnut">
          <div class="flex items-center gap-6">
            <router-link
              v-for="item in navItems"
              :key="item.path"
              :to="item.path"
              class="nav-item-walnut"
              :class="{ 'nav-item-walnut-active': currentRoute === item.path }"
            >
              <!-- Icône SVG intégrée -->
              <svg 
                class="nav-icon-walnut" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                stroke-linecap="round" 
                stroke-linejoin="round" 
                stroke-width="2"
              >
                <path :d="item.svg" />
              </svg>
              
              <!-- Label qui apparaît au hover -->
              <span class="nav-label-walnut">{{ item.label }}</span>
            </router-link>
          </div>
        </div>
      </nav>
      
      <!-- Bouton toggle dark mode avec style noyer -->
      <button 
        @click="toggleTheme"
        class="theme-toggle-walnut"
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
        <Transition name="walnut-page-transition" mode="out-in">
          <router-view />
        </Transition>
      </main>
      
      <!-- Footer -->
      <Footer 
        :name="footerData.name"
        :year="footerData.year"
        :social-links="footerData.socialLinks"
        :show-back-to-top="footerData.showBackToTop"
      />
    </template>
  </div>
</template>

<style scoped>
/* Transitions entre pages avec effet noyer */
.walnut-page-transition-enter-active,
.walnut-page-transition-leave-active {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.walnut-page-transition-enter-from {
  opacity: 0;
  transform: translateY(20px);
  filter: blur(2px);
}

.walnut-page-transition-leave-to {
  opacity: 0;
  transform: translateY(-20px);
  filter: blur(2px);
}

/* Effet de grain subtil sur le fond */
.bg-adaptive-primary::before {
  content: '';
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    radial-gradient(circle at 20% 20%, 
      color-mix(in oklch, oklch(var(--color-cream-200)), transparent 98%) 0%, transparent 50%),
    radial-gradient(circle at 80% 80%, 
      color-mix(in oklch, oklch(var(--color-walnut-lightest)), transparent 99%) 0%, transparent 50%),
    radial-gradient(circle at 40% 60%, 
      color-mix(in oklch, oklch(var(--color-walnut-gold-light)), transparent 99%) 0%, transparent 30%);
  pointer-events: none;
  z-index: -1;
}

.dark .bg-adaptive-primary::before {
  display: none;
}
</style>