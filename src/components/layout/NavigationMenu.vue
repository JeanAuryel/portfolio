<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch, defineComponent, h } from 'vue';
import { useRoute } from 'vue-router';

export interface NavItem {
  name: string;
  path: string;
  icon?: string; // nom de l'icône pour lookup dans iconMap
}

export interface NavigationMenuProps {
  items: NavItem[];
  logo?: string;
  brandName?: string;
  fixed?: boolean;
}

withDefaults(defineProps<NavigationMenuProps>(), {
  fixed: true
});

// Définition des icônes comme composants Vue
const icons = {
  home: defineComponent({
    render: () => h('svg', {
      xmlns: 'http://www.w3.org/2000/svg',
      fill: 'none',
      viewBox: '0 0 24 24',
      'stroke-width': '1.5',
      stroke: 'currentColor',
      class: 'w-6 h-6'
    }, [
      h('path', {
        'stroke-linecap': 'round',
        'stroke-linejoin': 'round',
        d: 'm2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25'
      })
    ])
  }),
  
  about: defineComponent({
    render: () => h('svg', {
      xmlns: 'http://www.w3.org/2000/svg',
      fill: 'none',
      viewBox: '0 0 24 24',
      'stroke-width': '1.5',
      stroke: 'currentColor',
      class: 'w-6 h-6'
    }, [
      h('path', {
        'stroke-linecap': 'round',
        'stroke-linejoin': 'round',
        d: 'M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z'
      })
    ])
  }),
  
  e5: defineComponent({
    render: () => h('svg', {
      xmlns: 'http://www.w3.org/2000/svg',
      fill: 'none',
      viewBox: '0 0 24 24',
      'stroke-width': '1.5',
      stroke: 'currentColor',
      class: 'w-6 h-6'
    }, [
      h('path', {
        'stroke-linecap': 'round',
        'stroke-linejoin': 'round',
        d: 'M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 0 0-1.883 2.542l.857 6a2.25 2.25 0 0 0 2.227 1.932H19.05a2.25 2.25 0 0 0 2.227-1.932l.857-6a2.25 2.25 0 0 0-1.883-2.542m-16.5 0V6A2.25 2.25 0 0 1 6 3.75h3.879a1.5 1.5 0 0 1 1.06.44l2.122 2.12a1.5 1.5 0 0 0 1.06.44H18A2.25 2.25 0 0 1 20.25 9v.776'
      })
    ])
  }),
  
  e6: defineComponent({
    render: () => h('svg', {
      xmlns: 'http://www.w3.org/2000/svg',
      fill: 'none',
      viewBox: '0 0 24 24',
      'stroke-width': '1.5',
      stroke: 'currentColor',
      class: 'w-6 h-6'
    }, [
      h('path', {
        'stroke-linecap': 'round',
        'stroke-linejoin': 'round',
        d: 'M3 8.25V18a2.25 2.25 0 0 0 2.25 2.25h13.5A2.25 2.25 0 0 0 21 18V8.25m-18 0V6a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 6v2.25m-18 0h18M5.25 6h.008v.008H5.25V6ZM7.5 6h.008v.008H7.5V6Zm2.25 0h.008v.008H9.75V6Z'
      })
    ])
  }),
  
  'tech-watch': defineComponent({
    render: () => h('svg', {
      xmlns: 'http://www.w3.org/2000/svg',
      fill: 'none',
      viewBox: '0 0 24 24',
      'stroke-width': '1.5',
      stroke: 'currentColor',
      class: 'w-6 h-6'
    }, [
      h('path', {
        'stroke-linecap': 'round',
        'stroke-linejoin': 'round',
        d: 'M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672Zm-7.518-.267A8.25 8.25 0 1 1 20.25 10.5M8.288 14.212A5.25 5.25 0 1 1 17.25 10.5'
      })
    ])
  }),
  
  contact: defineComponent({
    render: () => h('svg', {
      xmlns: 'http://www.w3.org/2000/svg',
      fill: 'none',
      viewBox: '0 0 24 24',
      'stroke-width': '1.5',
      stroke: 'currentColor',
      class: 'w-6 h-6'
    }, [
      h('path', {
        'stroke-linecap': 'round',
        'stroke-linejoin': 'round',
        d: 'M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25'
      })
    ])
  })
};

// Composant par défaut si l'icône n'est pas trouvée
const DefaultIcon = defineComponent({
  render: () => h('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    fill: 'none',
    viewBox: '0 0 24 24',
    'stroke-width': '1.5',
    stroke: 'currentColor',
    class: 'w-6 h-6'
  }, [
    h('path', {
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round',
      d: 'M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z'
    })
  ])
});

const route = useRoute();
const isMobileMenuOpen = ref(false);
const isScrolled = ref(false);
const hoveredItem = ref<string | null>(null);

// Gérer le scroll pour l'effet de transparence
const handleScroll = () => {
  isScrolled.value = window.scrollY > 0;
};

// Fermer le menu mobile au changement de route
watch(() => route.path, () => {
  isMobileMenuOpen.value = false;
});

// Gérer le hover des items
const handleMouseEnter = (itemPath: string) => {
  hoveredItem.value = itemPath;
};

const handleMouseLeave = () => {
  hoveredItem.value = null;
};

// Fonction pour obtenir l'icône d'un item
const getIconComponent = (item: NavItem) => {
  if (item.icon && icons[item.icon as keyof typeof icons]) {
    return icons[item.icon as keyof typeof icons];
  }
  return DefaultIcon;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <nav 
    :class="[
      'transition-all duration-300 z-50',
      fixed ? 'fixed top-0 w-full' : 'relative',
      isScrolled && fixed 
        ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg' 
        : 'bg-white dark:bg-gray-900'
    ]"
  >
    <div class="container mx-auto px-4">
      <div class="flex items-center justify-center h-16">
        <!-- Desktop Menu avec icônes SVG (centré) -->
        <div class="flex items-center space-x-8">
          <router-link
            v-for="item in items"
            :key="item.path"
            :to="item.path"
            class="nav-icon-link relative flex flex-col items-center transition-colors duration-200"
            :class="{ 'active': route.path === item.path }"
            @mouseenter="handleMouseEnter(item.path)"
            @mouseleave="handleMouseLeave"
          >
            <div class="text-secondary hover:text-accent transition-colors duration-200">
              <component :is="getIconComponent(item)" />
            </div>
            
            <!-- Label qui apparaît au hover -->
            <Transition name="label-fade">
              <div 
                v-if="hoveredItem === item.path"
                class="absolute top-full mt-2 whitespace-nowrap"
              >
                <div class="bg-surface text-main px-3 py-1.5 rounded-lg text-sm font-medium shadow-cream border border-main">
                  {{ item.name }}
                  <!-- Petite flèche vers le haut -->
                  <div class="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-surface border-l border-t border-main rotate-45"></div>
                </div>
              </div>
            </Transition>
          </router-link>
        </div>
        
        <!-- Mobile Menu Button -->
        <button
          @click="isMobileMenuOpen = !isMobileMenuOpen"
          class="md:hidden p-2 rounded-md text-secondary hover:text-main hover:bg-gray-100 transition-colors absolute right-4"
        >
          <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path 
              v-if="!isMobileMenuOpen"
              stroke-linecap="round" 
              stroke-linejoin="round" 
              stroke-width="2" 
              d="M4 6h16M4 12h16M4 18h16" 
            />
            <path 
              v-else
              stroke-linecap="round" 
              stroke-linejoin="round" 
              stroke-width="2" 
              d="M6 18L18 6M6 6l12 12" 
            />
          </svg>
        </button>
      </div>
      
      <!-- Mobile Menu (garde les noms complets) -->
      <Transition name="mobile-menu">
        <div 
          v-if="isMobileMenuOpen" 
          class="md:hidden py-4 border-t border-main"
        >
          <div class="flex flex-col space-y-2">
            <router-link
              v-for="item in items"
              :key="item.path"
              :to="item.path"
              class="mobile-nav-link flex items-center px-3 py-2 rounded-md text-secondary hover:text-accent hover:bg-gray-100 font-medium transition-colors duration-200"
              :class="{ 'text-accent bg-surface-alt': route.path === item.path }"
            >
              <div class="mr-3">
                <component :is="getIconComponent(item)" class="w-5 h-5" />
              </div>
              {{ item.name }}
            </router-link>
          </div>
        </div>
      </Transition>
    </div>
  </nav>
</template>

<style scoped>
/* Styles pour les liens avec icônes */
.nav-icon-link {
  min-width: 60px;
  padding: 0.5rem;
}

.nav-icon-link:hover {
  /* Suppression du transform qui pourrait créer une ombre */
  /* transform: translateY(-2px); */
  transition: transform 0.2s ease;
}

.nav-icon-link:hover svg {
  transform: scale(1.1);
  transition: transform 0.2s ease;
  /* Suppression explicite de toute ombre */
  box-shadow: none !important;
  filter: none !important;
}

/* Indicateur actif pour les icônes */
.nav-icon-link.active::after {
  content: '';
  position: absolute;
  bottom: -8px;
  left: 50%;
  transform: translateX(-50%);
  width: 6px;
  height: 6px;
  background-color: rgb(var(--mahogany-500));
  border-radius: 50%;
}

.nav-icon-link.active svg {
  color: rgb(var(--mahogany-500));
}

.dark .nav-icon-link.active::after {
  background-color: rgb(var(--dark-accent-500));
}

.dark .nav-icon-link.active svg {
  color: rgb(var(--dark-accent-500));
}

/* Transitions pour les menus */
.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: all 0.3s ease;
}

.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

/* Transition pour les labels au hover */
.label-fade-enter-active,
.label-fade-leave-active {
  transition: all 0.3s ease;
}

.label-fade-enter-from,
.label-fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

/* Responsive adjustments pour desktop uniquement */
@media (min-width: 768px) {
  .nav-icon-link {
    display: flex;
    justify-content: center;
  }
}
</style>